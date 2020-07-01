import colors from './colors'
import font from './font'

const elements = {
  a: {
    textDecoration: 'none',
    color: colors.textColor,
    ...font.family.title
  },
  wrapperWidth: 'calc(100% - 100px)',
  wrapperMaxWidth: '1340px',
  colorText: colors.black,
  controlBg: colors.control
}

export default elements
