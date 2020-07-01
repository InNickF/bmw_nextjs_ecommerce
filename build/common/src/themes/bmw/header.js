import colors from './colors'

export default {
  bgDesktop: colors.whiteOpacity,
  bgMobile: colors.header,
  dropdownBG: colors.white,
  cartBg: colors.main,
  blackText: colors.black,
  cartIcon: colors.white,
  cartIconDark: colors.black,
  sliderTextColor: colors.white,
  searchBoxIcon: colors.main,
  bgButtonCart: colors.main,
  headTextColor: colors.white,
  textButtonCart: colors.white,
  cartNumberBg: colors.scarlet,
  cartNumberText: colors.white,
  borderInInput: false,
  logo: '',
  borderColor: '',
  logoLeft: false,
  inputBorderColorMobile: colors.main,
  searchBottom: false,
  bgInputMobile: colors.white,
  bgInputDesktop: colors.white,
  desktopColorText: colors.textColor,
  desktopSearchBorder: `thin solid ${colors.textColor}`,
  desktopSearchFocus: `
    border: 1px solid ${colors.main};
    box-shadow: 0 0 3px ${colors.main}
  `,
  logoStyles: `
    margin-left: 7px;
    cursor: pointer;
    background: url('/images/BMW_White_Logo.svg');
    background-repeat: no-repeat;
    height: inherit;
    top: 0px;
    background-size: contain;
    width: 53px;
    height: 53px;
    @media(max-width: 720px) {
      top: 0;      
      width: 43px;
      height: 43px;      
    }
  `,
  advHeaderBg: '#303030',
  advHeaderColor: colors.white,
  leftInput: false,
  tintColorDesktop: colors.white,
  tintColorMobile: colors.white,
  headerBGDesktop: 'transparent',
  headerBGMobile: 'transparent',
  navigationBG: 'transparent',
  navigationText: colors.white,
  navigationBGHover: colors.main,
  marginMobile: '3rem'
}
