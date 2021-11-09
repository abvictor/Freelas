import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 15px;
  padding: 12px;
  width: 100%;
  margin-top: 12px;

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
    
  textarea {
    height: 220px;
    width: 100%;
    padding: 15px;
    border-radius: 15px;
    font-size: 20px;
    line-height: 28px;
    text-align: start;
    resize: none;
    border: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.8);
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
