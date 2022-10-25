import styled from "styled-components";

export const Box = styled.div`
  font-family: 'Nunito', sans-serif;
  padding: 40px 560px;
  span {
    color: ${props => props.theme["base-text"]};
  }
  h2 {
    color: ${props => props.theme.blue};
  }
`