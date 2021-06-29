import React from "react";
import { Container } from "./styles";

const Input = ({ name, icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}

      <input {...rest} />
    </Container>
  );
};
export default Input;
