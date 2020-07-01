import React from 'react'
import PropTypes from 'prop-types'
import { nextRouter } from '../../helpers'

import { OrderHistoryCard, AlignWrapper } from '../../components'

import { Container, Filters } from './styles'

import withStore from './store'
import { TitleHeader } from '../../components/WishListCard/styles'
import { ProfileOrdersInProgress } from '..'

function ProfileOrdersHistory({
  haveDetails,
  orders,
  userName,
  redirectToProduct,
  months,
  years,
  currentMonth,
  currentYear,
  onYearChange,
  onMonthChange,
  ...props
}) {
  const { Router } = nextRouter
  let isLastOrder = false
  return (
    <Container>
      <TitleHeader>Historial de compras</TitleHeader>
{/*       <Filters>
        <p>En curso</p>
        <div>
          <select
            defaultValue={currentMonth}
            onChange={e => onMonthChange(e.target.value)}
          >
            {months.map((item, index) => (
              <option key={index} value={index + 1}>
                {item}
              </option>
            ))}
          </select>
          <select
            defaultValue={currentYear}
            onChange={e => onYearChange(e.target.value)}
          >
            {years.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </Filters> */}
      <ProfileOrdersInProgress />
      {!haveDetails ? (
        <AlignWrapper>
          <p>No se encontraron registros</p>
        </AlignWrapper>
      ) :
        (
          <>
 {/*            <Filters>
              <p>Órdenes pasadas</p>
              <div>
                <select
                  defaultValue={currentMonth}
                  onChange={e => onMonthChange(e.target.value)}
                >
                  {months.map((item, index) => (
                    <option key={index} value={index + 1}>
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  defaultValue={currentYear}
                  onChange={e => onYearChange(e.target.value)}
                >
                  {years.map(item => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </Filters> */}
            {orders.map(order => {
              if (order.orderStatusId >= 7) {
                isLastOrder = true
               return  order.details.map(detail => {
                  let today = new Date(detail.createdAt);
                  let initDis = new Date(detail.initDateDiscount);
                  let endDis = new Date(detail.endDateDiscount);
                  let isDiscountAvalidable = today >= initDis && today <= endDis;
                  let priceAvalidable = !isDiscountAvalidable ? detail.price * detail.quantity : (detail.price - (detail.price * detail.discountPercentage) / 100) * detail.quantity;
                  let iva = (priceAvalidable * 16) / 100;
                  let priceNotIva = priceAvalidable - iva;
                  let totalAvalidable = priceNotIva + iva;
                  return <OrderHistoryCard
                    key={detail.id}
                    name={detail.name}
                    image={detail.image}
                    price={totalAvalidable}
                    reference={detail.sku}
                    createdAt={order.updatedAt}
                    userName={userName}
                    orderId={order.id}
                    qty={detail.quantity}
                    goToProduct={() => redirectToProduct(detail.productId)}
                    goToWarrenty={() =>
                      Router.pushRoute(`/pqr?tab=devoluciones`)
                    }
                  />
                })
              }
            }
            )}
            {!isLastOrder && (
              <AlignWrapper>
                <p>No se encontraron registros</p>
              </AlignWrapper>
            )}
          </>
        )}
    </Container>
  )
}

ProfileOrdersHistory.propTypes = {
  orders: PropTypes.array.isRequired,
  years: PropTypes.array.isRequired,
  months: PropTypes.array.isRequired,
  userName: PropTypes.string,
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  redirectToProduct: PropTypes.func,
  onMonthChange: PropTypes.func,
  onYearChange: PropTypes.func,
  haveDetails: PropTypes.bool
}

ProfileOrdersHistory.defaultProps = {
  orders: [],
  months: [],
  years: [],
  haveDetails: false,
  userName: ''
}

export default withStore(ProfileOrdersHistory)
