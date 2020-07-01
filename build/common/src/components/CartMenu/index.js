import React from 'react'
import PropTypes from 'prop-types'

import { nextRouter } from '../../helpers'
import { Button, InPartLoading } from '../'

import {
  Container,
  Element,
  ImageContainer,
  Detail,
  Summary,
  Qty,
  Content,
  TotalPrice,
  DeleteButton,
  Actions
} from './styles'

function CartMenu ({ elements, isLoading, deleteItem }) {
  const withElements = !!elements.length
  const { Router } = nextRouter

  return (
    <Container>
      <InPartLoading isLoading={isLoading} canAbsolute />
      {!withElements && <div className='is-empty'>¡Carrito vacío!</div>}
      {withElements && (
        <div>
          {elements.map(element => (
            <Element key={element.id}>
              <DeleteButton onClick={deleteItem(element.id)}>
                <img src='/static/images/icons/cancel-button.svg' alt='' />
              </DeleteButton>
              <Content>
                <ImageContainer>
                  <img src={element.image} alt='' />
                </ImageContainer>
                <Detail>
                  <h3>{element.name}</h3>
                  <Summary>
                    {/* <Attrs>
                      {element.productAttrs &&
                        element.productAttrs.map(item => (
                          <span key={item.id}>
                            {item.name} {item.value}
                          </span>
                        ))}
                    </Attrs> */}
                    <Qty>
                      <span>Unidades: </span>
                      <span>{element.quantity}</span>
                    </Qty>
                  </Summary>
                  <TotalPrice>
                    <span>$ {element.price} COP</span>
                  </TotalPrice>
                </Detail>
              </Content>
            </Element>
          ))}
          <Actions>
            <Button action={() => Router.pushRoute('/carrito')} condensed>
              <img src='/static/images/icons/cart-white.svg' alt='' />
              <span>Ver Carrito</span>
            </Button>
            <Button action={() => Router.pushRoute('/carrito')} condensed>
              Comprar
            </Button>
          </Actions>
        </div>
      )}
    </Container>
  )
}

CartMenu.defaultProps = {
  isLoading: false
}

CartMenu.propTypes = {
  elements: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  deleteItem: PropTypes.func.isRequired
}

export default CartMenu
