import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from 'styled-components'
import { Button } from '../'
import { ellipsis } from '../../helpers'

import {
  Card,
  Content,
  ImageContainer,
  Detail,
  ButtonContainer,
  DateInfo
} from './styles'

function CardWithSideImage({
  image,
  title,
  summary,
  buttonContent,
  imageInRightSide,
  dateText
}) {
  return (
    <Card>
      <Content rightImage={imageInRightSide}>
        <ImageContainer>
          <img src={image} alt={title} />
        </ImageContainer>
        <Detail>
          <h3>{title + '.'}</h3>
          <div className='content'>{ellipsis(summary, 400)}</div>
          <DateInfo>{dateText}</DateInfo>
          <ButtonContainer>
            <Button asLink>{buttonContent}</Button>
          </ButtonContainer>
        </Detail>
      </Content>
    </Card>
  )
}

CardWithSideImage.defaultProps = {
  rightImage: false,
  dateText: ''
}

CardWithSideImage.propTypes = {
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  buttonContent: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  imageInRightSide: PropTypes.bool,
  dateText: PropTypes.string
}

export default withTheme(CardWithSideImage)
