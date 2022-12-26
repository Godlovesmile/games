import { Component } from '@eva/eva.js'
import levels from '../../../../Levels'
import Tile from '../Tile'

class TileManager extends Component {
  static componentName: string = 'BattleManager' // 设置组件名字

  init() {
    this.initTile()
  }

  initTile() {
    const {
      level1: { mapInfo },
    } = levels

    for (let i = 0; i < mapInfo.length; i++) {
      const column = mapInfo[i]

      for (let j = 0; j < column.length; j++) {
        const item = column[j]

        if (item.src && item.type) {
          const imgSrc = `bg (${item.src}).png`

          this.gameObject.addChild(Tile(imgSrc, i, j))
        }
      }
    }
  }
}

export default TileManager
