import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  ChassisFilterForm,
  Modal
} from '../'

import {
  Container,
  StatusCart,
  StatusCartTable,
  StatusCartHeader,
  StatusCartList,
  StatusCartProduct,
  ImageContainer,
  StatusCartResume,
  StatusCartButtons

} from './styles'

function StatusAdviceCart({
  buttonText,
  checkIfAuthenticated,
  closeModal,
  onFormSubmit,
  modalTitle,
  toggleHelpModal,
  isVisible
}) {
  return (
    <Modal
      isVisible={isVisible}
      closeModal={closeModal}
    >
      <Container>
        <h2>Lo lamentamos, el último producto fue comprado por otro usuario!</h2>
        <StatusCart>
          <StatusCartTable>
            <StatusCartHeader>
              <div>
                <h4>Tu carrito</h4>
                <p>Producto</p>
              </div>
              <div><p>Precio</p></div>
            </StatusCartHeader>
            <StatusCartList>
              <StatusCartProduct>
                <div className="product-detail">
                  <ImageContainer>
                    <img src="https://i.pinimg.com/originals/2d/ca/c6/2dcac6be54a9726192c139b9931fb746.jpg" alt='image product' />
                  </ImageContainer>
                  <div className='info'>
                    <h2>Nombre del producto</h2>
                    <div className="info-label">
                      <label>Referencia</label>
                      <p># 1212335442</p>
                    </div>
                  </div>
                  <div className='prices'>
                    <p className="">$1,993,000</p>
                    <p className="">$1,993,000c/u</p>
                  </div>
                </div>
              </StatusCartProduct>
              <StatusCartProduct>
                <div className="product-detail">
                  <ImageContainer>
                    <img src="https://i.pinimg.com/originals/2d/ca/c6/2dcac6be54a9726192c139b9931fb746.jpg" alt='image product' />
                  </ImageContainer>
                  <div className='info'>
                    <h2>Nombre del producto</h2>
                    <div className="info-label">
                      <label>Referencia</label>
                      <p># 1212335442</p>
                    </div>
                  </div>
                  <div className='prices item-deleted'>
                    <p>Este producto fue eliminado</p>
                  </div>
                </div>
              </StatusCartProduct>
            </StatusCartList>
          </StatusCartTable>
          <StatusCartResume>
            <p>Nuevo total</p>
            <div>
              <p>Artículos x1</p>
              <p>$1993000</p>
            </div>
          </StatusCartResume>
          <StatusCartButtons>
            <button>Cancelar</button>
            <button>
              <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM11.1 7H4.9V5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7Z" fill="white" />
              </svg>Pagar</button>
          </StatusCartButtons>
        </StatusCart>
      </Container>
    </Modal>
  )
}

StatusAdviceCart.defaultProps = {
  isVisible: false
}

StatusAdviceCart.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  buttonText: PropTypes.string,
  modalTitle: PropTypes.string,
  checkIfAuthenticated: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  toggleHelpModal: PropTypes.func.isRequired
}

export default StatusAdviceCart
