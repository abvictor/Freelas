import styled from "styled-components";

import { shade } from "polished";
import backgroundSignIn from "../../assets/background2.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  background: #dcdcdd;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 800px;
  padding: 25px 50px;
  background: #72a5d6;
  border-radius: 25px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const RegisterImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  object-fit: fill;
  margin-top: 10px;
  div {
    background: #4992d7;
    margin-top: 180px;
    padding: 15px 25px;
    border-radius: 25px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

    h1 {
      font-size: 38px;
    }
    p {
      font-size: 20px;
    }

    a {
      font-size: 22px;
      margin-top: 18px;
      color: #000;
      text-decoration: none;
      display: flex;
      align-items: center;
      &:hover {
        color: #333;
        transition: color 0.2s;
      }
      svg {
        margin-right: 4px;
        font-size: 22px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 750px;
  background: #4992d7;
  padding: 50px;
  border-radius: 25px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin-left: 100px;

  form {
    width: 400px;
    max-height: 650px;
    text-align: center;
  }
`;

export const DivRadio = styled.div`
  display: block;
  align-items: center;
  align-content: center;

  label {
    margin-left: 35px;
    margin-right: 35px;
  }
  h2 {
    margin-bottom: 8px;
    font-size: 24px;
  }
  span {
    font-size: 20px;
    padding: 5px;
  }
`;
export const LabelRadio = styled.input``;
