import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import {
  Breadcrumbs,
  Wrapper,
  ProductsSlider,
  ProductDetail as Detail
} from '../../common/components'

import { Header, VehicleFilterBox } from '../../common/containers'
import { getOriginalUrl } from '../../common/helpers'

import { product as coreProduct } from '../../common/redux'

import Footer from '../../components/Footer'

import { Link } from '../../common/src/routes/bmw'

import Router from 'next/router'

import withStore from './store'

import {
  FeaturedProducts,
  BreadcrumbsContainer,
  Separator,
  SeparatorTop,
  BackBtn,
  ContainerError
} from '../../styles/product-detail'

const productActions = coreProduct.actions

class ProductDetail extends React.Component {

  static async getInitialProps({ query, store, req }) {
    const { getProducts } = coreProduct.actions;
    store.dispatch(productActions.getProduct(query.slug))
    return { originalUrl: getOriginalUrl(req), query: query }
  }

  state = {
    vehicleFilter: false,
    isCompatibility: false
  }

  componentDidMount() {

    if (!Object.hasOwnProperty.call(this.props.product, 'id')) {
      return null
    }
    if (this.props.isLogged) {
      this.props.checkProductInWishlist()
      this.loadVehicles()
    }
    this.loadCarouselRelationProduct()
  }

  UNSAFE_componentWillReceiveProps(prevProps) {
    if (prevProps.product && prevProps.product.id && prevProps.product.productVariations) {
      if (prevProps.compatibility.model && prevProps.compatibility.model.id && prevProps.compatibility.serie) {
        this.setState({
          isCompatibility: prevProps.product.productVariations.some(variation => {
            return ((variation.vehicleModelId == prevProps.compatibility.model.id && variation.vehicleSerieId == prevProps.compatibility.serie.id && variation.yearStart <= prevProps.compatibility.year && variation.yearEnd >= prevProps.compatibility.year) || (variation.vehicleSerieId == 147))
          })
        })
      }
    }
  }

  loadVehicles = () => {
    const { product, user } = this.props
    return this.props.loadVehicles(product.sku, user.id)
  };

  loadCarouselRelationProduct = () => {
    const { product } = this.props
    this.props.loadCarouselRelation(
      product.yearStart,
      product.yearEnd,
      product.series,
      product.modelName
    )
  };

  ShowModelsCompatibility = () => {
    const { product } = this.props
    return this.props.ShowModelsCompatibility(product.sku)
  };

  renderCarouselRelation = () => {
    const { currentRelationProducts } = this.props

    if (currentRelationProducts.length === 0) {
      return null
    }

    return (
      <FeaturedProducts>
        <h4>Aquí también encontrarás.</h4>
        <ProductsSlider products={currentRelationProducts} bkgColor={'#ffffff'} dark={false} responsiveInline={true} />
      </FeaturedProducts>
    )
  };

  renderCarouselOthersPersons = () => {
    const { currentRelationProducts } = this.props

    if (currentRelationProducts.length === 0) {
      return null
    }

    return (
      <FeaturedProducts>
        <h4>Productos relacionados.</h4>
        <ProductsSlider products={currentRelationProducts} />
      </FeaturedProducts>
    )
  };

  render() {
    const { breadcrumbs, product, user, originalUrl, query, getProducts } = this.props
    if (!Object.hasOwnProperty.call(product, 'id')) {
      return (
        <>
          <Helmet>
            <title>Producto no encontrado</title>
          </Helmet>
          <Wrapper>
            <ContainerError>
              <div>Lo sentimos, el producto no ha sido encontrado</div>
              <a href='/'>Volver al inicio</a>
            </ContainerError>
          </Wrapper>
        </>
      )
    }
    return (
      <>
        <Wrapper>
          {
            breadcrumbs.length > 0 && breadcrumbs[0].label.toUpperCase().includes("ACCESORIOS") && !breadcrumbs[breadcrumbs.length - 1].label.includes("LLANTAS") && (this.state.vehicleFilter || this.props.selectedCar.serie) ?
              <VehicleFilterBox
                getProducts={getProducts}
                totalProducts={1}
                query={query}
                compatibilities={this.props.compatibilities}
              />
              :
              <SeparatorTop />

          }
          <BackBtn onClick={() => Router.back()}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14C3.12941 14 0 10.8706 0 7.00001C0 3.12941 3.12941 0 7 0C10.8706 0 14 3.12941 14 7.00001C14 10.8706 10.8706 14 7 14ZM7 0.82353C3.58235 0.82353 0.82353 3.58236 0.82353 7.00001C0.82353 10.4177 3.58235 13.1765 7 13.1765C10.4177 13.1765 13.1765 10.4177 13.1765 7.00001C13.1765 3.58236 10.4177 0.82353 7 0.82353Z" fill="black" />
              <path d="M7.12351 10.9941L3.12939 6.99998L7.12351 3.00586L7.69999 3.58233L4.28234 6.99998L7.69999 10.4176L7.12351 10.9941Z" fill="black" />
              <path d="M3.70605 6.58789H10.7061V7.41142H3.70605V6.58789Z" fill="black" />
            </svg>
            <span style={{
              fontFamily: " BMWGroup-Normal,sans-serif",
              fontSize: "16px",
              marginLeft: "20px",
              fontWeight: "bold",
            }} >
              Seguir navegando
            </span>
          </BackBtn>
          <BreadcrumbsContainer>
            <Breadcrumbs links={breadcrumbs} />
          </BreadcrumbsContainer>
          <Detail
            cart={this.props.cart}
            cartLocal={this.props.cartLocal}
            originalUrl={originalUrl}
            category={breadcrumbs[breadcrumbs.length - 1].label}
            setCart={this.props.setCart}
            addReduxCart={this.props.addReduxCart}
            setTalla={this.props.setTalla}
            addToWishlist={this.props.toggleProductInWishlist}
            addToWishlistId={this.props.toggleProductInWishlistProductId}
            addProductToCart={this.props.addProductToCart}
            addProductToCartLocal={this.props.addProductToCartLocal}
            product={this.props.product}
            addWishlistLoading={this.props.addWishlistLoading}
            isCartLoading={this.props.isCartLoading}
            vehicles={this.props.vehicles}
            isLogged={this.props.isLogged}
            models={this.props.models}
            selectedCar={this.props.selectedCar}
            products={this.props.products}
            isCompatibility={this.state.isCompatibility}
            query={query}
            vehicleFilter={this.state.vehicleFilter}
            setVehicleFilter={(vehicleFilter) => { this.setState({ vehicleFilter: vehicleFilter }); }}
            addVehicle={async chassis =>
              this.props.postVehicle(chassis, user.id, product.sku)
            }
            alertStock={this.props.alertStock}
          />
          <Separator />
          {this.renderCarouselRelation()}
        </Wrapper>
      </>
    )
  }
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  breadcrumbs: PropTypes.array.isRequired,
  currentRelationProducts: PropTypes.array.isRequired,
  toggleProductInWishlist: PropTypes.func.isRequired,
  checkProductInWishlist: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  addWishlistLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isCartLoading: PropTypes.bool.isRequired,
  postVehicle: PropTypes.func.isRequired,
  loadCarouselRelation: PropTypes.func.isRequired,
  alertStock: PropTypes.func.isRequired
}

export default withStore(ProductDetail)
