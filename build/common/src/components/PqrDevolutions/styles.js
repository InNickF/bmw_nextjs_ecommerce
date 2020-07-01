import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const PqrDevolution = styled.div`
border-radius: 7px;
grid-area: resume;
position: relative;
`
export const PqrHeader = styled.div`
margin: 20px 0 30px;
font-weight: bold;
font-size: 42px;
color: #000000;
`
export const PqrContent = styled.div`

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
export const Content = styled.div`
`
export const QuestionItem = styled.div`
margin-bottom: 30px;
h3{
  font-weight: bold;
  font-size: 17px;
  color: #000000;
  margin-bottom: 15px;
}
p{
  font-weight: normal;
  font-size: 14px;  
  color: #000000;
}
`

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

`
export const DevolutionItemHeader = styled.div`
display: flex;
background: #F1F1F1;
height: 50px;
align-items: center;
${media.lessThan('tablet')`
display: flex;
height: auto;
justify-content: space-between;
padding: 10px 0;
  `}
`

export const DevolutionFilter = styled.div`
  margin: 22px 0;
`
export const DevolutionList = styled.div`

${media.lessThan('tablet')`
  .no-petitions{
    margin-bottom: 40px;
  }
`}
`
export const DevolutionItem = styled.div`
`
export const DevolutionItemGreeting = styled.div`
text-align: center;
margin: 160px auto;
max-width: 700px;
p{
  margin-top: 70px;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  color: #000000;
}
${media.lessThan('tablet')`
margin: 40px auto;
`}
`
export const DevolutionItemHeaderItem = styled.div`
margin-left: 15px;
margin-right: 55px;
p{
  font-size: 10px;
  display: flex;
  align-items: center;
  color: #8C8C8C;
  &:last-child{
    margin-top: 5px;
    font-weight: bold;
    font-size: 14px;
    color: #000000;
  }  
}
${media.lessThan('tablet')`
margin: 5px 10px;
p{
  justify-content: center;
  text-align: center;
}
`}

`
export const DevolutionItemContent = styled.div`

`
export const DevolutionItemContentItem = styled.div`
  display: flex;
  margin: 15px 0;
  justify-content: space-between;
  ${media.lessThan('tablet')`
flex-direction: column;
height: 200px;
`}
`
export const DevolutionItemContentItemLeft = styled.div`
display: flex;
img{
  width: 100px;
  height: 100px;
  margin: 0 12px;
  box-sizing: border-box;
}
.content-data{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div{
    p{
      font-weight: bold;
      text-transform: uppercase;
      font-size: 14px;
      color: #000000;
      &:last-child{
        margin-top: 5px;
        font-weight: normal;
        font-size: 10px;
      }
    }
  }
}
`
export const DevolutionItemContentItemRight = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
button{
  cursor: pointer;
  background: ${parseInt(process.env.BRAND_ID) === 3 ? 'rgb(28, 105, 212)' : '#000000'};
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 190px;
  svg{
    margin-right: 20px;
  }
  &:last-child{
    border: 2px solid #1C69D4;
    ${parseInt(process.env.BRAND_ID) !== 3 && 'border-color: #000000'};
    color: ${parseInt(process.env.BRAND_ID) !== 3 ? '#000000' : '#1C69D4'};
    background: #ffffff;
    
    path{
      fill: ${parseInt(process.env.BRAND_ID) !== 3 ? '#000000' : '#1C69D4'};
    }

  }
    ${media.lessThan('tablet')`
  width: 100%;
  margin-bottom: 5px;
`}
}
`
export const DevolutionItemContentForm = styled.div`
margin-bottom: 70px;
display: flex;
justify-content: center;
div{
  width: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
p{
  font-weight: 500;
  font-size: 32px;
  color: #000000;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 60px;
}

label{
  font-weight: normal;
  font-size: 14px;
  color: #000000;
  margin-bottom: 10px;
}

textarea{
  resize: none;
  border: 1px solid #000000;
  box-sizing: border-box;
}

button{  
  background: ${parseInt(process.env.BRAND_ID) === 3 ? 'rgb(28, 105, 212)' : '#000000'};
  color: #fff;
  width: 160px;
  height: 60px;
  margin-top: 12px;
  margin-left: auto;
}
${media.lessThan('tablet')`
flex-direction: column;
height: auto;
div{
  width: 100%;
  margin: inherit;
}
p{
  margin-top: 30px;
  margin-bottom: 20px;
}
`}
`