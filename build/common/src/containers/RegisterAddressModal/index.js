import React from 'react'
import { reduxForm, Field } from 'redux-form/immutable'

import {
  AlignWrapper,
  Button,
  InPartLoading,
  Modal
} from '../../components'

import { InputSimple, SelectSimple } from '../../fields'

import {
  Container,
  FormContainer,
  SelectContainer,
  AddressInput,
  FieldContainer,
  ContentButton
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

function AddressForm({
  states,
  cities,
  citiesLoading,
  mainAccentText,
  getCities,
  handleSubmit,
  onSubmit
}) {
  return (
    <FormContainer onSubmit={handleSubmit(values => onSubmit(values.toJS()))}>
      <SelectContainer>
        <Field
          name='stateId'
          component={SelectSimple}
          label='Elegir departamento'
          onChange={e => getCities(e.target.value)}
        >
          <option>Elegir departamento</option>
          {states.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Field>
      </SelectContainer>
      <SelectContainer>
        <InPartLoading isLoading={citiesLoading} canAbsolute>
          <Field
            name='cityId'
            component={SelectSimple}
            label='Elegir ciudad'
          >
            <option>Elegir ciudad</option>
            {cities.map(item => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Field>
        </InPartLoading>
      </SelectContainer>
      <FieldContainer>
        <Field
          name='phone'
          component={InputSimple}
          label='Télefono'
          placeholder='Ingresar télefono'
          type='text'
        />
      </FieldContainer>
      <AddressInput>
        <Field
          name='value'
          component={InputSimple}
          label='Dirección de entrega'
          placeholder='Ingresar dirección de entrega'
          type='text'
        />
      </AddressInput>
      <br />
      <FieldContainer>
        <Field
          name='note'
          component={InputSimple}
          label='Datos adicionales'
          placeholder='Ingresar datos adicionales'
          type='text'
        />
      </FieldContainer>
      <ContentButton>
        <Button isSubmit>GUARDAR</Button>
      </ContentButton>
    </FormContainer>
  )
}

const AddressReduxForm = reduxForm({
  form: 'registerAddress',
  validate,
  warn
})(AddressForm)

function RegisterAddressModal({
  states,
  cities,
  citiesLoading,
  getCities,
  isVisible,
  isLoading,
  dialogName,
  closeModal,
  onSubmit,
  theme
}) {
  return (
    <Modal
      name={dialogName}
      isVisible={isVisible}
      isLoading={isLoading}
      closeModal={closeModal}
    >
      <Container>
        <h3>Añadir dirección</h3>
        <AlignWrapper>
          <AddressReduxForm
            citiesLoading={citiesLoading}
            cities={cities}
            states={states}
            mainAccentText={theme.colors.mainAccentText}
            getCities={getCities}
            onSubmit={onSubmit}
          />
        </AlignWrapper>
      </Container>
    </Modal>
  )
}

export default withStore(RegisterAddressModal)
