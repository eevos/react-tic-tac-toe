import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TicTacToe from "./actions/components/tic-tac-toe/TicTacToe";
import Header from "./actions/components/header/Header";
import Welcome from "./actions/components/welcome/welcome";

export default function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/tictactoe' element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}
