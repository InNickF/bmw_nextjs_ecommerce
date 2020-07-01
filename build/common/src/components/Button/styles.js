import styled, { css } from 'styled-components'
import { prop, ifProp, ifNotProp, switchProp } from 'styled-tools'
import { shade } from 'polished'
import { media } from '../../..'

const Button = styled.button`
  background: transparent;
  margin: ${prop('theme.alignment.horizontalCenter')};
  margin-top: 0.6rem;
  position: relative;
  outline: none;
  cursor: pointer;
  min-width: 140px;
  padding: 0.6rem 2rem;
  ${props => props.theme.transition.fast};
  :hover {
    background: ${props => shade(0.8, props.theme.colors.main)};
    color: ${shade(0.9, 'white')};
  }
  ${ifNotProp(
  'asLink',
  css`
      background: ${process.env.APP_NAME != 'motorrad' ? prop('theme.colors.main') : prop('theme.colors.second')};
      box-sizing: border-box;
      color:  ${process.env.APP_NAME != 'motorrad' ? prop('theme.colors.mainAccentText') : prop('theme.colors.white')}; 
      padding: 0.6rem 2rem;
      :hover {
        background-color: ${prop('theme.colors.second')};
        color: ${prop('theme.colors.secondAccentText')};
      }
      ${ifProp(
    'gray',
    css`
          background: ${prop('theme.colors.gray')};
          &:hover {
            background: ${prop('theme.colors.darkgray')};
          }
        `
  )};
  ${ifProp(
    'compatibility',
    css`
          background: #F8F8F8;
          color: #898989;
          width:100%;
          font-size: 14px;
          margin: 0 0 20px;
          box-shadow: none;
        `
  )};
    `
)} &:active {
    transform: scale(0.9);
  }
  ${prop('customStyle')};
  ${ifProp(
  'condensed',
  css`
      font-size: ${prop('theme.font.sizes.small')};
      ${prop('theme.font.family.condensed')};
    `
)};
  ${ifProp(
  'white',
  css`
      background: white;
      color: ${props => process.env.APP_NAME != 'motorrad' ? props.theme.colors.main : props.theme.colors.second} ;
      border: 1px solid ${props => process.env.APP_NAME != 'motorrad' ? props.theme.colors.main : props.theme.colors.second} ;
      &:hover {
        background: ${props => props.theme.colors.main};
        color:  ${props => process.env.APP_NAME != 'motorrad' ? 'white' : props.theme.colors.second} ;;
      }
      ${process.env.APP_NAME == 'motorrad' ? `
      &:last-child svg {
        fill: #000000;
      }`: ''}
    `
)};
${
  ifProp(
    'asLink',
    css`
      border: 0;
      height: 38px;
      padding: 0;
      a {
        background: ${prop('theme.colors.main')};
        box-sizing: border-box;
        color: ${prop('theme.colors.mainAccentText')};
        padding: 0.6rem 2rem;
        text-decoration: none;

        ${prop('theme.font.family.condensed')}
        &:hover {
          background: ${prop('theme.colors.second')};
          color: ${prop('theme.colors.secondAccentText')};
        }
        ${ifProp(
      'gray',
      css`
            background: ${prop('theme.colors.gray')};
            &:hover {
              background: ${prop('theme.colors.darkgray')};
            }
          `
    )};
      }
    `
  )
  } ${
  switchProp('buttonType', {
    line: css`
      ${ifNotProp(
      'asLink',
      css`
          background: transparent;
          border: 2px solid ${prop('theme.colors.main')};
          color: ${prop('theme.colors.main')};
          font-weight: bolder;
          &:hover {
            background: ${prop('theme.colors.main')};
            color: ${prop('theme.colors.mainAccentText')};
          }
          path{
          ${parseInt(process.env.BRAND_ID) !== 3 && 'fill: #000000'};
          }
          ${ifProp(
        'thinBorder',
        css`
              border-width: thin;
            `
      )};
        `
    )}
      ${ifProp(
      'asLink',
      css`
          border: 0;
          height: 38px;
          a {
            background: transparent;
            border: 2px solid ${prop('theme.colors.main')};
            color: ${prop('theme.colors.main')};
            font-weight: bolder;
            &:hover {
              background: ${prop('theme.colors.main')};
              color: ${prop('theme.colors.mainAccentText')};
            }
          }

          ${ifProp(
        'thinBorder',
        css`
              border-width: thin;
            `
      )};
        `
    )} ${ifProp(
      'asLink',
      css`
        a {
          background: transparent;
          border: 2px solid ${prop('theme.colors.main')};
          color: ${prop('theme.colors.main')};
          font-weight: bolder;
          &:hover {
            background: ${prop('theme.colors.main')};
            color: ${prop('theme.colors.mainAccentText')};
          }
          ${ifProp(
        'thinBorder',
        css`
              border-width: thin;
            `
      )};
        }
      `
    )};
  `
  })
  }

${media.lessThan('tablet')`
  height: 50px;
`};


`

export default Button
