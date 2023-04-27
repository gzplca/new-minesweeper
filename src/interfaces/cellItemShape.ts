interface cellItemShape {
    isRevealed: boolean,
    isMine: boolean,
    isFlagged: boolean,
    isEmpty: boolean,
    neighbour: number,
    x: number,
    y: number,
}

export default cellItemShape;