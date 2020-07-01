import styled from 'styled-components'

const Container = styled.div`
  background: white;
  border-radius: 0 6px 0 0;
  padding: ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.big};
  position: relative;
  margin-top: 0px;
  ${props => props.theme.shadow.dialog};
  z-index: 2;
  min-width: 116px;
  &::after {
    content: '';
    height: 40px;
    width: 105%;
    position: relative;
    left: 0;
    right: 0;
    top: -7px;
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
    top: -8px;
  }
  a {
    color: #4a4a4a;
    display: block;
    text-align: left;
    text-decoration: none;
    padding: ${props => props.theme.spacing.small} 0;
    border-bottom: thin solid ${props => props.theme.colors.lightgray};
    &:last-child {
      border-bottom: 0;
    }
    &:hover {
      opacity: 0.6;
    }
    > span {
      color: #4a4a4a;
      padding-left: ${props => props.theme.spacing.small};
      vertical-align: middle;
    }
    > img {
      vertical-align: middle;
      width: 15px;
    }
  }
`

export default Container
