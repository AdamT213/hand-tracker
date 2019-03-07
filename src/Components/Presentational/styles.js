import styled from "styled-components";


export const InfoButton = styled.button ` 
      background: #e7e7e7;
      color: #0d7c57;
      border-color: #0d7c57;
      :hover {
        background: #0d7c57;
      }
` ;

export const HomeButton = styled(InfoButton)`
    margin: 2%;
`;

export const EndButton = styled.button `
  background: #e7e7e7;
  color: #f61408;
  border-color: #f61408;
  font-size: 0.5 em; 
  :hover {
    background: #f61408;
  }
`;

export const Div = styled.div` 
background: #000000;
color: #0d7c57;
display: inline-block;
padding: 1%;
border-style: inset;
`;