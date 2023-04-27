import cellItemShape from '../interfaces/cellItemShape';
import { traverseBoard } from './traverseBoard';

export function revealEmpty(cellItemShapeArr: cellItemShape[][], width: number, height: number, x: number, y: number,) {
    const area = traverseBoard(cellItemShapeArr, x, y, height, width);
    area.map(value => {
        if (!value.isFlagged && !value.isRevealed && (value.isEmpty || !value.isMine)) {
            cellItemShapeArr[value.x][value.y].isRevealed = true;
            if (value.isEmpty) {
                revealEmpty(cellItemShapeArr, width, height, value.x, value.y);
            }
        }
    });
    return cellItemShapeArr;

}