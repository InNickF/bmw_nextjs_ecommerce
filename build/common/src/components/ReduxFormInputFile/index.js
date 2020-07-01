import React from 'react'
import PropTypes from 'prop-types'

function ReduxFormInputFile (props) {
  const { input: { onChange } } = props
  return (
    <input
      type='file'
      onChange={
        e => {
          e.preventDefault()
          onChange(...e.target.files)
        }
      }
    />
  )
}

ReduxFormInputFile.propTypes = {
  input: PropTypes.object.isRequired
}

export default ReduxFormInputFile
