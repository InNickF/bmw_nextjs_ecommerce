import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../routes/bmw'
import { ellipsis } from '../../helpers'

import { withTheme } from 'styled-components'

import { Card, Content, Image, Detail } from './styles'

function CardWithHeadImage({ href, image, title, intro }) {
  return (
    <Link  href={href} passHref>
      <Card>
        <Content>
          <Image image={image} />
          <Detail>
            <h3>{ellipsis(title, 60)}</h3>
            <div
              className='content'
              dangerouslySetInnerHTML={{
                __html: intro && ellipsis(intro, 100)
              }}
            />
          </Detail>
        </Content>
      </Card>
    </Link>
  )
}

CardWithHeadImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  params: PropTypes.object
}

export default withTheme(CardWithHeadImage)
