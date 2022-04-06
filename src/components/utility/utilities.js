import styled from "styled-components";
import { css } from "styled-components";

export const col = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const generalPadding =css`
            padding: 4rem;
`  
export const orangedColor = "#EA7052";

export const TextCont = styled.div`
        font-size:2rem;
        font-weight: 100;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h1{
            font-size: 6.1rem;
            span{
                 color: #EA7052;
            }
        }
        p{
            font-size:1.8rem;
            font-weight:100;
            letter-spacing:.1rem;
            word-spacing: .9rem;
            padding: 4rem 0;
        }
        
`

export const Container = styled.div`
        width:100%;
`
export const Div = styled.div`
        width: 100%;
`

export const Image = function(props){
    const {...val} = props;
    console.log(val.style)
return <img src={val.src} alt={val.src} width='100%' style={val.style}/>
}





export const rowFlex= css`
        display: flex;
        gap: 2rem;
`
export const Row = styled.div`
      display: flex;
      justify-content:space-between;
      ${'' /* grid-template-columns: 1fr 1fr; */}
      gap:10rem;
      align-items:center;
      width:100%;

      @media (min-width: 769px){
          #breack-point{
              flex-direction: column;
          }
      }
      
`