import React, { useEffect, useState } from "react";
import "./styles.css";

//  0 1 2
//  3 4 5
//  6 7 8

const Square_cells = ({ value, onClick, isWinningCell }) => {
  return (
    <button
      onClick={onClick}
      className={"square" + (isWinningCell ? " winning-cell" : "")}
    >
      {value}
    </button>
  );
};

const TickTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXturn] = useState(true);
  const [matchStatus, setMatchStatus] = useState("");

  // this is to set the background color of winning cells to green.
  const [winingCells, setWiningCells] = useState([]);

  const getWinner = (squares) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        setWiningCells([x, y, z]);
        return squares[x];
      }
    }

    return null;
  };
  const handleClick = (getClickedSquare) => {
    let cpySquares = [...squares];
    //if user wins then stop the match or if the cell is already filled then we cant ulter that cell again.
    if (getWinner(getClickedSquare) || cpySquares[getClickedSquare]) return;
    //if the current clicked cell is empty then fill it with either "X" or "O" as per user turn
    cpySquares[getClickedSquare] = isXTurn ? "X" : "O";
    //toggle the users turn
    setIsXturn(!isXTurn);
    setSquares(cpySquares);
  };

  useEffect(() => {
    // if it's a tie match and all the cells are also filled
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setMatchStatus("This is a draw ! please restart the game.");
    } else if (getWinner(squares)) {
      setMatchStatus(`Winner is user ${getWinner(squares)}.`);
    } else {
      setMatchStatus(`It's User "${isXTurn ? "X" : "O"}" turn.`);
    }
  }, [squares, isXTurn]);

  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setWiningCells([]);
    setIsXturn(true);
  };
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square_cells
          value={squares[0]}
          onClick={() => handleClick(0)}
          isWinningCell={winingCells.includes(0)}
        />
        <Square_cells
          value={squares[1]}
          onClick={() => handleClick(1)}
          isWinningCell={winingCells.includes(1)}
        />
        <Square_cells
          value={squares[2]}
          onClick={() => handleClick(2)}
          isWinningCell={winingCells.includes(2)}
        />
      </div>
      <div className="row">
        <Square_cells
          value={squares[3]}
          onClick={() => handleClick(3)}
          isWinningCell={winingCells.includes(3)}
        />
        <Square_cells
          value={squares[4]}
          onClick={() => handleClick(4)}
          isWinningCell={winingCells.includes(4)}
        />
        <Square_cells
          value={squares[5]}
          onClick={() => handleClick(5)}
          isWinningCell={winingCells.includes(5)}
        />
      </div>
      <div className="row">
        <Square_cells
          value={squares[6]}
          onClick={() => handleClick(6)}
          isWinningCell={winingCells.includes(6)}
        />
        <Square_cells
          value={squares[7]}
          onClick={() => handleClick(7)}
          isWinningCell={winingCells.includes(7)}
        />
        <Square_cells
          value={squares[8]}
          onClick={() => handleClick(8)}
          isWinningCell={winingCells.includes(8)}
        />
      </div>

      <h2>{matchStatus}</h2>

      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default TickTacToe;
