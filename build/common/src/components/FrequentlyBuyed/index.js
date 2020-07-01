import React, { useState, useEffect } from 'react'

import { Link } from '../../routes/bmw';
import {
  Container,
  IconStyle
} from './styles'
import { product } from '../../redux/product/selectors';
import { priceFormatter } from '../../helpers';
import { useSelector } from 'react-redux';

function FrequentlyBuyed({ responsive, products, pay, addToWishlist, productTarget, addProductToCart }) {

  const { addWishlistSuccess } = useSelector(state => ({
    addWishlistSuccess: state.get('product').get('addWishlistSuccess')
  }))

  const [productsSelected, setProductsSelected] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [expandItems, toggleExpandItems] = useState(false);
  const [queueWishlist, setQueueWishlist] = useState([])

  useEffect(() => {
    if (addWishlistSuccess && queueWishlist.length >= 1) {
      addToWishlist(queueWishlist[0])
      queueWishlist.shift()
      setQueueWishlist(queueWishlist)
    }
  }, [addWishlistSuccess])

  const handleChangePrice = (e, product) => {
    if (e.target.checked) {
      setTotalPrice(totalPrice + product.price)
    } else {
      setTotalPrice(totalPrice - product.price)
    }

    const isProduct = productsSelected.find(item => item.id == product.id)
    if (!isProduct && e.target.checked)
      setProductsSelected([...productsSelected, product]);
    else {
      const index = productsSelected.findIndex(item => item.id == product.id)
      const products = [...productsSelected];
      products.splice(index, 1)
      setProductsSelected(products)
    }
  }

  const handleAddToWishlist = () => {
    addToWishlist(productTarget.id)
    if (Array.isArray(products)) {
      const wishlistPending = []
      products.map((item, i) => { wishlistPending.push(item.relatedProductId) })
      setQueueWishlist(wishlistPending)
    }
  }

  return (
    <Container className={responsive && "frequent-responsive-container"}>
      <h3>Complementa tu compra con estos artículos.</h3>
      <div className={`frequently-item ${Array.isArray(products) && products.length > 2 ? 'column-more' : ''}`}>
        {Array.isArray(products) && products.length > 2 &&
          <div className="btn-expand" onClick={() => toggleExpandItems(!expandItems)}>
            Ver todos
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6.99994 7L12.9999 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>}
        <div className={`flex-responsive content-high-auto ${Array.isArray(products) && products.length > 2 && expandItems ? 'content-high' : ''}`}>
          {Array.isArray(products) && products.map((item, i) => {
            if (!item.relatedProduct.stock)
              return null

            return <>
              {(i !== 0) &&
                <div className="frequently-more">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.21052 0H8.78946C8.92981 0 8.99998 0.0592588 8.99998 0.177776V15.8221C8.99998 15.9406 8.92981 15.9999 8.78946 15.9999H7.21052C7.07017 15.9999 7 15.9406 7 15.8221V0.177776C7 0.0592588 7.07017 0 7.21052 0Z" fill="black" />
                    <path d="M0.186047 7H15.814C15.938 7 16 7.07018 16 7.21053V8.78947C16 8.92982 15.938 9 15.814 9H0.186047C0.0620156 9 0 8.92982 0 8.78947V7.21053C0 7.07018 0.0620156 7 0.186047 7Z" fill="black" />
                  </svg>
                </div>
              }
              <label className="checkbox-button">
                <input type="checkbox" className="checkbox-button__input" id="choice1-1" name="choice1" onChange={(e) => handleChangePrice(e, item.relatedProduct)} />
                <span className="checkbox-button__control"></span>
                <div className="checkbox-button__label">
                  <img
                    src={
                      Object.hasOwnProperty.call(item, 'relatedProduct') && item.relatedProduct.imageProducts[0]?.image || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
                    }
                    alt='Texto' />
                  <Link route="product-detail" params={{ slug: Object.hasOwnProperty.call(item, 'relatedProduct') ? item.relatedProduct.slug : ' ' }}>
                    <a>Vista rápida</a>
                  </Link>
                </div>
              </label>
            </>
          }
          )}
        </div>
        <div className="frequently-cost">
          <p>Total con esto</p>
          <h2>{priceFormatter(productTarget.price + totalPrice)}</h2>
        </div>
        <div className="frequently-btn">
          <button className="btn-add-car" disabled={productsSelected.length === 0} onClick={() => addProductToCart(productsSelected)}>
            <IconStyle name='cart' width={20} height={18} fill='white' />
            <span>Añadir al carrito</span>
          </button>
          <button className="btn-wishlist" onClick={handleAddToWishlist}>
            <IconStyle
              name='heart'
              width={17}
              height={14}
              fill='black'
            />
            <span>Añadir a lista de deseos</span>
          </button>
        </div>
      </div>
    </Container >
  )
}

export default FrequentlyBuyed
