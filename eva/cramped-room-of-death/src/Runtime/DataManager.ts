import { ITitle } from '../Levels'

class DataManager {
  levelIndex: number = 1;
  mapInfo: Array<Array<ITitle>>;
  mapRowCount: number;
  mapColumnCount: number;
}

const DataManagerInstance = new DataManager()

export default DataManagerInstance