import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Button, Icon, OrderStatus } from "../";
import { withState } from "recompose";

import { priceFormatter, dateHelpers, clipboard } from "../../helpers";

import {
  ContainerMobile,
  ContainerDesktop,
  TCKContainer,
  DataSide,
  DataSideTop,
  DataItem,
  DataSideBot,
  DataContent,
  DataContentTop,
  DataStepItem,
  DataProduct,
  StepSlider,
} from "./styles";

const TrackingBox = withState(
  "clipbd",
  "setClipboard",
  null
)(({ trackingCode, clipbd, setClipboard }) => {
  return (
    <TCKContainer>
      <p
        onClick={() => {
          clipboard.copy(trackingCode);
          setClipboard(trackingCode);
        }}
      >
        Número de guía: &nbsp; {trackingCode}{" "}
        {clipbd && <span className="clipboard">Copiado ✓</span>}
      </p>
    </TCKContainer>
  );
});

const StepSliderContent = (data) => {
  return (
    <StepSlider>
      <div className={data.data.statusId >= 3 ? "actual-step" : ""}>
        <span></span>
        <p>Pago aprobado</p>
      </div>
      <div className={data.data.statusId >= 5 ? "actual-step" : ""}>
        <span></span>
        <p>En preparación</p>
      </div>
      <div className={data.data.statusId >= 6 ? "actual-step" : ""}>
        <span></span>
        <p>En camino</p>
      </div>
      <div className={data.data.statusId >= 7 ? "actual-step" : ""}>
        <span></span>
        <p>Entregado</p>
      </div>
    </StepSlider>
  );
};

TrackingBox.propTypes = {
  trackingCode: PropTypes.string,
};

function OrderInProgressCard({
  name,
  image,
  price,
  reference,
  quantity,
  createdAt,
  userName,
  orderId,
  trackingCode,
  goToProduct,
  statuses,
  statusId,
  totalProduct,
}) {
  let newStatuses = [...statuses];
  const foundInStatus = statuses.find((item) => item.statusId === statusId);

  if (foundInStatus) {
    const index = statuses.indexOf(foundInStatus);
    newStatuses = statuses.map((item, i) => ({
      ...item,
      isActived: i <= index,
    }));
  }
  return (
    <Fragment>
      <ContainerMobile>
        <div className="topContent">
          <div className="leftContent">
            <div className="image">
              <img src={image} alt={name} />
            </div>
            <div className="price">
              <h4>Total</h4>
              <p>{priceFormatter(price)}</p>
            </div>
          </div>
          <div className="rightContent">
            <h2>{name}</h2>
            <p className="ref">Ref: {reference}</p>
            <p className="orderDate">
              <span>Fecha de orden</span>
              <span>{dateHelpers.getShortDate(createdAt)}</span>
            </p>
            <p className="user">
              <span>Entregar a</span>
              <span>{userName}</span>
            </p>
            <p className="orderId">ORDEN #{orderId}</p>
          </div>
        </div>
        <div className="bottomContent">
          <div className="trackingBox">
            <div>
              <TrackingBox trackingCode={trackingCode} />
            </div>
          </div>
          <div className="orderStatusBox">
            <StepSliderContent data={foundInStatus} />

            {false && <OrderStatus
              statuses={newStatuses}
              linePercent={foundInStatus ? foundInStatus.percent : 0}
            />}
          </div>
        </div>
        <div className="buttonContainer">
          <Button action={goToProduct}>Comprar otra vez</Button>
        </div>
      </ContainerMobile>
      <ContainerDesktop>
        <DataSide>
          <DataSideTop>
            <DataItem>
              <p>Fecha de orden</p>
              <p>{dateHelpers.getShortDate(createdAt)}</p>
            </DataItem>
          </DataSideTop>
          <DataSideBot>
            <DataItem>
              <p># de orden</p>
              <p>{orderId}</p>
            </DataItem>
          </DataSideBot>
        </DataSide>
        <DataContent>
          <DataContentTop>
            <DataItem>
              <p>Total de compra</p>
              <p>{priceFormatter(price)}</p>
            </DataItem>
            <DataItem>
              <p>Estado</p>
              <p>{foundInStatus ? foundInStatus.name : "--"}</p>
            </DataItem>
            <div className="btn-ubication">
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0C3.13 0 0 3.13 0 7C0 11.17 4.42 16.92 6.24 19.11C6.64 19.59 7.37 19.59 7.77 19.11C9.58 16.92 14 11.17 14 7C14 3.13 10.87 0 7 0ZM7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.66304 9.23661 8.29893 8.76777 8.76777C8.29893 9.23661 7.66304 9.5 7 9.5Z"
                  fill="#1C69D4"
                />
              </svg>
            </div>
          </DataContentTop>
          <DataStepItem>
            <StepSliderContent data={foundInStatus} />
          </DataStepItem>
          <DataProduct>
            <div className="card-product-data">
              <div className="image-container">
                <img src={image} alt={name} />
              </div>
              <div className="product-data">
                <p className="bold-title">{name}</p>
                <p className="ref">SKU: {reference}</p>
                <p className="ref">Cantidad: {quantity}</p>
                <TrackingBox trackingCode={trackingCode} />
              </div>
            </div>
            <div className="btn-content">
              <Button action={goToProduct}>
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z"
                    stroke="white"
                    strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
                  <path
                    d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                    stroke="white"
                    strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
                </svg>
                Ver producto
              </Button>
            </div>
          </DataProduct>
        </DataContent>
      </ContainerDesktop>
      {false && (
        <>
          <div className="middleContent">
            <div className="product">
              <div className="image-container">
                <img src={image} alt={name} />
              </div>
              <div className="content">
                <h2>{name}</h2>
                <p className="ref">Ref: {reference}</p>
                <p className="ref">Cantidad: {quantity}</p>
                <p className="ref">Total: {priceFormatter(totalProduct)}</p>
                <div className="trackingBox">
                  <h4>Número de tracking</h4>
                  <div>
                    <TrackingBox trackingCode={trackingCode} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button action={goToProduct}>Comprar otra vez</Button>
            </div>
          </div>
          <div className="orderStatusBox">
            <OrderStatus
              statuses={newStatuses}
              linePercent={foundInStatus ? foundInStatus.percent : 0}
            />
          </div>
        </>
      )}
    </Fragment>
  );
}

OrderInProgressCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  reference: PropTypes.string,
  createdAt: PropTypes.string,
  userName: PropTypes.string,
  orderId: PropTypes.number,
  trackingCode: PropTypes.string,
  goToProduct: PropTypes.func,
  quantity: PropTypes.number.isRequired,
  totalProduct: PropTypes.string,
};

export default OrderInProgressCard;
