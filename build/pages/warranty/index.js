import React, { Fragment, Component } from 'react'
import Helmet from 'react-helmet'
import { withTheme } from 'styled-components'

import {
  Wrapper,
  PageTitle,
  WarrantyBox
} from '../../common/components'

import { WarrentyForm } from '../../common/containers'

import { TitleWrapped, ContentBox, ContentIcons } from '../../styles/warranty'

class Warranty extends Component {
  static async getInitialProps({ query }) {
    return {
      query
    }
  }

  render() {
    const { query, theme } = this.props

    return (
      <>
        <Helmet>
          <title>Garantía</title>
        </Helmet>
        <Wrapper>
          <TitleWrapped>
            <PageTitle
              leftArrow
              arrowColor={theme.colors.textColor}
              text='Cambios y devoluciones' />
          </TitleWrapped>
        </Wrapper>
        <Wrapper>
          <ContentBox>
            <ContentIcons>
              <h2>CONDICIONES GENERALES PARA EL CAMBIO O DEVOLUCIÓN DE UN PRODUCTO</h2>
              <WarrantyBox
                shadow={false}
                icon='bolsa'
                text='El producto no debe estar averiado o deteriorado por acciones correspondientes a los clientes.'
              />
              <WarrantyBox
                shadow={false}
                icon='priceTag'
                text='El producto debe tener etiquetas, factura de venta, accesorios y empaques originales (incluyendo manuales, guías de uso, certificados de garantía, etc.)'
              />
              <WarrantyBox
                shadow={false}
                icon='shirt'
                text='El producto no debe mostrar señales de uso, suciedad o desgaste.'
              />
              <WarrantyBox
                shadow={false}
                icon='calendar'
                text='El producto no debe tener más de QUINCE (15) días hábiles de entregado.'
              />
              <WarrantyBox
                shadow={false}
                icon='menUnderWear'
                text='El producto adquirido no debe ser de uso personal o íntimo.'
              />
            </ContentIcons>
          </ContentBox>
        </Wrapper>
        <Wrapper>
          <WarrentyForm orderId={query.orderId} sku={query.sku} />
        </Wrapper>
      </>
    )
  }
}

export default withTheme(Warranty)
