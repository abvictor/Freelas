import styled from "styled-components";

import { shade } from "polished";
import backgroundSignIn from "../../assets/freelasbackground2.jpg";

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
  background: rgba(255, 255, 255, 0.4);
  padding: 50px;
  border-radius: 25px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  form {
    margin-top: 80px;
    width: 340px;
    text-align: center;
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
    svg {
      margin-right: 8px;
    }
  }
`;

export const Background = styled.section`
  flex: 1;
  background: url(${backgroundSignIn}) no-repeat center;
  background-size: cover;
`;
