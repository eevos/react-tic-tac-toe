import React from 'react'

export default function Square() {

  return <MyGrid />;
}

function MyGrid() {
  let grid = [];
  let row = [];
  let number = 0;
  console.log('mygrid');

  for (let y = 0; y < 3; y++) {
    console.log('loop y');

    number++;
    for (let x = 0; x < 3; x++) {
      console.log('loop x');

      row[x] = <MySquare value={number} />
      number++;
    }
    grid[y] = row;
  }

  return <MySquare value={number} />;
}

function MySquare({value}) {
  return <button className="square">{value != null ? value : "_"}</button>;
};
