import { takeLatest, call, put, select, fork, all } from "redux-saga/effects";
import { reset } from "redux-form";
import Router from "next/router";
import appActions from "../app/actions";
import { getProfileUidSaga } from "../user/sagas";
import cartActions, { Actions } from "./actions";
import CartService from "./service";
import Added from "../../components/Icon/icons/added";
import { AddedContainer } from "./style";

const ProductAdded = () => (
  <AddedContainer>
    <div className="iconAdd">
      <div
        style={{
          marginRight: 9,
          height: 25,
          justifyContent: "center",
        }}
      >
        <Added width={25} height={25} />
      </div>
      <a>Se ha añadido un producto al carrito de compras</a>
    </div>
  </AddedContainer>
);

function* requestRemoveFromCart(action) {
  /* yield put(appActions.setPartLoading('cart', true)) */
  try {
    // Order detail id
    const { id } = action;
    yield call(CartService.removeFromCart, id);
    yield put(cartActions.removeFromCart(id));
    yield put(
      appActions.showFeedback({
        feedbackTitle: "¡El producto se ha eliminado del carrito!",
      })
    );
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
  /* yield put(appActions.setPartLoading('cart', false)) */
}

export function* cartEndpoint(action) {
  const {
    operation,
    addressId,
    detailId,
    quantity = 1,
    userIdOptional,
    local,
    prueba,
  } = action;
  try {
    const userId = userIdOptional
      ? userIdOptional
      : yield select((state) => state.getIn(["user", "user", "id"]));
    const itemsCart = yield select((store) =>
      store.getIn(["cart", "cart", "items"])
    );
    const currentCart = yield select((store) => store.getIn(["cart"]).toJS());

    const arrayData = [];
    let wantRead = false;
    let address =
      addressId ||
      (currentCart.cart && currentCart.cart.address
        ? currentCart.cart.address.id
        : null);
    let stockLimit = false;

    switch (operation) {
      case "ADD":
        yield put(appActions.setPartLoading("cart", true));
        let isExist = false;
        //currentCart.cart.items = [];
        if (currentCart.cart?.items?.length > 0) {
          currentCart.cart.items.map((item) => {
            if (item.productId === detailId) {
              isExist = true;
              stockLimit = item.quantity + quantity > item.productStock;
              arrayData.push({
                productId: item.productId,
                quantity: stockLimit ? item.quantity : item.quantity + quantity,
              });
            } else {
              if (detailId != 0) {
                arrayData.push({ productId: item.productId, quantity: item.quantity });
              } else if (detailId == 0 && quantity == 0) {
                arrayData.push({ productId: item.productId, quantity: item.quantity });
              }
            }
          });

          // Si el producto supera el stock
          if (stockLimit) {
            yield put(appActions.showFeedback({ feedbackTitle: "¡Ha superado el límite de stock del producto!" }));
          }

          // Si el producto a agregar es nuevo
          if (!isExist && detailId != 0)
            arrayData.push({ productId: detailId, quantity: quantity });
        } else {
          arrayData.push({ productId: detailId, quantity: quantity });
        }
        break;
      case "REMOVE":
        yield put(appActions.setPartLoading("cart", true));

        if (currentCart.cart?.items?.length > 0) {
          currentCart.cart.items.map((item) => {
            if (item.productId === detailId && item.quantity - 1 <= 0) {
              return false;
            }
            arrayData.push({
              productId: item.productId,
              quantity:
                item.productId === detailId
                  ? item.quantity - quantity
                  : item.quantity,
            });
          });
        }
        break;
      case "DELETE":
        yield put(appActions.setPartLoading("cart", true));

        if (currentCart.cart?.items?.length > 0) {
          currentCart.cart.items.map((item) => {
            if (item.productId === detailId) return false;

            arrayData.push({
              productId: item.productId,
              quantity: item.quantity,
            });
          });
        }
        break;
      case "ADDRESS":
        yield put(appActions.setPartLoading("shippingValue", true));

        if (currentCart.cart?.items?.length > 0) {
          currentCart.cart.items.map((item) => {
            arrayData.push({ productId: item.productId, quantity: item.quantity });
          });
        }

        yield put(cartActions.setOrderAddress(addressId));
        break;
      case "READ":
        yield put(appActions.setPartLoading("currentCart", true));
        wantRead = true;
        break;
    }

    const response = yield CartService.cartEndpoint({
      userId,
      addressId: address,
      wantRead,
      details: arrayData,
    });

    yield put(cartActions.setCart(response.data));
    switch (operation) {
      case "ADD":
        yield put(appActions.setPartLoading("cart", false));
        yield put(appActions.showCartPreview(true, response.data));
        if (response.data) {
          yield put(cartActions.setCartLocal([]));
          localStorage.removeItem("cartLocal");
        }
        if(response.data.noAvaliableProducts > 0) {
          yield put(
            appActions.showFeedback({
              feedbackTitle: `Lo sentimos en tu carrito de compra existía ${response.data.noAvaliableProducts} ${response.data.noAvaliableProducts > 1 ? "items no disponibles" : "item no disponible"}`,
            })
          );
        }
        break;
      case "REMOVE":
        yield put(appActions.setPartLoading("cart", false));
        yield put(
          appActions.showFeedback({
            feedbackTitle: "Se ha removido un producto del carrito de compras.",
          })
        );
        break;
      case "DELETE":
        yield put(appActions.setPartLoading("cart", false));
        yield put(
          appActions.showFeedback({
            feedbackTitle: "Se ha removido un producto del carrito de compras.",
          })
        );
        break;
      case "ADDRESS":
        yield put(appActions.setPartLoading("shippingValue", false));
        yield put(cartActions.setCartLocal([]));
        localStorage.removeItem("cartLocal");
        if(response.data.charges.shipping.TCCError) {
          yield put(
            appActions.showFeedback({
              feedbackTitle: "Debido a nuestro proveedor de envíos la dirección actualmente seleccionada no se encuentra disponible en este momento, por favor seleccione otra.",
            })
          );
        }
        break;
      case "READ":
        yield put(appActions.setPartLoading("currentCart", false));
        if (response.data) {
          yield put(cartActions.setCartLocal([]));
          localStorage.removeItem("cartLocal");
        }
        if(response.data.noAvaliableProducts > 0) {
          yield put(
            appActions.showFeedback({
              feedbackTitle: `Lo sentimos en tu carrito de compra existía ${response.data.noAvaliableProducts} ${response.data.noAvaliableProducts > 1 ? "items no disponibles" : "item no disponible"}`,
            })
          );
        }
        if(response.data.charges.shipping.TCCError) {
          yield put(
            appActions.showFeedback({
              feedbackTitle: "Debido a nuestro proveedor de envíos la dirección actualmente seleccionada no se encuentra disponible en este momento, por favor seleccione otra.",
            })
          );
        }
        break;
    }
  } catch (e) {
    yield put(appActions.setPartLoading("currentCart", false));
    yield put(appActions.setPartLoading("shippingValue", false));
    yield put(appActions.setPartLoading("cart", false));
    /* yield put(appActions.showFeedback({ feedbackTitle: "Creado carrito" })); */
    /* yield put(appActions.setError(e.message)); */
    /* console.log(e.message, "error del carrito"); */
  }
}

export function* beginPayment({ orderId }) {
  yield put(appActions.setAppLoading(true));
  yield put(appActions.setPartLoading("payment", true));
  try {
    /* const response = yield call(CartService.itemsAvailability, orderId)
    if (response.data.itemsDeleted === 0) { */
    const result = yield call(CartService.beginPayment, orderId);
    Router.push(result.data.data.url.replace("https:", ""));
    yield put(appActions.setPartLoading("payment", false));
    yield put(appActions.setAppLoading(false));
    /* } else {
      yield put(cartActions.setItemsDeleted(response.data.items))
      yield put(cartActions.setModalDeleted(true))
    } */
  } catch (e) {
    yield put(appActions.setError(e.message));
    yield put(appActions.setPartLoading("payment", false));
    yield put(appActions.setAppLoading(false));
  }
  /*   yield put(appActions.setAppLoading(false))
  yield put(appActions.setPartLoading('payment', false)) */
}

function* getConfirmationOrder({ orderId }) {
  try {
    const response = yield call(CartService.getConfirmationOrder, orderId);
    if (response.data.length > 0) {
      yield put(cartActions.setCurrentConfirmation(response.data[0]));
    }
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
}

export function* requestCoupon({ coupon, orderId, valueOrder }) {
  try {
    const response = yield call(CartService.getCoupon, coupon);
    if (response.data.length && response.data[0].active) {
      if (true) {
        let couponResponse = yield call(
          CartService.postCoupon,
          coupon,
          orderId
        );
        if (
          couponResponse.data &&
          couponResponse.data.data &&
          couponResponse.data.data.code.active
        ) {
          yield fork(cartEndpoint, { operation: "READ", addressId: false, detailId: null });
          yield put(
            appActions.showFeedback({ feedbackTitle: "Código aplicado" })
          );
        } else {
          yield put(
            appActions.showFeedback({ feedbackTitle: "Ya tienes un código aplicado" })
          );
        }
      } else {
        yield put(
          appActions.showFeedback({
            feedbackTitle: "El descuento debe ser mayor al subtotal mas iva",
          })
        );
      }
    } else {
      yield put(
        appActions.showFeedback({ feedbackTitle: "Código no disponible" })
      );
    }
  } catch (e) {
    yield put(
      appActions.showFeedback({ feedbackTitle: "Código no disponible" })
    );
    yield put(appActions.setError(e.message));
  }
}

function* returnStart(action) {
  try {
    yield call(CartService.returnStart, action.data);
    yield put(
      appActions.showFeedback({
        feedbackTitle: "Tu solicitud ha sido enviada. Pronto te contactaremos.",
      })
    );
    yield put(reset("warranty"));
  } catch (e) {
    yield put(
      appActions.showFeedback({
        feedbackTitle:
          "Error: los datos no coinciden, verifica el correo y la información de la orden.",
      })
    );
    yield put(appActions.setError(e.message));
  }
}

function* getReasonTypes() {
  try {
    const reasons = yield call(CartService.getReasonType);
    yield put(cartActions.setReasonTypes(reasons.data));
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
}

function* getOrderStatus() {
  try {
    // const result = yield call(CartService.getOrderStatus)
    // yield put(cartActions.setOrderStatus(result.data))
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
}

function* addProductToCartLocal({ product, quantity }) {
  if(!Array.isArray(product))
    product = [product]
  
  product = product.map(item => {
    item.image = item.imageProducts && item.imageProducts[0]? item.imageProducts[0].image: undefined;
    return item;
  })
  /* product.quantity = quantity */
  let cart = { items: product };
  yield put(appActions.showCartPreview(true, cart));
}

function* signupInvited({ data }) {
  try {
    const result = yield call(CartService.signupInvited, {
      ...data,
      terms: true,
      uidAuth: data.email,
      brandId: process.env.BRAND_ID,
      provider: "invited",
    });
    if (result.data == "El usuario ya existe") {
      yield put(appActions.setError(result.data));
      yield put(appActions.showFeedback({ feedbackTitle: "Correo ya registrado, inicia sesión para continuar." }));
      return new Error("El usuario ya tiene una cuenta.");
    }
     yield call(getProfileUidSaga, { uidAuth: result.data.uidAuth });
    yield put(appActions.setDialogState("login", false));
    yield put(reset("login"));
    yield put(cartActions.signupInvitedResponse(true));

    let cartLocal = localStorage.getItem("cartLocal");
    if (cartLocal) {
      cartLocal = JSON.parse(cartLocal);
      let arrayCartItem = [];

      /*yield all(cartLocal.map(function* (item) {
           yield put(cartActions.cartEndpoint('ADD', null, item.productChildrenId ? item.productChildrenId : item.id, item.quantity))
         })) */
      cartLocal.map((item) => {
        arrayCartItem.push({ productId: item.id, quantity: item.quantity });
      });
      yield put(cartActions.setCart({ items: arrayCartItem }));
      yield put(cartActions.cartEndpoint("ADD", null, 0, 0));
    }
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
}

export default [
  takeLatest(Actions.BEGIN_PAYMENT, beginPayment),
  takeLatest(Actions.REQUEST_REMOVE_FROM_CART, requestRemoveFromCart),
  takeLatest(Actions.GET_CURRENT_CONFIRMATION, getConfirmationOrder),
  takeLatest(Actions.REQUEST_COUPON, requestCoupon),
  takeLatest(Actions.RETURN_START, returnStart),
  takeLatest(Actions.GET_ORDER_STATUS, getOrderStatus),
  takeLatest(Actions.CART_ENDPOINT, cartEndpoint),
  takeLatest(Actions.ADD_PRODUCT_TO_CART_LOCAL, addProductToCartLocal),
  takeLatest(Actions.GET_REASON_TYPES, getReasonTypes),
  takeLatest(Actions.SIGNUP_INVITED, signupInvited),
];
