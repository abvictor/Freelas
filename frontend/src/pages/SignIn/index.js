import React, { useRef, useCallback } from "react";
import { Form } from "@unform/web";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn, FiUser, FiLock } from "react-icons/fi";
import * as Yup from "yup";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

import getValidationErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Button";

import freelaslogo from "../../assets/freelaslogo.svg";

import { Container, Content, Background } from "./styles";

const SignIn = () => {
  const formRef = useRef(null);
  const history = useHistory();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          login: Yup.string().required("Insira e-mail ou usuário válidos"),
          password: Yup.string().required("Senha inválida"),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({ login: data.login, password: data.password });

        const user = JSON.parse(localStorage.getItem("@Freelas:user"));

        user.is_dev === false ||
        (user.is_dev === true && user.first_access === false)
          ? history.push("/dashboard")
          : history.push("/getStarted");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current.setErrors(errors);

          return;
        }
        addToast({
          type: "error",
          title: "Erro na autenticação",
          description: "Ocorreu um erro ao fazer login cheque as credenciais.",
        });
      }
    },
    [history, signIn, addToast]
  );

  return (
    <Container>
      <Content>
        <img src={freelaslogo} alt="freelas" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            icon={FiUser}
            name="login"
            placeholder="Nome de usuário ou e-mail"
          />
          <Input
            icon={FiLock}
            type="password"
            name="password"
            placeholder="Senha"
          />
          <Button type="submit">ENTRAR</Button>
        </Form>

        <Link to="/register">
          <FiLogIn />
          Não possui uma conta? Crie uma aqui
        </Link>
      </Content>
    </Container>
  );
};

export default SignIn;
