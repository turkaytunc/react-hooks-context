import React, { Component } from "react";
import "./book-list.css";

export class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
