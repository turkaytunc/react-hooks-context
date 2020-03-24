import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import BookList from "./components/booklist/BookList";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BookList></BookList>
    </div>
  );
}

export default App;
