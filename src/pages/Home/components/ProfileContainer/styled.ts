import styled from "styled-components"
import { preprocess } from "zod"

export const PorfileContainer = styled.div`
  background-color: ${props => props.theme["base-profile"]};
  width: 864px;
  height: 212px;
  border-radius: 6px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
  img {
    width: 148px;
    height: 148px;
    border-radius: 6px;
  }
`
export const Data = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    color: ${props => props.theme["base-title"]};
    a {
      text-decoration: none;
      padding-left: 17rem;
      font-size: 12px;
      color: ${props => props.theme.blue};
    }
  }
  h3 {
    color: ${props => props.theme["base-text"]};
  }
  span {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${props => props.theme["base-subtitle"]};
  }
`
export const Informations = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: row;
  align-items: center;
`