import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
import { Navbar } from "../../components/Navbar";

import { useCustomTheme } from "../../contexts";
import { PerfilProvider } from "../../contexts/Perfil/PerfilContext";

export const AppLayout = ({ children }) => {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider value={theme}>

      <Navbar />
      <PerfilProvider>
      {children}

      </PerfilProvider>
    </ThemeProvider>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};
