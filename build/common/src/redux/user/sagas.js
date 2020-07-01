import { call, takeLatest, put, select, fork, take, all } from 'redux-saga/effects'
import { reset } from 'redux-form'
import firebase from 'firebase/app'
import 'firebase/auth'
import ReduxSagaFirebase from 'redux-saga-firebase'

import userActions, { Actions } from './actions'
import appActions from '../app/actions'
import cartActions from '../cart/actions'
import UserService from './service'
import CartService from '../cart/service'
import { currentUserSelector } from './selectors'
import { getVehiclesByProductSaga } from '../product/sagas'
import { cartEndpoint } from '../cart/sagas'
import errorFirebase from '../../constants/errorFirebase'

let rfsMotorrad = null

if (!firebase.apps.length) {
  const fsMotorrad = firebase.initializeApp({
    apiKey:
      process.env.BRAND_ID == 3
        ? process.env.FIREBASE_apiKey_bmw
        : process.env.BRAND_ID == 2
          ? process.env.FIREBASE_apiKey_mini
          : process.env.FIREBASE_apiKey_motorrad,
    authDomain:
      process.env.BRAND_ID == 3
        ? process.env.FIREBASE_authDomain_bmw
        : process.env.BRAND_ID == 2
          ? process.env.FIREBASE_authDomain_mini
          : process.env.FIREBASE_authDomain_motorrad,
    databaseURL:
      process.env.BRAND_ID == 3
        ? process.env.FIREBASE_databaseURL_bmw
        : process.env.BRAND_ID == 2
          ? process.env.FIREBASE_databaseURL_mini
          : process.env.FIREBASE_databaseURL_motorrad,
    projectId:
      process.env.BRAND_ID == 3
        ? process.env.FIREBASE_projectId_bmw
        : process.env.BRAND_ID == 2
          ? process.env.FIREBASE_projectId__mini
          : process.env.FIREBASE_projectId_motorrad,
    storageBucket:
      process.env.BRAND_ID == 3
        ? process.env.FIREBASE_storageBucket_bmw
        : process.env.BRAND_ID == 2
          ? process.env.FIREBASE_storageBucket_mini
          : process.env.FIREBASE_storageBucket_motorrad,
    messagingSenderId:
      process.env.BRAND_ID == 3
        ? process.env.FIREBASE_messagingSenderId_bmw
        : process.env.BRAND_ID == 2
          ? process.env.FIREBASE_messagingSenderId_mini
          : process.env.FIREBASE_messagingSenderId_motorrad,
  });

  rfsMotorrad = new ReduxSagaFirebase(fsMotorrad);
} else {
  rfsMotorrad = new ReduxSagaFirebase(firebase.app());
}

// private functions

/**
 * Validate auth state firbase
 */
export function* validateSessionFb() {
  const channel = yield call(rfsMotorrad.auth.channel);
  const { error, user } = yield take(channel);
  if (user && Object.hasOwnProperty.call(user, "uid")) {
    yield fork(getProfileUidSaga, { uidAuth: user.uid });
    yield fork(getVehicles);
  } else {
    yield put(appActions.setError(error));
    return error;
  }
}

// Logout

export function* logoutSaga() {
  /* yield put(appActions.setAppLoading(true)) */
  yield call(rfsMotorrad.auth.signOut);
  yield put(cartActions.setCart({}));
  yield put(appActions.setDialogState("login", false));
  yield put(userActions.setLogoutUser());
  yield put(userActions.setUserAddresses([]));
}

// Login
export function* loginSaga(action) {
  /* yield put(appActions.setPartLoading('login', true)) */

  try {
    const { user } = action;
    const userExist = yield call(
      UserService.validateUser,
      user.email,
      "manual"
    );

    if (
      userExist.data &&
      Object.hasOwnProperty.call(userExist.data, "isExist") &&
      userExist.data.isExist
    ) {
      const response = yield call(
        rfsMotorrad.auth.signInWithEmailAndPassword,
        user.email,
        user.password
      );
      if (typeof document !== 'undefined') {
        document.body.classList.remove('notScroll');
      }
      yield fork(getProfileUidSaga, { uidAuth: response.user.uid });
      yield put(appActions.setDialogState("login", false));
      yield put(reset("login"));
      let cartLocal = localStorage.getItem("cartLocal");
      if (cartLocal) {
        cartLocal = JSON.parse(cartLocal);
        let arrayCartItem = [];
        cartLocal.map(function (item) {
          arrayCartItem.push({
            productId: item.productId,
            quantity: stockLimit ? item.quantity : item.quantity + quantity,
          });
        });
        /* yield put(cartActions.setCartLocal([])) */
        yield put(cartActions.setCart({ items: arrayCartItem }));
        yield put(cartActions.cartEndpoint("READ", null, 0, 0));
      }
    } else {
      yield put(
        appActions.showFeedback({
          feedbackTitle: `No existe un usuario para este correo, por favor registrese`,
        })
      );
    }
  } catch (e) {
    if (errorFirebase[e.code]) {
      yield put(appActions.showFeedback({ feedbackTitle: errorFirebase[e.code] }))
      yield put(appActions.setError(errorFirebase[e.code]))
    }
  }
  /* yield put(appActions.setPartLoading('login', false)) */
}

