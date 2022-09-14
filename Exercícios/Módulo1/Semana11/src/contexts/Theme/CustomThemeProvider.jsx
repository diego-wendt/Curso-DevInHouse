import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getTheme, setTheme } from "../../utils";
import { themeDark, themeLight } from "../../themes";

export const CustomThemeProvider = ({ children }) => {
  const [isDark, setDark] = useState(true);

  const handleTheme = () => {
    setDark((prev) => {
      const newValue = !prev;
      setTheme(newValue);
      return newValue;
    });
  };

  useEffect(() => {
    const isDarkLocalStorage = getTheme();
  }, []);

  return (
    <CustomThemeProvider
      value={{ theme: isDark ? themeDark : themeLight, handleTheme }}
    >
      {children}
    </CustomThemeProvider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};
