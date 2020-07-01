import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { ProductCard, Icon, ProductCardHome } from '../'

import { Container, CardNoProducts } from './styles'
import Link from 'next/link'

function getImage(product) {
  if (product.image) return product.image
  if (product.imageProducts && product.imageProducts[0]) {
    return product.imageProducts[0].image
  }

  return 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
}

class ProductsSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProducts: 3
    },
      this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }
  next() {
    this.slider.slickNext()
  }

  prev() {
    this.slider.slickPrev()
  }
  render() {
    const { products, title, bkgColor, home, dark, responsiveInline } = this.props
    const { showProducts } = this.state
    const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      autoplay: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1320,
          settings: {
            dots: false,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            dots: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    }
    return (
      <Container style={{ backgroundColor: bkgColor }} bkg={bkgColor} dark={dark}>
        {title && <h1 className={`${home ? 'content-home-header' : ''}`}>{title}</h1>}
        {products ? <div className={`${home ? 'slider-no-responsive content-home' : 'slider-no-responsive'} ${responsiveInline && 'responsive-inline'}`}>
          <Slider {...settings} ref={el => (this.slider = el)} arrows={false} mobileFirst={true} infinite={!(products.length < 4)}>
            {products.map((product, i) =>
              i < 10 &&
              (home ?
                <ProductCardHome
                  key={i}
                  {...product}
                  image={getImage(product)}
                /> :
                <ProductCard
                  key={i}
                  {...product}
                  image={getImage(product)}
                />)
            )}
          </Slider>
          <button className='prev control' onClick={this.prev}>
            <Icon name='right-arrow' />
          </button>
          <button className='next control' onClick={this.next}>
            <Icon name='right-arrow' />
          </button>
        </div> :
          <CardNoProducts>
            <h1>No se encontraron productos</h1>
          </CardNoProducts>
        }
        <div className={`${home ? 'slider-responsive content-home' : 'slider-responsive'} ${responsiveInline && 'responsive-inline-hide'}`}>
          {products.map((product, i) =>
            i < showProducts &&
            (home ? <ProductCardHome
              key={i}
              {...product}
              image={getImage(product)} /> :
              <ProductCard
                key={i}
                {...product}
                image={getImage(product)} />)
          )}
        </div>
        {home && (products.length >= 4) &&
          <div className="btn-see-more">
            <button onClick={() => this.setState({ showProducts: showProducts < products.length ? products.length : 3 })}>
              <a>{showProducts < products.length ? 'Ver todo' : 'Ver menos'}</a>
            </button>
          </div>
        }
      </Container>
    )
  }
}

ProductsSlider.propTypes = {
  products: PropTypes.array.isRequired
}

export default withTheme(ProductsSlider)
