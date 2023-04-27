import cellItemShape from '../interfaces/cellItemShape';

export function traverseBoard(cellItemShapeArr: cellItemShape[][], x: number, y: number, height: number, width: number) {
    const el:cellItemShape[] = [];

    //up
    if (x > 0) {
        el.push(cellItemShapeArr[x - 1][y]);
    }

    //down
    if (x < height - 1) {
        el.push(cellItemShapeArr[x + 1][y]);
    }

    //left
    if (y > 0) {
        el.push(cellItemShapeArr[x][y - 1]);
    }

    //right
    if (y < width - 1) {
        el.push(cellItemShapeArr[x][y + 1]);
    }

    // top left
    if (x > 0 && y > 0) {
        el.push(cellItemShapeArr[x - 1][y - 1]);
    }

    // top right
    if (x > 0 && y < width - 1) {
        el.push(cellItemShapeArr[x - 1][y + 1]);
    }

    // bottom right
    if (x < height - 1 && y < width - 1) {
        el.push(cellItemShapeArr[x + 1][y + 1]);
    }

    // bottom left
    if (x < height - 1 && y > 0) {
        el.push(cellItemShapeArr[x + 1][y - 1]);
    }

    return el;
}