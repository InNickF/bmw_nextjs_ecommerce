import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { Icon } from '../'
import { Link } from '../../routes/bmw'
import Element from './styles'

function MobileDefaultHeader({
  showLoginDialog,
  isLogged,
  userName
}) {
  return (
    <Element>
      {isLogged ? (
        <Fragment>
          <Icon name='profile' fill='white' width={19} height={19} />
          <Link route="profile" >
            <a>Hola, {userName}</a>
          </Link>
        </Fragment>
      ) : (
          <Fragment>
            <Icon name='profile' fill='white' width={19} height={19} />
            <button onClick={showLoginDialog}>
              Registrarse / Ingresar
            </button>
          </Fragment>
        )
      }
    </Element>
  )
}

MobileDefaultHeader.defaultProps = {
  isLogged: false,
  userName: ''
}

MobileDefaultHeader.propTypes = {
  isLogged: PropTypes.bool,
  userName: PropTypes.string,
  showLoginDialog: PropTypes.func.isRequired
}

export default withTheme(MobileDefaultHeader)
