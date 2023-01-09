import { TILE_TYPE_ENUM } from '../Enums'
import level1 from './level1'

export interface ITitle {
  src: number | null,
  type: TILE_TYPE_ENUM | null
}

export interface ILevel {
  mapInfo: Array<Array<ITitle>>
}

const levels: Record<string, ILevel> = {
  level1,
}

export default levels
export { ITitle }