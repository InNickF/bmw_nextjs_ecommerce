import React from 'react'
import PropTypes from 'prop-types'
import { Text, TextArea, Content } from './styles'

const TextAreaSimple = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <Content>
    <span>{label}</span>
    <TextArea {...input} cols='30' rows='10'>{placeholder}</TextArea>
    <div>
      {touched &&
      ((error && (
        <Text color='highlight' size='0.8em' margin='5px 0px 10px 0px' >
          {error}
        </Text>
      )) ||
        (warning && (
          <Text color='highlight' size='0.8em' margin='5px 0px 10px 0px'>
            {warning}
          </Text>
        )))}
    </div>
  </Content>
)

TextAreaSimple.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string
}

TextAreaSimple.defaultProps = {
  type: 'text',
  placeholder: ''
}

export default TextAreaSimple
