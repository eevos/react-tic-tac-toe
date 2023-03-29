import React from 'react'
import ReactDOM from "react-dom/client";
import { useState } from "react"

export default function Board() {
  // https://react.dev/learn/tutorial-tic-tac-toe#setup-for-the-tutorial
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    console.log(i);
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (
    <table>
      <tbody>
        <tr className="board-Row">
          <MySquare value={squares[0]} onSquareClick={() => handleClick(0)} />
          <MySquare value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <MySquare value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </tr>
        <tr className="board-Row">
          <MySquare value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <MySquare value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <MySquare value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </tr>
        <tr className="board-Row">
          <MySquare value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <MySquare value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <MySquare value={squares[8]} onSquareClick={() => handleClick(8)}/>
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

function MySquare({value, onSquareClick}) {
  console.log(value);

  return <td
    className="square"
    onClick={onSquareClick}>
    {value}
  </td>;
};
