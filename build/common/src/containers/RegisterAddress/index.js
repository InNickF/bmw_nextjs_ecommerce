import React from 'react'
import { reduxForm, Field } from 'redux-form/immutable'

import {
  AlignWrapper,
  Button,
  InPartLoading
} from '../../components'

import { InputSimple, SelectSimple } from '../../fields'
import Select from 'react-select'

import {
  Form, FieldContainer, FormContainer, Row, Container, ShipContainer, CartContainer, BtnContainer, ShipItem, Content,
  ContentPay, TitleHeader, ContentPaySend, ContentPayPaid,
  SelectContainer,
  AddressInput,
  ContentButton,
  FormRegisterContainer
} from './styles'

import withStore from './store'

const validate = values => {
  const errors = {}

  if (!values.get('stateId')) {
    errors.stateId = 'Departamento obligatorio'
  }

  if (!values.get('cityId')) {
    errors.cityId = 'Ciudad obligatorio'
  }

  if (!values.get('phone')) {
    errors.phone = 'Télefono obligatorio'
  } else if (values.get('phone') && !/^\d{7,15}$/.test(values.get('phone'))) {
    errors.phone = 'Solo números, sin espacios, mínimo 7 y máximo 15 caracteres'
  }

  if (!values.get('value')) {
    errors.value = 'Dirección de entrega obligatoria'
  }

  return errors
}

const warn = values => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {}

  if (values.get('phone') && !/^\d{7,15}$/.test(values.get('phone'))) {
    errors.phone = 'Solo números, sin espacios, mínimo 7 y máximo 15 caracteres'
  }

  return errors
}

const customStyles = {
  singleValue: (provided, state) => ({
    ...provided,
    display: "flex", // To keep icon and label aligned
    alignItems: "center",
    height: 40,
  }),
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #000000',
    borderRadius: 0,
    background: 'transparent',
    textAlign: 'center',
    width: '290px',
    height: 40,
    '>div': {
      height: 40,
    }
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? 'rgb(28, 105, 212)' : '#ffff',
    '&:hover': {
      background: 'rgb(28, 105, 212)',
      color: '#ffff'
    }
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
  indicatorContainer: (styles) => ({ ...styles, color: '#000000' }),

}

const customStylesNumber = {
  singleValue: (provided, state) => ({
    ...provided,
    display: "flex", // To keep icon and label aligned
    alignItems: "center",
    height: 40,
  }),
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #000000',
    borderRadius: 0,
    background: 'transparent',
    textAlign: 'center',
    width: '60px',
    height: 40,
    '>div': {
      height: 40,
    }
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? 'rgb(28, 105, 212)' : '#ffff',
    '&:hover': {
      background: 'rgb(28, 105, 212)',
      color: '#ffff'
    }
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
  indicatorContainer: (styles) => ({ ...styles, color: '#000000' }),
}

function AddressForm({
  states,
  cities,
  citiesLoading,
  mainAccentText,
  setStep,
  getCities,
  handleSubmit,
  onSubmit
}) {
  return (
    <>
      <FormRegisterContainer onSubmit={handleSubmit(values => onSubmit(values.toJS()))} >
        <Form>
          <Row>
            <FieldContainer>
              <Field
                name='stateId'
                component={SelectSimple}
                label='Departamento'
                onChange={e => getCities(e.target.value)}>
                <option>Elegir departamento</option>
                {states.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Field>
            </FieldContainer>
            <FieldContainer>
              <InPartLoading isLoading={citiesLoading} canAbsolute>
                <Field
                  name='cityId'
                  component={SelectSimple}
                  label='Ciudad'>
                  {cities.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Field>
              </InPartLoading>
            </FieldContainer>
          </Row>
          <Row>
            <FieldContainer className="ipt">
              <Field
                name='value'
                component={InputSimple}
                label='Dirección de entrega'
                placeholder='Ingresar dirección de entrega'
                type='text'
              />
            </FieldContainer>
            <FieldContainer >
              <Field
                name='note'
                component={InputSimple}
                label='Datos adicionales'
                placeholder='Ingresar datos adicionales'
                type='text'
              />
            </FieldContainer>
          </Row>
          <Button isSubmit>Guardar y continuar</Button>
        </Form>
      </FormRegisterContainer>
    </>
  )
}

const AddressReduxForm = reduxForm({
  form: 'registerAddress',
  validate,
  warn
})(AddressForm)

function RegisterAddress({
  states,
  cities,
  citiesLoading,
  getCities,
  isVisible,
  isLoading,
  dialogName,
  closeModal,
  setStep,
  onSubmit,
  theme
}) {
  return (
    <div>
      <AddressReduxForm
        citiesLoading={citiesLoading}
        cities={cities}
        states={states}
        mainAccentText={theme.colors.mainAccentText}
        getCities={getCities}
        onSubmit={onSubmit}
        setStep={setStep}
      />
    </div>
  )
}

export default withStore(RegisterAddress)
