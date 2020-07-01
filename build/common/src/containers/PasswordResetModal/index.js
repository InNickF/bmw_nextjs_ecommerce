import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field, Form } from 'redux-form/immutable'

import { Button, Modal } from '../../components'
import { InputSimple } from '../../fields'

import withStore from './store'

import { Container } from './styles'

const validate = values => {
  const errors = {}

  if (!values.get('email')) {
    errors.email = 'El correo es obligatorio'
  } else if (
    values.get('email') &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))
  ) {
    errors.email = 'Correo inválido'
  }

  return errors
}

class PasswordReset extends React.Component {
  render () {
    return (
      <Modal
        closeModal={this.props.closeModal}
        name='passwordReset'
        isLoading={this.props.isLoading}
        isVisible={this.props.isVisible}
      >
        <Container>
          <div>
            <h3>Restablecer contraseña</h3>
            <Form
              onSubmit={this.props.handleSubmit(values => this.props.onSubmit(values.toJS()))}
            >
              <Field
                name='email'
                component={InputSimple}
                label='Correo electrónico'
                placeholder='Ingresar correo electrónico'
                type='email'
              />

              <div className='button-container'>
                <Button isSubmit disabled={this.props.submitting}>
                  Enviar
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </Modal>
    )
  }
}

PasswordReset.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'passwordReset',
  validate
})(withStore(PasswordReset))
