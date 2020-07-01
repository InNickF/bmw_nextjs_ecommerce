import styled from 'styled-components'

export const VehicleSelectorContainer = styled.div`
  background: white;
  h3 {
    font-size: ${props => props.theme.font.sizes.huge};
    margin-bottom: ${props => props.theme.spacing.huge};
    ${props => props.theme.font.family.title};
  }
  .register {
    text-align: center;
    margin: ${props => props.theme.spacing.big} auto;
    ${props => props.theme.font.family.condensed};
  }
  .button-container {
    text-align: center;
    margin-bottom: ${props => props.theme.spacing.huge};
  }
`

export const VehicleItem = styled.button`
  box-shadow: 0 2px 10px 0 rgba(164, 164, 164, 0.5);
  border-radius: 8px;
  margin: 0 auto;
  width: 93%;
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.small};
  padding: ${props => props.theme.spacing.small};
  position: relative;
  > div {
    ${props => props.theme.font.family.title};
    font-weight: normal;
    h4 {
      margin-bottom: ${props => props.theme.spacing.smaller};
      margin-left: 1rem;
    }
    &:first-child {
      width: 100px;
    }
  }
  .data {
    > div {
      display: flex;
      span {
        margin-left: 1rem;
      }
    }
  }
  .check {
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 #e1dddd;
    display: block;
    position: absolute;
    height: 20px;
    width: 20px;
    right: 20px;
    top: 50%;
    margin-top: -10px;
    &.checked {
      background: url('/static/images/icons/check-mark.svg') no-repeat;
      background-position: center center;
      background-size: 80%;
    }
  }
`
