import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import {
  app as coreApp,
  cart as coreCart,
  product as coreProduct,
  user as coreUser
} from '../../redux'

const statusesTpl = [
  {
    key: 'PAGO_APROBADO',
    name: 'Orden y pago aprobado',
    image: 'https://autogermana.s3.amazonaws.com/static/icons/pago-exitoso.png',
    percent: 60
  },
  {
    key: 'PREPARACION',
    name: 'Alistamiento de la orden',
    image: 'https://autogermana.s3.amazonaws.com/static/icons/orden.png',
    percent: 300
  },
  {
    key: 'EN_RUTA',
    name: 'Despacho de la orden',
    image: 'https://autogermana.s3.amazonaws.com/static/icons/shipping.png',
    percent: 540
  },
  {
    key: 'ENTREGADA',
    name: 'Orden entregada',
    image: 'https://autogermana.s3.amazonaws.com/static/icons/ready.png',
    percent: 600
  }
]

function mapStateToProps(store) {
  const userImmutable = store.getIn(['user', 'user'])
  const user = userImmutable.size ? userImmutable.toJS() : {}
  const orders = store.getIn(['user', 'inProgressOrders']).toJS()
  const storeStatuses = store
    .get('cart')
    .get('orderStatus')
    .toJS()
  // inProgress
  const userName = Object.hasOwnProperty.call(user, 'firstName')
    ? `${user.firstName} ${user.lastName}`
    : ''

  const haveDetails = orders
    .map(order => !!order.details.length)
    .includes(true)

  const statusesWithId = statusesTpl.map(item => {
    const found = storeStatuses.find(i => i.code === item.key)

    return {
      ...item,
      statusId: found ? found.id : 0
    }
  })
  const isLogged = !!store.getIn(["user", "user", "id"]) || false;
  return {
    isLoading: coreApp.selectors.isPartLoadingSelector(store, 'inProgress'),
    haveDetails,
    orders,
    statuses: statusesWithId,
    userName,
    isLogged
  }
}

function mapDispatchToProps(dispatch) {
  const { redirectToDetailById } = coreProduct.actions
  const { getInProgressOrders } = coreUser.actions
  const { getOrderStatus } = coreCart.actions
  return {
    getOrderStatus: () => dispatch(getOrderStatus()),
    getOrders: () => dispatch(getInProgressOrders()),
    redirectToProduct: productId => dispatch(redirectToDetailById(productId))
  }
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      const { getOrders, getOrderStatus, isLogged } = this.props
      if (isLogged) {
        getOrders()
        getOrderStatus()
      }
    }
  })
)

export default enhance
