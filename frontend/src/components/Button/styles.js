import styled from "styled-components";

export const Container = styled.button`
  background: black;
  color: white;
  font-size: 24px;
  border: 0;
  border-radius: 15px;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  margin-top: 24px;

  &:hover {
    background: #222;

    transition: background 0.2s;
  }
`;
