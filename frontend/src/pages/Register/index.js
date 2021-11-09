import React, { useRef, useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form } from "@unform/web";
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
import * as Yup from "yup";

import { useToast } from "../../hooks/toast";
import api from "../../services/api";
import github from "../../services/github";
import getValidationErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Radio from "../../components/Radio";

import registerImg from "../../assets/freelaslogo.svg";

import { Container, Content, Block, RegisterImg } from "./styles";

const Register = () => {
  const formRef = useRef(null);
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required("Nome de usuário obrigatório"),
          password: Yup.string().required("Senha obrigatória"),
          passwordConfirm: Yup.string().required("Campo obrigatório"),
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          wpp: Yup.string().required("Celular obrigatório"),
          linkedin_username: Yup.string().required("LinkedIn obrigatório"),
          github_username: Yup.string().required("GitHub obrigatório"),
          is_dev: Yup.string().required("Campo obrigatório"),
        });

        await schema.validate(data, { abortEarly: false });

        if (data.password !== data.passwordConfirm) {
          throw new Error("As senhas não conferem");
        }

        if (data.is_dev === "true") {
          data.is_dev = true;
        } else {
          data.is_dev = false;
        }

        const githubUser = await github.get(`/users/${data.github_username}`);
        const response = await api.post("/users", {
          username: data.username,
          password: data.password,
          email: data.email,
          wpp: data.wpp,
          linkedin_username: data.linkedin_username,
          github_username: data.github_username,
          is_dev: data.is_dev,
          profile_image: githubUser.data.avatar_url,
        });

        if (response.status === 202) {
          throw new Error(response.data.error);
        }

        history.push("/");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current.setErrors(errors);

          return;
        }
        addToast({
          type: "error",
          title: "Erro na autenticação",
          description:
            err.message ||
            "Ocorreu um erro ao realizar o cadastro, tente novamente.",
        });
      }
    },
    [history, addToast]
  );

  return (
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
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              icon={FiUser}
              name="username"
              placeholder="Nome de usuário"
            />
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
            <Input icon={FiSmartphone} name="wpp" placeholder="Celular" />
            <Input
              icon={FiLinkedin}
              name="linkedin_username"
              placeholder="LinkedIn"
            />
            <Input
              icon={FiGithub}
              name="github_username"
              placeholder="GitHub"
            />

            <h2>Qual será sua função no app?</h2>
            <Radio
              name="is_dev"
              options={[
                { id: true, label: "Freelas" },
                { id: false, label: "Cliente" },
              ]}
            />

            <Button type="submit">FEITO!</Button>
          </Form>
        </Content>
      </Block>
    </Container>
  );
};

export default Register;
