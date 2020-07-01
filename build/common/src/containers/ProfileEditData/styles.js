import styled from 'styled-components'
import { prop } from 'styled-tools'
import { textInputs } from 'polished'
import media from '../../themes/media'

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  margin-left: 15px;
  flex-direction: column;
  width: 100%;
  .bread-profile{
    display: flex;
    cursor: pointer;
    margin: 30px 0 39px 0;
    margin-top: ${process.env.BRAND_ID == 2 ? '70px' : '30px'};
    a{
      text-decoration: none;
    }
    span{
      margin: 0 5px;
    }
  }
  svg path{
    fill: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#000000'};
  }
  ${textInputs()} {
    border: solid 1px #979797;
    box-sizing: border-box;
    padding: ${prop('theme.spacing.small')};
    margin-bottom: ${prop('theme.spacing.big')};
  }
  label {
    > span,
    > input {
      display: block;
      width: 100%;
      ${prop('theme.font.family.condensed')};
    }
    > input {
      width: 100%;
    }
    > span {
      margin-bottom: 0.3rem;
      
    }
  }
  .document {
    > div {
      display: flex;
      justify-content: space-between;
      > input {
        &:first-child {
          margin-right: ${prop('theme.spacing.big')};
          width: 20%;
        }
        &:last-child {
          flex: 1;
        }
      }
    }
  }
  .button-container {
    margin: 0 auto;
    margin-top: ${prop('theme.spacing.small')};
    text-align: end;
    button{
      height: 50px;
      background: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#000000'};    
    }
    
  }
  ${media.lessThan('tablet')`
    flex-direction: column;
    width: 90%;
  `};
`

export const TitleHeader = styled.h3`
font-style: normal;
font-weight: bold;
font-size: 42px;
line-height: 50px;

color: #000000;
margin-bottom: 43px;
`

export const ContentData = styled.div`
display: flex;
.document{
  >div{
    flex-direction: column;
  }
  select{
    margin-top: 0;
    margin-bottom: 0;
  }
}
${media.lessThan('mobile')`
  flex-direction:column;  
`}
`

export const RowLine = styled.div`
display: flex;
margin-bottom: 35px;
>div:first-child{
  margin-right: 62px;
}
>div{
  width: 290px;
  input[type="text"],
  input[type="number"],
  input[type="email"],
  input[type="date"],
  input[type="tel"]{
    border: 1px solid #000000;
    box-sizing: border-box;
    margin-bottom: 0;
  }
  span{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;      
    color: #000000;
  }
}
${media.lessThan('mobile')`
  flex-direction:column; 
  margin-bottom: 15px;
  >div{
    margin-bottom: 5px;
    width: 100%;
    select{
      width: 100%;
    }
  }
`}
`

export const UserImage = styled.div`
  background: url(${prop('image')}) no-repeat;
  background-size: cover;
  background-position: center center;
  margin: 0 auto;
  margin-bottom: ${prop('theme.spacing.bigger')};
  min-width: 120px;
  margin-right: 128px;
  margin-left: 0;
  height: 120px;
  position: relative;
  border-radius: 50%;
  span {
    box-shadow: 0 0 5px 0 rgba(182, 181, 181, 0.5);
    background: white;
    background-position: center;
    background-size: 60%;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    overflow: hidden;
    width: 30px;
    height: 30px;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${prop('theme.transition.fast')};
    &:hover {
      ${props => props.theme.shadow['state-hover']};
    }
    input {
      cursor: pointer;
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
${media.lessThan('mobile')`
margin: 0 5px;
  align-self: center;
`}
`
