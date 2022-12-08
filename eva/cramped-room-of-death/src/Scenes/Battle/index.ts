import { Scene } from '@eva/eva.js'
import BackgroundColor from './GameObjects/BackgroundColor'
import Footer from './GameObjects/Footer'
import Controller from './GameObjects/Controller'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../index'

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

  return scene
}

export default BattleScene
