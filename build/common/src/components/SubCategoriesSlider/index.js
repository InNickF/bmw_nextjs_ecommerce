import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { Icon } from '../'

import { Container } from './styles'
import { Link } from '../../routes/bmw'
import Button from '../Button/styles'

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={`${className} next control`} onClick={onClick}>
      <Icon name='right-arrow' />
    </button>
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={`${className} prev control`} onClick={onClick}>
      <Icon name='right-arrow' />
    </button>
  );
}

function SubCategoryCard({ key, title, image, slug }) {
  return (
    <div key={key} className="subcategory-card">
      <Link route={slug.route} params={slug.params}>
        <a>
          <img
            src={
              image || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
            }
            alt={title}
          />
          <div>
            {parseInt(process.env.BRAND_ID) !== 2 && <Icon name='right-arrow' />}
            <span style={{ textTransform: "capitalize" }}>{title}</span>
          </div>
        </a>
      </Link>
    </div >
  )
}

class ProductsSlider extends React.Component {
  constructor(props) {
    super(props)
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
    /* const { products } = this.props */
    const products = [
      [{
        title: "Make life a ride",
        route: {
          route: "products",
          params: { c: "lifestyle", level: "1" }
        },
        image: "https://autogermana.s3.us-west-1.amazonaws.com/admin/images/image-cards/4motorrad1.WEBP"
      },
      {
        url: "https://bmwshop.autogermana.com.co/productos?c=accesorios&level=1",
        title: "Comodidad y seguridad.",
        route: {
          route: "products",
          params: { c: "accesorios", level: "1" }
        },
        image: "https://autogermana.s3.us-west-1.amazonaws.com/admin/images/image-cards/5motorrad2.WEBP"
      },
      {
        title: "Cascos",
        route: {
          route: "products",
          params: { q: "casco" }
        },
        image: "https://res.cloudinary.com/cacaotics/image/upload/v1580503084/Rectangle_49.png"
      },
      {
        title: "Tapas",
        route: {
          route: "products",
          params: { q: "tapas" }
        },
        image: "https://res.cloudinary.com/cacaotics/image/upload/v1580503089/Rectangle_50.png"
      },
      {
        title: "Gafas",
        route: {
          route: "products",
          params: { q: "gafas" }
        },
        image: "https://autogermana.s3.us-west-1.amazonaws.com/admin/images/image-cards/18.png"
      },
      {
        title: "Accesorios BMW",
        route: {
          route: "products",
          params: { c: "accesorios", level: "1" }
        },
        image: "https://autogermana.s3.us-west-1.amazonaws.com/admin/images/image-cards/10bmw2.WEBP"
      }
      ],
      [{
        descriptionShort: "Bolsos",
        title: "Bolsos y equipaje",
        route: {
          route: "products",
          params: { c: "maletas", level: 3, parentId: 5839 }
        },
        image: "https://res.cloudinary.com/cacaotics/image/upload/v1580690800/bolso.png"
      },
      {
        title: "MINI 60 años",
        route: {
          route: "products",
          params: { colection: "mini 60 años" }
        },
        image: "https://res.cloudinary.com/cacaotics/image/upload/v1580690998/fashion.png"
      },
      {
        title: "Adhesivos para techo",
        route: {
          route: "products",
          params: { q: "techo" }
        },
        image: "https://res.cloudinary.com/cacaotics/image/upload/v1580691506/techo.png"
      },
      {
        title: "Faros adicionales",
        route: {
          route: "products",
          params: { q: "luces" }
        },
        image: "https://res.cloudinary.com/cacaotics/image/upload/v1580696621/luces.png"
      },
      {
        title: "Accesorios JCW",
        route: {
          route: "products",
          params: { c: "accesorios", level: "3", parentId: 5900 }
        },
        image: "https://res.cloudinary.com/cacaotics/image/upload/v1580696830/6mini2.jpg"
      },
      {
        route: {
          route: "products",
          params: { c: "camisetas", level: 2, parentId: 5322 }
        },
        title: "MINI Collection",
        image: "https://autogermana.s3.us-west-1.amazonaws.com/admin/images/image-cards/7mini1.WEBP"
      }],
      [{
        descriptionShort: "Bolsos",
        brandId: 3,
        section: "home",
        position: "bottom",
        updatedAt: "2019-07-04T15:35:54.461Z",
        callToAction: "Ver más",
        url: "https://bmwshop.autogermana.com.co/productos?c=lifestyle&level=1",
        title: "Bolsos y equipaje",
        type: "card",
        id: 9,
        createdAt: "2018-12-05T17:07:58.840Z",
        route: {
          route: "products",
          params: {
            c: "maletas",
            level: 3,
            parentId: 5794
          }
        },
        image: "https://autogermana.s3.us-west-1.amazonaws.com/admin/images/image-cards/17.png"
      },
      {
        descriptionShort: "Diseñados a su medida",
        brandId: 3,
        section: "home",
        position: "bottom",
        updatedAt: "2019-07-04T15:36:28.997Z",
        callToAction: "Ver más",
        url: "https://bmwshop.autogermana.com.co/productos?c=accesorios&level=1",
        title: "Gafas",
        type: "card",
        id: 10,
        route: {
          route: "products",
          params: { q: "gafas" }
        },
        createdAt: "2018-12-05T17:09:38.245Z",
        image: "https://autogermana.s3.us-west-1.amazonaws.com/admin/images/image-cards/18.png"
      },
      {
        descriptionShort: "Llaves",
        brandId: 3,
        section: "home",
        position: "bottom",
        updatedAt: "2019-07-04T15:35:54.461Z",
        callToAction: "Ver más",
        url: "https://bmwshop.autogermana.com.co/productos?c=lifestyle&level=1",
        title: "Llaves",
        route: {
          route: "products",
          params: {
            c: "estuche-para-llaves",
            level: 3,
            parentId: 5808
          }
        },
        type: "card",
        id: 9,
        createdAt: "2018-12-05T17:07:58.840Z",
        image: "https://autogermana.s3.us-west-1.amazonaws.com/admin/images/image-cards/19.png"
      },
      {
        descriptionShort: "Deportividad exclusiva",
        brandId: 3,
        section: "home",
        position: "bottom",
        updatedAt: "2019-07-04T15:35:54.461Z",
        callToAction: "Ver más",
        url: "https://bmwshop.autogermana.com.co/productos?c=lifestyle&level=1",
        title: "Golfsport",
        route: {
          route: "products",
          params: { colection: "Golfsport" }
        },
        type: "card",
        id: 9,
        createdAt: "2018-12-05T17:07:58.840Z",
        image: "https://autogermana.s3.us-west-1.amazonaws.com/admin/images/image-cards/9bmw.WEBP"
      },
      {
        descriptionShort: "Diseñados a su medida",
        brandId: 3,
        section: "home",
        position: "bottom",
        updatedAt: "2019-07-04T15:36:28.997Z",
        callToAction: "Ver más",
        url: "https://bmwshop.autogermana.com.co/productos?c=accesorios&level=1",
        title: "Accesorios BMW",
        route: {
          route: "products",
          params: { c: "accesorios", level: "1" }
        },
        type: "card",
        id: 10,
        createdAt: "2018-12-05T17:09:38.245Z",
        image: "https://autogermana.s3.us-west-1.amazonaws.com/admin/images/image-cards/10bmw2.WEBP"
      },
      {
        descriptionShort: "Diseñados a su medida",
        brandId: 3,
        section: "home",
        position: "bottom",
        updatedAt: "2019-07-04T15:36:28.997Z",
        callToAction: "Ver más",
        url: "https://bmwshop.autogermana.com.co/productos?c=accesorios&level=1",
        route: {
          route: "products",
          params: { q: "rines" }
        },
        title: "Rines",
        type: "card",
        id: 10,
        createdAt: "2018-12-05T17:09:38.245Z",
        image: "https://autogermana.s3.us-west-1.amazonaws.com/admin/images/image-cards/20.png"
      }]
    ];
    const settings = {
      dots: false,
      infinite: false,
      speed: 800,
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1120,
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
    const brandId = process.env.BRAND_ID - 1;
    return (
      <Container>
        <Slider {...settings} ref={el => (this.slider = el)}>
          {products[brandId].map((product, i) =>
            <SubCategoryCard
              key={i}
              title={product.title}
              slug={product.route}
              image={product.image}
            />
          )}
        </Slider>
      </Container >
    )
  }
}

ProductsSlider.propTypes = {
  products: PropTypes.array.isRequired
}

export default withTheme(ProductsSlider)
