import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [themeState, setThemeState] = useState({
    isLightTheme: false,
    light: { words: "aliceblue", ui: "#ddd", bg: "#539ddf" },
    dark: { words: "aliceblue", ui: "#333", bg: "#353535" }
  });

  const changeTheme = () => {
    setThemeState({ ...themeState, isLightTheme: !themeState.isLightTheme });
  };

  return (
    <ThemeContext.Provider value={{ ...themeState, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
