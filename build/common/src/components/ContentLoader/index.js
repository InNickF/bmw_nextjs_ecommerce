import React from 'react'
import PropTypes from 'prop-types'
import ContentLoader, { Facebook } from 'react-content-loader'

function Loader ({
  fb
}) {
  if (fb) {
    return <Facebook />
  }

  return <ContentLoader />
}

Loader.propTypes = {
  fb: PropTypes.bool
}

export default Loader
