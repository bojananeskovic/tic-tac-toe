import React from 'react';
import Square from './Square';

export default function Board(props){
    const renderSquare = (i) =>{
        return (
            <Square
                value={props.squares[i]} 
                onClick={() => props.onClick(i)}
            ></Square>
        );
    };
    return (
        <div>
            <div class="row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div class="row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div class="row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}