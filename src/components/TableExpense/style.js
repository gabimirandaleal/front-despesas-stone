import styled from "styled-components";

export const Container = styled.div` 
   width:90%;
   background-color: #35A751;
   border-radius: 5px;
   max-width:500px;
   padding: 10px;
   color: white;
   div{
    display: flex;
    justify-content:space-between;
    align-items:center;
   }
   .value{
      margin-top:20px;
   }
   .value:hover{
      color: black;
   }
   .name{
      svg{display:none}
   }
   span{
      width: 100%;
   }
   svg{
      width: 100px;
      heigth:100px;
      cursor:pointer;
   }
`;

export const Div = styled.div`
   display: flex;
   justify-content:center;
   width: 100%;
   margin-top:10px;
`;