// Get current user data

export function* getProfileMeSaga(action) {
  /* yield put(appActions.setPartLoading('userbox', true)) */
  try {
    const { userId } = action;
    const resultUserData = yield call(UserService.getProfileMe, userId);

    yield put(userActions.setUser(resultUserData.data.data));
    yield fork(cartEndpoint, {
      operation: "READ",
      addressId: false,
      detailId: null,
    });
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
  /* yield put(appActions.setPartLoading('userbox', false)) */
}

// Get current user data by uid

export function* getProfileUidSaga(action) {
  /* yield put(appActions.setPartLoading('register', true)) */
  try {
    const { uidAuth } = action;
    const resultUserData = yield call(UserService.getProfileUid, uidAuth);

    if (resultUserData.data.length > 0) {
      if (typeof document !== 'undefined') {
        document.body.classList.remove('notScroll');
      }
      let cartLocal = localStorage.getItem("cartLocal");
      yield put(userActions.setUser(resultUserData.data[0]));
      if (!cartLocal) {
        yield call(cartEndpoint, {
          operation: "READ",
          addressId: false,
          detailId: null,
        });
      }

      const addressesResult = yield call(
        UserService.getUserAddresses,
        resultUserData.data[0].id
      );
      if (addressesResult.data) {
        yield put(userActions.setUserAddresses(addressesResult.data));
      }
    }
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
  /* yield put(appActions.setPartLoading('register', false)) */
}

// Update user profile

export function* saveUserDataSaga(action) {
  /* yield put(appActions.setPartLoading('userProfile', true)) */
  try {
    const userData = action.user.toJS();
    const user = yield select(currentUserSelector);
    const userInfo = user.toJS();
    const result = yield call(UserService.saveUserData, {
      ...userData,
      uidAuth: userInfo.uidAuth,
    });

    yield put(
      appActions.showFeedback({
        feedbackTitle: "¡Datos actualizados!",
      })
    );
    yield put(userActions.updateProfile(result.data));
    yield put(appActions.setDialogState("editProfileModal", false));
  } catch (e) {
    yield put(
      appActions.showFeedback({
        feedbackTitle:
          "Error: Datos inválidos, puede que el correo que ingresas ya lo este utilizando otro usuario",
      })
    );
    yield put(appActions.setError(e.message));
  }
  /* yield put(appActions.setPartLoading('userProfile', false)) */
}

// Get wishlist

export function* getWishlist() {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    const user = yield select(currentUserSelector);
    if (user.get("id")) {
      const result = yield call(UserService.getWishlist, user.get("id"));
      yield put(userActions.setWishlist(result.data));
    } else {
      yield put(userActions.setWishlist([]));
    }
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
  /* yield put(appActions.setAppLoading(false)) */
}

// Remove remove item from wishlist

export function* removeWishlistItem(action) {
  /* yield put(appActions.setPartLoading('wishlistCard', true)) */
  try {
    const wishlistId = action.id;
    const result = yield call(UserService.removeFromWishlist, wishlistId);
    if (result.data.count === 1) {
      yield put(userActions.removeWishlistItem(wishlistId));
      yield put(
        appActions.showFeedback({
          feedbackTitle: "El producto se ha eliminado del wishlist",
        })
      );
    }
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
  /* yield put(appActions.setPartLoading('wishlistCard', false)) */
}

export function* registerUser(action) {
  /* yield put(appActions.setPartLoading('register', true)) */

  try {
    const { user, brandId } = action;
    const userExist = yield call(
      UserService.validateUser,
      user.email,
      "manual"
    );

    if (
      userExist.data &&
      Object.hasOwnProperty.call(userExist.data, "isExist") &&
      userExist.data.isExist
    ) {
      const dataUser = userExist.data;
      let msg = "";
      if (typeof document !== 'undefined') {
        document.body.classList.remove('notScroll');
      }
      if (Object.hasOwnProperty.call(dataUser, "provider")) {
        switch (dataUser.provider) {
          case "facebook":
            msg = `vinculandote a Facebook`;
            break;
          case "gmail":
            msg = `vinculandote a Google`;
            break;
          default:
            msg = `con tu correo ${user.email}`;
        }
      } else {
        msg = `con tu correo ${user.email}`;
      }

      yield put(appActions.setDialogState("register", false));
      yield put(
        appActions.showFeedback({
          feedbackTitle: `¡Ya tienes cuenta con nosotros! Inicia sesión ${msg}`,
        })
      );
      yield put(reset("register"));
      /* yield put(appActions.setPartLoading('register', false)) */
    } else {
      const response = yield call(
        rfsMotorrad.auth.createUserWithEmailAndPassword,
        user.email,
        user.password
      );

      action.user.uidAuth = response.user.uid;
      action.user.brandId = brandId;
      action.user.provider = "manual";

      delete action.user.password;
      delete action.user["password-confirm"];

      const resultUserData = yield call(UserService.register, action.user);

      yield put(userActions.setUser(resultUserData.data));
      yield fork(cartEndpoint, {
        operation: "READ",
        addressId: false,
        detailId: null,
      });

      const addressesResult = yield call(
        UserService.getUserAddresses,
        resultUserData.data.id
      );

      yield put(userActions.setUserAddresses(addressesResult.data));
      yield put(appActions.setDialogState("login", false));
      yield put(reset("login"));
      yield put(appActions.setDialogState("register", false));
      yield put(reset("register"));

      let cartLocal = localStorage.getItem("cartLocal");
      if (cartLocal) {
        cartLocal = JSON.parse(cartLocal);
        yield all(
          cartLocal.map(function* (item) {
            yield put(
              cartActions.cartEndpoint(
                "ADD",
                null,
                item.productChildrenId ? item.productChildrenId : item.id,
                item.quantity
              )
            );
          })
        );
        /* yield put(cartActions.setCartLocal([])) */
        localStorage.removeItem("cartLocal");
      }
    }
  } catch (e) {
    if (errorFirebase[e.code]) {
      yield put(appActions.showFeedback({ feedbackTitle: errorFirebase[e.code] }))
      yield put(appActions.setError(errorFirebase[e.code]))
    }
  }
  /* yield put(appActions.setPartLoading('register', false)) */
}

export function* registerUserSocial(action) {
  /* yield put(appActions.setPartLoading('register', true)) */
  try {
    const { social, brandId } = action;

    let authProvider = "";
    if (social === "facebook") {
      authProvider = new firebase.auth.FacebookAuthProvider();
    } else if (social === "gmail") {
      authProvider = new firebase.auth.GoogleAuthProvider();
    } else {
      return yield put(appActions.setError("No hay red social identificada"));
    }
    if (typeof document !== 'undefined') {
      document.body.classList.remove('notScroll');
    }
    const response = yield call(rfsMotorrad.auth.signInWithPopup, authProvider);
    const user = yield call(rfsMotorrad.auth.signInWithCredential, response);
    const resultUserData = yield call(UserService.register, {
      name: user.user.displayName,
      email: user.user.email,
      avatar: user.user.photoURL,
      uidAuth: user.user.uid,
      provider: social,
      brandId,
    });

    yield put(userActions.setUser(resultUserData.data));
    yield put(validateSessionFb());

    let cartLocal = localStorage.getItem("cartLocal");
    if (cartLocal) {
      cartLocal = JSON.parse(cartLocal);
      let arrayCartItem = [];

      cartLocal.map(item => {
        arrayCartItem.push({ productId: item.id, quantity: item.quantity })
      })

      yield put(cartActions.setCart({ items: arrayCartItem }))
      yield put(cartActions.cartEndpoint('ADD', null, 0, 0))
    } else {
      yield fork(cartEndpoint, { operation: 'READ', addressId: false, detailId: null })
    }

    const addressesResult = yield call(UserService.getUserAddresses, resultUserData.data.id)

    yield put(userActions.setUserAddresses(addressesResult.data));
    yield put(appActions.setDialogState("login", false));
    yield put(reset("login"));
    yield put(appActions.setDialogState("register", false));
    yield put(reset("register"));
  } catch (e) {
    if (errorFirebase[e.code]) {
      yield put(appActions.showFeedback({ feedbackTitle: errorFirebase[e.code] }))
      yield put(appActions.setError(errorFirebase[e.code]))
    }
  }
  /* yield put(appActions.setPartLoading('register', false)) */
}

export function* requestCreateAddress(action) {
  /* yield put(appActions.setPartLoading('registerAddress', true)) */
  try {
    const { data } = action;
    const userId = yield select((store) => store.getIn(["user", "user", "id"]));
    const newAddress = yield call(UserService.createAddress, {
      ...data,
      name: "default",
      phone: 0,
      userId,
    });

    const cities = yield select((store) =>
      store.getIn(["app", "cities"]).toJS()
    );

    const city = yield cities.find(
      (item) => item.id.toString() === data.cityId
    );

    yield put(userActions.addAddressToUser({ ...newAddress.data, city }));

    yield put(appActions.setDialogState("registerAddress", false));
    yield put(reset("registerAddress"));
    // yield put(cartActions.setOrderAddress(newAddress.data.id))
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
  /* yield put(appActions.setPartLoading('registerAddress', false)) */
}

// get vehicles by user

export function* getVehicles() {
  /* yield put(appActions.setPartLoading('userVehicles', true)) */
  try {
    const user = yield select(currentUserSelector);
    if (user && user.get("id")) {
      const result = yield call(UserService.getVehicles, user.get("id"));
      yield put(userActions.setVehicles(result.data));
    }
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
  /* yield put(appActions.setPartLoading('userVehicles', false)) */
}

// Delete vehicle

export function* deleteVehicle({ vehicleId }) {
  /* yield put(appActions.setPartLoading('userVehicles', true)) */
  try {
    yield call(UserService.deleteVehicle, vehicleId);

    yield put(userActions.removeVehicle(vehicleId));
    yield put(
      appActions.showFeedback({
        feedbackTitle: "Vehículo eliminado",
      })
    );
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
  /* yield put(appActions.setPartLoading('userVehicles', false)) */
}

// created vehicle for user

export function* postVehicle(action) {
  const { chassis, userId, skuProduct, onlyCreate } = action;

  /* yield put(appActions.setPartLoading('registerByChassis', true)) */

  try {
    const {
      data: { count },
    } = yield call(UserService.verifyUserVehicle, chassis, userId);

    // verify if already register
    if (count > 0) {
      yield put(
        appActions.showFeedback({
          feedbackTitle: "El vehículo ya se encuentra registrado",
        })
      );
      /* yield put(appActions.setPartLoading('registerByChassis', false)) */

      return;
    }

    // if not register then create it
    const result = yield call(UserService.postVehicle, chassis, userId);

    if (onlyCreate && result.data) {
      /* yield put(appActions.setPartLoading('registerByChassis', false)) */
      /* yield put(appActions.setDialogState('registerByChassis', false)) */
      yield fork(getVehicles);
      return;
    }

    if (!result.data) {
      return;
    }

    yield fork(getVehiclesByProductSaga, { skuProduct, userId });
  } catch (e) {
    const { data } = e.response;
    if (
      data &&
      data.error.statusCode === 422 &&
      data.error.details.messages.chassis &&
      data.error.details.messages.chassis[0]
    ) {
      yield put(
        appActions.showFeedback({
          feedbackTitle: data.error.details.messages.chassis[0].labels,
        })
      );
    } else {
      yield put(
        appActions.showFeedback({
          feedbackTitle: "No encontramos vehículos, verifique el chasis",
        })
      );
    }
    yield put(appActions.setError(e.message));
  }

  yield put(appActions.setPartLoading("registerByChassis", false));
}

// GET In progress orders
export function* getInProgressOrders() {
  yield put(appActions.setPartLoading("inProgress", true));
  try {
    const statusCodes = ["PAGO_APROBADO", "PREPARACION", "EN_RUTA"];

    const user = yield select(currentUserSelector);

    const statuses = yield call(CartService.getOrderStatus);

    const statusIds = statuses.data
      .filter((item) => statusCodes.includes(item.code))
      .reduce((acc, item) => acc.concat(item.id), []);

    const result = yield call(
      UserService.getInProgressOrders,
      user.get("id"),
      statusIds
    );

    yield put(cartActions.setOrderStatus(statuses.data));

    yield put(userActions.setInProgressOrders(result.data));
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
  yield put(appActions.setPartLoading("inProgress", false));
}

// GET In progress orders
export function* getHistoryOrders({ month, year }) {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    const user = yield select(currentUserSelector);
    const result = yield call(
      UserService.getHistoryOrders,
      user.get("id"),
      month,
      year
    );
    yield put(userActions.setHistoryOrders(result.data));
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
  /* yield put(appActions.setAppLoading(false)) */
}

// GET warranty details
export function* getWarrantyDetails({ orderId }) {
  /* yield put(appActions.setAppLoading(true)) */
  try {
    const result = yield call(CartService.getOrderDetails, orderId);
    yield put(userActions.setWarrantyDetails(result.data));
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
  /* yield put(appActions.setAppLoading(false)) */
}

// GET reset password
export function* resetPassword({ email }) {
  yield put(appActions.setPartLoading("passwordReset", true));
  try {
    const site = typeof window !== "undefined" ? window.location.origin : null;

    yield call(rfsMotorrad.auth.sendPasswordResetEmail, email, {
      url: `${site}?email=${email}`,
    });
    
    if (typeof document !== 'undefined') {
      document.body.classList.remove('notScroll');
    }

    const isBMW = parseInt(process.env.BRAND_ID) === 3;
    yield put(
      appActions.showFeedback({
        feedbackTitle: "",
        feedbackDescription: `${
          isBMW ? "Le" : "Te"
          } hemos enviado un correo electrónico con las instrucciones para cambiar ${
          isBMW ? "su" : "tu"
          } contraseña, si existe una cuenta asociada ${
          isBMW ? "recibirá" : "recibirás"
          } un correo electrónico en los siguientes minutos.`,
      })
    );
    yield put(reset("passwordReset"));
    yield put(appActions.setDialogState("passwordReset", false));
  } catch (e) {
    yield put(appActions.setError(e.message));
  }
  yield put(appActions.setPartLoading("passwordReset", false));
}

export function* createSuscription({ email }) {
  try {
    const result = yield call(UserService.createSuscription, email.toLowerCase());
    if (result.status === 200)
      yield put(appActions.showFeedback({
        feedbackTitle: `Te informaremos sobre nuevos productos, promociones, descuentos, eventos y noticias relacionadas a tus intereses.`
      }))
    else
      yield put(appActions.showFeedback({ feedbackTitle: `Tenemos un problema, por favor intentelo más tarde.` }))

    yield put(userActions.setSendSuscription(true))
  } catch (e) {
    const error = e.toString()

    if (error.includes('422'))
      yield put(appActions.showFeedback({ feedbackTitle: `Este correo ya se encuentra registrado.` }))
    else
      yield put(appActions.showFeedback({ feedbackTitle: `No fue posible suscribir el correo, verificar la existencia del correo o intentalo más tarde.` }))
  }
}

export default [
  takeLatest(Actions.REGISTER_USER, registerUser),
  takeLatest(Actions.REGISTER_USER_SOCIAL, registerUserSocial),
  takeLatest(Actions.REQUEST_LOGIN, loginSaga),
  takeLatest(Actions.REQUEST_LOGOUT, logoutSaga),
  takeLatest(Actions.SAVE_USER_DATA, saveUserDataSaga),
  takeLatest(Actions.REQUEST_REMOVE_WISHLIST_ITEM, removeWishlistItem),
  takeLatest(Actions.REQUEST_CREATE_ADDRESS, requestCreateAddress),
  takeLatest(Actions.GET_WISHLIST, getWishlist),
  takeLatest(Actions.GET_VEHICLES, getVehicles),
  takeLatest(Actions.POST_VEHICLE, postVehicle),
  takeLatest(Actions.DELETE_VEHICLE, deleteVehicle),
  takeLatest(Actions.GET_IN_PROGRESS_ORDERS, getInProgressOrders),
  takeLatest(Actions.GET_HISTORY_ORDERS, getHistoryOrders),
  takeLatest(Actions.GET_USER_UID, getProfileUidSaga),
  takeLatest(Actions.VALIDATE_SESSION, validateSessionFb),
  takeLatest(Actions.RESET_PASSWORD, resetPassword),
  takeLatest(Actions.GET_WARRANTY_DETAILS, getWarrantyDetails),
  takeLatest(Actions.CREATE_SUSCRIPTION, createSuscription),
];
