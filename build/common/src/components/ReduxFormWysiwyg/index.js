import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const NoSSRReactQuill = dynamic(import('react-quill'), {
  ssr: false
})

function ReduxFormWysiwyg (props) {
  const { input: { value, onChange } } = props
  return (
    <NoSSRReactQuill
      value={value}
      onChange={onChange}
      style={{ height: 300 }}
    />
  )
}

ReduxFormWysiwyg.propTypes = {
  input: PropTypes.object.isRequired
}

export default ReduxFormWysiwyg
