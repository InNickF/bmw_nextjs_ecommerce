import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Button } from '../'

import { priceFormatter, dateHelpers } from '../../helpers'

import {
  ContainerMobile, ContainerDesktop, DataSide,
  DataSideTop,
  DataItem,
  DataSideBot,
  DataContent,
  DataContentTop,
  DataStepItem,
  DataProduct
} from './styles'

function OrderHistoryCard({
  name,
  image,
  price,
  reference,
  createdAt,
  userName,
  orderId,
  goToProduct,
  goToWarrenty,
  qty
}) {
  return (
    <Fragment>
      <ContainerMobile>
        <div className='topContent'>
          <div className='leftContent'>
            <div className='image'>
              <img src={image} alt={name} />
            </div>
            <div className='price'>
              <h4>Total</h4>
              <p>{priceFormatter(price)}</p>
            </div>
          </div>
          <div className='rightContent'>
            <h2>{name}</h2>
            <p className='ref'>Ref: {reference}</p>
            <p className='ref'>Cantidad: {qty}</p>
            <p className='orderDate'>
              <span>Fecha de orden</span>
              <span>{dateHelpers.getShortDate(createdAt)}</span>
            </p>
            <p className='user'>
              <span>Entregado a</span>
              <span>{userName}</span>
            </p>
            <p className='orderId'>ORDEN #{orderId}</p>
          </div>
        </div>
        <div className='buttonContainer'>
          <Button action={goToWarrenty}>Solicitar devolución</Button>
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
              <p>Entregado</p>
              {/* <p>{foundInStatus?.name || "--"}</p> */}
            </DataItem>
          </DataContentTop>
          <DataProduct>
            <div className="card-product-data">
              <div className='image-container'>
                <img src={
                  image || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
                } alt={name} />
              </div>
              <div className="product-data">
                <p className="bold-title">{name}</p>
                <p className='ref'>SKU: {reference}</p>
                <p className='ref'>Cantidad: {qty}</p>
              </div>
            </div>
            <div className="btn-content">
              <Button action={goToProduct}>
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="white" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" />
                  <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="white" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" />
                </svg>
                Ver producto
              </Button>
              <Button type='line' condensed action={goToWarrenty}>
                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.512619 16.7972L10.7327 20.337C11.0651 19.7796 11.5357 19.3281 12.0938 19.0313C12.652 18.7345 13.2766 18.6036 13.9002 18.6527L19.3017 1.3695L23.6045 0.959473L23.7559 2.72938L20.5547 3.02437L15.5092 19.2043C16.0267 19.5475 16.4485 20.0291 16.7313 20.6C17.0142 21.1708 17.148 21.8104 17.119 22.4535C17.0901 23.0966 16.8995 23.72 16.5667 24.2602C16.2339 24.8004 15.7708 25.2379 15.2248 25.5282C14.6787 25.8184 14.0692 25.9509 13.4586 25.9121C12.8479 25.8734 12.258 25.6647 11.749 25.3075C11.2401 24.9503 10.8303 24.4574 10.5617 23.879C10.293 23.3006 10.175 22.6576 10.2197 22.0155L-0.000347137 18.4757L0.512619 16.7972ZM12.0642 23.1188C12.1937 23.3949 12.3862 23.633 12.6244 23.8119C12.8626 23.9908 13.1391 24.105 13.4294 24.1442C13.7196 24.1833 14.0146 24.1464 14.288 24.0365C14.5614 23.9267 14.8047 23.7474 14.9963 23.5146C15.1879 23.2819 15.3218 23.0028 15.3861 22.7024C15.4504 22.402 15.4431 22.0894 15.3649 21.7927C15.2866 21.496 15.1398 21.2242 14.9376 21.0016C14.7353 20.779 14.4839 20.6125 14.2057 20.517C13.9846 20.4397 13.7511 20.4092 13.5187 20.4274C13.2863 20.4457 13.0596 20.5122 12.8518 20.6232C12.6435 20.7336 12.458 20.8862 12.3058 21.0722C12.1536 21.2582 12.0377 21.4739 11.9648 21.7071C11.8919 21.9403 11.8634 22.1862 11.881 22.431C11.8985 22.6758 11.9617 22.9145 12.067 23.1335L12.0642 23.1188Z" fill="#1C69D4" />
                  <path d="M0.73924 14.4936L4.24311 3.28418L15.248 7.09834L11.7442 18.3078L0.73924 14.4936ZM5.31669 5.52017L2.86399 13.3638L10.6734 16.0718L13.1261 8.22518L5.31669 5.52017Z" fill="#1C69D4" />
                </svg>
                Devolución
            </Button>
            </div>
          </DataProduct>

        </DataContent>
      </ContainerDesktop>
    </Fragment>
  )
}

OrderHistoryCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  qty: PropTypes.number,
  reference: PropTypes.string,
  createdAt: PropTypes.string,
  userName: PropTypes.string,
  orderId: PropTypes.number,
  goToProduct: PropTypes.func,
  goToWarrenty: PropTypes.func
}

export default OrderHistoryCard
