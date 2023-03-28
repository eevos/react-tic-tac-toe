import React from 'react'
import ReactDOM from "react-dom/client";

export default function Square() {

  return (
    <div>
      <Row />
      <Row />
      <Row />
    </div>
  );
}

function Row() {

  return (
    <div className="board-Row">
      <MySquare />
      <MySquare />
      <MySquare />
    </div>
  );
}

function MySquare({ value }) {
  return <button className="square">{value != null ? value : "_"}</button>;
};
