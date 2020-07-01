import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid black;
  padding: 5px;
  position: relative;
  max-width: 400px;
  margin: 20px auto;
  border: 1px solid black;
  
  h3 {
    font-size: ${props => props.theme.font.sizes.normal};
    margin: ${props => props.theme.spacing.small} 0px;
    ${props => props.theme.font.family.title};
  }
`

export const Content = styled.div`
  padding: ${props => props.theme.spacing.small};
`

export const Item = styled.div`
  margin-bottom: ${props => props.theme.spacing.huge};
  ${props => props.theme.font.family.condensed};
  
  div, span {
    font-size: ${props => props.theme.font.sizes.small};
    ${props => props.theme.font.family.condensed};
  }

  .icon {
    display: inline-block;
    width: 34px;
    text-align: center;
    img {
      height: 20px;
    }
  }
  .total {
    font-weight: bold;
    ${props => props.theme.font.family.title};
    margin: 5px 0px;
  }
`

export const TotalRow = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  margin: 10px 0px;
  * {
      font-size: ${props => props.theme.font.sizes.small};
      font-weight: bold;
      ${props => props.theme.font.family.title};
  }
  
  p {
    position: relative;
    overflow: hidden;
    margin-bottom: 0px;
    &:after {
      content: '';
      position: absolute;
      border-bottom: dotted 1px black;
      height: 1px;
      width: 100%;
      bottom: 0;
    } 
  }
`

export const ScheduleButton = styled.div`
  position: absolute;
  right: ${props => props.theme.spacing.big};
  top: 35%;
  width: 170px;
`

export const ItemContentInfo = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  ${props => props.theme.font.family.condensed};
  font-size: ${props => props.theme.font.sizes.small};
  
  p {
    position: relative;
    overflow: hidden;
    margin-bottom: 0px !important;
    &:after {
      content: '';
      position: absolute;
      border-bottom: dotted 1px black;
      height: 1px;
      width: 100%;
      bottom: 0;
    } 
  }
  `
