import { Game } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { ImgSystem } from '@eva/plugin-renderer-img'
import { EventSystem } from '@eva/plugin-renderer-event'
import { SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation'
import { TransitionSystem } from '@eva/plugin-transition'
import { GraphicsSystem } from '@eva/plugin-renderer-graphics'
import { TextSystem } from '@eva/plugin-renderer-text'
import { SpriteSystem } from '@eva/plugin-renderer-sprite'
import { RenderSystem } from '@eva/plugin-renderer-render'
import { isMobile } from './Utils'
import BattleScene from './Scenes/Battle/index'

export const SCREEN_WIDTH = window.innerWidth
export const SCREEN_HEIGHT = window.innerHeight

export const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      resolution: isMobile() ? 1 : window.devicePixelRatio,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      antialias: true,
      enableScroll: false,
    }),
    new ImgSystem(),
    new TransitionSystem(),
    new SpriteAnimationSystem(),
    new RenderSystem(),
    new SpriteSystem(),
    new EventSystem(),
    new GraphicsSystem(),
    new TextSystem(),
  ],
})

game.loadScene({ scene: BattleScene() })
