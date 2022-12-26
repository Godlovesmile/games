import { GameObject } from '@eva/eva.js'
import TileManager from './TileMapManager'

const TileMap = () => {
  const tileMap = new GameObject('TileMap')

  tileMap.addComponent(new TileManager())
  
  return tileMap
}

export default TileMap
