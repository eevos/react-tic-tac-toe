import React from 'react'
import ReactDOM from "react-dom/client";
import { useState } from "react"

export default function Game() {

  return (
  <div>
    <Board  />
    <MyButton class="reset" title="Reset"/>
  </div>
  );
}

function MyButton(props) {

  function handleClick() {
    
    if (props.class == "reset"){
      console.log('this.Board.squares.setSquares(useState(Array(9).fill(null)))');
    }
  }

  return (
    <button onClick={handleClick}>{props.title}</button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);
  const [winner, setWinner] = useState(false);

  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();

    if (xNext) {
      nextSquares[i] = 'X';
      setXNext(false);
    }
    if (!xNext) {
      nextSquares[i] = "O";
      setXNext(true);
    }

    setSquares(nextSquares);
    setWinner(calculateWinner(nextSquares));
  }

  return (
    <table>
      <tbody>
        <tr className="board-Row">
          <MySquare value={squares[0]} onSquareClick={() => handleClick(0)} />
          <MySquare value={squares[1]} onSquareClick={() => handleClick(1)} />
          <MySquare value={squares[2]} onSquareClick={() => handleClick(2)} />
        </tr>
        <tr className="board-Row">
          <MySquare value={squares[3]} onSquareClick={() => handleClick(3)} />
          <MySquare value={squares[4]} onSquareClick={() => handleClick(4)} />
          <MySquare value={squares[5]} onSquareClick={() => handleClick(5)} />
        </tr>
        <tr className="board-Row">
          <MySquare value={squares[6]} onSquareClick={() => handleClick(6)} />
          <MySquare value={squares[7]} onSquareClick={() => handleClick(7)} />
          <MySquare value={squares[8]} onSquareClick={() => handleClick(8)} />
        </tr>
      </tbody>
    </table>
  );
}


function MySquare({ value, onSquareClick }) {
  return <td
    className="square"
    onClick={onSquareClick}>
    {value}
  </td>;
};

function Row() {
  return (
    <tr className="board-Row">
      <MySquare />
      <MySquare />
      <MySquare />
    </tr>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b]
      && squares[a] === squares[c]) {
      console.log('winner');
      return true;
    }
  }
  console.log(' no winner');

  return false;
}