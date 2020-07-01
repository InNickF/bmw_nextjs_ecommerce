import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const PqrQuestion = styled.div`
border-radius: 7px;
grid-area: resume;
position: relative;
.discount{
  color: #FF8787;
  font-weight: 100;
  text-decoration: line-through;
  font-size: 12px;
  margin-bottom: 5px;
  }
  
  .separator {
    background: #979797;
    height: 1px;
    width: 100%;
  }
${media.lessThan('tablet')`
width: 100%;
margin: 0 auto;
`};
.hide-mobile {
  ${media.lessThan('tablet')`
  display: none;
  `};
}    
`

export const PqrHeader = styled.div`
margin: 20px 0 30px;
font-weight: bold;
font-size: 42px;
color: #000000;
${parseInt(process.env.BRAND_ID) === 2 &&
  `font-family: 'Mini-Regular', serif !important;
`};
${media.lessThan('tablet')`
  line-height: 44px;
`};
`
export const PqrQuestionContent = styled.div`

`
export const SearchContent = styled.div`
background: #F8F8F8;
width: 100%;
text-align: center;
`

export const SearchBox = styled.div`
position: relative;
display: flex;
justify-content: flex-start;
align-items: center;
width: fit-content;
margin: 0 auto;
height: 60px;
input{
  background: transparent;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  padding: 10px 7px;
  width: 240px;
  margin-left: 15px
}
svg{
  fill: #000000;
}
&::after{
  content: '';
  border-bottom: 0.75px solid #7B7B7B;
  position: absolute;
  width: 120%;
  left: -10%;
  height: 2px;
  bottom: 10px;
}
${media.lessThan('tablet')`
height: 45px;
input{
    border: none;
    padding: 5px 7px;
  } 
  &::after{
  bottom: 0;
}
  `}
  `
export const QuestionContent = styled.div`
  margin-left: 45px;
  margin-top: 70px;
  .no-results{
    font-size: 16px;
  }
  ${media.lessThan('tablet')`
  margin-left: 5px;
  margin-top: 20px;

  .no-results{
   margin-bottom: 30px
  }
  
  `}
  `
export const QuestionItem = styled.div`
  margin-bottom: 30px;
  h3{  
    font-weight: bold;
    font-size: 17px;
    color: #000000;
    font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Normal', sans-serif !important`};
    font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Regular', serif !important`};    
    font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Normal', sans-serif !important`}; 
    margin-bottom: 10px;
  }
  
  p{  
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 10px;
    max-width: 860px;
    span{
      font-weight: bold;
      margin-right: 5px;    
    }
  }
  
  >div{
    margin-left: 20px;
  }
  >p{
    margin-left: 20px;
    margin-bottom: 15px;
  }
  
  `