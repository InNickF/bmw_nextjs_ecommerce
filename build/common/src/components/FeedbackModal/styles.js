import styled from 'styled-components'
import { prop } from 'styled-tools'

import media from '../../themes/media'

export const Container = styled.div`
  background: white;
  color: ${prop('theme.colors.textColor')};
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-conent: space-around;
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: center;
  
  ${media.lessThan('tablet')`
    width: 80vw;
  `};
`

export const Title = styled.h3`
  font-size: ${prop('theme.font.sizes.huge')};
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
`
export const Description = styled.div`
  text-align: center;
  font-size: ${prop('theme.font.sizes.big')};
  ${prop('theme.font.family.condensed')};
`
export const ButtonContainer = styled.div`
  margin-top: ${prop('theme.spacing.big')};
  text-align: center;
`
