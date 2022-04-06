import React from 'react'
import styled from 'styled-components';
import {Row, rowFlex, TextCont, Container, Div, Image, generalPadding } from '../utility/utilities';

const StyledFooter = styled.footer`
         ${generalPadding};
        background-color: #301446;
        height: 50vh;
        display: flex;
    
        flex-direction: column;
        justify-content: space-between;

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

        .footer{
            &-links{
                list-style: none;
                display: flex;
                justify-content: space-between;
                width: 95%;
                margin: auto;


            }
            &-link{

                a{
                    color: #ffff;
                    text-decoration: none;
                    font-size: 2rem;
                }
            }
        }
`

export default function Footer() {
  return (
    <StyledFooter>
        <Div className='logo-cont'>
        <div className="logo">
            <Image src="images/logo.png" />
          </div>
          Rudofy
        </Div>
        <ul className='footer-links'>
            <li className='footer-link'><a href="http://" target="_blank" rel="noopener noreferrer">Blog</a></li>
            <li className='footer-link'><a href="http://" target="_blank" rel="noopener noreferrer">Praivacy policy</a></li>
            <li className='footer-link'><a href="http://" target="_blank" rel="noopener noreferrer">About</a></li>
            <li className='footer-link'><a href="http://" target="_blank" rel="noopener noreferrer">Contact</a></li>
        </ul>
       <TextCont style={{'text-align':'center', 'color':'#FFFF'}}>
           copyright Rodufy 2022
       </TextCont>
    </StyledFooter>
  )
}
