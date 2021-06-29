import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 2px solid #fff;
  border-radius: 15px;
  padding: 12px;
  width: 100%;

  & + div {
    margin-top: 12px;
  }

  input {
    background: transparent;
    color: black;
    font-size: 18px;
    padding-left: 10px;
    border: 0;
    border-left: 1px solid #000;
    line-height: 30px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  svg {
    margin-right: 8px;
  }
`;
