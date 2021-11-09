import React, { useRef, useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import getStartedImg from "../../assets/getStartedImg.png";
import { Form } from "@unform/web";
import Select from "react-select";

import * as Yup from "yup";

import { useToast } from "../../hooks/toast";
import api from "../../services/api";
import getValidationErrors from "../../utils/getValidationErrors";

import { Container, Block, MessageBlock, Content, UserImg } from "./styles";

import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";

const GetStarted = () => {
  const [techs, setTechs] = useState([]);
  const [selectedOp, setSelectedOp] = useState([]);
  const [position, setPosition] = useState([]);
  const history = useHistory();
  const { addToast } = useToast();

  const formRef = useRef(null);
  const selectRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("@Freelas:user"));

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setPosition([latitude, longitude]);
      },
      () => {
        return "Oops! Algo deu errado";
      },
      {
        timeout: 30000,
        enableHighAccuracy: true,
      }
    );
  }, []);

  useEffect(() => {
    api.get("/techs").then((response) => {
      setTechs(
        Array.isArray(response.data)
          ? response.data.map((x) => ({
              value: x.id,
              label: x.name,
            }))
          : []
      );
    });
  }, []);

  const handleSelectChange = useCallback((e) => {
    setSelectedOp(Array.isArray(e) ? e.map((x) => x.value) : []);
  }, []);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome completo obrigatório"),
          // techs: Yup.array().required("As tecnologias são obrigatórias"),
          desc: Yup.string().required("Nos de ao menos uma descrição simples"),
        });

        await schema.validate(data, { abortEarly: false });

        if (selectedOp.length < 1) {
          throw new Error("Informe ao menos uma tecnologia");
        }

        if (position.length <= 0) {
          throw new Error("Permita-nos acessar a sua localização");
        }

        console.log(data);

        const response = await api.put("/users", {
          id: user.id,
          name: data.name,
          techs: selectedOp,
          desc: data.desc,
          first_access: false,
          latitude: position[0],
          longitude: position[1],
        });

        if (response.status === 202) {
          throw new Error(response.data.error);
        }

        user.first_access = false;
        localStorage.setItem("@Freelas:user", JSON.stringify(user));

        history.push("/dashboard");
      } catch (err) {
        console.log(err);

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
    [selectedOp, position, user, history, addToast]
  );

  return (
    <Container>
      <Block>
        <MessageBlock>
          <img src={getStartedImg} alt="freelasBackground" />
          <div>
            <h1>Vamos configurar seu perfil</h1>
            <p>Conte-nos suas experiências e suas melhores tecnologias!</p>
          </div>
        </MessageBlock>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <UserImg>
              <img src={user.profile_image} alt="Profile" />
            </UserImg>
            <Input
              icon={FiUser}
              type="text"
              placeholder="Nome completo"
              name="name"
            />
            <Select
              onChange={handleSelectChange}
              ref={selectRef}
              isMulti
              name="techs"
              options={techs}
              className="basic-multi-select"
              classNamePrefix="select"
            />
            <TextArea
              type="text"
              placeholder="Use este espaço em branco para fazer uma breve apresentação sobre você e suas experiências!"
              name="desc"
            ></TextArea>
            <Button type="submit">INICIAR O FREELAS</Button>
          </Form>
        </Content>
      </Block>
    </Container>
  );
};

export default GetStarted;
