import React from 'react'

import { Button } from '../'
import { Link } from '../../routes/bmw'

import { Card, TitleContainer, Title, SubTitle, ButtonContainer } from './styles'

const types = ['event', 'flatcard', 'sentence', 'post', 'card']

function InfoCard({
  callToActionText,
  title,
  position,
  subTitle,
  image,
  url,
  type,
  withoutCallToAction
}) {
  let href = {
    route: type == "event" ? "event-detail" : type == "post" ? "blogpost" : url.replace("https://", '').split("/")[1],
    params: type == "event" ? { slug: url.split("/")[2] } : type == "post" ? { slug: url.split("/")[2] } : {}
  }
  return (
    <Link route={href.route}
      params={href.params} >
      <a>
        <Card
          bgImage={image}
          type={type}
          position={position}
        >
          <TitleContainer type={type} position={position}>
            <Title type={type} position={position}>{title}</Title>
            <SubTitle type={type} position={position}>{subTitle}</SubTitle>
          </TitleContainer>
          {!withoutCallToAction && (
            <ButtonContainer type={type} position={position}>
              <Button>{callToActionText}</Button>
            </ButtonContainer>
          )}
        </Card>
      </a>
    </Link>
  )
}

InfoCard.defaultProps = {
  buttonPosition: 'bottom',
  type: types[0],
  position: 'top',
  withoutCallToAction: false
}


export default InfoCard
