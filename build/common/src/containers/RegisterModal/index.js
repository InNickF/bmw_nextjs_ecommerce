import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field, Form } from 'redux-form/immutable'

import { Button, Modal } from '../../components'
import { InputSimple, InputCheckbox, SelectSimple } from '../../fields'

import withStore from './store'

import { Container, OptionButton, OptionBack } from './styles'
import { RegisterFormCart } from '../../components/RegisterModal/styles'

const validate = values => {
  const errors = {}

  if (!values.get('name')) {
    errors.name = 'El nombre es obligatorio'
  } else if (values.get('name') && !/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ'])?$/i.test(values.get('name'))) {
    errors.name = 'Únicamente letras y debe contener al menos un nombre y un apellido'
  }

  if (!values.get('birth')) {
    errors.birth = 'Fecha obligatoria'
  }

  if (!values.get('identification')) {
    errors.identification = 'Identificación obligatoria'
  } else if (
    values.get('identification') &&
    !/^\d{6,20}$/.test(values.get('identification'))
  ) {
    errors.identification =
      'Únicamente números, mínimo 6 y máximo 20 caracteres'
  }

  if (
    !values.get('phone')
  ) {
    errors.phone = 'El teléfono es requerido'
  }

  if (!values.get('email')) {
    errors.email = 'El correo es obligatorio'
  } else if (
    values.get('email') &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))
  ) {
    errors.email = 'Correo inválido'
  }

  if (!values.get('password')) {
    errors.password = 'La contraseña es obligatoria'
  } else if (
    values.get('password') &&
    !/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9!@#$%^&*?_]{8,20})$/.test(
      values.get('password')
    )
  ) {
    errors.password =
      'Recuerde que debe contener al menos un caracter especial y alfanumerico, mínimo 8 y máximo 20 caracteres'
  }

  if (!values.get('password-confirm')) {
    errors['password-confirm'] = 'La confirmación es obligatoria'
  } else if (values.get('password-confirm') !== values.get('password')) {
    errors['password-confirm'] = 'Las contraseñas no coinciden'
  }

  if (!values.get('terms')) {
    errors.terms = 'Campo obligatorio'
  }
  if (!values.get('priv')) {
    errors.priv = 'Campo obligatorio'
  }
  return errors
}

const warn = values => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {}

  if (values.get('name') && !/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ'])?$/i.test(values.get('name'))) {
    errors.name = 'Únicamente letras y debe contener al menos un nombre y un apellido'
  }

  if (
    !values.get('phone')
  ) {
    errors.phone = 'El teléfono es requerido'
  }

  if (
    values.get('email') &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))
  ) {
    errors.email = 'Correo inválido'
  }

  if (
    values.get('identification') &&
    !/^\d{6,20}$/.test(values.get('identification'))
  ) {
    errors.identification =
      'Únicamente números, mínimo 6 y máximo 20 caracteres'
  }

  if (
    values.get('password') &&
    !/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9!@#$%^&*?_]{8,20})$/.test(
      values.get('password')
    )
  ) {
    errors.password =
      'Recuerde que debe contener al menos un caracter especial y alfanumerico, mínimo 8 y máximo 20 caracteres'
  }

  if (values.get('password-confirm') !== values.get('password')) {
    errors['password-confirm'] = 'Las contraseñas no coinciden'
  }

  return errors
}

class RegisterModal extends React.Component {

  constructor(props) {
    super(props)
  }
  state = {
    showOptions: false
  };

