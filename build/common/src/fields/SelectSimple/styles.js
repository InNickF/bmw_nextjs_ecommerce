import styled from 'styled-components'

export const Content = styled.div`
  display: block;
  ${props => props.theme.font.family.condensed};
  width: 100%;
  text-align: left;
  label,
  span{
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    margin-bottom: 10px;
    display: inline-block;
  }
  select {
    display: flex;
    padding: 0;
    margin: 10px 0px;
    height: 40px;
    width: 100%;        
    box-sizing: border-box;    
    border: 1px solid #000000;
    borderRadius: 0;
    background: transparent;
    textAlign: center;
    width: 290px
    }
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
