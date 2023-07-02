import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import Dropdown from "./dropdown";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import Welcome from "../welcome/welcome";

export default function Header() {
  return (
    <div className="header">
      <Dropdown></Dropdown>
        <Link to='/welcome'>Welcome</Link>
        <Link to='/tictactoe'>TicTacToe</Link>
        <p>Item 3</p>
    </div>
  );
}
