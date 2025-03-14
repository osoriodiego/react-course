import { useState } from "react";
import "./index.css";

const Turns = {
  X: "X",
  O: "O",
};

const winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

interface SquareProps {
  index: number;
  value: string;
  isSelected: boolean;
  updateBoard: (index: number) => void;
}

const Square = ({ index, value, isSelected, updateBoard }: SquareProps) => {
  const handleClick = () => {
    updateBoard(index);
  };

  const squareClass = `square ${isSelected ? "is-selected" : ""}`;
  return (
    <div className={squareClass} onClick={handleClick}>
      {value}
    </div>
  );
};

interface PlayerProps {
  turn: string;
  isFinished: boolean;
  winner: string | null;
  resetBoard: () => void;
}

const Player = ({ turn, winner, isFinished, resetBoard }: PlayerProps) => {
  return (
    <>
      <div className={` ${winner ? "turn-winner" : "turn"}`}>
        {winner ? `Winner: ${turn}` : isFinished ? `Draw` : `Turn: ${turn}`}
      </div>
      {isFinished && (
        <div className="turn reset" onClick={resetBoard}>
          RESET GAME
        </div>
      )}
    </>
  );
};

export function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(Turns.O);
  const [winner, setWinner] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const checkWinner = (board: string[]) => {
    for (const combo of winnerCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const checkFinished = (board: string[]) => {
    return board.every((square) => square !== null);
  };

  const updateBoard = (index: number): void => {
    if (board[index] !== null) {
      return;
    }

    if (board[index] !== null || winner) {
      setIsFinished(true);
      return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newFinished = checkFinished(newBoard);
    if (newFinished) {
      setIsFinished(newFinished);
      return;
    }

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      setIsFinished(true);
      return;
    }

    const newTurn: string = turn === Turns.X ? Turns.O : Turns.X;
    setTurn(newTurn);
  };

  const resetBoard = () => {
    console.log("reset board");
    const newBoard = Array(9).fill(null);
    setBoard(newBoard);
    setTurn(Turns.O);
    setWinner(null);
    setIsFinished(false);
  };

  return (
    <main className="board">
      <h1 className="title">TIC TAC TOE</h1>
      <section className="game">
        {board.map((_, index) => (
          <Square
            key={index}
            index={index}
            value={board[index]}
            isSelected
            updateBoard={updateBoard}
          />
        ))}
      </section>
      <section>
        <Player
          turn={turn === "X" ? "X" : "O"}
          winner={winner}
          isFinished={isFinished}
          resetBoard={resetBoard}
        />
      </section>
      <section></section>
    </main>
  );
}
