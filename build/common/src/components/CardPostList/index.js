import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { CardWithHeadImage, Button } from '../'

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
  
  let remainingPosts;
  let initialCanViewMore;
  let finalSliceIndex = 6;
  if (posts.length > finalSliceIndex) {
    initialCanViewMore = true;
    remainingPosts = posts.slice(finalSliceIndex);
  } else {
    remainingPosts = []
    initialCanViewMore = false;
  }

  const [canViewMore, setCanViewMore] = useState(initialCanViewMore);
  const [renderPosts, setRenderPosts] = useState(posts.slice(0, finalSliceIndex));

  const addMorePosts = () => {
    setRenderPosts(renderPosts.concat(remainingPosts))
    setCanViewMore(false)
  }

  return (
    <Container style={justi}>
      {renderPosts.map((item, i) => (
        <CardWithHeadImage
          key={item.id}
          href={`/blog/${item.slug}`}
          params={{ slug: item.slug }}
          image={item.image}
          title={item.name}
          intro={item.intro}
        />)
      )}
      {canViewMore && 
      <Button action={addMorePosts}>Ver todos los posts</Button>
      }
    </Container>
  )
}

CardPostList.propTypes = {
  posts: PropTypes.array.isRequired,
  style: {}
}

export default CardPostList
