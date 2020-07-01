import styled from 'styled-components'
import { prop } from 'styled-tools'
import { media } from '../common'

export const TitleContainer = styled.div`
max-width: 960px;
margin:auto;
  margin-top: 4rem;
  color: #000000;
  font-weight: bold!important;

  h4 {
    padding-left: 0;
  }
  
${media.lessThan('tablet')`
  margin: 30px 20px 10px ;
  ${parseInt(process.env.BRAND_ID) === 2 && 'margin-top: 60px;'}
`};  
`

export const ContainerText = styled.div`
max-width: 960px;
color: #000000;
margin:auto;
>div{
  margin-top: 40px;  
  text-align: justify;
  line-height: 1.1em;  
}
.parrafo{
  margin-top: 50px important;
  font-weight: bold;
  line-height: 1.5em;  
}
h2 {
  margin-bottom: 0.5rem;
  color: #000000;
  font-weight: bold!important;
}
h3 {
  margin: 20px 0px;
  font-weight: bold !important;
  ${prop('theme.font.family.title')};
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

${media.lessThan('tablet')`
  margin: 0 20px;
.parrafo{
margin-top: 20px;
}
h2{
  text-align: left;
}
`};  

`
