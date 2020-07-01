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
  src: url("/fonts/mini/MINI-Serif-Bold.ttf");
  font-weight: bold;
  font-display: auto;
}

@font-face {
  font-family: 'BMWGroup-Light';
  src: url("/fonts/mini/MINI-Serif-Regular.ttf");
  font-weight: normal;
  font-display: auto;
}

@font-face {
  font-family: 'Mini';
  src: url("/fonts/mini/MINI-Sans-Serif-Regular.ttf");
  font-weight: normal;
  font-display: auto;
}
@font-face {
  font-family: 'BMWGroup-Normal';
  src: url("/fonts/mini/MINI-Serif-Regular.ttf");
  font-weight: normal;
  font-display: auto;
}

  body {
    font-family: 'Mini', sans-serif;
    font-weight: normal;
    font-display: auto;
    color: ${colors.textColor};
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Mini', serif;      
      font-weight: normal;
      font-display: auto;
    }
  }
`

const theme = {
  name: 'mini',
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
