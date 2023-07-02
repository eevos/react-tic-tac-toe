import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Dropdown from "./dropdown";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import Welcome from "../welcome/welcome";

export default function Header() {
  return (
    <div className="header">
      <p><Dropdown></Dropdown></p>
      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
    </div>
  );
}
