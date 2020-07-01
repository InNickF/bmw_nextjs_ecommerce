import styled from 'styled-components'
import { textInputs } from 'polished'
import { media } from '../../..'

export const Container = styled.div`
  box-sizing: border-box;
  color: ${props => props.theme.colors.textColor};
  padding: ${props => props.theme.spacing.big};
  margin: 0 auto;
  width: 95%;
  h3 {
    font-size: ${props => props.theme.font.sizes.bigger};
    margin-bottom: ${props => props.theme.font.sizes.bigger};
    text-align: center;
    ${props => props.theme.font.family.title};
  }
  ${textInputs()} {
    box-shadow: 0 1px 3px 0 rgba(104, 104, 104, 0.5);
    box-sizing: border-box;
    border-radius: 2.8px;
    padding: ${props => props.theme.spacing.small};
  }
  label {
    > span,
    > input {
      display: block;
      ${props => props.theme.font.family.condensed};
    }
    > input {
      width: 100%;
    }
    > span {
      margin-bottom: 0.3rem;
    }
  }
  .input-container {
    margin-bottom: ${props => props.theme.font.sizes.bigger};
    &.doc {
      display: flex;
      > label {
        &:first-child {
          width: 30%;
          > input {
            width: 100px;
          }
        }
        &:last-child {
          width: 70%;
        }
      }
    }
    &.vehicle {
      > span {
        display: block;
        margin-bottom: ${props => props.theme.spacing.small};
      }
      label {
        display: block;
        margin-bottom: ${props => props.theme.spacing.smaller};
        span,
        input {
          display: inline;
          margin-right: ${props => props.theme.spacing.small};
          width: auto;
        }
      }
    }
  }
  .terms {
    text-align: center;
    input {
      margin-right: ${props => props.theme.spacing.small};
    }
    a {
      color: ${props => props.theme.colors.textColor};
      text-decoration: none;
      ${props => props.theme.font.family.condensed};
    }
  }
  .button-container {
    margin-top: ${props => props.theme.spacing.small};
    text-align: center;
  }
  &.register-form-cart{
    margin:0;
    width: 100%;
  }
`

export const RegisterFormCart = styled.div`

form{ 
    margin-bottom: 20px;
  >div{
    margin-top: 23px;
    width: 290px;
    position: relative;
    label{
      width: 100%;
    }
    span{
      font-size: 14px;
      line-height: 16px;
      color: #000000;
    }
    input{
      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 0;
      height: 40px;
      width: 100%;
      box-shadow: none;
    }
    input, label, span{

    font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Normal', sans-serif !important`};
    font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`}; 
    font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Normal', sans-serif !important`}; }
  }
  
  .highlight{
    position: absolute;
    top: 68px;
  }
  .input-flex-container{
    width: 640px;
    display: flex;    
    flex-direction: column;
    align-items: baseline;
  }
  .button-container{
    width: 640px;    
    display: flex;
  }

  .input-row-container{
    width: 640px;
    display: flex;
    justify-content: space-between;    
    align-items: baseline;
    >div{
      width: 290px;
    }
  }
.input-check-container{
  width: 640px;
  display: flex;
>div>div{
  display: flex;
  align-items: center;
  justify-content: center;
  input{
    width: 10px;
    height: 10px;
  }
}
}
  .doc{
    box-sizing: border-box;
    align-items: flex-end;
    justify-content: space-between;
    >label:first-child{
      width: 25%!important;
    }
    > label:first-child > input {
      width: 100%!important;
    }
  }
  
}

${media.lessThan('tablet')`
.highlight{
  font-size: 10px;
}
`}

`

export default Container
