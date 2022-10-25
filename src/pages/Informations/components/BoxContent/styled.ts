import styled from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -5rem;
`
export const BoxContent = styled.div`
  background-color: ${props => props.theme["base-profile"]};
  width: 864px;
  border-radius: 6px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;

  display: flex;
  flex-direction: column;
  a {
    display: flex;
    flex-direction: row;
    gap: 8px;
    text-decoration: none;
    color: ${props => props.theme.blue};
  }

`
export const Links = styled.div `
  display: flex;
  justify-content: space-between;
`
export const Data = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    color: ${props => props.theme["base-title"]};
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
  padding-top: 18px;
`