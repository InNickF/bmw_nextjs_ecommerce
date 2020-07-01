import styled from 'styled-components'
import { prop } from 'styled-tools'
import { media } from '../common'

const ContainerText = styled.div`
max-width: 960px;
margin:auto;
color: #000000;
>div{
  margin-top: 40px;    
  line-height: 28px;
  padding: 0 40px;
}

h1 {
  ${prop('theme.font.family.title')};
  font-size: 1.6rem;
  margin-top: 4rem;
  font-weight: bold !important;
  line-height: 1.2em;
}

h3 {
  font-size: 1.3rem;
  margin: 20px 0px;
  font-weight: bold !important;
  ${prop('theme.font.family.title')};
}

h3,
p {
  margin-bottom: 1rem;
  text-align: justify;
  }
  ol,
  ul {
    padding-left: 2rem;
    margin-bottom: 1rem;
    li {
      margin-bottom: 0.5rem;
    }
  }
  ul {
    padding-left: 4rem;
  }
  h4 {
    ${prop('theme.font.family.title')};
    margin-bottom: 0.5rem;
  }
  h2, h3{
    font-weight: bold!important;
    color: #000000;
  }
${media.lessThan('tablet')`
  margin: 0 20px;
  >div{
    padding: 0;
  }
  h2, h3{
    font-weight: bold!important;
    color: #000000;
  }
`}
`

export default ContainerText
