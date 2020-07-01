import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { Icon } from '../'
import { Link } from '../../routes/bmw'

import { Container } from './styles'
import capitalizeBrands from '../../helpers/capitalizeBrands'

const Breadcrumbs = ({ links, theme }) => {
  if (links && links[0] && links.length >= 1) {
    return (
      <Container className='breadcrumbs'>
        <Link route="home">
          <a>Home</a>
        </Link>
        {!!links.length && (<span>/</span>)}
        {links.map((item, i) => (
          <Fragment key={i}>
            <Link route={item.route} >
              <a>{capitalizeBrands(item.label.toLowerCase())}</a>
            </Link>
            {i !== links.length - 1 &&
              <span>/</span>}
          </Fragment>
        ))}
      </Container>
    )
  } else {
    return (
      <Container className='breadcrumbs'>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </Container>
    )
  }
}

Breadcrumbs.defaultProps = {
  links: []
}

export default withTheme(Breadcrumbs)
