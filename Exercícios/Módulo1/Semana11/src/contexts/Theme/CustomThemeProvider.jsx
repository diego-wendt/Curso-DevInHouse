import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getThemeLocalStorage, setThemeLocalStorage } from "../../utils";
import { themeDark, themeLight } from "../../themes";

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const themeDefault = getThemeLocalStorage();
    if (themeDefault) {
      setTheme(themeDefault);
    }
  }, []);

  const handleTheme = () => {
    setTheme((prev) => {
      const newValue = prev === "dark" ? "light" : "dark";
      setThemeLocalStorage(newValue);
      return newValue;
    });
  };

  const customTheme = theme === "dark" ? themeDark : themeLight;
  console.log("Tema:", theme);

  // pode ser feito console.log para verificar se a troca está funcionando
  // console.log(theme.colors.backgroundPrimary);

  return (
    <CustomThemeProvider value={{ theme: customTheme, handleTheme }}>
      {children}
    </CustomThemeProvider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};