  render() {
    const { noModalRegister, setStep } = this.props
    const { showOptions } = this.state

    return (
      <>
        {noModalRegister ?
          <RegisterFormCart>
            <Form onSubmit={this.props.handleSubmit(this.props.onSubmitFunc)}>
              <Field
                name='name'
                component={InputSimple}
                label='Nombres y apellidos'
                placeholder='Ingresa nombres y apellidos'
                type='text'
                classNames="input-flex-container"
              />
              <Field
                name='birth'
                component={InputSimple}
                label='Fecha de nacimiento'
                type='date'
                classNames="input-flex-container"
              />
              <div className='input-container input-row-container doc'>
                <div>
                  <Field
                    name='docType'
                    component={SelectSimple}
                    label='Tipo de documento'
                  >
                    <option value='CC' selected>
                      Cédula de ciudadania
                      </option>
                    <option value='CC' selected>
                      Cédula de extranjería
                      </option>
                  </Field>
                </div>
                <div>
                  <Field
                    name='identification'
                    component={InputSimple}
                    label='Número de documento'
                    placeholder='Ingresar número de documento'
                    type='number'
                  />
                </div>
              </div>

              <div className='input-row-container'>
                <Field
                  name='email'
                  component={InputSimple}
                  label='Correo electrónico'
                  placeholder='Ingresar correo electrónico'
                  type='email'
                />
                <Field
                  name='phone'
                  component={InputSimple}
                  label='Teléfono'
                  placeholder='Ingresar teléfono'
                  type='number'
                />
              </div>
              {/* <div className='input-row-container' style={{ display: 'none' }}>
                <Field
                  name='password'
                  component={InputSimple}
                  label='Crear contraseña'
                  placeholder='Crear contraseña'
                  type='password'
                />
                <Field
                  name='password-confirm'
                  component={InputSimple}
                  label='Confirmar contraseña'
                  placeholder='Confirmar contraseña'
                  type='password'
                />
              </div> */}
              <div className="input-check-container">
                <Field
                  name='terms'
                  component={InputCheckbox}
                  label='Aceptar términos y condiciones'
                  link='/terminos-y-condiciones' />
              </div>
              <div className='button-container'>
                <Button isSubmit disabled={this.props.submitting}>
                  Continuar
                  </Button>
              </div>
            </Form>
          </RegisterFormCart>
          :
          <Modal
            closeModal={this.props.closeModal}
            name='register'
            isLoading={this.props.isLoading}
            isVisible={this.props.isVisible}
          >
            <Container>
              {showOptions ? (
                <div>
                  <h3>Registro</h3>
                  <OptionButton
                    onClick={() => this.setState({ showOptions: !showOptions })}
                    border
                  >
                    Registrar manualmente
              </OptionButton>
                  <OptionButton
                    onClick={() => this.props.registerSocialFunc('facebook')}
                    bcolor='#3A559F'
                    color='white'
                  >
                    Registrar con Facebook
              </OptionButton>
                  <OptionButton
                    onClick={() => this.props.registerSocialFunc('gmail')}
                    bcolor='#DD4B39'
                    color='white'
                  >
                    Registrar con Google
              </OptionButton>
                </div>
              ) : (
                  <div className="register-form-modal">

                    <RegisterFormCart>
                      <Form onSubmit={this.props.handleSubmit(this.props.onSubmitFunc)}>
                        <Field
                          name='name'
                          component={InputSimple}
                          label='Nombres y apellidos'
                          placeholder='Ingresa nombres y apellidos'
                          type='text'
                          classNames="input-flex-container"
                        />
                        <Field
                          name='birth'
                          component={InputSimple}
                          label='Fecha de nacimiento'
                          type='date'
                          classNames="input-flex-container"
                        />
                        <div className='input-container input-row-container doc'>
                          <div>
                            <Field
                              name='docType'
                              component={SelectSimple}
                              label='Tipo de documento'
                            >
                              <option value='CC' >
                                Cédula de ciudadania
                              </option>
                              <option value='CE' >
                                Cédula de extranjería
                              </option>
                            </Field>
                          </div>
                          <div>
                            <Field
                              name='identification'
                              component={InputSimple}
                              label='Número de documento'
                              placeholder='Ingresar número de documento'
                              type='number'
                            />
                          </div>
                        </div>

                        <div className='input-row-container mail'>
                          <Field
                            name='email'
                            component={InputSimple}
                            label='Correo electrónico'
                            placeholder='Ingresar correo electrónico'
                            type='email'
                          />
                          <Field
                            name='phone'
                            component={InputSimple}
                            label='Teléfono'
                            placeholder='Ingresar teléfono'
                            type='number'
                          />
                        </div>
                        <Field
                          name='password'
                          component={InputSimple}
                          label='Crear contraseña'
                          placeholder='Crear contraseña'
                          type='password'
                          classNames="input-flex-container"
                        />
                        <Field
                          name='password-confirm'
                          component={InputSimple}
                          label='Confirmar contraseña'
                          placeholder='Confirmar contraseña'
                          type='password'
                          classNames="input-flex-container"
                        />
                        <div className="input-check-container">
                          <Field
                            name='terms'
                            component={InputCheckbox}
                            label='Aceptar términos y condiciones'
                            link='/terminos-y-condiciones' />
                        </div>
                        <div className="input-check-container">
                          <Field
                            name='priv'
                            component={InputCheckbox}
                            label='Aceptar política de privacidad'
                            link='/nota-legal' />
                        </div>
                        <div className='button-container'>
                          <Button isSubmit disabled={this.props.submitting}>
                            Continuar
                        </Button>
                        </div>
                      </Form>
                    </RegisterFormCart>

                    <OptionBack
                      onClick={() => this.setState({ showOptions: !showOptions })}
                    >
                      Atrás
              </OptionBack>
                  </div>
                )}
            </Container>
          </Modal>
        }</>
    )
  }
}

RegisterModal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmitFunc: PropTypes.func.isRequired,
  registerSocialFunc: PropTypes.func.isRequired,
  brandId: PropTypes.string.isRequired
}

export default reduxForm({
  form: 'register',
  validate,
  warn
})(withStore(RegisterModal))
