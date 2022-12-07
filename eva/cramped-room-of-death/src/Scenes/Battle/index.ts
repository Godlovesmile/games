import { Scene, GameObject } from '@eva/eva.js'
import { Graphics } from '@eva/plugin-renderer-graphics'
import { Text } from '@eva/plugin-renderer-text'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../index'

const BattleScene = () => {
  const scene = new Scene('BattleScene', {
    size: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    },
  })

  // 1. 背景
  const backgroundColor = new GameObject('backgroundColor', {})
  const graphics = backgroundColor.addComponent(new Graphics())

  graphics.graphics.beginFill(0x140a27, 1)
  graphics.graphics.drawRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)
  graphics.graphics.endFill()

  scene.addChild(backgroundColor)

  // 2. 底部 footer
  const footer = new GameObject('footerText', {
    position: { x: 0, y: -16 },
    origin: { x: 0.5, y: 1 },
    anchor: { x: 0.5, y: 1 },
  })

  footer.addComponent(
    new Text({ text: 'welcome to game', style: { fontSize: 12, fontWeight: 'bold', fill: ['#ccc'] } })
  )

  scene.addChild(footer)
  return scene
}

export default BattleScene
