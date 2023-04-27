import React, { ReactElement } from 'react';
import cellItemShape from '../interfaces/cellItemShape';

interface ICellProps {
    status: cellItemShape
}

const Cell = (props: ICellProps): ReactElement => {
    const { status } = props;
    const value = status.isRevealed ? status.isMine ? "💣" : status.neighbour === 0 ? null : status.neighbour : status.isFlagged ? '🚩' : null;
    const className = "cell" + (status.isRevealed ? " revealed" : "") + (status.isMine ? " is-mine" : "") + (status.isFlagged ? " is-flagged" : "");

    return (
        <div className={className}>
            {value}{status.isMine}
        </div>
    )
}

export default Cell;