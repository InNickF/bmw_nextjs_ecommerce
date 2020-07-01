import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import LazyLoad from 'react-lazyload'

import { Link } from '../../routes/bmw'

import { Container, ImageContainer, SearchProductCardData } from './styles'

function SearchProductCard({
  slug,
  subCategory,
  stock,
  name,
  image,
  carCompatible,
  key,
  toggleSearch
}) {
  return (
    <Container className='search-product-card' key={key} onClick={() => toggleSearch(false)} >
      <Link route='product-detail' params={{ slug: slug }}>
        <a >
          <ImageContainer>
            <LazyLoad debounce={200}>
              <div className='animated fadeIn'>
                <img
                  src={
                    image || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
                  }
                  alt={name}
                />
              </div>
            </LazyLoad>
          </ImageContainer>
          <SearchProductCardData>
            <h2>{name}</h2>
            <p>{subCategory}</p>
            <small>{stock ? 'En stock' : 'Lo sentimos, el producto que seleccionaste no está disponible'}</small>
            <p className="search-product-compatible">{carCompatible ? carCompatible + ' vehículos compatibles' : ''}</p>
          </SearchProductCardData>
        </a>
      </Link>
    </Container>
  )
}

SearchProductCard.propTypes = {
  slug: PropTypes.string.isRequired,
  subCategory: PropTypes.string,
  stock: PropTypes.bool,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  carCompatible: PropTypes.number
}

export default withTheme(SearchProductCard)
