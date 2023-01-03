import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeaderProps {
  count: number;
}

const Header = ({ count }: HeaderProps) => {
  return (
    <Container>
      <img src="https://zupimages.net/up/23/01/nfgk.png" alt="" />
      <nav>
        <ul>
        <li>
            <Link to={"/"}>Menu</Link>
          </li>
          
          
          
          <li>
            <Link to={"/panier"}>Panier</Link>
          </li>
          <li style={{ backgroundColor: "red", color: "white " }}>{count}</li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  border-bottom: 1px solid black;
  text-align: center;

  & img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    
  }

  & ul {
    list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #747474;
  }

  & li {
    float: left;
    display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color: black;
  background-color: #747474;
  }

  & > li > link {
    
  }

`;
