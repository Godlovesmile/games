import { GameObject } from '@eva/eva.js'
import { Text } from '@eva/plugin-renderer-text'

const Footer = () => {
  const footer = new GameObject('footerText', {
    position: { x: 0, y: -16 },
    origin: { x: 0.5, y: 1 },
    anchor: { x: 0.5, y: 1 },
  })

  footer.addComponent(
    new Text({ text: 'welcome to game', style: { fontSize: 12, fontWeight: 'bold', fill: ['#ccc'] } })
  )

  return footer
}

export default Footer
