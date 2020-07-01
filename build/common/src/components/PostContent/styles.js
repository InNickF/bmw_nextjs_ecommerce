import styled from 'styled-components'
import media from '../../themes/media'

export const Content = styled.div`
  float: none;
  min-height: 300px;
  line-height: 24px;
  h3 {
    ${props => props.theme.font.family.title};
    font-size: ${props => props.theme.font.sizes.huge};
    margin-bottom: ${props => props.theme.spacing.bigger};
    font-weight: bold;
  }

  .content {
    ${props => props.theme.font.family.normal};
  }
`

export const Text = styled.div`
  min-height: 407px;
  font-size: 18px;
  ${media.lessThan('tablet')`
  margin: auto 10px;
  `}
`

export const ImageContainer = styled.div`
  width: 50%;
  float: left;
  margin: 0 2rem 2rem 0;
  ${media.lessThan('tablet')`
    width: 100%;
    float: none;
  `}
`

export const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: right;
  bottom: 0;
  > a {
    display: inline-block;
    min-width: 60px;
    width: 60px;
  }
`

export const Social = styled.div`
  margin-top: ${props => props.theme.spacing.bigger};
  h5 {
    font-weight: bold;
    font-size: ${props => props.theme.font.sizes.small};
    margin-bottom: ${props => props.theme.spacing.small};
    ${props => props.theme.font.family.title};
  }
  a {
    display: inline-block;
    vertical-align: middle;
    margin: 0 ${props => props.theme.spacing.bigger};
    cursor: pointer;
    svg {
      fill: ${props => props.theme.colors.main} !important;
    }
    img {
      height: 26px;
    }
    &:first-child {
      margin-left: 0;
      img {
        height: 32px;
      }
    }
    &:nth-child(2) {
      img {
        height: 22px;
      }
    }
  }
  ${media.lessThan('tablet')`
    margin: auto 10px;
    margin-top: 20px;
  `}
`
