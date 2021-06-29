import React from "react";
import { Container } from "./styles";

const Button = ({ children, ...rest }) => {
  return <Container type="button">{children}</Container>;
};
export default Button;
