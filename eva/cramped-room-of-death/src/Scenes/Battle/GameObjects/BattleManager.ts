import { Component } from '@eva/eva.js'
import TileMap from './TileMap'
import DataManagerInstance from '../../../Runtime/DataManager'
import levels from '../../../Levels'
import { TILE_WIDTH, TILE_HEIGHT } from '../GameObjects/Tile'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../../index'
class BattleManager extends Component {
  static componentName: string = 'BattleManager' // 设置组件名字

  init() {
    this.initLevel()
  }

  initLevel() {
    const { levelIndex } = DataManagerInstance
    const level = levels[`level${levelIndex}`]

    DataManagerInstance.mapInfo = level.mapInfo
    DataManagerInstance.mapRowCount = level.mapInfo[0].length
    DataManagerInstance.mapColumnCount = level.mapInfo.length

    this.generateTileMap()
  }

  generateTileMap() {
    this.gameObject.addChild(TileMap())
    this.adapterPos()
  }

  adapterPos() {
    const { mapRowCount, mapColumnCount } = DataManagerInstance
    const disX = (SCREEN_WIDTH - TILE_WIDTH * mapRowCount) / 2
    const disY = (SCREEN_HEIGHT - TILE_HEIGHT * mapColumnCount) / 2

    this.gameObject.transform.position.x = disX
    this.gameObject.transform.position.y = disY
  }
}

export default BattleManager
