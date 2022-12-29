import React, { useState } from 'react';
import Square from './Square';

export const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const handleSquareClick = position => {
    if(board[position]){
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X':'O';
        }
        return square;
      });
    });
    setIsXNext((prev)=>!prev);
  };

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      ></Square>
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}

        {/* <Square value={board[0]} onClick={()=>{handleSquareClick(0)}}></Square>
        <Square value={board[1]}></Square>
        <Square value={board[2]}></Square> */}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {/* <Square value={board[3]}></Square>
        <Square value={board[4]}></Square>
        <Square value={board[5]}></Square> */}
      </div>

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        {/* <Square value={board[6]}></Square>
        <Square value={board[7]}></Square>
        <Square value={board[8]}></Square> */}
      </div>
    </div>
  );
};
export default Board;
