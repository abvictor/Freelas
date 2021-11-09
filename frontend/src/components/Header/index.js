import React, { useRef, useCallback, useState } from "react";
import { Form } from "@unform/web";
import { useAuth } from "../../hooks/auth";
import { FiSearch } from "react-icons/fi";

import * as Yup from "yup";

import Button from "../Button";
import Input from "../Input";

import api from "../../services/api";
import getValidationErrors from "../../utils/getValidationErrors";
import { useToast } from "../../hooks/toast";

import { Header } from "./styles";

const HeaderBar = (props) => {
  const { logOut } = useAuth();
  const formRef = useRef(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          search: Yup.string("Insira uma tecnologia"),
        });

        await schema.validate(data, { abortEarly: false });

        const techs = formRef.current.getData().search;

        if (props.position.lng && props.position.lat) {
          const response = await api.get("/search", {
            params: {
              longitude: props.position.lng,
              latitude: props.position.lat,
              techs,
            },
          });

          if (response.data) {
            props.setDevs(response.data);
          }
        }
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
    [addToast, props]
  );

  return (
    <Header>
      <div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="search"
            placeholder="Buscar freelancer por tecnologia"
            icon={FiSearch}
          />
          <Button onClick={handleSubmit}>Buscar</Button>
        </Form>
        <Button onClick={logOut}>Logout</Button>
      </div>
    </Header>
  );
};
export default HeaderBar;
