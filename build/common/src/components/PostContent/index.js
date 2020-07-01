import React from 'react'
import PropTypes from 'prop-types'

import { Icon, GenerateTags } from '../'

import { Content, ImageContainer, Text, Social } from './styles'

function share(url) {
  window
    .open(
      url,
      '_blank',
      'height=450, width=550, top=' +
      (window.innerHeight / 2 - 275) +
      ', left=' +
      (window.innerWidth / 2 - 225) +
      ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0'
    )
    .focus()
}

function PostContent({ title, image, content, slug, intro, originalUrl }) {
  return (
    <Content>
      <GenerateTags
        title={title}
        description={intro}
        image={image}
        url={originalUrl}
        twitterTitle={title}
        twitterSummary={intro}
        twitterDescription={intro}
        twitterImage={image}
      />
      <ImageContainer>
        <img src={image} alt={title} />
      </ImageContainer>
      <Text>
        {/* <h3>{title}</h3> */}
        <div
          className='content'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Text>
      <Social>
        <h5>Compartir en:</h5>
        <p>
          <a
            onClick={() => share(`//api.whatsapp.com/send?text=${originalUrl}`)}
          >
            <Icon width={33} height={33} name='whatsapp' />
          </a>
          <a
            onClick={() =>
              share(`http://twitter.com/share?text=${title}&url=${originalUrl}`)
            }
          >
            <Icon width={28} height={28} name='twitter' />
          </a>
          <a
            onClick={() =>
              share(
                `https://www.facebook.com/sharer/sharer.php?u=${originalUrl}`
              )
            }
          >
            <Icon width={28} height={28} name='facebook' />
          </a>
        </p>
      </Social>
    </Content>
  )
}

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
}

export default PostContent
