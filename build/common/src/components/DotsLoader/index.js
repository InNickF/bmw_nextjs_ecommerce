import React from 'react'

import { Container } from './styles'

function DotsLoader() {
  return (
    <Container>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </Container>
  )
}

export default DotsLoader
