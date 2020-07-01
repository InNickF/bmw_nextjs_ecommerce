import styled from 'styled-components'
import { ellipsis } from 'polished'

export const Container = styled.div`
  background: white;
  border-radius: 4px 0 4px 4px;
  padding: ${props => props.theme.spacing.big};
  position: relative;
  margin-top: 10px;
  ${props => props.theme.shadow.dialog};
  z-index: 2;
  &::after {
    content: '';
    height: 40px;
    width: 50%;
    position: absolute;
    right: 0;
    top: -40px;
  }
  &::before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent white transparent;
    position: absolute;
    right: 0;
    top: -10px;
  }
  .is-empty {
    text-align: center;
    ${props => props.theme.font.family.condensed};
  }
`

export const Summary = styled.div`
  display: flex;
  margin: 0.5rem auto;
  > div {
    font-weight: lighter;
    font-size: ${props => props.theme.font.sizes.smaller};
    ${ellipsis('100%')};
    width: 50%;
  }
`

export const Detail = styled.div`
  width: 70%;
  h3 {
    font-size: ${props => props.theme.font.sizes.smaller};
    ${ellipsis('100%')};
    ${props => props.theme.font.family.title};
    text-align: left;
    width: 100%;
    margin-left: 5%;
  }
`

export const ImageContainer = styled.figure`
  margin: 0;
  width: 20%;
`

export const Qty = styled.div`
  text-align: right;
`

export const Attrs = styled.div`
  text-align: left;
  padding-left: 5px;
`

export const TotalPrice = styled.div`
  font-weight: bold;
  font-size: ${props => props.theme.font.sizes.small};
  text-align: right;
`

export const Element = styled.div`
  position: relative;
  padding: ${props => props.theme.spacing.big} 0;
  border-bottom: thin solid ${props => props.theme.colors.lightgray};
  &:last-child {
    border-bottom: 0;
  }
`

export const Content = styled.div`
  display: flex;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    cursor: pointer;
    width: 110px;
    min-width: 110px;
    padding: 0.5rem 0.1rem;
    font-size: ${props => props.theme.font.sizes.smaller};
    > img {
      width: 16px;
      margin-right: 0.2rem;
      vertical-align: middle;
    }
    > span {
      vertical-align: middle;
    }
  }
`

export const DeleteButton = styled.button`
  background: transparent;
  cursor: pointer;
  position: absolute;
  top: 0.8rem;
  right: 0.1rem;
  width: 17px;
`
