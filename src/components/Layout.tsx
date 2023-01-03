import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import Content from "./Content";
import Header from "./Header";
import PlatCard from "./PlatCard";
import PlatCard2 from "./PlatCard2";
import QRCode from "qrcode.react";
const plats = [
  {
    name: "Banane",
    price: "2,99",
    imgUrl:
      "https://www.conservation-nature.fr/wp-content/uploads/visuel/fruit/shutterstock_575528746.jpg",
  },
  {
    name: "Orange",
    price: "1,99",
    imgUrl:
      "https://www.lesproduitsnaturels.com/userfiles/www.lesproduitsnaturels.com/images/orange.jpg",
  },
  {
    name: "Ananas",
    price: "3,99",
    imgUrl:
      "http://luchyprimeurs.com/55-large_default/ananas-victoria.jpg",
  },
  {
    name: "Pomme",
    price: "1,49",
    imgUrl:
      "https://lactualite.com/wp-content/uploads/2011/06/une-pomme-par-jour.jpg",
  },
  {
    name: "Citron",
    price: "0,99",
    imgUrl:
      "https://sebalafruits.com/wp-content/uploads/2021/08/dqsqd.png",
  },
];
interface PlatCard2Props {
  name: string;
  price: string;
  imgUrl: string;
  number: number;
}

const Layout = () => {
  const [count, setCount] = React.useState<number>(0);
  const [panierFinal, setPanierFinal] = React.useState<Array<PlatCard2Props>>(
    []
  );
  const [qrValue, setQrValue] = React.useState(Math.random().toString(36).substring(2, 15).toUpperCase());

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addToBasket = (name: string, price: string, imgUrl: string) => {
    const panier = JSON.parse(
      sessionStorage.getItem("panier-epicerie") || "[]"
    );
    var found = false;
    for (let i = 0; i < panier.length; i++) {
      if (panier[i].name === name) {
        panier[i].number = panier[i].number + 1;
        found = true;
      }
    }
    if (!found) panier.push({ name: name, price: price, imgUrl: imgUrl, number: 1 });
    sessionStorage.setItem("panier-epicerie", JSON.stringify(panier));
    setPanierFinal(panier);
    incrementCount();
  };
  const validerPanier = () => {
    sessionStorage.removeItem("panier-epicerie");
    setPanierFinal([]);
    // generate a random string of 10 uppercase letters
    const randomString = Math.random().toString(36).substring(2, 15).toUpperCase();
    setQrValue(randomString);
    const canvas = document.getElementById("qr-gen") as HTMLCanvasElement;
    if (canvas !== null) {
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    setQrValue(randomString);
    downloadLink.download = `${qrValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header count={count} />
          <PlatsContainer>
            {plats.map((item) => (
              <PlatCard
                maFonctionClick={() =>
                  addToBasket(item.name, item.price, item.imgUrl)
                }
                key={item.name}
                {...item}
              />
            ))}
          </PlatsContainer>
        </>
      ),
    },
    {
      path: "/panier",
      element: (
        <>
          <Header count={count} />
          <PlatsContainer>
            {/* if else */}
            {panierFinal.length === 0 ? (
              <p>Votre panier est vide</p>
            ) : (
              /* nombre d'elements ayant le meme name*/
              panierFinal.map((item) => <PlatCard2 key={item.name} {...item} />)
            )}
          </PlatsContainer>
          <ButtonContainer>
            <button onClick={validerPanier} 
            // disable button if panier is empty
            disabled={panierFinal.length === 0}
            >Valider</button>
          </ButtonContainer>
          {/* never display the qrcode */}
          <NoDisplay>
          <QRCode
            id="qr-gen"
            value={qrValue}
            size={290}
            level={"H"}
            includeMargin={true}
            display={"none"}
          />
          </NoDisplay>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Layout;

const PlatsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 12px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
text-align: center;
height: 200px;
margin-top: 20px;
`;

const NoDisplay = styled.div`
display: none;
`;
