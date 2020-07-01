import styled from 'styled-components'
import { prop } from 'styled-tools'
import { media } from '../common'

const ContainerText = styled.div`
max-width: 960px;
margin:auto;
color: #000000;
>div{
  margin-top: 40px;  
  text-align: justify;
  line-height: 22px;
}

.politic{
  margin-top: 50px !important;
  font-weight: bold !important;
    line-height: 1.2em;
  }
h2 {
  margin-bottom: 0.5rem;
  ${prop('theme.font.family.title')};
}
h3 {
  margin: 20px 0px;
  font-weight: bold !important;
  ${prop('theme.font.family.title')};
}
h2, h3{
  font-weight: bold;
  color: #000000;  
}
h3,
p {
  margin-bottom: 1rem;
  text-align: justify;
    
  }
  ol {
    padding-left: 2rem;
    margin-bottom: 1rem;
    li {
      margin-bottom: 0.5rem;
    }
  }
h2, h3{
  font-weight: bold;
  color: #000000;
}
${media.lessThan('tablet')`
.politic{
  text-align: left;
}
margin: 0 20px;
>div{
  padding:0;
}
h2, h3{
  font-weight: bold;
  color: #000000;
}
`}
`

export default ContainerText
