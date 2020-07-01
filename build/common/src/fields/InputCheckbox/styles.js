import styled from 'styled-components'

export const Content = styled.div`
  display: block;
  ${props => props.theme.font.family.condensed};
  width: 100%;
`

export const ContentInput = styled.div`
  display: block;
  text-align: center;
  ${props => props.theme.font.family.condensed};
  
  > * {
    display: inline-block;
  }
  
  input {
    margin-right: ${props => props.theme.spacing.small};
  }
  a {
    color: ${props => props.theme.colors.textColor};
    text-decoration: none;
    ${props => props.theme.font.family.condensed};
  }
    
`

export const Text = styled.div`
  font-size: ${props => props.size || '0.9em'};
  font-weight: ${props => props.weight || '300'};
  color: ${props => props.theme.colors[props.color || 'textColor']};
  text-align: ${props => props.align || 'left'};
  margin: ${props => props.margin};
  word-break: break-word;
`
