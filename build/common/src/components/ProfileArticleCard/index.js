import React from 'react'
import PropTypes from 'prop-types'

import { dateHelpers } from '../../helpers'

import { Button } from '../'
import { Link } from '../../routes/bmw'

import {
  ButtonContainer,
  Container,
  Content,
  Dates,
  ImageContainer,
  TopContent
} from './styles'

function ProfileArticleCard(props) {
  return (
    <Container>
      <TopContent>
        <Dates>
          <h5>FECHA DE PUBLICACIÓN</h5>
          <h6>{dateHelpers.getShortDate(props.createdAt)}</h6>
        </Dates>
        <ImageContainer>
          <img src={props.image} alt={props.name} />
        </ImageContainer>
        <Content>
          <h3>{props.name}</h3>
          <div
            className='content'
            dangerouslySetInnerHTML={{
              __html: props.body && props.body.slice(0, 300)
            }}
          />
        </Content>
      </TopContent>
      <ButtonContainer>
        <Button asLink>
          <Link route="blogpost" params={{ slug: props.slug }}
          >
            <a>Ver entrada</a>
          </Link>
        </Button>
      </ButtonContainer>
    </Container>
  )
}

ProfileArticleCard.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default ProfileArticleCard
