import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    light: { words: "aliceblue", ui: "#ddd", bg: "#539ddf" },
    dark: { words: "aliceblue", ui: "#333", bg: "#353535" }
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
