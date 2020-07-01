import React from 'react'
import { reduxForm, Field } from 'redux-form/immutable'
import PropTypes from 'prop-types'
import { Icon } from '../'

import { InputContainer } from './styles'


function SearchBox(props) {
  return (
    <InputContainer
      theme={props.theme}
      onChange={(event) => {
        props.getProducts({ q: event.target.value })
      }}
      onSubmit={
        props.handleSubmit(values => {
          props.onSearch(values.get('q'))
          props.toggleSearch(false)
        })
      }
    >
      <Field
        component='input'
        type='text'
        placeholder={props.placeholder ? props.placeholder : 'Buscar productos'}
        name='q'
        autoComplete='off'
      />
      <button>
        <Icon name='find' fill={props.iconColor} />
      </button>
    </InputContainer>
  )
}

SearchBox.propTypes = {
  theme: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  toggleSearch: PropTypes.func.isRequired,
  iconColor: PropTypes.string.isRequired
}

export default reduxForm({
  form: 'productsSearch',
})(SearchBox)
