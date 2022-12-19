import { GameObject } from '@eva/eva.js'
// import { Img } from '@eva/plugin-renderer-img'
import { Sprite } from '@eva/plugin-renderer-sprite'
import { Event } from '@eva/plugin-renderer-event'
import { Transition } from '@eva/plugin-transition'

const CTRL_WIDTH = 70
const CTRL_HEIGHT = 60
const Y_DISTANCE = 3

const getPosition = (index: number) => {
  const xPosition = Math.floor((index - 1) / 2)
  const yPosition = (index - 1) % 2

  return {
    x: (xPosition - 1) * CTRL_WIDTH,
    y: (yPosition - 1) * (CTRL_HEIGHT + Y_DISTANCE),
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
    // new Img({
    //   resource: `ctrl${index}`,
    // })
    new Sprite({
      resource: 'ctrl',
      spriteName: `ctrl (${index}).png`,
    })
  )

  // 添加动画
  const animation = button.addComponent(new Transition())
  animation.group = {
    small: [
      {
        name: 'scale.x',
        component: button.transform,
        values: [
          {
            time: 0,
            value: 1,
            tween: 'ease-out',
          },
          {
            time: 100,
            value: 0.9,
            tween: 'ease-in',
          },
        ],
      },
      {
        name: 'scale.y',
        component: button.transform,
        values: [
          {
            time: 0,
            value: 1,
            tween: 'ease-out',
          },
          {
            time: 100,
            value: 0.9,
            tween: 'ease-in',
          },
        ],
      },
    ],
    big: [
      {
        name: 'scale.x',
        component: button.transform,
        values: [
          {
            time: 0,
            value: 0.9,
            tween: 'ease-out',
          },
          {
            time: 100,
            value: 1,
            tween: 'ease-in',
          },
        ],
      },
      {
        name: 'scale.y',
        component: button.transform,
        values: [
          {
            time: 0,
            value: 0.9,
            tween: 'ease-out',
          },
          {
            time: 100,
            value: 1,
            tween: 'ease-in',
          },
        ],
      },
    ],
  }

  // 添加事件
  const event = button.addComponent(new Event())
  const endHandler = () => {
    console.log('=== touchend ===')
    animation.play('big')
  }

  event.on('touchstart', () => {
    animation.play('small')
  })
  event.on('touchend', endHandler)
  event.on('touchendoutside', endHandler)

  return button
}

export default ControllerButton
