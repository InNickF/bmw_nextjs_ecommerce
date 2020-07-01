import React from 'react'
import PropTypes from 'prop-types'
import { Text, Input, Content } from './styles'

const InputSimple = ({
  input,
  label,
  type,
  placeholder,
  classNames,
  meta: { touched, error, warning }
}) => (
    <Content className={classNames}>
      <span>{label}</span>
      <Input {...input} placeholder={placeholder} type={type} />
      <div>
        {touched &&
          ((error && (
            <Text className="highlight" color='highlight' size='0.8em' margin='5px 0px 10px 0px' >
              {error}
            </Text>
          )) ||
            (warning && (
              <Text className="highlight" color='highlight' size='0.8em' margin='5px 0px 10px 0px'>
                {warning}
              </Text>
            )))}
      </div>
    </Content>
  )

InputSimple.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string
}

InputSimple.defaultProps = {
  type: 'text',
  placeholder: ''
}

export default InputSimple
