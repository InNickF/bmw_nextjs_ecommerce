import styled from 'styled-components'
import { prop } from 'styled-tools'
import { media } from '../common'

export const Container = styled.div`
  border: thin solid ${prop('theme.colors.darkgray')};
  padding: ${prop('theme.spacing.big')};
  padding-left: ${prop('theme.spacing.huge')};
  padding-right: ${prop('theme.spacing.huge')};
  position: relative;
  .price {
    ${prop('theme.font.family.title')};
  }
  .inMobile {
    display: block;
  }
  ${media.greaterThan('tablet')`
    .inMobile {
      display: none;
    }
  `};
`

export const Detail = styled.div`
  border-bottom: thin solid ${prop('theme.colors.darkgray')};
  padding-top: ${prop('theme.spacing.big')};
  padding-bottom: ${prop('theme.spacing.big')};
  display: flex;
  .leftContent {
    width: 100%;
    display: flex;
    .image {
      margin-right: ${prop('theme.spacing.bigger')};
      width: 100px;
    }
    ${media.greaterThan('tablet')`
      width: 80%;
    `};
  }
  .rightContent {
    display: none;
    ${media.greaterThan('tablet')`
      display: flex;
      flex: 1;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    `};
  }
`

export const CouponContainer = styled.div`
  margin-top: ${prop('theme.spacing.big')};
  margin-bottom: ${prop('theme.spacing.big')};
  width: 350px;
  h3 {
    text-align: left;
  }
`

export const Totals = styled.div`
  padding-bottom: ${prop('theme.spacing.big')};
  margin-top: 1.6rem;
  margin-bottom: 2rem;
  .address {
    margin-bottom: ${prop('theme.spacing.bigger')};
  }
  .price {
    ${prop('theme.font.family.title')};
  }

  .coupon {
    color: #D0021A;
  }

  .totalRow {
    display: flex;
    justify-content: space-between;
    margin-top: ${prop('theme.spacing.small')};
  }
  .iva{
    span{
      ${prop('theme.font.family.condensed')};
      font-size: 0.7em;
    }
  }
  .total {
    margin-top: ${prop('theme.spacing.bigger')};
    .price {
      color: ${prop('theme.colors.main')};
    }
    span {
      ${prop('theme.font.family.condensed')};
      font-size: 0.7em;
    }
  }
`

export const LoaderContainer = styled.div`
  margin: 3rem auto;
  width: 50%;
`

export const ContainerItemsDeleted = styled.div`
  text-align: center;

  > h5 {
    ${prop('theme.font.family.title')};
    font-size: 1.5em;
  }

  > p {
    ${prop('theme.font.family.condensed')};
    font-size: 1.3em;
  }

  > h5, >p {
    text-align: center;
    margin: 20px 0px;
  }
`

export const ItemDeleted = styled.div`
  margin: 10px 0px;
  border: 1px solid ${prop('theme.colors.gray')};
  padding: 10px;
  text-align: left;

  img {
    width: 120px;
    display: inline-block;
    margin: 0px 20px;
  }

  div {
    display: inline-block;
    vertical-align: top;
    margin: 10px 0px;

    span {
      ${prop('theme.font.family.title')};
      font-size: 1.1em;
    }

    p {
      ${prop('theme.font.family.condensed')};
      margin: 10px 0px;
      font-size: 0.8em;
    }
  }
`
