import React from "react";
import { useState } from "react";

export default function Game() {
  const [xNext, setxNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setxNext(!xNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xNext={xNext} squares={currentSquares} onPlay={handlePlay} />
        <MyButton class="reset" title="Reset" />
        <div className="game-info">
          <ol>"lol"</ol>
        </div>
      </div>
    </div>
  );
  // }

  function MyButton(props) {
    function handleClick() {
      if (props.class === "reset") {
        handlePlay(history[0]);
        
        console.log(
          "reset"
        );
      }
    }

    return <button onClick={handleClick}>{props.title}</button>;
  }
}

function Board({ xNext, squares, onPlay }) {
  const [winner, setWinner] = useState(false);

  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();

    if (xNext) {
      nextSquares[i] = "X";
    }
    if (!xNext) {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
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
  return (
    <td className="square" onClick={onSquareClick}>
      {value}
    </td>
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log("winner");
      return true;
    }
  }
  console.log(" no winner");

  return false;
}
