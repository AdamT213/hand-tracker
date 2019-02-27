import styled from "styled-components";


export const InfoButton = styled.button ` 
      background: #0d7c57;
      color: #f61408;
      :hover {
        background: #e7e7e7;
      }
` ;

export const HomeButton = styled(InfoButton)`
    margin: 10px;
`;

export const EndButton = styled.button `
  background: #f61408;
  color: #0d7c57;
  font-size: 0.5 em; 
  :hover {
    background: #e7e7e7;
  }
`;