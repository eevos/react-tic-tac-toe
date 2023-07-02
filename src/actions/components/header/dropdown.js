import React from "react";
import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <div className="dropdown">
      <span>Mouse over me</span>
      <div className="dropdown-content">
        <Link to="/welcome">Welcome</Link>
        <Link to="/tictactoe">TicTacToe</Link>
      </div>
    </div>
  );
}
