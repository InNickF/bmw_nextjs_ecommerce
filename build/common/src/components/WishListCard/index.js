import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from 'styled-components'

import { Button, InPartLoading, Icon } from '../'
import { Link } from '../../routes/bmw'

import {
  Card,
  Content,
  ImageContainer,
  Info,
  InMobileGoToProduct,
  RemoveButton,
  Buttons
} from './styles'
import { priceFormatter } from '../../helpers'

class WishListCard extends React.Component {
  render() {
    const { item, remove, isLoading, theme } = this.props

    if (!item.product) {
      return null
    }

    return (
      <Card>
        <div className="description">
          <InMobileGoToProduct>
            <Link href={`/producto/${item.product.slug}`}>
              <a />
            </Link>
          </InMobileGoToProduct>
        </div>
        <RemoveButton onClick={remove}>
          <Icon name='garbage' fill={theme.colors.darkgray} />
        </RemoveButton>
        <Content>
          <ImageContainer>
            <img
              src={item.product.imageProducts.length ? item.product.imageProducts[0].image : ''}
              alt={item.product.name}
            />
          </ImageContainer>
          <Info>
            <h4>{item.product.name}</h4>
            <p>SKU: {item.product.sku}</p>
            <p className="price">{priceFormatter(item.product.price)}</p>
          </Info>
          <Buttons>
            <button>
              <Link href={`/producto/${item.product.slug}`}>
                <a>
                  <Icon
                    name='eye'
                    fill={theme.colors.mainAccentText}
                    height={22}
                    width={22}
                  />
                  <span> VER PRODUCTO </span>
                </a>
              </Link>
            </button>
          </Buttons>
        </Content>
        <InPartLoading isLoading={isLoading} canAbsolute />
      </Card>
    )
  }
}

WishListCard.propTypes = {
  theme: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  remove: PropTypes.func.isRequired
}

export default withTheme(WishListCard)
