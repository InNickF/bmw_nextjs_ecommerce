import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { Icon } from '../'
import { Link } from '../../routes/bmw'

import Title from './styles'

function PageTitle(props) {
  return (
    <Title {...props}>
      {props.link ? (
        <Link href={props.link}>
          <a>
            {
              props.leftArrow && (
                <Icon
                  name='right-arrow'
                  fill={props.arrowColor}
                />
              )
            }
            {props.text}
          </a>
        </Link>
      )
        : <div>
          {
            props.leftArrow && (
              <Icon
                name='right-arrow'
                fill={props.arrowColor}
              />
            )
          }
          <h4>{props.text}</h4>
        </div>}
    </Title>
  )
}

PageTitle.defaultProps = {
  leftArrow: false,
  onClick: () => { }
}

PageTitle.propTypes = {
  leftArrow: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  link: PropTypes.string,
  arrowColor: PropTypes.string
}

export default withTheme(PageTitle)
