import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiUser, FiLock } from "react-icons/fi";

import Input from "../../components/Input";
import Button from "../../components/Button";

import freelaslogo from "../../assets/freelaslogo.svg";

import { Container, Content, Background } from "./styles";

const SignIn = () => (
  <Container>
    <Content>
      <img src={freelaslogo} alt="freelas" />
      <form>
        <Input
          icon={FiUser}
          name="login"
          placeholder="Nome de usuário ou email"
        />
        <Input
          icon={FiLock}
          type="password"
          name="password"
          placeholder="Senha"
        />
        <Button type="submit">ENTRAR</Button>
      </form>

      <Link to="/register">
        <FiLogIn />
        Não possui uma conta? Cria uma aqui
      </Link>
    </Content>
  </Container>
);

export default SignIn;
