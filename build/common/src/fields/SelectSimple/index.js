import React from 'react'
import PropTypes from 'prop-types'
import { Text, Content } from './styles'

const SelectSimple = ({
  input,
  label,
  type,
  children,
  meta: { touched, error, warning }
}) => (
  <Content>
    <span>{label}</span>
    <select {...input}>
      {children}
    </select>
    <div>
      {touched &&
      ((error && (
        <Text color='highlight' size='0.8em'>
          {error}
        </Text>
      )) ||
        (warning && (
          <Text color='highlight' size='0.8em'>
            {warning}
          </Text>
        )))}
    </div>
  </Content>
)

SelectSimple.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default SelectSimple
