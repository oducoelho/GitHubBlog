import styled from "styled-components";

export const FormContainer = styled.form`
  margin-top: 72px;
`
export const Content = styled.div`
  color: ${props => props.theme["base-subtitle"]};
  display: flex;
  flex-direction: row;
  gap: 40.99rem;
  align-items:center;
`
export const FormArea = styled.div`
  input {
    margin-top: 12px;
    background-color: ${props => props.theme["base-input"]};
    width: 864px;
    height: 50px;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["base-border"]};
    padding: 12px 16px;
    font-family: 'Nunito', sans-serif;
    color: ${props => props.theme["base-subtitle"]};
    } 
`