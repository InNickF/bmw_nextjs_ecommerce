import React from 'react'
import { reduxForm, Field } from 'redux-form/immutable'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { Icon } from '../'

import { Form } from './styles'

function SearchInput (props) {
  return (
    <Form
      theme={props.theme}
      onSubmit={props.handleSubmit(values => {
        props.onSubmit(values.get('queryText'))
      })}
    >
      <Field
        type='text'
        component='input'
        name='queryText'
        placeholder={props.placeholder}
      />
      <button>
        <Icon
          name='find'
          fill={props.theme.colors.main}
        />
      </button>
    </Form>
  )
}

SearchInput.defaultProps = {
  placeholder: 'Buscar'
}

SearchInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  placeholder: PropTypes.string
}

export default withTheme(reduxForm({
  form: 'searchEvents'
})(SearchInput))
