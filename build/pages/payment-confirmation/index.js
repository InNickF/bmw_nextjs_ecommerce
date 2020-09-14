import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Router } from "../../common/src/routes/bmw";
import Helmet from 'react-helmet'

import {
  PageTitle,
  PurchaseBottomSteps,
  Wrapper,
  View,
  ProductsSlider,
} from '../../common/components'

import Footer from '../../components/Footer'

import { blog as coreBlog, events as coreEvents } from '../../common/redux'
import { dateHelpers, getOriginalUrl, capitalize } from '../../common/helpers'

import { ContentCard, ContainerFixed, ContentFixed, BlogCardPayment, ContentButtonsPayment } from '../../styles/payment-confirmation'

import withStore from './store'
const { getLatestEvents } = coreEvents.actions

class PaymentConfirmation extends React.Component {
  static async getInitialProps({ store, req }) {

    const state = store.getState()
    const post = state.toJS().blog.posts;
    const { getBlogData } = coreBlog.actions

    if (!post.lastArticles.length > 0)
      store.dispatch(getBlogData())

    return { originalUrl: getOriginalUrl(req) }
  }

  render() {
    const payOk = true;
    let userName = Object.hasOwnProperty.call(this.props.user, 'firstName')
    const { firstInLastPosts } = this.props

    return (
      <Fragment>
        <Helmet>
          <title> {payOk ? 'Confirmación de pago' : 'Pago rechazado'}</title>
        </Helmet>
        <ContainerFixed>
          <ContentFixed>
            <ContentCard title='Resumen de compra'>
              <h3>{payOk ? ` ${userName ? capitalize(this.props.user.firstName.split(/\s/)[0]) + ',' : 'Muchas '} gracias por confiar en nosotros` : `Lo sentimos ${userName ? this.props.user.firstName.split(/\s/)[0] + ',' : ''} tu pago no pudo ser procesado`}</h3>
              <h3>{payOk ? '¡tu pedido ha sido realizado con éxito!' : 'Te invitamos a intentarlo nuevamente, si tienes alguna duda no dudes en comunicarte con nosotros'}</h3>
              <ContentButtonsPayment>
                <button onClick={() => Router.pushRoute('/')} >Navegar más productos</button>
                <button className="btn-bordered" onClick={() => Router.pushRoute('/mi-perfil?navigate=history', { checkout: 2 })} >Ver detalles de compra</button>
              </ContentButtonsPayment>

              <p className='condensed'>
                {!payOk && 'Ya eres parte de nuestra comunidad. '}Te recomendamos leer el siguiente artículo para conocer los beneficios que tienes al ser un cliente
                &nbsp;{parseInt(process.env.BRAND_ID) === 1 ? 'MOTORRAD' : parseInt(process.env.BRAND_ID) === 2 ? 'MINI' : 'BMW'} Shop.
              </p>
            </ContentCard>
            <BlogCardPayment style={{
              backgroundImage: `url(${firstInLastPosts.image})`
            }}>
              <button className="cta-bold" onClick={() => Router.push('/blog')}>Ir al Blog</button>
            </BlogCardPayment>

          </ContentFixed>
          {false && <ProductsSlider products={null} title="Tus últimos productos vistos." />}
        </ContainerFixed>
      </Fragment>
    )
  }
}

PaymentConfirmation.propTypes = {
  getCurrentConfirmation: PropTypes.func.isRequired,
  confirmationOrder: PropTypes.object.isRequired
}

export default withStore(PaymentConfirmation)
