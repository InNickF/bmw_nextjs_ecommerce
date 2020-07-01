import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form/immutable'

import { Modal, Button } from '../../components'
import { InputSimple } from '../../fields'

import PasswordResetModal from '../PasswordResetModal'

import {
  Container, OptionButton, OptionBack, MemberSide, MemberContent, Content
} from './styles'

import withStore from './store'

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

  if (!values.get('password')) {
    errors.password = 'La contraseña es obligatoria'
  }

  return errors
}

const warn = values => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {}

  if (
    values.get('email') &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))
  ) {
    errors.email = 'Correo inválido'
  }

  return errors
}

class LoginModal extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    showOptions: false,
    location: '/'
  };

  componentDidUpdate() {
    let newPath = window.location.pathname;
    console.log(this.props.isVisible)
    if (this.state.location != newPath) {
      this.setState({ location: window.location.pathname })
    }
    if (typeof document !== 'undefined' && this.props.isVisible) {
      document.body.classList.add('notScroll');
    } else {
      if (typeof document !== 'undefined' && !this.props.isVisible) {
        document.body.classList.remove('notScroll');
      }
    }
  }


  render() {
    const { showOptions } = this.state
    return (
      <Modal
        name='login'
        isLoading={this.props.isLoading}
        isVisible={this.props.isVisible}
        closeModal={this.props.closeModal}
      >
        <Container>
          <PasswordResetModal />
          <Content>
            <MemberContent>
              <MemberSide>
                <h2>Ingresa a tu cuenta ahora.</h2>
                {showOptions ?
                  <form onSubmit={this.props.handleSubmit(this.props.submitLogin)}>
                    <Field
                      name='email'
                      component={InputSimple}
                      label='Correo electrónico'
                      placeholder='Ingresar correo electrónico'
                      type='email'
                    />
                    <Field
                      name='password'
                      component={InputSimple}
                      label='Crear contraseña'
                      placeholder='Crear contraseña'
                      type='password'
                    />
                    <div className='forgot-password'>
                      <button
                        type='button'
                        onClick={this.props.openPasswordReset}
                      >
                        ¿Olvidó su contraseña?
                      </button>
                    </div>
                    <div className='button-container'>
                      <Button isSubmit>Continuar</Button>
                    </div>
                    <div onClick={() => this.setState({ showOptions: false })} className="btn-back-form" >
                      Ingresar de otra forma
                    </div>
                  </form> :
                  <div className="content-social-btn">
                    <div onClick={() => this.setState({ showOptions: true })}
                      className="btn-email" >
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.85956 10.0455C12.6564 10.0455 13.9249 7.84588 13.9249 5.02273C13.9249 2.19957 12.6564 0 9.85956 0C7.06268 0 5.79422 2.19957 5.79422 5.02273C5.79422 7.84588 7.06268 10.0455 9.85956 10.0455ZM14.3627 12.1818L12.4242 13.0909C11.6432 13.4531 10.7743 13.6591 9.85956 13.6591C8.94486 13.6591 8.07941 13.4531 7.29488 13.0909L5.35641 12.1818C2.86913 12.1818 0.853271 14.2166 0.853271 16.7273V17.2955C0.853271 18.2365 1.60966 19 2.54195 19H17.1772C18.1095 19 18.8658 18.2365 18.8658 17.2955V16.7273C18.8658 14.2166 16.85 12.1818 14.3627 12.1818Z" fill="white" />
                      </svg>
                      Correo / Usuario
                  </div>
                    <div onClick={() => this.props.registerSocialFunc('gmail')}
                      className="btn-google">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8055 8.0415H19V8H10V12H15.6515C14.827 14.3285 12.6115 16 10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z" fill="#FFC107" />
                        <path d="M1.15295 5.3455L4.43845 7.755C5.32745 5.554 7.48045 4 9.99995 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 9.99995 0C6.15895 0 2.82795 2.1685 1.15295 5.3455Z" fill="#FF3D00" />
                        <path d="M10 19.9999C12.583 19.9999 14.93 19.0114 16.7045 17.4039L13.6095 14.7849C12.5718 15.574 11.3038 16.0009 10 15.9999C7.39903 15.9999 5.19053 14.3414 4.35853 12.0269L1.09753 14.5394C2.75253 17.7779 6.11353 19.9999 10 19.9999Z" fill="#4CAF50" />
                        <path d="M19.8055 8.0415H19V8H10V12H15.6515C15.2571 13.1082 14.5467 14.0766 13.608 14.7855L13.6095 14.7845L16.7045 17.4035C16.4855 17.6025 20 15 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z" fill="#1976D2" />
                      </svg>
                      Ingresa con Google
                    </div>
                    <div onClick={() => this.props.registerSocialFunc('facebook')}
                      className="btn-facebook" >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8962 20.0001C19.5057 20.0001 20 19.5059 20 18.8962V1.10383C20 0.494141 19.5057 0 18.8962 0H1.10383C0.494062 0 0 0.494141 0 1.10383V18.8962C0 19.5059 0.494062 20.0001 1.10383 20.0001H18.8962Z" fill="white" />
                        <path d="M13.7995 19.9999V12.2548H16.3993L16.7885 9.23644H13.7995V7.30926C13.7995 6.43535 14.0423 5.8398 15.2955 5.8398L16.8938 5.8391V3.13949C16.6173 3.1027 15.6685 3.02051 14.5648 3.02051C12.2602 3.02051 10.6826 4.42715 10.6826 7.01043V9.23644H8.07617V12.2548H10.6826V19.9999H13.7995Z" fill="#4267B2" />
                      </svg>

                      Ingresa con Facebook
                    </div>

                  </div>
                }
                <div className="register-side">
                  <h2>Quiero ser parte de la comunidad {parseInt(process.env.BRAND_ID) === 1 ? 'MOTORRAD' : parseInt(process.env.BRAND_ID) === 2 ? 'MINI' : 'BMW'}.</h2>
                  <p>Regístrate ahora y sé el primero en recibir noticias, descuentos, fotos e invitaciones a nuestros eventos.</p>
                  <div className='button-container'>
                    <button className="btn-register" type='button' onClick={this.props.openRegister}>
                      Registrarse
                      </button>
                  </div>
                </div>
              </MemberSide>
            </MemberContent>
            <MemberContent>
              <MemberSide>
                <div className="register-side visitor-side">
                  <h2>Soy visitante.</h2>
                  <p>Continúa sin una cuenta o crea una en el proceso y disfruta de los beneficios para los miembros {parseInt(process.env.BRAND_ID) === 1 ? 'MOTORRAD' : parseInt(process.env.BRAND_ID) === 2 ? 'MINI' : 'BMW'}  Shop.</p>
                  <div className='button-container'>
                    <button className="btn-primary" type='button' onClick={() => this.props.closeModal(this.props.visit)}>
                      Continuar como visitante
                  </button>
                  </div>
                </div>
              </MemberSide>
            </MemberContent>
          </Content>
        </Container>
      </Modal>
    )
  }
}

LoginModal.propTypes = {
  openRegister: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  registerSocialFunc: PropTypes.func.isRequired,
  brandId: PropTypes.string.isRequired
}

export default reduxForm({
  form: 'login',
  validate,
  warn
})(withStore(LoginModal))
