import React, {Component} from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'

import withStore from './store'

import { Card, Content, Item, TotalRow, ItemContentInfo } from './styles'

class PurchaseSummaryCard extends Component {

  renderOrderDetail = () => {
    const { orderInfo } = this.props

    if (Object.hasOwnProperty.call(orderInfo, 'orderDetails') && orderInfo.orderDetails.length > 0) {
      return map(orderInfo.orderDetails, item => {
        let totalPrice = 0

        if (
          Object.hasOwnProperty.call(item, 'price') &&
          Object.hasOwnProperty.call(item, 'requierInstalation') &&
          item.requierInstalation &&
          Object.hasOwnProperty.call(item, 'instalation') &&
          Object.hasOwnProperty.call(item.instalation, 'cost')) {
          totalPrice = item.price + item.instalation.cost
        } else if (Object.hasOwnProperty.call(item, 'price')) {
          totalPrice = item.price
        }

        return (
          <Item key={item.id}>
            <ItemContentInfo>
              <div>
                <p>{Object.hasOwnProperty.call(item, 'name') && item.name}</p>
                <div>{Object.hasOwnProperty.call(item, 'sku') && `Ref: ${item.sku}`}</div>
              </div>
              <div>{Object.hasOwnProperty.call(item, 'price') && `$${item.price.toLocaleString()}`}</div>
            </ItemContentInfo>

            {Object.hasOwnProperty.call(item, 'requierInstalation') &&
            item.requierInstalation &&
            Object.hasOwnProperty.call(item, 'instalation') &&
            Object.hasOwnProperty.call(item.instalation, 'cost') &&
            (
              <ItemContentInfo>
                <div>
                  <p>Instalación</p>
                </div>
                <div>{`$${item.instalation.cost.toLocaleString()}`}</div>
              </ItemContentInfo>
            )}

            <ItemContentInfo>
              <div>
                <p>Total</p>
              </div>
              <div>{`$${totalPrice.toLocaleString()}`}</div>
            </ItemContentInfo>
          </Item>
        )
      })
    }

    return null
  }

  render () {
    const { orderInfo } = this.props

    if (!Object.hasOwnProperty.call(orderInfo, 'id')) {
      return (
        <div>
          La orden no existe
        </div>
      )
    }

    return (
      <Card>
        <Content>
          <h3>Resumen de compra</h3>
          {this.renderOrderDetail()}

          <ItemContentInfo>
            <div>
              <div>Envío</div>
              <p>
                { Object.hasOwnProperty.call(orderInfo, 'address') &&
                Object.hasOwnProperty.call(orderInfo.address, 'city') &&
                Object.hasOwnProperty.call(orderInfo.address.city, 'name') &&
                `${orderInfo.address.city.name}, `}
                { Object.hasOwnProperty.call(orderInfo, 'address') &&
                Object.hasOwnProperty.call(orderInfo.address, 'value') &&
                orderInfo.address.value}
              </p>
            </div>
            <div>
              <br />
              {`$${Object.hasOwnProperty.call(orderInfo, 'priceDelivery') && orderInfo.priceDelivery.toLocaleString()}`}
            </div>
          </ItemContentInfo>

          <TotalRow>
            <p>Total</p>
            <div>
              {`$${Object.hasOwnProperty.call(orderInfo, 'total') && orderInfo.total.toLocaleString()}`}
            </div>
          </TotalRow>
        </Content>
      </Card>
    )
  }
}

PurchaseSummaryCard.propTypes = {
  orderInfo: PropTypes.object.isRequired
}

export default withStore(PurchaseSummaryCard)
