import React from "react";
import { Link } from "react-router-dom";
import {
  FiLogIn,
  FiArrowLeft,
  FiGithub,
  FiLinkedin,
  FiSmartphone,
  FiMail,
  FiLock,
  FiUser,
} from "react-icons/fi";

import Input from "../../components/Input";
import Button from "../../components/Button";

import registerImg from "../../assets/freelaslogo.svg";

import {
  Container,
  Content,
  RegisterMessage,
  Block,
  RegisterImg,
  DivRadio,
  LabelRadio,
} from "./styles";

const Register = () => (
  <Container>
    <Block>
      <RegisterImg>
        <img src={registerImg} alt="freelas" />
        <div>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro e participe da comunidade de freelancers!</p>
          <Link to="/">
            <FiArrowLeft />
            Pagina inicial
          </Link>
        </div>
      </RegisterImg>
      <Content>
        <form>
          <Input icon={FiUser} name="username" placeholder="Nome de usuário" />
          <Input
            icon={FiMail}
            type="email"
            name="email"
            placeholder="E-mail válido"
          />
          <Input
            icon={FiLock}
            type="password"
            name="password"
            placeholder="Senha"
          />
          <Input
            icon={FiLock}
            type="password"
            name="passwordConfirm"
            placeholder="Confirmar senha"
          />
          <Input icon={FiSmartphone} name="cel" placeholder="Celular" />
          <Input icon={FiLinkedin} name="linkedIn" placeholder="LinkedIn" />
          <Input icon={FiGithub} name="github" placeholder="GitHub" />

          <DivRadio>
            <h2>Qual será sua função no app?</h2>
            <div>
              <label>
                <input type="radio" name="is_dev" />
                <span>Freelancer</span>
              </label>
              <label>
                <input type="radio" name="is_dev" />
                <span>Cliente</span>
              </label>
            </div>
          </DivRadio>

          <Button type="submit">FEITO!</Button>
        </form>
      </Content>
    </Block>
  </Container>
);

export default Register;
