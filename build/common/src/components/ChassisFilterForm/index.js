import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { reduxForm, Field } from 'redux-form/immutable'

import { Icon } from '../'

import {
  Container,
  ChassisInput
  // SaveChassis
} from './styles'

function ChassisFilterForm ({
  checkIfAuthenticated,
  children,
  onSubmit,
  handleSubmit,
  toggleModal,
  theme
}) {
  return (
    <Container
      className='chassis-filter'
      onSubmit={handleSubmit(values => onSubmit(values.toJS()))}
    >
      <ChassisInput>
        <button type='button' onClick={toggleModal}>
          <Icon name='info' fill={theme.colors.textColor} />
        </button>
        <Field
          component='input'
          name='chassis'
          placeholder='No. Chasis'
          required
        />
        <button>
          <Icon
            name='transfer'
            fill={theme.colors.mainAccentText}
            height={24}
            width={24}
          />
        </button>
      </ChassisInput>
      {/* <SaveChassis htmlFor='saveChassis'>
        <Field
          component='input'
          name='saveChassis'
          type='checkbox'
          id='saveChassis'
          onChange={e => {
            const formName = 'chassisFilter'
            const fieldName = 'saveChassis'
            const value = e.target.checked

            checkIfAuthenticated(formName, fieldName, value)
          }}
        />
        <p>Guardar número de chasis</p>
      </SaveChassis> */}
      {children}
    </Container>
  )
}

ChassisFilterForm.propTypes = {
  children: PropTypes.node,
  checkIfAuthenticated: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  theme: PropTypes.object
}

const chassisFilter = reduxForm({
  form: 'chassisFilter'
})

export default withTheme(chassisFilter(ChassisFilterForm))
