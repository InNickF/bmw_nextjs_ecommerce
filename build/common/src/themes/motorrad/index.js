import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import font from './font'
import alignment from './alignment'
import spacing from './spacing'
import transition from './transitions'
import shadow from './shadows'
import elements from './elements'
import header from './header'
import input from './input'
import products from './products'

createGlobalStyle`
  @font-face {
      font-family: 'BMWGroup-Bold';
      src: url("public/fonts/motorrad/BMWMotorrad-Bold.ttf");
      font-weight: bold;
      font-display: auto;
  }

  @font-face {
      font-family: 'BMWGroup-Light';
      src: url("public/fonts/motorrad/BMWMotorrad-Light.ttf");
      font-weight: lighter;
      font-display: auto;
  }

  @font-face {
      font-family: 'BMWGroup-Normal';
      src: url("public/fonts/motorrad/BMWMotorrad-Regular.ttf");
      font-weight: normal;
      font-display: auto;
  }

  body {
    font-family: 'BMWGroup-Normal', sans-serif;
    font-weight: normal;
    font-display: auto;
    color: ${colors.textColor};
    color: red;
  }
`

const theme = {
  name: 'motorrad',
  colors,
  font,
  alignment,
  spacing,
  transition,
  shadow,
  elements,
  header,
  input,
  products
}

export default theme
