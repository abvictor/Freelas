import styled from "styled-components";

export const StyledPopUp = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Roboto Slab", serif;

    img {
      justify-content: center;
    }
    p {
      font-size: 12px;
    }
    button {
      background: black;
      color: white;
      font-size: 16px;
      border: 0;
      border-radius: 15px;
      width: 100px;
      height: 40px;
      margin-left: 10px;

      &:hover {
        background: #222;

        transition: background 0.2s;
      }
    }
  }
`;
