import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form, reduxForm } from 'redux-form/immutable'

import withStore from './store'
import Newsletter from './styles'

const style = {
  display: 'flex',
  height: '31px',
  width: '320px',
  borderRadius: '4px',
  marginBottom: '25px'
}

function FooterNewsletterSubscriber (props) {
  return (
    <Newsletter>
      <Form onSubmit={props.handleSubmit(props.subscribe)} style={style} >
        <Field name='email' type='email' component='input' placeholder='E-mail' required />
        <button>Suscribirse</button>
      </Form>
    </Newsletter>
  )
}

FooterNewsletterSubscriber.propTypes = {
  subscribe: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

const createReduxForm = reduxForm({ form: 'emailSubscription' })

export default withStore(createReduxForm(FooterNewsletterSubscriber))
