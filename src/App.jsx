import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helpers';

import './styles/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];
const App = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currMove, setCurrMove] = useState(0);

  const current = history[currMove];
  const { winner, winningSquares } = calculateWinner(current.board);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrMove(move);
  };
  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrMove(0);
  };
  return (
    <div className="app">
      <h1>
        <span className="text-green">TIC</span> TAC{' '}
        <span className="text-orange">TOE</span>{' '}
      </h1>
      <StatusMessage winner={winner} current={current}></StatusMessage>
      <Board
        winningSquares={winningSquares}
        board={current.board}
        handleSquareClick={handleSquareClick}
      />

      <button
        className={`btn-reset ${winner ? 'active' : 'btn-reset-nonDisplay'}`}
        type="button"
        onClick={onNewGame}
      >
        Start New Game
      </button>
      <h2 style={{fontWeight:'normal'}} >Current Game History</h2>

      <History history={history} moveTo={moveTo} currMove={currMove} />
      <div className="bg-balls" />
    </div>
  );
};
export default App;
