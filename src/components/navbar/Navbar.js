import React, { Component } from "react";
import "./navbar.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export default class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.bg, color: theme.words }}>
        <h1>Context</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
