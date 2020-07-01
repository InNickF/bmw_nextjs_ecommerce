import styled from 'styled-components'

export const Content = styled.div`
  display: block;
  ${props => props.theme.font.family.condensed};
  width: 100%;
`

export const Text = styled.div`
  font-size: ${props => props.size || '0.9em'};
  font-weight: ${props => props.weight || '300'};
  color: ${props => props.theme.colors[props.color || 'textColor']};
  text-align: ${props => props.align || 'left'};
  margin: ${props => props.margin};
  word-break: break-word;
`

export const TextArea = styled.textarea`
  ${props => props.theme.font.family.condensed};
  width: 100%;
  text-indent: 6px;
  margin: 10px 0px;
  
  :focus {
    outline: none;
  }
`
