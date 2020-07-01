import styled from 'styled-components'

export const VehicleMatchContainer = styled.div`
  background: white;
`
export const Title = styled.h3`
  font-size: ${props => props.theme.font.sizes.huge} !important;
  margin-bottom: ${props => props.theme.spacing.small} !important;
  text-align: center;
  ${props => props.theme.font.family.title};
`

export const Description = styled.p`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.huge};
  font-size: ${props => props.theme.font.sizes.big};
  ${props => props.theme.font.family.condensed};
`

export const Match = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${props => props.theme.spacing.big} auto;
  width: 90%;
`

export const Card = styled.div`
  border-radius: 6px;
  padding: ${props => props.theme.spacing.big};
  box-sizing: border-box;
  ${props => props.theme.shadow.card};
  width: 40%;
  > h4 {
    text-align: left;
    ${props => props.theme.font.family.title};
    &.centered {
      text-align: center;
    }
  }
  > p {
    font-size: ${props => props.theme.font.sizes.small};
    font-weight: lighter;
  }

  > img {
    max-height: 200px;
  }
`

export const ImageFeedback = styled.div`
  color: white;
  align-self: center;
  width: 10%;
`

export const Buttons = styled.div`
  display: flex;
  > div {
    width: 90px;
    min-width: 90px;
    text-align: center;
    &:first-child {
      justify-self: flex-start;
    }
    &:last-child {
      justify-self: flex-end;
    }
  }
`
