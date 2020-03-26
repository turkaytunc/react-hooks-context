import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import BookList from "./components/booklist/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/themeToggle/ThemeToggle";

export default function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar></Navbar>
        <BookList></BookList>
        <ThemeToggle></ThemeToggle>
      </ThemeContextProvider>
    </div>
  );
}
