import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import {
	Button,
	CartItem,
	Icon,
	InPartLoading,
	PageTitle,
	PurchaseBottomSteps,
	RecommendedProducts,
	Wrapper,
	AlignWrapper,
	ContentLoader,
	View,
	CartResume,
	ActualCarCard,
	ShipCartStep,
	DotsLoader,
} from "../../common/components";

import {nextRouter, priceFormatter} from "../../common/helpers";

import {
	Header,
	RegisterAddressModal,
	RegisterAddress,
	ProfileEditModal,
	VehicleFilterBox,
} from "../../common/containers";

import Footer from "../../components/Footer";

import {
	DataHeader,
	AddressContainer,
	Items,
	StepsContainer,
	Totals,
	CartItemsContainer,
	LoaderContainer,
	YourOrderContainer,
} from "../../styles/cart";

import withStore from "./store";
import YourOrderResume from "../../common/src/components/YourOrderResume";
import {TotalMobile} from "../../common/src/components/CartItem/styles";

const {Router} = nextRouter;
const goBack = Router.back;

class CartView extends React.Component {
	static async getInitialProps({query, store, req}) {
		return {query};
	}

	constructor(props) {
		super(props);
		this.changeStep = this.changeStep.bind(this);
	}

	componentDidMount() {
		this.props.getStates();
		const tablet = 768;
		const $window = window;
		if (typeof $window !== "undefined") {
			this.setState({showSelectedCar: $window.innerWidth <= tablet});
			$window.addEventListener("resize", (e) => {
				const width = $window.innerWidth;
				this.setState({showSelectedCar: $window.innerWidth <= tablet});
			});
		}
		if (Object.hasOwnProperty.call(this.props.query, "checkout")) {
			this.changeStep(this.props.query.checkout);
		}
	}

	state = {
		step: 0,
		vehicleFilter: false,
		showSelectedCar: false,
	};

	componentDidUpdate(prevProps) {
		if (this.props.cart.addressId !== prevProps.cart.addressId) {
			const address = this.props.addresses.find(
				(item) => item.id === this.props.cart.addressId
			);
			if (address) {
				this.props.getShippingValue(address.cityId, address.id);
			}
		}
	}

	valueTotal() {
		const {cartItems, shippingValue} = this.props;
		const today = new Date();
		let priceAvalidable = 0;
		cartItems.map((item) => {
			priceAvalidable += item.price * item.quantity;
		});
		return priceAvalidable + shippingValue;
	}

	changeStep(step) {
		window.scrollTo(0, 0);
		if (step == 2 && !this.props.isLogged && !this.props.visit) {
			this.props.loginModal();
			this.setState({step: step});
		} else {
			this.setState({step: step});
		}
	}

