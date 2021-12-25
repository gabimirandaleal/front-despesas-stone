import styled from "styled-components";

export const Button = styled.button`
    background-color: #00CD34;
    color:  white;
    width: ${props => props.width ? "40%":"100%"};
    padding: 10px;
    border-radius: 5px;
    border: 0px;
    margin: 20px 0px 0px 0px;
    cursor: pointer;
    margin-top: 15px;
    transition: 0.5s;
    &:hover{
        color:black;
        background: #E7E8EA;
    }
`;