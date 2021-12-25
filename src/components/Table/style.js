import styled from "styled-components";

export const Container = styled.div` 
   width:90%;
   background-color: #35A751;
   max-width:340px;
   padding: 10px;
   color: white;
   border-radius: 5px;
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
   margin: 10px;
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
`;

