import React from "react";
import { FiLogIn } from "react-icons/fi";
import freelaslogo from "../../assets/freelaslogo.svg";

import { Container, Content, Background } from "./styles";

const SignIn = () => (
  <Container>
    <Content>
      <img src={freelaslogo} alt="freelas" />
      <form>
        <input name="login" placeholder="Nome de usuário ou email" />
        <input name="password" placeholder="Senha" />
        <button type="submit">ENTRAR</button>
      </form>
      <a href="#">
        <FiLogIn />
        Não possui uma conta? Cria uma aqui
      </a>
    </Content>
    {/* <Background /> */}
  </Container>
);

export default SignIn;
