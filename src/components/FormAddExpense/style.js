import styled, { keyframes } from "styled-components";

const Appear = keyframes`
from{opacity:0;
  transform:TranslateX(100px)
 }
to{opacity:1;
  transform:TranslateX(0px)
 }
`;

export const Div = styled.div`
  background-color: var(--light-grey);
  animation: ${Appear} 1s;
  width: 400px;
  a {
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  input {
    background-color: var(--white);
  }
  h1{
    font-family: 'Lato', sans-serif;
    font-weight:bold;
    font-size:20px;
  }
  .button{
    background: #D4D5D6;
    color: black;
  }
`;

