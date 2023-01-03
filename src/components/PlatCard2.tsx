import React from "react";
import styled from "styled-components";

interface PlatCard2Props {
  name: string;
  price: string;
  imgUrl: string;
  number: number;
}

const PlatCard2 = ({ name, price, imgUrl, number }: PlatCard2Props) => {
  return (
    <Container>
      <img src={imgUrl} alt={name} />
      <div>
        <p>{name}</p>
        <div>
          <span>Qte: {number}</span>
          <span>{price} €/kg</span>
        </div>
      </div>
    </Container>
  );
};

export default PlatCard2;

const Container = styled.div`
  border: 1px solid grey;
  border-radius: 6px;
  width: 196px;
  display: inline-block;

  & > img {
    width: 100%;
    height: 200px;
  }

  & > div > p {
    font-weight: bold;
    text-align: center;
  }

  & > div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px 12px 12px;
  }
`;
