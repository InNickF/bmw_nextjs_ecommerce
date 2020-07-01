import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import LazyLoad from 'react-lazyload'
import { priceFormatter } from '../../helpers'

import { Link } from "../../routes/bmw";


import { Container, ImageContainer, Title, Tag, Price, PriceDiscount, ProductCardData, ColorSquares, ProductCardDataResponsive } from './styles'
import { ColorSquare } from '../CollapsibleItems/styles'

function getUnique(arr, comp) {

  const unique = arr
    .map(e => e[comp])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);

  return unique;
}


function ProductCardHome({
  slug,
  discountPercentage,
  initDateDiscount,
  endDateDiscount,
  name,
  image,
  price,
  productCategory,
  skuVariations,
  i
}) {
  const today = new Date();
  const initDis = new Date(initDateDiscount);
  const endDis = new Date(endDateDiscount);
  const isDiscountAvalidable = today >= initDis && today <= endDis;
  const priceAvalidable = Math.round(isDiscountAvalidable ? (price / (1 - (discountPercentage / 100))) : price);
  const colors = {
    NEGRO: {
      value: '#000000',
      title: 'Negro'
    },
    AZUL: {
      value: '#2468AF',
      title: 'Azul'
    },
    BLANCO: {
      value: '#FFFFFF',
      title: 'Blanco'
    },
    ROJO: {
      value: '#FF001F',
      title: 'Rojo'
    },
    GRIS: {
      value: '#9B9B9B',
      title: 'Gris'
    },
    CAFÉ: {
      value: '#8B572A',
      title: 'Café'
    },
    BEIGE: {
      value: '#FCDFC6',
      title: 'Beige'
    },
    VERDE: {
      value: '#388E3C',
      title: 'Verde'
    },
    NARANJA: {
      value: '#FF5722',
      title: 'Naranja'
    },
    'AZUL OSCURO': {
      value: '#182173',
      title: 'Azul Oscuro'
    },
    AMARILLO: {
      value: '#F8E71C',
      title: 'Amarillo'
    },
    'AMARILLO NEÓN': {
      value: '#F8E71C',
      title: 'Amarillo'
    },
    'MARRÓN CLARO': {
      value: '#CDA683',
      title: 'Marrón Claro'
    },
    'GRIS OSCURO': {
      value: '#4A4A4A',
      title: 'Gris Oscuro'
    },
    MULTICOLOR: {
      value: '#ffff',
      title: 'Multicolor',
      image: true
    },
    BRONCE: {
      value: '#cd7f32',
      title: 'Bronce',
      image: true
    },
    COBRE: {
      value: '#763c28',
      title: 'Cobre',
      image: true
    },
    PLATEADO: {
      value: '#e3e4e5',
      title: 'Plateado',
      image: true
    }
  };
  return (
    <Container >
      <Link route='product-detail' params={{ slug: slug }}>
        <a className='product-card'>
          <ImageContainer>
            {isDiscountAvalidable &&
              <Tag>{discountPercentage}% off</Tag>
            }
            <img
              src={
                image || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
              }
              alt={name}
            />
          </ImageContainer>
          <ProductCardData>
            <div className="product-card-text">
              <h2>{name}</h2>
              {isDiscountAvalidable &&
                <PriceDiscount>
                  {priceFormatter(priceAvalidable)}
                </PriceDiscount>}
            </div>
            <div className="product-card-prices">
              <p>{productCategory && productCategory.name}</p>
              <Price>{priceFormatter(price)}</Price>
            </div>
          </ProductCardData>
          <div className="hover-data">
            <ColorSquares>
              {skuVariations && getUnique(skuVariations, 'color').map((color, i) => {
                return color.color && colors[color.color] &&
                  <ColorSquare color={colors[color.color].value} key={i} bordered={colors[color.color].value == '#FFFFFF' || colors[color.color].value === 'white'} />
              }
              )}
            </ColorSquares>
          </div>
        </a>
      </Link>
    </Container >
  )
}

ProductCardHome.propTypes = {
  slug: PropTypes.string.isRequired,
  tagText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired
}

export default withTheme(ProductCardHome)
