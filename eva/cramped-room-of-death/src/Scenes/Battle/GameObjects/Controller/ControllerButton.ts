import { GameObject } from '@eva/eva.js'
import { Img } from '@eva/plugin-renderer-img'

const CTRL_WIDTH = 70
const CTRL_HEIGHT = 60

const getPosition = (index: number) => {
  const xPosition = Math.floor((index - 1) / 2)
  const yPosition = (index - 1) % 2

  return {
    x: (xPosition - 1) * CTRL_WIDTH,
    y: (yPosition - 1) * CTRL_HEIGHT,
  }
}

const ControllerButton = (index: number) => {
  const button = new GameObject('controller', {
    position: getPosition(index),
    origin: { x: 0.5, y: 0.5 },
    anchor: { x: 0.5, y: 1 },
    size: {
      width: CTRL_WIDTH,
      height: CTRL_HEIGHT,
    },
  })

  button.addComponent(
    new Img({
      resource: `ctrl${index}`,
    })
  )

  return button
}

export default ControllerButton
