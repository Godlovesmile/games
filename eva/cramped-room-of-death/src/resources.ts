import { RESOURCE_TYPE } from '@eva/eva.js'

export default [
  {
    name: 'ctrl',
    type: RESOURCE_TYPE.SPRITE,
    src: {
      image: {
        type: 'png',
        url: '../static/assets/ctrl/ctrl.png',
      },
      json: {
        type: 'json',
        url: '../static/assets/ctrl/ctrl.json',
      },
    },
  },
]
