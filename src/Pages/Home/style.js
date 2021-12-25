import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction:row;
    align-items: start;
    justify-content:space-around;
    @media (min-width:849px){
        flex-wrap: nowrap;
    }
`;