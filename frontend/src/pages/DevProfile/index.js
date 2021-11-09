import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import {
  Container,
  RenderPhoto,
  ProfileHeader,
  WppButton,
  RenderProjects,
} from "./styles";

const DevProfile = () => {
  const user = JSON.parse(localStorage.getItem("@Freelas:user"));
  localStorage.setItem("@Freelas:user", JSON.stringify(user));

  return (
    <>
      <Container>
        <ProfileHeader className="ProfileHeader">
          <FiArrowLeft />
          <h2>Perfil de</h2>
        </ProfileHeader>
        <RenderPhoto className="RenderPhoto" />
        <p className="tecs">Melhores tecnologias: </p>
        <p className="ap">Apresentação: </p>
        <h3 className="projects">Projetos recentes</h3>
        <RenderProjects></RenderProjects>
        <WppButton className="">WhatsApp</WppButton>
      </Container>
    </>
  );
};

export default DevProfile;
