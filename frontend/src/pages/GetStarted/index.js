import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiArrowLeft, FiCode, FiUser } from "react-icons/fi";
import getStartedImg from "../../assets/getStartedImg.png";

import { Container, Block, MessageBlock, Content } from "./styles";

import Button from "../../components/Button";
import Input from "../../components/Input";
import UserPhoto from "../../components/UserPhoto";

const GetStarted = () => (
  <Container>
    <Block>
      <MessageBlock>
        <img src={getStartedImg} />
        <div>
          <h1>Vamos configurar seu perfil</h1>
          <p>Conte-nos suas experiências e suas melhores tecnologias! </p>
        </div>
      </MessageBlock>
      <Content>
        <form>
          <UserPhoto />
          <Input icon={FiUser} type="text" placeholder="Nome completo" />
          <Input icon={FiCode} type="text" placeholder="Melhores tecnologias" />
          <textarea
            type="text"
            placeholder="Use este espaço para fazer uma breve apresentação sobre você e suas experiências!"
          ></textarea>
          <Button type="submit">INICIAR O FREELAS</Button>
        </form>
      </Content>
    </Block>
  </Container>
);

export default GetStarted;
