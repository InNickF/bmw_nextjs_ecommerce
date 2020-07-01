import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field, Form } from 'redux-form/immutable'

import { Button } from '../../components'
import { InputSimple, TextAreaSimple, SelectSimple } from '../../fields'

import withStore from './store'

import { Container, InfoItem } from './styles'

const validate = values => {
  const errors = {}

  if (!values.get('name')) {
    errors.name = 'Nombre obligatorio'
  }

  if (!values.get('email')) {
    errors.email = 'El correo es obligatorio'
  }

  if (!values.get('phone')) {
    errors.phone = 'El Teléfono es obligatorio'
  } else if (values.get('phone') && !/^\d{6,20}$/.test(values.get('phone'))) {
    errors.phone = 'Solo números, sin espacios'
  }

  if (!values.get('reason')) {
    errors.reason = 'El motivo es obligatorio'
  }

  if (!values.get('quantity')) {
    errors.quantity = 'La cantidad es requerida'
  }

  return errors
}

const warn = values => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {}

  if (
    values.get('name') &&
    !/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ'])?$/i.test(
      values.get('name')
    )
  ) {
    errors.name =
      'Únicamente letras y debe contener al menos un nombre y un apellido'
  }

  if (
    values.get('email') &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))
  ) {
    errors.email = 'Correo inválido'
  }

  if (values.get('phone') && !/^\d{6,20}$/.test(values.get('phone'))) {
    errors.phone = 'Solo números, sin espacios'
  }

  return errors
}

class WarrentyForm extends React.Component {
  componentDidMount() {
    this.props.getWarrantyDetails()
    this.props.getReasonTypes()
  }
  render() {
    const { orderId, sku, emailUser, nameUser, quantities, reasonTypes } = this.props
    return (
      <Container>
        <div>
          <h3>Formulario de solicitud</h3>
          <InfoItem>{`Número de órden de compra: ${orderId}`}</InfoItem>
          <InfoItem>{`Referencia del producto: ${sku}`}</InfoItem>
          <InfoItem>{`Correo electrónico: ${emailUser}`}</InfoItem>
          <InfoItem>{`Nombre del cliente: ${nameUser}`}</InfoItem>

          <Form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
            <Field
              name='phone'
              component={InputSimple}
              label='Teléfono'
              placeholder='Ingrese teléfono'
            />
            <Field name='reasonId' component={SelectSimple} label='Motivo'>
              {reasonTypes.map((reasonType, index) => (
                <option key={index} value={reasonType.id} selected={index === 0}>
                  {reasonType.title}
                </option>
              ))}
            </Field>
            <Field name='quantity' component={SelectSimple} label='Cantidad'>
              <Fragment>
                <option value={0}>Cantidad</option>
                {quantities.map(item => (
                  <option value={item}>{item}</option>
                ))}
              </Fragment>
            </Field>
            <Field
              name='reason'
              component={TextAreaSimple}
              label='Motivo por el cuál hace la solicitud'
              placeholder='Escriba aquí el motivo por el cuál está haciendo la solicitud de garantía del producto'
            />
            <div className='button-container'>
              <Button isSubmit disabled={this.props.submitting}>
                Enviar
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    )
  }
}

WarrentyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  getReasonTypes: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  orderId: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  emailUser: PropTypes.string.isRequired,
  nameUser: PropTypes.string.isRequired,
  reasonTypes: PropTypes.array.isRequired
}

export default reduxForm({
  form: 'warranty',
  validate,
  warn
})(withStore(WarrentyForm))
