import cellItemShape from '../interfaces/cellItemShape';
import { traverseBoard } from './traverseBoard';

export function updateNeighbours(cellItemShapeArr: cellItemShape[][], height: number, width: number) {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const neighbours = traverseBoard(cellItemShapeArr, i, j, height, width);
            cellItemShapeArr[i][j].neighbour = neighbours.filter((neighbour) => neighbour.isMine).length;
        }
    }
    return cellItemShapeArr;
}