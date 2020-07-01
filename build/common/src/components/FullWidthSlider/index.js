import React from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-slick'

import { Button } from '../'
import Link from 'next/link'

import { Slide, Info, Title, Description } from './styles'

const settings = {
  dots: true,
  arrows: true,
  accessibility: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const TheTitle = ({ text }) => <Title>{text}</Title>
const TheDescription = ({ text }) => <Description>{text}</Description>

function FullWidthSlider({ slides }) {
  return (
    <Slider {...settings}>
      {slides.map(slide => (
        <Slide key={slide.id} image={slide.image}>
          <Info>
            <TheTitle text={slide.name} />
            {parseInt(process.env.BRAND_ID) === 1 ?
              <TheTitle text={slide.description} /> : <TheDescription text={slide.description} />
            }
            <Button asLink>
              <Link href={slide.link.replace("https:", "")}>
                <a>{slide.callToActionText}</a>
              </Link>
            </Button>
          </Info>
        </Slide>
      ))}
    </Slider>
  )
}

FullWidthSlider.propTypes = {
  slides: PropTypes.array.isRequired
}

export default FullWidthSlider
