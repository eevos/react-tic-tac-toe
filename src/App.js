import React from "react";
import ReactDOM from "react-dom/client";

import TicTacToe from './actions/components/tic-tac-toe/TicTacToe';
import Header from "./actions/components/header/Header";

export default function App(){
  return (
    <div>
      <Header></Header>
      <TicTacToe></TicTacToe>
    </div>
  );
}