	render() {
		const {step} = this.state;
		const {
			addQtyToDetail,
			removeQtyToDetail,
			isShippingLoading,
			isCartViewLoading,
			addresses,
			cartItems,
			deleteItem,
			openAddressModal,
			subTotal,
			setOrderAddress,
			cartLoading,
			showAddressAlert,
			addressOK,
			shippingValue,
			TCCRateError,
      errorToPay,
			withCoupon,
			goSummary,
			iva,
			addressSelected,
			pay,
			getCoupon,
			cartLocal,
			deleteProductToCartLocal,
			addProductToCartLocal,
			subtractProductToCartLocal,
			isPercentage,
			discount,
		} = this.props;
		let {totalVal} = this.props;
		/*     if (withCoupon && withCoupon !== 0) {
			  totalVal -= withCoupon;
			} */

		return (
			<Fragment>
				<Helmet>
					<title>Carrito</title>
				</Helmet>
				<div>
					<Wrapper>
						{/*       {cartLoading && (
              <LoaderContainer>
                <ContentLoader fb />
              </LoaderContainer>
            )} */}
						{this.state.showSelectedCar && (
							<div className="hide-responsive">
								<VehicleFilterBox/>
							</div>
						)}
						{!cartLoading ? (
							cartItems.length || cartLocal?.length > 0 ? (
								<Fragment>
									<Items>
										{step === 0 && (
											<DataHeader>
												<InPartLoading
													isLoading={isCartViewLoading}
													canAbsolute
												/>
												<div
													style={{
														cursor: "pointer",
														display: "flex",
														alignItems: "center",
													}}
													onClick={() => Router.back()}
												>
													<svg
														width="14"
														height="14"
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7 14C3.12941 14 0 10.8706 0 7.00001C0 3.12941 3.12941 0 7 0C10.8706 0 14 3.12941 14 7.00001C14 10.8706 10.8706 14 7 14ZM7 0.82353C3.58235 0.82353 0.82353 3.58236 0.82353 7.00001C0.82353 10.4177 3.58235 13.1765 7 13.1765C10.4177 13.1765 13.1765 10.4177 13.1765 7.00001C13.1765 3.58236 10.4177 0.82353 7 0.82353Z"
															fill="black"
														/>
														<path
															d="M7.12351 10.9941L3.12939 6.99998L7.12351 3.00586L7.69999 3.58233L4.28234 6.99998L7.69999 10.4176L7.12351 10.9941Z"
															fill="black"
														/>
														<path
															d="M3.70605 6.58789H10.7061V7.41142H3.70605V6.58789Z"
															fill="black"
														/>
													</svg>
													<span
														style={{
															fontSize: "16px",
															marginLeft: "20px",
															fontWeight: "bold",
														}}

													>
                            Seguir navegando
                          </span>
												</div>
												<div className="data-header-cart">
													<h2>Carrito.</h2>
													<div className="table-head">
														<div>Producto</div>
														<div>Cantidad</div>
														<div>Precio</div>
													</div>
												</div>
											</DataHeader>
										)}
										{step === 0 && (
											<CartItemsContainer>
												<div
													className="flex-mobile"
													style={{
														alignItems: "center",
														marginTop: "20px",
													}}
													onClick={() => Router.back()}
												>
													<svg
														width="14"
														height="14"
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7 14C3.12941 14 0 10.8706 0 7.00001C0 3.12941 3.12941 0 7 0C10.8706 0 14 3.12941 14 7.00001C14 10.8706 10.8706 14 7 14ZM7 0.82353C3.58235 0.82353 0.82353 3.58236 0.82353 7.00001C0.82353 10.4177 3.58235 13.1765 7 13.1765C10.4177 13.1765 13.1765 10.4177 13.1765 7.00001C13.1765 3.58236 10.4177 0.82353 7 0.82353Z"
															fill="black"
														/>
														<path
															d="M7.12351 10.9941L3.12939 6.99998L7.12351 3.00586L7.69999 3.58233L4.28234 6.99998L7.69999 10.4176L7.12351 10.9941Z"
															fill="black"
														/>
														<path
															d="M3.70605 6.58789H10.7061V7.41142H3.70605V6.58789Z"
															fill="black"
														/>
													</svg>
													<span
														style={{
															fontFamily: "BMWGroup-Normal,sans-serif",
															fontSize: "16px",
															marginLeft: "20px",
															fontWeight: "bold",
														}}
													>
                            Seguir navegando
                          </span>
												</div>
												<TotalMobile>
													Total: {priceFormatter(totalVal)}
												</TotalMobile>
												{cartLocal?.length > 0 &&
												cartLocal.map((item) => {
													let isCompatible = item.productVariations?.find(
														(variation) =>
															variation.vehicleSerieId ==
															this.props.selectedCar.serie?.id &&
															variation.vehicleModelId ==
															this.props.selectedCar.model?.id &&
															this.props.selectedCar.year <=
															variation.yearEnd &&
															this.props.selectedCar.year >=
															variation.yearStart
															||
															(variation.vehicleSerieId == 147)
													);
													item.isLifeStyle = item.isLifeStyle || item.productCategory.slug == "llantas" ? true : false;

													return (
														<CartItem
															key={item.id}
															isCompatible={isCompatible}
															shippingValue={item.shippingValue}
															orderDetailId={item.id}
															isLifeStyle={item.isLifeStyle}
															selecteCar={this.props.selectedCar.serie?.id}
															addQtyToDetail={(product, cant) => {
																return addProductToCartLocal(item, cant);
															}
															}
															removeQtyToDetail={() =>
																subtractProductToCartLocal(item)
															}
															name={item.name}
															image={item.imageProducts[0]?.image}
															price={item.price}
															reference={item.sku}
															item={item}
															priceWithTax={item.priceWithTax}
															calculardescuentos={item.calculardescuentos}
															qty={item.quantity}
															onRemoveClick={() =>
																deleteProductToCartLocal(item)
															}
															discountPercentage={item.discountPercentage}
															initDateDiscount={item.initDateDiscount}
															endDateDiscount={item.endDateDiscount}
															items={cartItems}
														/>
													);
												})}
												{cartItems &&
												cartItems.map((item) => {
													let isCompatible = item.productVariations?.find(
														(variation) =>
															variation.vehicleSerieId ==
															this.props.selectedCar.serie?.id &&
															variation.vehicleModelId ==
															this.props.selectedCar.model?.id &&
															this.props.selectedCar.year <=
															variation.yearEnd &&
															this.props.selectedCar.year >=
															variation.yearStart
															|| (variation.vehicleSerieId == 147)
													);
													item.isLifeStyle = this.props.categories.find(categorie => {
														if (categorie.slug == "lifestyle") {
															return categorie.childrenCategories.find(childCategorie => {
																return childCategorie.id == item.productCategory.id
															})
														} else {
															if (item.productCategory.slug == "llantas") {
																return true
															}
														}
													})
													return (
														<CartItem
															key={item.id}
															shippingValue={item.shippingValue}
															orderDetailId={item.id}
															isCompatible={isCompatible}
															isLifeStyle={item.isLifeStyle}
															selecteCar={this.props.selectedCar.serie?.id}
															addQtyToDetail={addQtyToDetail(item.productId)}
															removeQtyToDetail={removeQtyToDetail(
																item.productId
															)}
															name={item.name}
															priceWithTax={item.priceWithTax}
															calculardescuentos={item.calculardescuentos}
															image={item.image}
															price={item.price}
															reference={item.sku}
															item={item}
															qty={item.quantity}
															onRemoveClick={deleteItem(item.productId)}
															discountPercentage={item.discountPercentage}
															initDateDiscount={item.initDateDiscount}
															endDateDiscount={item.endDateDiscount}
															items={cartItems}
														/>
													);
												})}
											</CartItemsContainer>
										)}
										{/*{step === 0 && <RecommendedProducts products={this.productRecommendedTest} />} */}
										{step !== 0 && (
											<ShipCartStep
												addresses={addresses}
												step={!cartLocal?.length > 0 ? step : -1}
												shipping={shippingValue}
												total={totalVal}
												back={() => Router.back()}
												action={addressOK ? pay : showAddressAlert}
												setOrderAddress={setOrderAddress}
												addressSelected={addressSelected}
												isLoading={isShippingLoading}
												isLogged={!cartLocal?.length > 0}
												TCCRateError={TCCRateError}
                        errorToPay={errorToPay}
											/>
										)}
										<div className="resume-grid">
											{this.props.selectedCar.serie ? (
												<ActualCarCard
													selectedCar={{
														model: this.props.selectedCar.year,
														serie: this.props.selectedCar.serie?.name,
														name: this.props.selectedCar.model?.name,
													}}
													showSelectedCar={this.state.showSelectedCar}
													setShowSelectedCar={(hidden) => {
														this.setState({showSelectedCar: hidden});
														this.props.setCompatibility({});
													}}
												/>
											) : (
												""
											)}
											{(step !== 0 || step === 2) && (
												<YourOrderContainer className="hide-responsive">
													<div className="your-order-header">
														<h2>Tu orden</h2>
														<button onClick={() => this.changeStep(0)}>
															Editar
														</button>
													</div>
													{cartLocal?.length > 0 &&
													cartLocal.map((item) => {
														return (
															<YourOrderResume
																key={item.id}
																shippingValue={item.shippingValue}
																orderDetailId={item.id}
																addQtyToDetail={() =>
																	addProductToCartLocal(item)
																}
																removeQtyToDetail={() =>
																	subtractProductToCartLocal(item)
																}
																name={item.name}
																image={item.imageProducts[0]?.image}
																price={item.price}
																reference={item.sku}
																item={item}
																qty={item.quantity}
																onRemoveClick={() =>
																	deleteProductToCartLocal(item)
																}
																calculardescuentos={item.calculardescuentos}
																priceWithTax={item.priceWithTax}
																discountPercentage={item.discountPercentage}
																initDateDiscount={item.initDateDiscount}
																endDateDiscount={item.endDateDiscount}
																items={cartItems}
															/>
														);
													})}
													{cartItems?.length > 0 &&
													cartItems[0].name &&
													cartItems.map((item) => {
														return (
															<YourOrderResume
																key={item.id}
																shippingValue={item.shippingValue}
																orderDetailId={item.id}
																addQtyToDetail={() =>
																	addProductToCartLocal(item)
																}
																removeQtyToDetail={() =>
																	subtractProductToCartLocal(item)
																}
																name={item.name}
																image={item.image}
																price={item.price}
																reference={item.sku}
																item={item}
																qty={item.quantity}
																onRemoveClick={() =>
																	deleteProductToCartLocal(item)
																}
																calculardescuentos={item.calculardescuentos}
																priceWithTax={item.priceWithTax}
																discountPercentage={item.discountPercentage}
																initDateDiscount={item.initDateDiscount}
																endDateDiscount={item.endDateDiscount}
																items={cartItems}
															/>
														);
													})}
												</YourOrderContainer>
											)}
											{cartItems?.length > 0 && !cartItems[0].name && (
												<InPartLoading
													isLoading={true}
													hiddenBack={true}
													canAbsolute
												/>
											)}
											{
												<CartResume
													isLogged={!cartLocal?.length > 0}
													isPercentage={isPercentage}
													subtotalAvalidable={subTotal}
													discount={discount}
													step={step}
													buyAction={addressOK ? pay : showAddressAlert}
													discountPercentage={0}
													addressOK={addressOK}
													withCoupon={withCoupon}
													shipping={shippingValue}
													IvaAvalidable={iva}
													totalAvalidable={totalVal}
													getCoupon={getCoupon}
													securePurchase={this.changeStep}
													TCCRateError={TCCRateError}
                          errorToPay={errorToPay}
												/>
											}
										</div>
									</Items>
								</Fragment>
							) : (
								<AlignWrapper margin="1rem">
									<p>Carrito vacío</p>
								</AlignWrapper>
							)
						) : (
							<AlignWrapper margin="1rem">
								<DotsLoader/>
							</AlignWrapper>
						)}
					</Wrapper>
				</div>
				<ProfileEditModal/>
			</Fragment>
		);
	}
}

CartView.propTypes = {
	cartItems: PropTypes.array.isRequired,
	addresses: PropTypes.array.isRequired,
	deleteItem: PropTypes.func.isRequired,
	deleteProductToCartLocal: PropTypes.func.isRequired,
	goSummary: PropTypes.func.isRequired,
	openAddressModal: PropTypes.func.isRequired,
	addQtyToDetail: PropTypes.func.isRequired,
	removeQtyToDetail: PropTypes.func.isRequired,
	getShippingValue: PropTypes.func,
	getCartContent: PropTypes.func.isRequired,
	setOrderAddress: PropTypes.func.isRequired,
	getStates: PropTypes.func.isRequired,
	cartLoading: PropTypes.bool,
	isShippingLoading: PropTypes.bool,
	isCartViewLoading: PropTypes.bool,
};

export default withStore(CartView);
