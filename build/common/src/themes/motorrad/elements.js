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
  maxWrapperWidth: '1366px',
  colorText: colors.white,
  controlBg: colors.control
}

export default elements
