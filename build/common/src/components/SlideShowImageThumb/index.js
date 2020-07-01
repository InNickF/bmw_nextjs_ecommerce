import React, { useState } from 'react';
import Slick from 'react-slick'
import PropTypes from 'prop-types'
import map from 'lodash/map'
//import ImageZoom from 'react-medium-image-zoom'
//import { ImageZoom } from 'react-simple-image-zoom';
import ReactImageZoom from 'react-image-zoom';



import {
  Container, ContentImgSlide, ContentImageSelect, ContentImageZoom
} from './styles'

const areEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.images) === JSON.stringify(nextProps.images)
};

const SlideShowImageThumb = React.memo(props => {
  const { images, name, height } = props
  const [imgId, setimgId] = useState(0);

  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <ContentImageSelect>
        {images.map((item, i) => (
          <div key={item.id} onClick={() => setimgId(i)}>
            <img
              src={
                item.image || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
              }
              alt={name}
            />
          </div>
        ))}
      </ContentImageSelect>
      <ContentImageZoom>
        <ReactImageZoom width={500} zoomWidth={650} img={images[imgId].image} />
        <p className='message'>
          En la imagen pueden aparecer otros productos o accesorios de
          ambientación que no se encuentran incluidos dentro del producto
          ofrecido.
            </p>
      </ContentImageZoom>
    </Container>
  )
}, areEqual)

SlideShowImageThumb.defaultProps = {
  height: '500px',
  name: undefined
}

SlideShowImageThumb.propTypes = {
  images: PropTypes.array.isRequired,
  height: PropTypes.string,
  name: PropTypes.string
}

export default SlideShowImageThumb
