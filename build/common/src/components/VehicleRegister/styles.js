import styled from 'styled-components'
import media from '../../themes/media'

export const VehicleRegisterContainer = styled.div`
  background: white;
  h3 {
    font-size: ${props => props.theme.font.sizes.bigTitle};
    text-align: center;
    margin-bottom: ${props => props.theme.spacing.big};
    ${props => props.theme.font.family.title};
    ${media.lessThan('tablet')`
      font-size: 19px;
    `}
  }
  form {
    margin: 0 auto;
    width: 85%;
  }
  input {
    display: block;
    padding: 0.7rem 0.8rem;
    border-radius: 7px;
    ${props => props.theme.font.family.condensed};
    ${props => props.theme.shadow.input};
  }
  label {
    display: block;
    margin-bottom: ${props => props.theme.spacing.big};
    span {
      display: block;
      font-size: ${props => props.theme.font.sizes.big};
      margin-bottom: ${props => props.theme.spacing.small};
      ${props => props.theme.font.family.condensed};
    }
  }
  .model {
    input {
      width: 100%;
    }
  }

  .placa-chasis {
    display: flex;
    > div {
      margin-right: ${props => props.theme.spacing.bigger};
    }
  }

  .button-container {
    text-align: center;
    margin-bottom: ${props => props.theme.spacing.huge};
  }
`

export const Error = styled.div`
  ${props => props.theme.font.family.condensed};
  color: ${props => props.theme.colors.highlight};
  margin: 10px;
`

export const Description = styled.div`
  font-size: ${props => props.theme.font.sizes.normal};
  ${props => props.theme.font.family.title};
  text-align: center;
  margin: 15px 0px;
`

export const LinkDescription = styled(Description)`
  cursor: pointer;
`

export const ContentImgTP = styled(Description)`
  margin: auto auto;
`
