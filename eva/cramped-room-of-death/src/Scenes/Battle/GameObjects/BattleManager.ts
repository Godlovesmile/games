import { Component } from '@eva/eva.js'
import TileMap from './TileMap'

class BattleManager extends Component {
  static componentName: string = 'BattleManager' // 设置组件名字

  init() {
    this.initLevel()
  }

  initLevel() {
    this.generateTileMap()
  }

  generateTileMap() {
    this.gameObject.addChild(TileMap())
  }
}

export default BattleManager
