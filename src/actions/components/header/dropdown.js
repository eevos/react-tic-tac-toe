import React from "react";
import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <div className="dropdown">
      <p>Menu</p>
      <div className="dropdown-content">
        <Link to="/welcome"><p>Welcome</p></Link>
        <Link to="/tictactoe"><p>Play TicTacToe</p></Link>
      </div>
    </div>
  );
}
