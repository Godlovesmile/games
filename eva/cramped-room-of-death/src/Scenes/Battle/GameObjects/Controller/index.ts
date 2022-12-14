import { GameObject } from '@eva/eva.js'
import ControllerButton from './ControllerButton'

const Controller = () => {
  const controller = new GameObject('controller', {
    position: { x: 0, y: -80 },
    origin: { x: 0.5, y: 1 },
    anchor: { x: 0.5, y: 1 },
  })

  controller.addChild(ControllerButton(1))
  controller.addChild(ControllerButton(2))
  controller.addChild(ControllerButton(3))
  controller.addChild(ControllerButton(4))
  controller.addChild(ControllerButton(5))
  controller.addChild(ControllerButton(6))

  return controller
}

export default Controller
