import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { Nav } from "../Nav/Nav";
import {
  Row,
  rowFlex,
  TextCont,
  Container,
  Div,
  Image,
  generalPadding,
} from "../utility/utilities";

import Button from "../Buttons/Button";

const StyledHeader = styled.header`
  ${generalPadding};
  background-color: #301446;
  color: #ffff;
  grid-template-rows: 0.5fr 1fr;

  .logo-cont {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 3rem;
    color: #ffff;
    .logo{
      max-width: 7rem;
    }
  }

  .header-image {
    height: 60rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &-cont {
      width: 50rem;
      img {
        width: 100%;
      }
    }
  }
  nav {
    .btn-cont {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 3rem;
      button {
        width: 20rem;
        @media (max-width: 700px){
          width: 100%;
        }
      }
    }
  }

  .header-row {
    &-2 {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .header-icons {
        ${rowFlex};
        width: 100%;
      }
    }
  }
`;



export default function Header() {
  const navigate = useNavigate();
  
  return (
    <StyledHeader>
      <Nav>
        <Div className="logo-cont">
          <div className="logo">
            <Image src="images/logo.png" />
          </div>
           Rudofy
        </Div>
        <Div className="btn-cont">
          <Button text="Register"  onClick={() => navigate('/signUp')} />
          <Button bg="transparent" text="Login"  onClick={() => navigate('/login')}/>
        </Div>
      </Nav>

      <Row className="header-row-1"  id = 'breack-point'>
        <Container >
          <TextCont>
            <h1>Our mission is to <span style={{'borderBottom': '#ffff solid 1rem'}}>advance</span> humanity</h1>
            <p>
              we would strive to achieve that through providing education and
              qulity health
            </p>
          </TextCont>
          <Row className="header-row-2">
            <Div style={{ textTransform: "uppercase", "font-size": "3rem" }}>
              Download App
            </Div>
            <Div className="header-icons">
              <Div>
                <Image src="images/apple_icon.png" />
              </Div>
              <Div>
                <Image src="images/playStore_icon.png" />
              </Div>
              
            </Div>
          </Row>
        </Container>

        <Div className="header-image">
          <Div className="header-image-cont">
            <Image src="images/sharath-kumar-hari-Mb2LErousEY-unsplash 1.png" />
          </Div>
        </Div>
      </Row>
    </StyledHeader>
  );
}
