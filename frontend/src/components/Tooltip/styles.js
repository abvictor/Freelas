import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  span {
    background: #4223b3;
    border-radius: 8px;
    padding: 6px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    width: 160px;
    left: 50%;
    transform: translateX(-50%);

    color: #312e38;

    &::before {
      content: "";
      border-style: solid;
      border-color: #4223b3 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.4s;
  }
`;
