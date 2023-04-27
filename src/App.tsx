import './App.css';
import Board from './components/board';
import { createEmptyArray } from './utility/createCellArray';
import { plantMines } from './utility/plantMines';
import { updateNeighbours } from './utility/updateNeighbours';

function App() {
  let cellItemShapeArr = createEmptyArray(10, 10);
  cellItemShapeArr = plantMines(cellItemShapeArr, 10, 10, 10);
  cellItemShapeArr = updateNeighbours(cellItemShapeArr, 10, 10);

  return (
    <div className="App game">
      <Board cellItemShapeArr={cellItemShapeArr} />
    </div>
  );
}

export default App;