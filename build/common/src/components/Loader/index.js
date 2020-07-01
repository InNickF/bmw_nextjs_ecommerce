import PropTypes from 'prop-types'
import Loader from './styles'

const loaderTypes = ['circle', 'lines', 'points']

Loader.defaultProps = {
  type: loaderTypes[0],
  color: 'black'
}

Loader.propTypes = {
  type: PropTypes.oneOf(loaderTypes),
  color: PropTypes.string
}

export default Loader
