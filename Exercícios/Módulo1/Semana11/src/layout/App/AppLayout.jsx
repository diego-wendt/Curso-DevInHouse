import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
import { Navbar } from "../../components/Navbar";
import { Profiles } from "../../components/Profile";
import { GlobalStyle } from "./themes";

import { useCustomTheme } from "../../contexts";
import { PerfilProvider } from "../../contexts/Perfil/PerfilContext";

export const AppLayout = () => {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider value={theme}>
      <GlobalStyle />
      <Navbar />
      <PerfilProvider>
        <Profiles />
      </PerfilProvider>
    </ThemeProvider>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};
