import React from 'react'
import ReactDOM from "react-dom/client";
import { useState } from "react"

export default function Board() {

  return (
    <table>
      <tbody>
        <tr className="board-Row">
          <MySquare />
          <MySquare />
          <MySquare />
        </tr>
        <tr className="board-Row">
          <MySquare />
          <MySquare />
          <MySquare />
        </tr>
        <tr className="board-Row">
          <MySquare />
          <MySquare />
          <MySquare />
        </tr>
      </tbody>
    </table>
  );
}

function Row() {
  return (
    <tr className="board-Row">
      <MySquare />
      <MySquare />
      <MySquare />
    </tr>
  );
}

function MySquare() {
  let [value, setValue] = useState("");

  function handleClick() {
    setValue("X");
  }
  return <td onClick={handleClick} className="square">{value != null ? value : ""}</td>;
};
