import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles";

import { RegistrationForm } from "../components/sections/Register";

const register: React.FC = () => {
  return (
    <ThemeProvider theme={theme()}>
      <RegistrationForm />
    </ThemeProvider>
  );
};

export default register;
