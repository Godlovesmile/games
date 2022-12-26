import { GameObject, Scene } from '@eva/eva.js'
import BackgroundColor from './GameObjects/BackgroundColor'
import Footer from './GameObjects/Footer'
import Controller from './GameObjects/Controller'
// import TileMap from './GameObjects/TileMap'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../index'
import BattleManager from './GameObjects/BattleManager'
import { Render } from '@eva/plugin-renderer-render'

const BattleScene = () => {
  const scene = new Scene('BattleScene', {
    size: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    },
  })

  // 1. 背景
  scene.addChild(BackgroundColor())

  // 2. 底部 footer
  scene.addChild(Footer())

  // 3. 控制按钮
  scene.addChild(Controller())

  // 4. 主战场渲染, (自定义组件)
  // scene.addChild(TileMap())
  const stage = new GameObject('stage')
  stage.addComponent(new Render({ sortableChildren: true }))
  stage.addComponent(new BattleManager())
  scene.addChild(stage)

  return scene
}

export default BattleScene
