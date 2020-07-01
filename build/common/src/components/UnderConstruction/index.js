import React from 'react'

import { Button, Icon } from '..'
import { Container, ContentText, LogoContainer } from './styles'
import { Link } from '../../routes/bmw'

function UnderConstruction() {
  return (
    <Container>
      {false && <><ContentText>
        <h2>ESTAREMOS DE VUELTA MUY PRONTO.</h2>
        <p>Estamos trabajando para mejorar tu experiencia.</p>
      </ContentText>
        <LogoContainer>
          <Link route="home">
            <a>
              {parseInt(process.env.BRAND_ID) === 1 && <img src={'/static/images/motorrad-logo.png'} alt='logo Motorrad' />}
              {parseInt(process.env.BRAND_ID) === 2 && <img src={'/static/images/mini-logo.png'} alt='logo Mini Bmw' />}
              {parseInt(process.env.BRAND_ID) === 3 && <img src={'/static/images/bmw-logo-full.png'} alt='logo BMW' />}
            </a>
          </Link>
        </LogoContainer></>}

      {parseInt(process.env.BRAND_ID) === 1 && <img src={'/static/images/motorrad.png'} alt='logo Motorrad' />}
      {parseInt(process.env.BRAND_ID) === 2 && <img src={'/static/images/mini.png'} alt='logo Mini Bmw' />}
      {parseInt(process.env.BRAND_ID) === 3 && <img src={'/static/images/bmw-all.png'} alt='logo BMW' />}

    </Container>
  )
}

export default UnderConstruction
