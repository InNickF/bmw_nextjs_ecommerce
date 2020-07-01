import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.spacing.small};
  width: 80%;
`

export const Form = styled.form`

`

export const Field = styled.div`
  margin-bottom: ${props => props.theme.spacing.bigger};
  span {
    display: block;
    margin-bottom: ${props => props.theme.spacing.small}
  }
  input {
    border-radius: 6px;
    box-sizing: border-box;
    padding: ${props => props.theme.spacing.small};
    width: 100%;
    ${props => props.theme.shadow.minimum};
  }
  &.editor {
    height: 370px;
  }
`

export const MediaInputs = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  margin-top: ${prop('theme.spacing.huge')};
`

export const FieldFile = styled.div`
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  padding: 6px;
  padding-bottom: 3px;
  margin-left: ${prop('theme.spacing.normal')};
  overflow: hidden;
  ${prop('theme.shadow.input')}
  img {
    width: 21px;
  }
  input {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`
