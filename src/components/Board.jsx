import React from 'react'
import Square from './Square'
import {board_style} from '../assets/styles'

//Scaffolding Functions

const Board = ({squares, onClick}) => {


    return (
        <div style={board_style}>      
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} /> 
           
       ))}        
                     
             
        </div>
    )
}

export default Board