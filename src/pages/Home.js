import React from 'react'
import { Nav } from '../components/Nav/Nav'
import { Div,Image } from '../components/utility/utilities';


export default function Home() {
  return (
    <div className='home-page'>
    <Nav className='home-page-nav'>
        <Div className="logo-cont">
          <div className="logo">
            <Image src="images/logo.png" />
          </div>
           Rudofy
        </Div>
    </Nav>
    Home</div>
  )
}
