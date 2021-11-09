import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
  padding-top: 15px;
  padding-bottom: 20px;
  background-color: rgba(225, 223, 220, 255);
  margin-bottom: 15px;
  div {
    display: flex;
    flex-direction: row;

    button {
      width: 150px;
      background: black;
      margin-top: 0;
      margin-right: 20px;
    }

    form {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;

      button {
        margin-top: 0;
        width: 200px;
        margin-left: 30px;
      }

      div {
        width: 800px;
      }
    }
  }
`;
