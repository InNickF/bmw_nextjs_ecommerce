import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import LazyLoad from 'react-lazyload'
import { priceFormatter, capitalize } from '../../helpers'

import { Link } from "../../routes/bmw";


import {
  Container, ImageContainer, Title, Tag, Price, PriceDiscount, ProductCardData, ColorSquares, ProductCardDataResponsive,
  TireCard, TireDataContent, TireDataText, TireData, TireDataPrice, TireBrand, TireBuyActionContent, TireBuyActions, ButtonBuyCar, TireTotal
} from './styles'
import { ColorSquare } from '../CollapsibleItems/styles'
import { colorsPicker } from '../../constants/products'
import capitalizeBrands from '../../helpers/capitalizeBrands'
import { CountContent, ContentCount, IconStyle } from '../ProductDetail/styles'

function getUnique(arr, comp) {

  const unique = arr
    .map(e => e[comp])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);
  return unique;
}


function ProductCardTire({
  slug,
  discountPercentage,
  initDateDiscount,
  endDateDiscount,
  name,
  image,
  price,
  brand,
  type,
  productCategory,
  skuVariations,
  i,
  color,
  hexArray,
  stock,
  width,
  high,
  scale,
  addProductToCart,
  product
}) {

  const [count, setCount] = useState(1);
  const today = new Date();
  const initDis = new Date(initDateDiscount);
  const endDis = new Date(endDateDiscount);
  const isDiscountAvalidable = today >= initDis && today <= endDis;
  const priceAvalidable = Math.round(isDiscountAvalidable ? (price / (1 - (discountPercentage / 100))) : price);
  const size = `${width}/${high} ${scale}`

  return (
    <Container >
      <Link route='product-detail' params={{ slug: slug }}>
        <TireCard className="hover-card">
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
          <TireDataContent>
            <TireDataText className="cardTire-title"><p>{name}</p></TireDataText>
            <TireData>
              <TireDataPrice>
                <p>Precio</p>
                {isDiscountAvalidable &&
                  <PriceDiscount>
                    {priceFormatter(priceAvalidable)}
                  </PriceDiscount>}
                <p>{priceFormatter(price)}</p>
              </TireDataPrice>
              <TireDataPrice>
                <p>Medidas</p>
                <p>{size}</p>
              </TireDataPrice>
            </TireData>
          </TireDataContent>
          <TireBrand className="hover-brand">
            <img src={brand} alt={name} />
            <p>{type}</p>
          </TireBrand>
          <TireBuyActionContent className="hover-data">
            <TireBuyActions>
              <CountContent>
                <ContentCount>
                  <div
                    className={`${count === 1 ? "disabled-style" : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (count - 1 > 0) {
                        return setCount(count - 1)
                      }
                      return null
                    }}
                  >
                    <IconStyle
                      name='minus-square-button'
                      width={18}
                      height={18}
                      stroke={process.env.BRAND_ID == 1 ? 'black' : 'black'}
                      fill={process.env.BRAND_ID == 1 ? 'white' : 'white'}
                    />
                  </div>
                  <div>{count}</div>
                  <div
                    className={`${stock === count ? "disabled-style" : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (stock >= count + 1) {
                        return setCount(count + 1)
                      }
                      return null
                    }}
                  >
                    <IconStyle
                      name='add-square-button'
                      width={18}
                      height={18}
                      stroke={process.env.BRAND_ID == 1 ? 'black' : 'black'}
                      fill={process.env.BRAND_ID == 1 ? 'white' : 'white'}
                    />
                  </div>
                </ContentCount>
              </CountContent>
              <ButtonBuyCar onClick={(e) => {
                e.stopPropagation();
                addProductToCart(count, product);
              }}>
                <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.36903 18C6.80815 18 6.27024 17.7629 5.87363 17.341C5.47703 16.919 5.25422 16.3467 5.25422 15.75C5.25422 15.1533 5.47703 14.581 5.87363 14.159C6.27024 13.7371 6.80815 13.5 7.36903 13.5C7.92991 13.5 8.46782 13.7371 8.86442 14.159C9.26102 14.581 9.48383 15.1533 9.48383 15.75C9.48383 16.3467 9.26102 16.919 8.86442 17.341C8.46782 17.7629 7.92991 18 7.36903 18ZM14.7708 18C14.21 18 13.6721 17.7629 13.2755 17.341C12.8789 16.919 12.656 16.3467 12.656 15.75C12.656 15.1533 12.8789 14.581 13.2755 14.159C13.6721 13.7371 14.21 13.5 14.7708 13.5C15.3317 13.5 15.8696 13.7371 16.2662 14.159C16.6628 14.581 16.8857 15.1533 16.8857 15.75C16.8857 16.3467 16.6628 16.919 16.2662 17.341C15.8696 17.7629 15.3317 18 14.7708 18ZM0.984429 2.16337C0.720461 2.15432 0.470152 2.03638 0.286436 1.83452C0.102719 1.63265 0 1.36268 0 1.08169C0 0.800698 0.102719 0.530724 0.286436 0.328857C0.470152 0.12699 0.720461 0.00905829 0.984429 0H2.2015C3.15528 0 3.98005 0.70425 4.1873 1.69425L5.51223 8.0415C5.71948 9.0315 6.54425 9.73575 7.49803 9.73575H15.4412L16.966 3.2445H7.08459C6.8231 3.2318 6.57628 3.11236 6.39546 2.911C6.21464 2.70964 6.11373 2.44186 6.11373 2.16337C6.11373 1.88489 6.21464 1.61711 6.39546 1.41575C6.57628 1.21439 6.8231 1.09494 7.08459 1.08225H16.966C17.2751 1.08215 17.5802 1.15704 17.858 1.30121C18.1359 1.44539 18.3791 1.65506 18.5694 1.91428C18.7596 2.17351 18.8918 2.47546 18.9558 2.7972C19.0199 3.11893 19.0142 3.45197 18.9391 3.771L17.4144 10.26C17.3044 10.7282 17.0505 11.1439 16.693 11.4409C16.3355 11.7379 15.8948 11.8992 15.4412 11.8991H7.49803C6.57259 11.8993 5.67478 11.5636 4.95288 10.9475C4.23098 10.3314 3.72816 9.4718 3.52748 8.51062L2.2015 2.16337H0.984429Z" fill="white" />
                  <path d="M29.791 9.22461H31.9062V10.7539H29.791V13.1445H28.1797V10.7539H26.0586V9.22461H28.1797V6.93359H29.791V9.22461Z" fill="white" />
                </svg>
              </ButtonBuyCar>
            </TireBuyActions>
            <TireTotal>
              <p>{priceFormatter(price * count)}</p>
            </TireTotal>
          </TireBuyActionContent>
        </TireCard>
      </Link>
    </Container>
  )
}

ProductCardTire.propTypes = {
  slug: PropTypes.string.isRequired,
  tagText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired
}

export default withTheme(ProductCardTire)
