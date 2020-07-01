import React from 'react'
import { Modal, Button, Icon } from '../../components'
import PropTypes from 'prop-types'
import withStore from './store'
import { Container } from './style'

const CartModal = ({ isVisible, closeModal, invoiceNumber, idTransaction }) => {
  return (
    <Modal
      closeModal={() => closeModal()}
      name='modalCart'
      isVisible={isVisible}
    >
      <Container>
        <section>
          <div className='cont1'>
            <div className='Advert'>
              <Icon name='advert' />
            </div>
            <div>
              <p className='process'>Estamos procesando su pago.</p>
            </div>
          </div>
          <div className='cont2'>
            <span>
                En este momento su Número de Referencia o Factura{' '}
              {invoiceNumber && invoiceNumber[0] ? (invoiceNumber[0].uuid + ' ') : ' '}
                presenta un proceso de pago cuya transacción se encuentra
                PENDIENTE de recibir confirmación por parte de su entidad
                financiera, por favor espere unos minutos y vuelva a consultar
                más tarde para verificar si su pago fue confirmado de forma
                exitosa. Si desea mayor información sobre el estado actual de su
                operación puede comunicarse a nuestras líneas de atención al
                cliente 57-1-6578080 o enviar un correo electrónico a{' '}
              <a href='mailto:soporteenlinea@autogermana.com.co'>
                soporteenlinea@autogermana.com.co
              </a>{' '}
                y preguntar por el estado de la transacción:{' '}
              {idTransaction ? (idTransaction.transactionCode + ' ') : ' '}
            </span>
          </div>
          <Button action={() => closeModal()}>Aceptar</Button>
        </section>
      </Container>
    </Modal>
  )
}

CartModal.defaultprops = {
  invoiceNumber: [],
  idTransaction: []

}

CartModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isVisible: PropTypes.bool
}

export default withStore(CartModal)
