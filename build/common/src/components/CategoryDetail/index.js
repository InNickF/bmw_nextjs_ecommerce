import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { ProductCard, Icon } from '..'

import { Container, CategoryBanner, CategoryListProduct, CategoryData, CategoryDescription } from './styles'
import { Link } from '../../routes/bmw';
import { Price } from '../ProductCard/styles'
import { priceFormatter } from '../../helpers'

function getImage(product) {
  if (product.image) return product.image
  if (product.imageProducts && product.imageProducts[0]) {
    return product.imageProducts[0].image
  }

  return 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
}

function CategoryProductCard({ slug,
  discountPercentage,
  initDateDiscount,
  endDateDiscount,
  name,
  productCategory,
  image,
  price }) {
  const today = new Date();
  const initDis = new Date(initDateDiscount);
  const endDis = new Date(endDateDiscount);
  const isDiscountAvalidable = today >= initDis && today <= endDis;
  const priceAvalidable = Math.round(isDiscountAvalidable ? (price / (1 - (discountPercentage / 100))) : price);
  return (
    <Link route="product-detail" params={{ slug: slug }}  >
      <a className="category-product-card">
        <img
          src={
            image || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
          }
          alt={name}
        />
        <div className="category-content-name">
          <p>{name}</p>
          <p>{productCategory.name}</p>
        </div>
        <div className="category-content-price">
          {isDiscountAvalidable && <p className="category-content-price--discount">{priceFormatter(priceAvalidable)}</p>}
          <p>{priceFormatter(price)}</p>
        </div>
      </a>
    </Link >
  )
}

class CategoryDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { products, categoryCurrent } = this.props
    return (
      <Container>
        <>
          <CategoryBanner>
            <img
              src={
                categoryCurrent.img || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
              } />
            <CategoryData className="reverse-data">
              <Link route="products" params={{ c: categoryCurrent.id, level: categoryCurrent.level }}  >
                <a className="cta-bold">Ver más &nbsp; <span>{categoryCurrent.label && categoryCurrent.label.split(/\s/)[0]}</span></a>
              </Link>
              <div style={{ width: '50%' }} />
              <CategoryDescription>{categoryCurrent.description}</CategoryDescription>
            </CategoryData>
          </CategoryBanner>
          <CategoryListProduct>
            {products.map((product, i) =>
              i < 6 &&
              <CategoryProductCard
                key={product.id}
                {...product}
                image={getImage(product)}
              />
            )}
          </CategoryListProduct>
        </>
      </Container>
    )
  }
}

CategoryDetail.propTypes = {
  products: PropTypes.array.isRequired
}

export default withTheme(CategoryDetail)
