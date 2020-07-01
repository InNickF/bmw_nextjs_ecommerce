import styled from 'styled-components'
import { textInputs } from 'polished'

import media from '../../themes/media'

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
      > div {
        &:first-child {
          width: 30%;
          margin: 0px 10px 0px 0px;
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
  .register-form-modal{
    .input-row-container,
    >form>div{
        width: 100%;
    }
    .doc{
      width: 100%;
      select{
        width: 100%;
      }
    }

    .input-row-container{
      >div{
        width: 48%;
      }
    }

    form {       
      .input-check-container,
      .button-container,
      .input-flex-container{
        width: 100%;
      }
    
 
    }

  }

${media.lessThan('medium')`
  width: 80vw;
  padding: 0;
  background: #ffffff;
  height: 60vh;
  form {
    .input-row-container{
      flex-direction: column;
      
    }    
    .input-check-container,
    .button-container,
    .input-flex-container{
      width: 100%;
    }
  
    .input-row-container >div,
    .input-container.doc > div:last-child,
    .input-container.doc > div:first-child{
      width: 100%;
      margin: 0;
    }  
    .input-row-container > div,
    .input-row-container .mail > div:last-child,
    .input-row-container .mail > div:first-child{
      width: 100%!important;
      margin: 0;
    }  
  }
`};

`
export const OptionButton = styled.div`
  ${props => props.theme.font.family.title};
  padding: 20px;
  width: 250px;
  text-align: center;
  ${props => props.border && 'border: 2px solid #979797;'}
  background-color: ${props => props.bcolor || 'white'};
  color: ${props => props.color || '#979797'};
  margin: 15px auto;
  cursor: pointer;
  
  ${media.lessThan('mobile')`
    font-size: 0.8em;
    width: 200px;
  `};
`

export const OptionBack = styled.div`
  ${props => props.theme.font.family.title};
  color: ${props => props.theme.colors.main};
  cursor: pointer;
`
