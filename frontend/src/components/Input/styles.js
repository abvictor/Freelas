import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 15px;
  padding: 12px;
  width: 100%;

  color: #000;
  border: 2px solid #fff;

  & + div {
    margin-top: 12px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #311692ff;
      border: 2px solid #311692ff;
    `}

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
