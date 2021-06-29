import styled from "styled-components";

import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  background: #dcdcdd;
  background-size: cover;
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  background: #72a5d6;
  width: 1200px;
  height: 900px;
  border-radius: 20px;
  padding: 20px;
`;

export const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-top: 40px;

  div {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 200px;
    background: #4992d7;
    border-radius: 20px;
    padding: 30px;

    h1 {
      font-size: 36px;
      font-weight: 300;
      text-align: center;
    }
    p {
      font-size: 24px;
      margin-top: 20px;
    }
  }
`;

export const Content = styled.div`
  width: 450px;
  height: 750px;
  text-align: center;
  background: #4992d7;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  div {
    margin-top: 12px;
  }

  textarea {
    height: 220px;
    width: 100%;
    padding: 15px;
    border-radius: 15px;
    margin-top: 12px;
    font-size: 22px;
    line-height: 28px;
    text-align: start;
    resize: none;
    border: none;
    &::placeholder {
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;
