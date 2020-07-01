import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: flex-start;

  button {
    font-size: ${props => props.theme.font.sizes.small};
    width: 245px;
    height: auto;
    margin: 0;
    &:first-child{
      margin-right: 30px;
    }
  }
`
