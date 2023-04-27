import cellItemShape from '../interfaces/cellItemShape';

export function plantMines(cellItemShapeArr : cellItemShape[][], height: number, width: number, mines: number) {
    while ( mines > 0 ) {
      const randomx = Math.floor((Math.random() * 1000) + 1) % width;
      const randomy = Math.floor((Math.random() * 1000) + 1) % height;
      if (!(cellItemShapeArr[randomx][randomy].isMine)) {
        cellItemShapeArr[randomx][randomy].isMine = true;
        mines--;
      }
    }
    return cellItemShapeArr;
  }