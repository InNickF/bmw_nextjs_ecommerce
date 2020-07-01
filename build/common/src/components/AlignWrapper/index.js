import styled from 'styled-components'

export default styled.div`
  margin: ${props => props.margin || 0} auto;
  text-align: ${props => props.align || 'center'};
  min-height: 500px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  p{
    font-size: 2em;
  }

  @media (max-width: 576px) { 
    margin-bottom: 60px;
  }
`
