import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { Icon } from '../'

import { priceFormatter } from '../../helpers'

import { RecommendedProductsContainer, ListProducts, ProductData, RecommendedProductCard, ProductPrices, ProductInfo } from './styles'
import Link from 'next/link'

function isDiscountAvalidable(initDateDiscount, endDateDiscount) {
  const today = new Date();
  const initDis = new Date(initDateDiscount);
  const endDis = new Date(endDateDiscount);
  return today >= initDis && today <= endDis;
}

function priceAvalidable(price, discountPercentage) {
  return Math.round(price / (1 - (discountPercentage / 100)));
}

function RecommendedProducts({ products }) {
  return (
    <RecommendedProductsContainer>
      <h2>Recomendaciones</h2>
      <ListProducts>
        {products.map((product, i) => (
          i < 6 &&
          <RecommendedProductCard key={i}>
            <img
              src={
                product.image || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
              }
              alt={product.name}
            />
            <ProductInfo>
              <p>{product.name}</p>
              <p>{product.subcategory || 'Subcategory'}</p>
            </ProductInfo>
            <ProductData>
              <ProductPrices>
                {!isDiscountAvalidable(product.endDateDiscount, product.initDateDiscount) && <p className="discount">{priceFormatter(priceAvalidable(product.price, product.discountPercentage))}</p>}
                <p className="price-total">{priceFormatter(product.price)}</p>
              </ProductPrices>
              <button> <Icon name='cart' width={27} height={20} /> + </button>
            </ProductData>
          </RecommendedProductCard>
        )
        )}
      </ListProducts>
    </RecommendedProductsContainer>
  )
}

export default withTheme(RecommendedProducts)
