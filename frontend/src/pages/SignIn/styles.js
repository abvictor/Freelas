import styled from "styled-components";

import { shade } from "polished";
import backgroundSignIn from "../../assets/backgroundSignIn.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  background: url(${backgroundSignIn}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 750px;
  background: #dcdcdd;
  padding: 50px;
  border-radius: 25px;

  form {
    margin-top: 80px;
    width: 340px;
    text-align: center;

    input {
      display: flex;
      align-items: center;
      color: white;
      font-size: 18px;
      border: 2px solid #fff;
      border-radius: 20px;
      padding: 16px;
      width: 100%;
      height: 48px;

      & + input {
        margin-top: 14px;
      }
    }

    button {
      background: black;
      color: white;
      font-size: 24px;
      border: 0;
      border-radius: 40px;
      padding: 0 16px;
      width: 100%;
      height: 56px;
      margin-top: 24px;

      &:hover {
 
        background: #222;
        transition: background 0.2s;
      }
    }

    }
  }
    > a {
      margin-top: 18px;
      color: #000;
      text-decoration: none;
      display: flex;
      align-items: center;
      &:hover {

        color: #333;
        transition: color 0.2s;
      }
      svg{
        margin-right: 8px
      }
`;
export const Background = styled.section`
  flex: 1;
  background: url(${backgroundSignIn}) no-repeat center;
  background-size: cover;
`;
