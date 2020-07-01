import React from 'react'
import PropTypes from 'prop-types'

import { CardWithHeadImage } from '../'

import { Container } from './styles'
// recibo la variable title,la cual tiene el titulo del post que se encuentra como principal
function CardPostList ({ posts, title }) {
  // realizo un filter sobre posts, validando que si el objeto item.name es diferente al title, no me lo guarde en el arreglo, esto con el fin de no mostrar el post principal nuevamente en los cardspost
  posts = posts.filter(item => item.name !== title)
  // valido si los posts son menores a 3, entonces los alineo a la izquierda, si son mayores a 3 quedaran justificados con los mismos espacios
  const justi = { justifyContent: 'space-between' }
  if (posts.length < 3) {
    justi.justifyContent = 'flex-start'
  }
  posts = posts.slice(0, 3)
  return (
    <Container style={justi}>
      {posts.map((item, i) => (
        <CardWithHeadImage
          key={item.id}
          href={`/blog/${item.slug}`}
          params={{ slug: item.slug }}
          image={item.image}
          title={item.name}
          intro={item.intro}
        />)
      )}
    </Container>
  )
}

CardPostList.propTypes = {
  posts: PropTypes.array.isRequired,
  style: {}
}

export default CardPostList
