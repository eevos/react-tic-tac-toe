import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navigate} from "react-router-dom";

import TicTacToe from "./actions/components/tic-tac-toe/TicTacToe";
import Header from "./actions/components/header/Header";
import Welcome from "./actions/components/welcome/welcome";
import Pong from "./actions/components/pong/pong";

export default function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route index element={<Navigate to="/welcome" replace />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/pong" element={<Pong />} />
      </Routes>
    </Router>
  );
}
