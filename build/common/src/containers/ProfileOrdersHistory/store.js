import { compose, lifecycle, withState, withHandlers } from 'recompose'
import { connect } from 'react-redux'

import { product as coreProduct, user as coreUser } from '../../redux'

import { dateHelpers } from '../../helpers'

function mapStateToProps(store) {
  const userImmutable = store.getIn(['user', 'user'])
  const user = userImmutable.size ? userImmutable.toJS() : {}
  const orders = store.getIn(['user', 'historyOrders']).toJS()
  const isLogged = !!store.getIn(["user", "user", "id"]) || false;
  const userName = Object.hasOwnProperty.call(user, 'firstName') ? `${user.firstName} ${user.lastName}` : ''

  const haveDetails = orders
    .map(order => !!order.details.length)
    .includes(true)

  const months = dateHelpers.getMonths()

  const numOfYears = 5

  const today = dateHelpers.moment()

  const year = parseInt(today.format('YYYY'))
  const month = parseInt(today.month()) + 1

  const sinceYear = parseInt(
    today.subtract(numOfYears, 'years').format('YYYY')
  )

  const years = Array.from({ length: numOfYears + 1 }, (_, k) => sinceYear + k)

  return {
    haveDetails,
    orders,
    userName,
    months,
    years,
    year,
    month,
    isLogged
  }
}

function mapDispatchToProps(dispatch) {
  const { redirectToDetailById } = coreProduct.actions

  const { getHistoryOrders } = coreUser.actions

  return {
    getOrders: (month, year) => dispatch(getHistoryOrders(month, year)),
    redirectToProduct: productId => dispatch(redirectToDetailById(productId))
  }
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState('currentYear', 'setCurrentYear', props => props.year),
  withState('currentMonth', 'setCurrentMonth', props => props.month),
  withHandlers({
    onMonthChange: props => val => {
      const { getOrders, currentYear, setCurrentMonth } = props

      getOrders(val, currentYear)

      setCurrentMonth(val)
    },
    onYearChange: props => val => {
      const { getOrders, currentMonth, setCurrentYear } = props

      getOrders(currentMonth, val)

      setCurrentYear(val)
    }
  }),
  lifecycle({
    componentDidMount() {
      const { getOrders, isLogged } = this.props
      if (isLogged){
        getOrders()
      }
    }
  })
)

export default enhance
