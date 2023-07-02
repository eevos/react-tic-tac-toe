import React from "react";
import { Link } from 'react-router-dom';

export default function Dropdown() {
  return (
    <div className="dropdown">
      <span>Mouse over me</span>
      <div className="dropdown-content">
        <Link to='/tictactoe'>TicTacToe</Link>
        <Link to='/welcome'>Welcome</Link>
      </div>
    </div>
  );
}
