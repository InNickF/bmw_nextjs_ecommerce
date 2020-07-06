import React from "react";
import PropTypes from "prop-types";

import {
  OrderInProgressCard,
  AlignWrapper,
  InPartLoading,
} from "../../components";

import { Container } from "./styles";

import withStore from "./store";

function OrdersInProgress({
  haveDetails,
  orders,
  userName,
  statuses,
  redirectToProduct,
  isLoading,
}) {
  return (
    <Container>
      <InPartLoading isLoading={isLoading} canAbsolute />
      {!haveDetails && !isLoading ? (
        <AlignWrapper>
          <p>No se encontraron registros</p>
        </AlignWrapper>
      ) : (
        orders.map((order) =>
          order.details.map((detail) => {
            let today = new Date(detail.createdAt);
            let initDis = new Date(detail.initDateDiscount);
            let endDis = new Date(detail.endDateDiscount);
            let isDiscountAvalidable = today >= initDis && today <= endDis;
            let priceAvalidable = !isDiscountAvalidable
              ? detail.price * detail.quantity
              : (detail.price -
                  (detail.price * detail.discountPercentage) / 100) *
                detail.quantity;
            let iva = (priceAvalidable * 16) / 100;
            let priceNotIva = priceAvalidable - iva;
            let totalAvalidable = priceNotIva + iva;
            console.log(order)
            return (
              <OrderInProgressCard
                key={detail.id}
                name={detail.name}
                image={detail.image}
                price={totalAvalidable}
                statuses={statuses}
                reference={detail.sku}
                quantity={detail.quantity}
                totalProduct={detail.total}
                createdAt={order.updatedAt}
                userName={userName}
                orderId={order.id}
                statusId={order.orderStatusId}
                trackingCode={order.transactionCode}
                goToProduct={() => redirectToProduct(detail.productId)}
              />
            );
          })
        )
      )}
    </Container>
  );
}

OrdersInProgress.propTypes = {
  orders: PropTypes.array.isRequired,
  userName: PropTypes.string,
  redirectToProduct: PropTypes.func,
  haveDetails: PropTypes.bool,
};

OrdersInProgress.defaultProps = {
  orders: [],
  haveDetails: false,
  userName: "",
};

export default withStore(OrdersInProgress);
