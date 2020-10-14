import {connect} from 'react-redux'

import {
	app as coreApp,
	cart as coreCart,
	product as coreProduct
} from '../../common/redux'

import {nextRouter} from '../../common/helpers'

const {Router} = nextRouter

function mapStateToProps(store) {
	const {isPartLoadingSelector} = coreApp.selectors

	const isPayButtonLoading = isPartLoadingSelector(store, 'payment')

	const cart = store.get('cart').get('cart')
	const errorToPay = store.get('app').get('errorToPay')
	const cartLocal = Array.isArray(store.get('cart').get('cartLocal')) ? store.get('cart').get('cartLocal') : undefined
	const withCoupon = cart && cart.charges ? cart.charges.resultCoupon : 0
	const isPercentage = cart && cart.charges && cart.charges.coupon ? cart.charges.coupon.isPercentage : false
	const discount = cart && cart.charges && cart.charges.coupon ? cart.charges.coupon.discount : false
	let subtotalInvited = 0, IVAInvited = 0, totalInvited = 0

	const selectedCar = store
		.get('product')
		.get('compatibility')
		.toJS()
	const categories = store.get("product").get("productCategories").toJS()

	if (cartLocal?.length > 0) {
		cartLocal.map(item => subtotalInvited += (
			(
				item.calculardescuentos
					? (item.priceWithTax - ((item.priceWithTax * item.discountPercentage) / 100))
					: item.priceWithTax
			) * item.quantity)
		)
		let tempSubtotalInvited = subtotalInvited;
		subtotalInvited = Math.round(subtotalInvited / 1.19);
		IVAInvited = tempSubtotalInvited - subtotalInvited;
		totalInvited = subtotalInvited + IVAInvited;
	}
	const addresses = store.get('user').get('addresses').toJS()

	const userData = store.get('user').get('user').toJS()

	let validateDataProfile = false

	if (
		(Object.hasOwnProperty.call(userData, 'identification') &&
			userData.identification !== null) &&
		/* (Object.hasOwnProperty.call(userData, 'birth') && */
		/* userData.birth !== 'Invalid date') && */
		(Object.hasOwnProperty.call(userData, 'email') &&
			userData.email !== null)
	) {
		validateDataProfile = true
	}

	const isShippingLoading = isPartLoadingSelector(store, 'shippingValue')
	const isCartViewLoading = isPartLoadingSelector(store, 'cart')
	const cartLoading = isPartLoadingSelector(store, 'currentCart')
	const shippingValue = Object.hasOwnProperty.call(cart, 'charges') &&
	Object.hasOwnProperty.call(cart.charges, 'shipping') &&
	Object.hasOwnProperty.call(cart.charges.shipping, 'TCC')
		? cart.charges.shipping.TCC : 0

	const TCCRateError = Object.hasOwnProperty.call(cart, 'charges') &&
	Object.hasOwnProperty.call(cart.charges, 'shipping') &&
	Object.hasOwnProperty.call(cart.charges.shipping, 'TCCError') ? cart.charges.shipping.TCCError : false

	const addressOK = !!(cart && cart.address && cart.address.id)

	let subtotal = Object.hasOwnProperty.call(cart, 'charges')
	&& Object.hasOwnProperty.call(cart.charges, 'subTotal')
		? cart.charges.subTotal
		: 'NaN';

	let iva = Object.hasOwnProperty.call(cart, 'charges') &&
	Object.hasOwnProperty.call(cart.charges, 'taxes') &&
	Object.hasOwnProperty.call(cart.charges.taxes, 'IVA')
		? cart.charges.taxes.IVA : 'NaN';

	let total = Object.hasOwnProperty.call(cart, 'charges') &&
	Object.hasOwnProperty.call(cart.charges, 'total')
		? cart.charges.total : 'NaN'

	if (cartLocal?.length === 0) {
		subtotal = 0;
		iva = 0;
		total = 0;
		cart.items.map(item => subtotal += (
			(
				item.calculardescuentos
					? (item.priceWithTax - ((item.priceWithTax * item.discountPercentage) / 100))
					: item.priceWithTax
			) * item.quantity)
		)
		let temp = subtotal;
		subtotal = Math.round(subtotal / 1.19);
		iva = Math.round(temp - subtotal);
		total = Math.round((temp + shippingValue) - withCoupon);
	}

	return {
		shippingValue,
		TCCRateError,
		errorToPay,
		addressOK,
		cart,
		cartLocal,
		addresses,
		cartLoading,
		isPayButtonLoading,
		isShippingLoading,
		withCoupon,
		discount,
		isPercentage,
		selectedCar,
		categories,
		isCartViewLoading,
		visit: store.getIn(['app', 'dialogs', 'visit']) || false,
		isLogged: !!store.getIn(['user', 'user', 'id']) || false,
		addressSelected: Object.hasOwnProperty.call(cart, 'address') &&
		Object.hasOwnProperty.call(cart.address, 'id')
			? cart.address.id : 0,
		validateDataProfile,
		cartItems: Object.hasOwnProperty.call(cart, 'items') ? cart.items : [],
		iva: cartLocal?.length > 0 ? IVAInvited : iva,
		totalVal: cartLocal?.length > 0 ? totalInvited : total,
		subTotal: cartLocal?.length > 0 ? subtotalInvited : (subtotal - withCoupon),
	}
}

