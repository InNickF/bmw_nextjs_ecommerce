import { generateMedia } from 'styled-media-query'

export const customMedia = generateMedia({
  desktop: '1367px',
  laptop: '1282px',
  medium: '1025px',
  tablet: '900px',
  cartItem: '1160px',
  mobile: '451px'
})

export default customMedia
