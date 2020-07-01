import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { Blank, Card, CardShadow, CardContainer, Number, Middle } from './styles'
import { Icon, PageText } from '../index'

function WarrantyBox (props) {
  return (
    <CardContainer>
      <Number>
        {props.number}
      </Number>
      <Middle>
        {props.shadow
          ? <CardShadow>
            <Icon name={props.icon} fill={props.fill} width={props.width} height={props.height} />
          </CardShadow>
          : <Card>
            <Icon name={props.icon} fill={props.fill} width={props.width} height={props.height} />
          </Card>
        }
        <PageText
          text={props.text}
        />
      </Middle>
      <Blank />
    </CardContainer>
  )
}

WarrantyBox.defaultProps = {
  shadow: false,
  number: '',
  fill: 'black',
  width: 80,
  height: 80
}

WarrantyBox.propTypes = {
  icon: PropTypes.string.isRequired,
  shadow: PropTypes.bool,
  number: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default withTheme(WarrantyBox)
