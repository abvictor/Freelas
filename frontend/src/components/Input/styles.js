import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

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
    props.isError &&
    css`
      color: #c53030;
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #4223b3;
      border: 2px solid #4223b3;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #4223b3;
    `}

  input {
    background: transparent;
    color: black;
    font-size: 18px;
    padding-left: 10px;
    border: 0;
    border-left: 1px solid #000;
    line-height: 30px;
    width: 100%;

    &::placeholder {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  svg {
    margin-right: 8px;
  }
`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
