import React from 'react'

import { Button, Icon } from '../'
import { Container } from './styles'
import { Link } from '../../routes/bmw'

function NotFound() {
  return (
    <Container>
      <Icon name='404' />
      <h2>Error 404</h2>
      <p>¡Lo sentimos! No encontramos la página que estaba buscando</p>
      <Button >
        <Link route="home"><a>Volver a la home</a></Link>
      </Button>
    </Container>
  )
}

export default NotFound
