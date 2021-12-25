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
   .nameExpense{
      margin-right: 40px;
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
   margin-bottom:10px;
`;



export const DivItem = styled.div`
   display: flex;
   flex-direction:column;
   & > div{
      margin-top: 20px;
   }
   .priceUnit{
      display: flex;
      width: 100%;
      justify-content:center;
   }
`;


