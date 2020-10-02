import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme()}>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export { Layout };
