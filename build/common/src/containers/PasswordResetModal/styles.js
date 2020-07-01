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
  text-align: center;
  margin-bottom: 1rem;
  font-size: 24px;
  line-height: 28px;
  font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Normal', sans-serif !important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Regular', serif !important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Normal', sans-serif !important`}; 
  font-weight: bold;
  text-transform: uppercase;
  color: #000000;
  margin-top: 15px;  
  ${media.lessThan('tablet')`
    font-size: 15px;
    margin-bottom: 0;
    margin-top: 12px;
    padding: 0 40px;
  `};
  }

  span{
      color: black;
    }

  ${textInputs()} {
    border: 1px solid black;
    box-sizing: border-box;    
    padding: ${props => props.theme.spacing.small};
    ${media.lessThan('tablet')`
    height: 50px;
  `};
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
  }
  .button-container {
    margin-top: ${props => props.theme.spacing.small};
    text-align: center;
    height: 50px;
  }  
`
