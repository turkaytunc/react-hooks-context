import React, { Component } from "react";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>Context</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
