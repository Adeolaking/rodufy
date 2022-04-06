import React from 'react'
import styled from 'styled-components'
import { FormComponent } from '../components/Form';


const StyledFormCont = styled.div`
      display:flex;
      width:100vw;
      background-color:#E5E5E5;
      .sideBAr{
        width: 30%;
        height:100vh;
        background:#301446;
      }

`


  
export const Login =() =>{
  return (
    <StyledFormCont>
        <div className='sideBAr' ></div>
        <FormComponent head={'Register'} />
       
    </StyledFormCont>
  )
}

export const SignUp =() =>{
  return (
    <StyledFormCont>
        <div className='sideBAr' ></div>
        <FormComponent head={'signUp'} />
    </StyledFormCont>
  )
}
