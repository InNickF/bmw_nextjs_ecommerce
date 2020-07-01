import React from 'react'
import PropTypes from 'prop-types'

import { Container, Content, Line } from './styles'

function OrderStatus ({ statuses, linePercent }) {
  // height for mobile box
  const heightBase = 60
  const lineHeight = statuses.length * heightBase - heightBase / 2 - 20

  // width for desktop box
  const widthBase = 200
  const lineWidth = statuses.length * widthBase - widthBase + 15
  // (120 * 4) + (120 * 4 - 120)
  return (
    <Container
      lineHeight={lineHeight}
      lineWidth={lineWidth}
      widthDesktop={widthBase * statuses.length}
    >
      <Line className='line' percent={linePercent}>
        <div className='progress' />
      </Line>
      <Content heightBase={heightBase} widthBase={widthBase}>
        {statuses.map(item => (
          <div
            className={`element ${item.isActived ? 'is-actived' : ''}`}
            key={item.key}
          >
            <li className='circle'>
              <img src={item.image} />
            </li>
            <h5>{item.name}</h5>
          </div>
        ))}
      </Content>
    </Container>
  )
}

OrderStatus.propTypes = {
  state: PropTypes.number.isRequired
}

export default OrderStatus
