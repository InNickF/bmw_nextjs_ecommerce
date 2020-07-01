import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form/immutable'

import { Button, Modal } from '../'

import { Container, RegisterFormCart } from './styles'
import { TitleHeader } from '../ShipCartStep/styles'


function RegisterModal(props) {
  const {
    isLoading,
    onSubmit,
    handleSubmit,
    noModal,
    setStep
  } = props

  return (
    <>
      {
        noModal ?
          <Container className="register-form-cart">
            <RegisterFormCart>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='input-container input-flex-container'>
                  <label htmlFor='name'>
                    <span>Nombres y apellidos</span>
                    <Field
                      type='text'
                      component='input'
                      id='name'
                      name='firstName'
                      placeholder='Ingresar nombres y apellidos'
                      required
                    />
                  </label>
                </div>
                <div className='input-flex-container'>
                  <div className='input-container'>
                    <label htmlFor='birth'>
                      <span>Fecha de nacimiento</span>
                      <Field
                        type='date'
                        component='input'
                        id='birth'
                        name='birth'
                        required
                      />
                    </label>
                  </div>
                  <div className='input-container doc'>
                    <label htmlFor='docType'>
                      <span>Tipo de documento</span>
                      <Field
                        type='text'
                        component='input'
                        id='docType'
                        name='docType'
                        required
                      />
                    </label>
                    <label htmlFor='doc'>
                      <span>Número de documento</span>
                      <Field
                        component='input'
                        type='text'
                        id='doc'
                        name='identification'
                        placeholder='Ingresar número de documento'
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className='input-container input-flex-container'>
                  <label htmlFor='email'>
                    <span>Correo electrónico</span>
                    <Field
                      component='input'
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Ingresar correo electrónico'
                      required
                    />
                  </label>
                </div>
                <div className='input-flex-container'>
                  <div className='input-container'>
                    <label htmlFor='password'>
                      <span>Crear contraseña</span>
                      <Field
                        component='input'
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Crear contraseña'
                        required
                      />
                    </label>
                  </div>
                  <div className='input-container'>
                    <label htmlFor='password-confirm'>
                      <span>Confirmar contraseña</span>
                      <Field
                        component='input'
                        id='password-confirm'
                        name='password-confirm'
                        placeholder='Crear contraseña'
                        type='password'
                        required
                      />
                    </label>
                  </div>
                </div>
                <label className='terms' htmlFor='terms'>
                  <div>
                    <Field
                      component='input'
                      name='terms'
                      id='terms'
                      type='checkbox'
                      required
                    />
                    <span>
                      <a target='_blank' href='/terminos-y-condiciones'>
                        Aceptar términos y condiciones
                </a>
                    </span>
                  </div>
                </label>
                <div className='button-container'>
                  <Button onClick={() => setStep(1)}>Continuar</Button>
                </div>
              </form>
            </RegisterFormCart>

          </Container>
          :
          <Modal name='register' isLoading={isLoading}>
            <Container>
              <h3>Registro</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='input-container'>
                  <label htmlFor='name'>
                    <span>Nombres y apellidos</span>
                    <Field
                      type='text'
                      component='input'
                      id='name'
                      name='firstName'
                      placeholder='Ingresar nombres y apellidos'
                      required
                    />
                  </label>
                </div>
                <div className='input-container'>
                  <label htmlFor='birth'>
                    <span>Fecha de nacimiento</span>
                    <Field
                      type='date'
                      component='input'
                      id='birth'
                      name='birth'
                      required
                    />
                  </label>
                </div>
                <div className='input-container doc'>
                  <label htmlFor='docType'>
                    <span>Tipo de documento</span>
                    <Field
                      type='text'
                      component='input'
                      id='docType'
                      name='docType'
                      required
                    />
                  </label>
                  <label htmlFor='doc'>
                    <span>Número de documento</span>
                    <Field
                      component='input'
                      type='text'
                      id='doc'
                      name='identification'
                      placeholder='Ingresar número de documento'
                      required
                    />
                  </label>
                </div>
                <div className='input-container'>
                  <label htmlFor='email'>
                    <span>Correo electrónico</span>
                    <Field
                      component='input'
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Ingresar correo electrónico'
                      required
                    />
                  </label>
                </div>
                <div className='input-container'>
                  <label htmlFor='password'>
                    <span>Crear contraseña</span>
                    <Field
                      component='input'
                      type='password'
                      id='password'
                      name='password'
                      placeholder='Crear contraseña'
                      required
                    />
                  </label>
                </div>
                <div className='input-container'>
                  <label htmlFor='password-confirm'>
                    <span>Confirmar contraseña</span>
                    <Field
                      component='input'
                      id='password-confirm'
                      name='password-confirm'
                      placeholder='Crear contraseña'
                      type='password'
                      required
                    />
                  </label>
                </div>
                <label className='terms' htmlFor='terms'>
                  <div>
                    <Field
                      component='input'
                      name='terms'
                      id='terms'
                      type='checkbox'
                      required
                    />
                    <span>
                      <a target='_blank' href='/terminos-y-condiciones'>
                        Aceptar términos y condiciones</a>
                    </span>
                  </div>
                </label>
              </form>
            </Container>
          </Modal>
      }</>

  )
}

RegisterModal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const createReduxForm = reduxForm({
  form: 'register'
})(RegisterModal)

export default createReduxForm
