import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

const iconList = [
  '404',
  'ajuste',
  'advert',
  'bolsa',
  'cart',
  'add-circular',
  'add-square-button',
  'circular-remove',
  'calendar',
  'cancel-button',
  'check-mark',
  'check-box',
  'check-box-error',
  'check-paper',
  'down-arrow',
  'dropdown-arrow',
  'edit',
  'eye',
  'facebook',
  'facebook-circular',
  'find',
  'garbage',
  'heart',
  'info',
  'instagram-circular',
  'instagram',
  'minus-square-button',
  'right-arrow',
  'menu',
  'menUnderWear',
  'paper',
  'paper-mail',
  'papers',
  'pdf-page',
  'profile',
  'picture',
  'priceTag',
  'shipping',
  'shirt',
  'screwdriver',
  'success',
  'support',
  'twitter',
  'twitter-circular',
  'transfer',
  'whatsapp',
  'warning',
  'phone-receiver',
  'close-envelope',
  'filter'
]

function Icon(props) {
  const SVGIcon = require(`./icons/${props.name}`).default
  return (
    <SVGIcon {...props} fill={props.fill || props.theme.colors.main} />
  )
}

Icon.defaultProps = {
}

Icon.propTypes = {
  name: PropTypes.oneOf(iconList).isRequired,
  fill: PropTypes.string,
  theme: PropTypes.object
}

export default withTheme(Icon)
