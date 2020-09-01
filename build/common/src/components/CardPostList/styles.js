import styled from 'styled-components'
import media from '../../themes/media'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  > a {
    width: 30%;
  }
  ${media.lessThan('tablet')`
    flex-wrap: wrap;
    > a {
      width: 100%;
    }
  `};
`
