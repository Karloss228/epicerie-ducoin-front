import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import styled from "styled-components";
import PlatCard from "./PlatCard";

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

interface ContentProps {
  handleCardClick: () => void;
}

const Content = ({ handleCardClick }: ContentProps) => {
  return <main></main>;
};

export default Content;

const PlatsContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