function mapDispatchToProps(dispatch) {
	const {cartEndpoint, beginPayment, requestCoupon, deleteProductToCartLocal, addProductToCartLocal, subtractProductToCartLocal} = coreCart.actions
	const {setCompatibility} = coreProduct.actions
	const {setDialogState, showFeedback, getStates} = coreApp.actions

	return {
		addProductToCartLocal(product, cant = 1) {
			dispatch(addProductToCartLocal(product, cant))
		},
		subtractProductToCartLocal(product) {
			dispatch(subtractProductToCartLocal(product))
		},
		deleteProductToCartLocal(product) {
			dispatch(deleteProductToCartLocal(product))
		},
		pay(orderId) {
			dispatch(beginPayment(orderId))
		},
		getCoupon(coupon, orderId, valueOrder) {
			dispatch(requestCoupon(coupon, orderId, valueOrder))
		},
		setOrderAddress: addressId => dispatch(cartEndpoint('ADDRESS', addressId, null)),
		showAddressAlert: () =>
			dispatch(
				showFeedback({
					feedbackTitle: 'Dirección obligatoria'
				})
			),
		addQtyToDetail: (orderDetailId, quantity) => () =>
			dispatch(cartEndpoint('ADD', null, orderDetailId, quantity)),
		removeQtyToDetail: orderDetailId => () =>
			dispatch(cartEndpoint('REMOVE', null, orderDetailId)),
		openAddressModal: () =>
			dispatch(setDialogState('registerAddress', true)),
		openEditProfileModal: () =>
			dispatch(setDialogState('editProfileModal', true)),
		deleteItem: orderDetailId => () =>
			dispatch(cartEndpoint('DELETE', null, orderDetailId)),
		showFeedbackProfile: msg => dispatch(showFeedback(msg)),
		getCartContent: () => dispatch(cartEndpoint('READ', null, null)),
		getStates: () => dispatch(getStates()),
		setCompatibility: (compatibility) => dispatch(setCompatibility(compatibility)),
		loginModal: () => dispatch(setDialogState('login', true)),
	}
}

function mergeProps(stateProps, dispatchProps, ownProps) {
	return {
		...stateProps,
		...ownProps,
		...dispatchProps,
		goSummary: () => {
			if (stateProps.validateDataProfile) {
				Router.push('/resumen-compra')
			} else {
				dispatchProps.openEditProfileModal()
				dispatchProps.showFeedbackProfile({
					feedbackTitle: '¡Atención!',
					feedbackDescription:
						'Para poder continuar con el pago, por favor termina de actualizar los datos personales'
				})
			}
		},
		pay: () => {
			{
				if (stateProps.validateDataProfile) {
					dispatchProps.pay(stateProps.cart.id)
				} else {
					dispatchProps.openEditProfileModal()
					dispatchProps.showFeedbackProfile({
						feedbackTitle: '¡Atención!',
						feedbackDescription:
							'Para poder continuar con el pago, por favor termina de actualizar los datos personales'
					})
				}
			}
		},
		getCoupon(coupon) {
			dispatchProps.getCoupon(coupon, stateProps.cart.id, stateProps.cart.charges.total)
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)
