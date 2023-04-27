import cellItemShape from '../interfaces/cellItemShape';

export function createEmptyArray(height: number, width: number) {
    const cellItemShapeArr: cellItemShape[][] = [[],[]];
    for (let i = 0; i < height; i++) {
        cellItemShapeArr[i] = [];
        for (let j = 0; j < width; j++) {
            cellItemShapeArr[i][j] = {
                x: i,
                y: j,
                isMine: false,
                neighbour: 0,
                isRevealed: true,
                isEmpty: false,
                isFlagged: false,
            };
        }
    }
    return cellItemShapeArr;
}