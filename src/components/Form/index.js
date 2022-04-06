import styled from 'styled-components'
import Button from '../Buttons/Button'

const Form = styled.form`
    width: 60%;
    min-width: 30rem;
    max-width: 50rem;
    margin: auto;
    background-color: #ffff;
    height: 40rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5rem  3rem;
    .form-heading{
        font-size: 3rem;
        text-align: center;

    }

    input{
        width: 100%;
        padding: 1.5rem 2rem;
        border-radius: .5rem;
        font-size: 2rem;
        font-family: inherit;
        background:#E5E5E5;
        border: none;

    }
    
`

export const FormComponent = ({head}) =>{
  
    return(
        <Form>
                <h1 className='form-heading'>
                    {head}
                </h1>
                <input type={'email'} placeholder='Email' />
                <input type={'password'} placeholder="Password" />
                <Button text={head} />
              
        </Form>
    )
}