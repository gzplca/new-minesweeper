import cellItemShape from '../interfaces/cellItemShape';

export function revealBoard(cellItemShapeArr: cellItemShape[][], height: number, width: number) {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            cellItemShapeArr[i][j].isRevealed = true;
        }
    }
    return cellItemShapeArr;
}