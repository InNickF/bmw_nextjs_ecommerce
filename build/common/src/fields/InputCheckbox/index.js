import React from 'react'
import PropTypes from 'prop-types'
import { Text, Content, ContentInput } from './styles'

const InputCheckbox = ({
  input,
  label,
  type,
  link,
  meta: { touched, error, warning }
}) => (
  <Content>
    <ContentInput>
      <input {...input} type={type} />
      <span>
        <a target='_blank' href={link}>
          {label}
        </a>
      </span>
    </ContentInput>
    <div>
      {touched &&
      ((error && (
        <Text color='highlight' align='center' size='0.8em'>
          {error}
        </Text>
      )) ||
        (warning && (
          <Text color='highlight' align='center' size='0.8em'>
            {warning}
          </Text>
        )))}
    </div>
  </Content>
)

InputCheckbox.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string,
  link: PropTypes.string
}

InputCheckbox.defaultProps = {
  type: 'checkbox',
  link: '/'
}

export default InputCheckbox
