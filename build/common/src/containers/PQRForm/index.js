import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field, Form } from 'redux-form/immutable'
import Select from 'react-select'
import Async from 'react-select/async'

import { Button } from '../../components'
import { InputSimple, TextAreaSimple } from '../../fields'
import CartService from '../../redux/cart/service'
import AppService from '../../redux/app/service'
import priceFormatter from '../../helpers/priceFormatter'

import withStore from './store'

import {
  Container, Row, RowLine, FieldContainer, OrderItem, Detail, HeaderForm, FormText, BtnWhatsapp, FormContainer
} from './styles'

const validate = values => {
  const errors = {}

  if (!values.get('email')) {
    errors.email = 'El email es obligatorio'
  }

  if (!values.get('phone')) {
    errors.phone = 'El teléfono es obligatorio'
  }

  if (!values.get('commentary')) {
    errors.commentary = 'La observación es obligatoria'
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
const RenderSelectInput = ({
  input,
  options,
  name,
  id,
  components,
  onInputSelect,
  meta: { touched, error },
  ...props
}) => (
    <Fragment>
      <Select
        {...input}
        {...props}
        isSearchable={false}
        id={id}
        name={name}
        options={options}
        value={input.value}
        onChange={value => {
          onInputSelect(value)
          setTimeout(() => input.onChange(value), 0);
          return input.onChange(value)
        }}
        onBlur={() => input.onBlur(input.value)}
        components={components}
      />
      {touched && error && <p className='error'>{error}</p>}
    </Fragment>
  )

const RenderAsyncSelect = ({
  input,
  options,
  name,
  id,
  components,
  meta: { touched, error },
  loadOptions,
  ...props
}) => (
    <Fragment>
      <Async
        {...input}
        {...props}
        id={id}
        name={name}
        loadOptions={loadOptions}
        value={input.value}
        onChange={value => {
          setTimeout(() => input.onChange(value), 0);
          return input.onChange(value)
        }}
        onBlur={() => input.onBlur(input.value)}
      />
      {touched && error && <p className='error'>{error}</p>}
    </Fragment>
  )

class PQRForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      orderDetails: [],
      cities: ["Bogota"]
    }
    this._loadOpts = this._loadOpts.bind(this)
    this._renderDetails = this._renderDetails.bind(this)
    this._onSelectOrder = this._onSelectOrder.bind(this)
    this._getCities = this._getCities.bind(this)
  }

  componentWillMount() {
    this.props.initialize({ phone: this.props.userData.phone, email: this.props.userData.email });
  }

  _renderOrderOption({ innerProps, isDisabled, ...props }) {
    return !isDisabled ? (
      <OrderItem {...innerProps}>
        <div className='head'>
          <p>Ticket #{props.value}</p>
          <p><strong>Total:</strong> {priceFormatter(props.data.data.total)} COP</p>
        </div>
        <ul className='details'>
          {props.data.data.orderDetails.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>
                {item.quantity} x {item.name}
              </p>
              <p>{priceFormatter(item.price)} COP</p>
            </li>
          ))}
        </ul>
      </OrderItem>
    ) : null
  }

  componentDidMount() {
    this._loadOpts()
  }

  async _getCities(str = '') {
    const result = await AppService.getCityByWord(str)
    return result.data.map(item => ({ value: item.id, label: item.name }))
  }

  async _loadOpts() {
    const result = await CartService.getOrders({
      where: {
        userId: this.props.userId
      },
      include: [
        {
          relation: 'orderDetails'
        }
      ],
      order: ['createdAt DESC']
    })
    const orders = result.data.map(item => ({
      value: item.id,
      label: `Ticket #${item.id}`,
      data: item
    }))

    this.setState({
      orders
    })
  }

  _renderDetails() {
    return (
      <Detail>
        {this.state.orderDetails.map((item, index) => (
          <div className='item' key={item.id}>
            <p>{item.name}</p>
            <div>
              <p>Comentario</p>
              <Field
                name={`details[${index}].comment`}
                type='text'
                component='textarea'
                label='Comentario'
                placeholder='Comentario'
              />
            </div>
          </div>
        ))}
      </Detail>
    )
  }

  _onSelectOrder(val) {
    const { orderDetails = [] } = val.data

    this.setState({
      orderDetails
    })

    orderDetails.forEach((item, index) =>
      this.props.change(`details[${index}].orderDetailId`, item.id)
    )
  }

  render() {
    const { handleSubmit, submitting, onSubmit, userData } = this.props
    return (
      <Container>
        <HeaderForm>
          <h2>Peticiones, quejas y reclamos.</h2>
          <FormText>
            <p>¿Tienes alguna duda? Pregúntanos</p>
            <BtnWhatsapp>
              <a
                href='https://wa.me/573202572769'
                target='_blank'
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.648214 16.0339 1.6875 17.8393L0 24L6.30536 22.3446C8.04107 23.2929 9.99643 23.7911 11.9893 23.7911H11.9946C18.5464 23.7911 24 18.4554 24 11.8982C24 8.72143 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2161 21.7875 8.475 21.3107 6.95893 20.4107L6.6 20.1964L2.86071 21.1768L3.85714 17.5286L3.62143 17.1536C2.63036 15.5786 2.11071 13.7625 2.11071 11.8929C2.11071 6.44464 6.54643 2.00893 12 2.00893C14.6411 2.00893 17.1214 3.0375 18.9857 4.90714C20.85 6.77679 21.9964 9.25714 21.9911 11.8982C21.9911 17.3518 17.4429 21.7875 11.9946 21.7875ZM17.4161 14.3839C17.1214 14.2339 15.6589 13.5161 15.3857 13.4196C15.1125 13.3179 14.9143 13.2696 14.7161 13.5696C14.5179 13.8696 13.95 14.5339 13.7732 14.7375C13.6018 14.9357 13.425 14.9625 13.1304 14.8125C11.3839 13.9393 10.2375 13.2536 9.08571 11.2768C8.78036 10.7518 9.39107 10.7893 9.95893 9.65357C10.0554 9.45536 10.0071 9.28393 9.93214 9.13393C9.85714 8.98393 9.2625 7.52143 9.01607 6.92679C8.775 6.34821 8.52857 6.42857 8.34643 6.41786C8.175 6.40714 7.97679 6.40714 7.77857 6.40714C7.58036 6.40714 7.25893 6.48214 6.98571 6.77679C6.7125 7.07679 5.94643 7.79464 5.94643 9.25714C5.94643 10.7196 7.0125 12.1339 7.15714 12.3321C7.30714 12.5304 9.25179 15.5304 12.2357 16.8214C14.1214 17.6357 14.8607 17.7054 15.8036 17.5661C16.3768 17.4804 17.5607 16.8482 17.8071 16.1518C18.0536 15.4554 18.0536 14.8607 17.9786 14.7375C17.9089 14.6036 17.7107 14.5286 17.4161 14.3839Z" fill="white" />
                </svg>
                <div>
                  <p>¿Alguna pregunta?</p>
                  <span>Escríbenos</span>
                </div>
              </a>
            </BtnWhatsapp>
          </FormText>
        </HeaderForm>
        <FormContainer>
          <p>También puedes registrar tu petición, queja o reclamo en este formulario.</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <FieldContainer>
                {userData.firstName ?
                  <>
                    <span className='txtName'>Nombres y apellidos</span>
                    <input
                      type='text'
                      defaultValue={`${userData.firstName ? userData.firstName : ""} ${userData.lastName ? userData.lastName : ""}`}
                    />
                  </>
                  :
                  <Field
                    name='name'
                    component={InputSimple}
                    label='Nombres y apellidos'
                    placeholder=''
                    type='text'
                  />

                }
              </FieldContainer>
              <FieldContainer>
                <span className='txtName'>Identificación</span>
                <input
                  type='text'
                  defaultValue={`${userData.identification ? userData.identification : ""}`}
                />
              </FieldContainer>
            </Row>
            <Row>
              <FieldContainer>
                <Field
                  name='phone'
                  component={InputSimple}
                  label='Teléfono'
                  placeholder=''
                  type='text'
                />
              </FieldContainer>
              <FieldContainer>
                <Field
                  name='email'
                  component={InputSimple}
                  label='E-mail'
                  placeholder=''
                  type='text'
                />
              </FieldContainer>
            </Row>
            <RowLine>
              <label>Ciudad</label>

              <Field
                name='cityId'
                component={RenderAsyncSelect}
                placeholder=''
                loadOptions={this._getCities}
                noOptionsMessage={() => 'Buscar tu ciudad...'}
              />
            </RowLine>
            <br />
            <RowLine>
              <label>Seleccione un ticket (opcional)</label>
              {Object.hasOwnProperty.call(userData, 'identification') &&
                <Field
                  name='orderId'
                  component={RenderSelectInput}
                  options={this.state.orders ? this.state.orders : {}}
                  components={{ Option: this._renderOrderOption }}
                  placeholder=''
                  noOptionsMessage={() => 'No se encontrarón registros'}
                  onInputSelect={this._onSelectOrder}
                />
              }
            </RowLine>
            <br />
            {/* <FieldArray name='details' component={this._renderDetails} /> */}
            <Field
              name='commentary'
              component={TextAreaSimple}
              label='Petición, queja o reclamo'
            />
            <div className='button-container'>
              <Button isSubmit disabled={submitting}>
                ENVIAR
              </Button>
            </div>
          </Form>
        </FormContainer>
      </Container>
    )
  }
}

PQRForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'pqr',
  validate,
  initialValues: {
    phone: '3172462551'
  },
  warn
})(withStore(PQRForm))
