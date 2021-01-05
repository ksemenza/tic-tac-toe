import React from 'react'
import {square_style} from '../assets/styles'


// Destructuring Props
const Square = ({value, onClick}) => (
    <button style={square_style} onClick={onClick}> {value} </button>
)

export default Square