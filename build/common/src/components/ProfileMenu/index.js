import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { Icon } from '../'
import { Link } from '../../../src/routes/bmw'

import Container from './styles'

function ProfileMenu(props) {
  return (
    <Container className='profile-menu'>
      <Link route="profile" >
        <a>
          <span>MI PERFIL</span>
        </a>
      </Link>
      <Link route="wishlist" >
        <a>
          <span>WISHLIST</span>&nbsp;
          <Icon name='heart' width={20} height={20} />
        </a>
      </Link>
      <Link route="home" >
        <a onClick={props.logout}>
          <span>CERRAR SESIÓN</span>&nbsp;
        </a>
      </Link>
   {/*    <a onClick={props.logout}>
        <span>Cerrar sesión </span>
      </a> */}
    </Container>
  )
}

ProfileMenu.propTypes = {
  logout: PropTypes.func.isRequired
}

export default withTheme(ProfileMenu)
