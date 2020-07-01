import colors from './colors'

export default {
  bgDesktop: colors.whiteOpacity,
  bgMobile: colors.white,
  tintColorDesktop: colors.second,
  tintColorMobile: colors.black,
  dropdownBG: colors.white,
  cartBg: colors.main,
  cartIcon: colors.white,
  sliderTextColor: colors.white,
  headerBGDesktop: colors.white,
  headerBGMobile: colors.main,
  searchBoxIcon: colors.main,
  bgButtonCart: colors.main,
  headTextColor: colors.white,
  textButtonCart: colors.white,
  cartNumberBg: colors.scarlet,
  cartNumberText: colors.white,
  borderInInput: false,
  logo: 'https://www.colombia.bmw-motorrad.co/content/dam/bmwmotorradnsc/common/mnm/graphics/bmw_motorrad_logo.svg.asset.1585209612412.svg',
  logoLeft: false,
  borderColor: '',
  inputBorderColorMobile: colors.main,
  searchBottom: false,
  bgInputMobile: colors.white,
  bgInputDesktop: colors.white,
  desktopSearchBorder: `thin solid ${colors.textColor}`,
  desktopSearchFocus: `
    border: 1px solid ${colors.main};
    box-shadow: 0 0 3px ${colors.main}
  `,
  logoStyles: `
    top: 5px;
    width:141px;
    @media(max-width: 600px) {
      width: 108px;
      top: 0px;
    }
  `,
  advHeaderBg: colors.main,
  advHeaderColor: colors.white,
  leftInput: true,
  navigationBG: colors.white,
  navigationText: colors.textColor,
  navigationTextHover: colors.white,
  navigationBGHover: colors.main,
  shadow: '0 2px 34px 0 rgba(225,225,225,0.5)',
  marginMobile: '3rem',
  marginBottomDesktop: '0'
}
