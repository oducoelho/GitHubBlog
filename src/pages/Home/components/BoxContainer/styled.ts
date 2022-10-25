import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`  
  display: grid;
  gap: 1.7rem;
  grid-template-columns: repeat(2, 1fr);
  text-decoration: none;
`
export const Box = styled.div`
  margin-top: 48px;
  margin-bottom: -48px;
  width: 416px;
  height: 260px;
  background-color: ${props => props.theme["base-post"]};
  border-radius: 6px;
`
export const Content = styled.div`
  font-family: 'Nunito', sans-serif;
  padding: 32px;
  h4 {
    color: ${props => props.theme["base-text"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
export const Title = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;
  color: ${props => props.theme["base-title"]};
  
  strong {
    flex: 1;
    color: ${props => props.theme["base-subtitle"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 20px;

  }
  span {
    color: ${props => props.theme["base-span"]};
    padding-top: 5px;
    font-weight: 400;
  }
`