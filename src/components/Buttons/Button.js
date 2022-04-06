import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
        background-color:  ${props => props.bg?props.bg:'#EA7052'};
        padding: 1rem  2rem;
        border: .2rem solid #EA7052;
        border-radius: .8rem;
        color: #ffff;
        font-weight: 700;
        font-size: 2rem;
        width: intial;
        @media screen and (max-width:700px){
          width:${props => props.width?props.width:`100%`};
        }
        
`

export default function Button(props) {
  return (
   <StyledButton ${...props}>
        {props.text}
   </StyledButton>
  )
}
