import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
import { Navbar } from "../../components/Navbar";

import { useCustomTheme } from "../../contexts";

export const AppLayout = ({ children }) => {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider value={theme}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};
