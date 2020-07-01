import styled, { css } from 'styled-components'
import { prop, switchProp, ifProp } from 'styled-tools'
import { withDynamicTag } from '../../../hocs'
import media from '../../themes/media'

export const Card = withDynamicTag(
  styled.div`
    cursor:pointer;
    background: url(${prop('bgImage')}) no-repeat;
    background-size: cover;
    background-size: center;
    background-position: left;
    box-sizing: border-box;
    display: block;
    position: relative;
    height: 100%;
    text-decoration: none;
    width: 100%;
    transition: all ease 0.6s;
    &:hover {
      background-position: right;
    }
    ${media.lessThan('tablet')`
      transition: none;
      background-position: center;
      &:hover{
        background-position: center;
      }
    `}
    ${switchProp('type', {
    event: css`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    `,
    card: css`
        display: flex;
        position: relative;
        flex-direction: column;
        ${switchProp('position', {
      bottom: css`
            justify-content: flex-end;
    `,
      top: css`
            justify-content: flex-start;
    `
    })}
    `,
    flatcard: css`
        background-size: 60%;
        background-position: center center;
        box-shadow: 0 2px 34px 0 rgba(225, 225, 225, 0.5);
        &:hover {
          background-position: center center;
        }
        ${media.greaterThan('tablet')`
          background-size: 80%;
  `}
    `,
    sentence: css`
        display: flex;
        align-items: center;
        font-size: 0.8em;
    `,
    post: css`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        ${media.greaterThan('tablet')`
          display: block;
  `}
    `
  })}
  `
)

