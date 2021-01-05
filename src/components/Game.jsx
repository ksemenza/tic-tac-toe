import React, {useState} from 'react'
import Board from './Board'
import {game_style} from '../assets/styles'

import { calculateWinner } from '../gameLogic'

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [nextMove, setNextMove] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (i) => {
        const boardSquare = [...board];

        //Event alternating turns or ends response when won
        if (winner || boardSquare[i])
            return
        boardSquare[i] = nextMove ? "X" : "O";
        setBoard(boardSquare)
        setNextMove(!nextMove)
    }

    console.log(board)

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>Reset Game</button>
    )

    /**
     switch  
     
     */


    return (
        <div className='game-cta'>
            <h2>Tic Tac Toe</h2>
            <Board squares={board} onClick={handleClick} />

            <div style={game_style}>
                <p>
                    {winner ? `${winner} won` : "Player " + (nextMove ? "X" : "O")}
                </p>
                {renderMoves()}
            </div>

        </div>
    )
}

export default Game