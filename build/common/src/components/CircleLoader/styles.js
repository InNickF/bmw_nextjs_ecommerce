import styled from 'styled-components'
import { prop } from 'styled-tools'

const Loading = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  background-color: ${prop('theme.colors.main')};
  border-radius: 100%;
  animation: loading 1s infinite ease-in-out;
  @keyframes loading {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`

export default Loading
