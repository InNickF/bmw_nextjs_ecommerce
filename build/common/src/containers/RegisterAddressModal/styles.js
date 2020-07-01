import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Container = styled.div`
  box-sizing: border-box;
  color: ${prop('theme.colors.textColor')};
  padding: ${prop('theme.spacing.big')};
  margin: 0 auto;
  width: 95%;
  h3 {
    font-size: ${prop('theme.font.sizes.bigger')};
    margin-bottom: ${prop('theme.font.sizes.bigger')};
    text-align: center;
    ${prop('theme.font.family.title')};
    ${media.lessThan('tablet')`
      font-size: 19px;
    `}
  }
`

export const FormContainer = styled.form`
  width: 80%;
  margin: 0 auto;
  margin-top: ${prop('theme.spacing.big')};
  text-align: left;
  
  content-button: {
    margin: auto auto;
  }
`

export const ContentButton = styled.div`
  text-align: center;
  ${prop('theme.font.family.title')}
`

export const SelectContainer = styled.div`
  margin-bottom: ${prop('theme.spacing.big')};
  position: relative;
  select {
    height: 30px;
    width: 100%;
  }
`

export const AddressInput = styled.div`
  position: relative;
  input {
    border: 1px solid #979797;
    box-sizing: border-box;
    height: 30px;
    padding: 0 ${prop('theme.spacing.small')};
    width: 100%;
  }
  button {
    background: ${prop('theme.colors.main')};
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 30px;
    width: 30px;
  }
`
export const FieldContainer = styled.div`
  input {
    border: 1px solid #979797;
    box-sizing: border-box;
    height: 30px;
    padding: 0 ${prop('theme.spacing.small')};
    width: 100%;
  }
  margin-bottom: 13px
`
