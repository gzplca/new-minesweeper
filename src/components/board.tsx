import React, { ReactElement } from 'react';
import cellItemShape from '../interfaces/cellItemShape';
import Cell from './cell';

interface IBoardProps {
    cellItemShapeArr: cellItemShape[][],
}

const Board = (props: IBoardProps): ReactElement => {
    const { cellItemShapeArr } = props;
    return (
        <div className="board">
            {cellItemShapeArr.map((row, rowIndex) => {
                return (
                    <div className="row" key={rowIndex}>
                        {row.map((cell, cellIndex) => {
                            return (
                                <Cell key={cellIndex} status={cell} />
                            )
                        })}
                    </div>
                )
            })
            }
        </div>
    )
}

export default Board;