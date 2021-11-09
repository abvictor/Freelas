import React, { Link } from "react";
import { StyledPopUp } from "./styles";

const PopUp = ({ data }) => {
  const user = JSON.parse(localStorage.getItem("@Freelas:user"));

  return (
    <StyledPopUp>
      <div>
        <img
          src={data.user.profile_image}
          alt="User"
          style={{
            height: "50px",
            width: "50px",
            textAlign: "center",
            marginLeft: "35px",
            borderRadius: "25px",
          }}
        />
        <p>
          <b>Nome: {data.user.name}</b>
        </p>
        <p>
          <b>GitHub: {data.user.github_username}</b>
        </p>
        <p>
          <b>Tecnologias: {data.user.github_username}</b>
        </p>
        <p>
          <b>Função: {data.user.is_dev === true ? "Programador" : "Cliente"}</b>
        </p>

        <button>Ver perfil</button>
      </div>
    </StyledPopUp>
  );
};
export default PopUp;