export const TitleContainer = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  box-sizing: border-box;
  color: ${prop('theme.colors.mainAccentText')};
  ${switchProp('type', {
  event: css`
      margin: 0 auto;
      width: 100%;
    `,
  card: css`
      ${switchProp('position', {
    bottom: css`
          margin-bottom: 2rem;
    `,
    top: css`
          margin-top: ${prop('theme.spacing.huge')};
    `
  })}
    `,
  flatcard: css`
      color: ${prop('theme.colors.textColor')};
      box-sizing: border-box;
      margin: 0 auto;
      width: 100%;
    `,
  sentence: css`
      margin-left: 10%;
      width: 80%;
      position: relative;
      font-size: ${prop('theme.font.sizes.bigTitle')};
      font-size: 2em;

      &:before {
        content: '“';
        position: absolute;
        left: -20px;
        top: -50px;
        font-size: 2.5em;
        height: 10px;
        width: 10px;
      }
      &:after {
        content: '“';
        transform: rotate(-180deg);
        position: absolute;
        right: -20px;
        bottom: -50px;
        font-size: 2.5em;
        height: 10px;
        width: 10px;
      }
      ${media.greaterThan('tablet')`
          margin-left: 0;
          width: 100%;
          font-size: 2em;
          &:before {
            top: -60px;
            font-size: 3em;
          }
          &:after {
            bottom: -60px;
            font-size: 3em;
          }
  `}
      ${media.greaterThan('medium')`
          margin-left: 0;
          width: 100%;
          font-size: 2.5em;
          &:before {
            left: -10px;
            top: -65px;
            font-size: 3em;
          }
          &:after {
            right: -10px;
            bottom: -65px;
            font-size: 3em;
          }
  `}
    `,
  post: css`
      width: 60%;
      ${media.greaterThan('tablet')`
        width: 100%;
  `}
    `
})}

  ${media.greaterThan('tablet')`
    ${parseInt(process.env.BRAND_ID) === 2 && `margin-top: 40px;`};   
  `}


  `

export const Title = styled.h3`
  ${ifProp(
  {
    'theme.name': 'bmw'
  },
  prop('theme.font.family.title')
)};
  ${switchProp('type', {
  event: css`
      font-size: ${prop('theme.font.sizes.bigger')};
      ${media.greaterThan('tablet')`
          font-size: ${prop('theme.font.sizes.bigTitle')};
  `}
    `,
  card: css`
      ${switchProp('position', {
    bottom: css`
          font-size: ${prop('theme.font.sizes.bigger')};
          ${media.greaterThan('tablet')`
            font-size: 2rem;
  `}
    `,
    top: css`
          ${prop('theme.font.family.condensed')};
          font-size: ${prop('theme.font.sizes.small')};
          font-weight: lighter;
    `
  })}
    `,
  flatcard: css`
      ${switchProp('position', {
    bottom: css`
          font-size: ${prop('theme.font.sizes.normal')};
    `,
    top: css`
          ${prop('theme.font.family.title')};
          font-weight: bold;
          font-size: ${prop('theme.font.sizes.big')};
    `
  })}
    `,
  post: css`
      text-align: right;
      ${media.greaterThan('tablet')`
        text-align: left;
        margin-bottom: ${prop('theme.spacing.bigger')};
        font-size: ${prop('theme.font.sizes.bigTitle')};
  `}
    `
})}
  `
export const SubTitle = styled.h4`
  ${switchProp('type', {
  event: css`
      
      ${ifProp(
    {
      'theme.name': 'bmw'
    },
    prop('theme.font.family.title')
  )};
      font-size: ${prop('theme.font.sizes.small')};
      font-weight: lighter;
    `,
  card: css`
      ${switchProp('position', {
    bottom: css`
          
          ${ifProp(
      {
        'theme.name': 'bmw'
      },
      prop('theme.font.family.title')
    )};
          font-size: ${prop('theme.font.sizes.small')};
          font-weight: lighter;
    `,
    top: css`
          ${prop('theme.font.family.title')};
          ${ifProp(
      {
        'theme.name': 'bmw'
      },
      prop('theme.font.family.title')
    )};
          font-size: ${prop('theme.font.sizes.bigger')};
          ${media.greaterThan('tablet')`
              font-size: ${prop('theme.font.sizes.bigTitle')};
  `}
    `
  })}
    `,
  flatcard: css`
      ${switchProp('position', {
    bottom: css`
          ${prop('theme.font.family.title')};
          ${ifProp(
      {
        'theme.name': 'bmw'
      },
      prop('theme.font.family.title')
    )};
          font-size: ${prop('theme.font.sizes.big')};
          font-weight: bold;
    `,
    top: css`
          font-size: ${prop('theme.font.sizes.normal')};
          ${ifProp(
      {
        'theme.name': 'bmw'
      },
      prop('theme.font.family.title')
    )};
    `
  })}
    `,
  post: css`
      display: none;
      
      ${ifProp(
    {
      'theme.name': 'bmw'
    },
    prop('theme.font.family.title')
  )};
      font-size: ${prop('theme.font.sizes.small')};
      font-weight: lighter;
      width: 50%;
      ${media.greaterThan('tablet')`
        display: block;
  `}
    `
})}
  `

export const ButtonContainer = styled.div`
  ${switchProp('type', {
  sentence: css`
      display: none;
    `,
  event: css`
      margin-top: ${prop('theme.spacing.small')};
      margin-bottom: ${prop('theme.spacing.huge')};
      button {
        margin-left: ${prop('theme.spacing.big')};
        ${prop('theme.font.family.title')};
        ${ifProp(
    {
      'theme.name': 'bmw'
    },
    prop('theme.font.family.bold')
  )};
        width: 60%;
        height: 50px;
      }
    `,
  card: css`
      position: absolute;
      bottom: -15px;
      right: 5%;
      button {
        ${prop('theme.font.family.title')};
        ${ifProp(
    {
      'theme.name': 'bmw'
    },
    prop('theme.font.family.bold')
  )};
        font-size: ${prop('theme.font.sizes.small')};
        text-transform: uppercase;
        width: 114px;
      }
    `,
  post: css`
      button {
        ${prop('theme.font.family.title')};
        ${ifProp(
    {
      'theme.name': 'bmw'
    },
    prop('theme.font.family.bold')
  )};
      }
      ${media.greaterThan('tablet')`
        position: absolute;
        bottom: 40px;
        right: 40px;
  `}
    `
})}
  `
