import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

import { Icon } from '../'

import Container from './styles'

function PurchaseCoupon(props) {
  return (
    <Container
      onSubmit={props.handleSubmit(values => {
        props.onSubmit(values.get('coupon'))
      })
      }
    >
      <div className='field-container product-info-form'>
        <Field
          component='input'
          type='text'
          name='coupon'
          placeholder='Ingresar código'
          required

        />
        <button type='submit'>Aplicar</button>
      </div>
    </Container>
  )
}

const form = reduxForm({
  form: 'coupon'
})

export default form(PurchaseCoupon)
