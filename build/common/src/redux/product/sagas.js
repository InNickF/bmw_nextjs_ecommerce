import {takeLatest, put, call, select, all, fork} from "redux-saga/effects";
import Router from "next/router";

import productActions, {Actions} from "./actions";
import appActions from "../app/actions";
import UserService from "../user/service";
import {currentUserSelector} from "../user/selectors";
import ProductService from "../product/service";

import {getBreadcrumbsRecursive, flattenCategories} from "../../helpers";

export function* getProductCategories() {
	yield put(appActions.setPartLoading("menuCategories", true));
	try {
		const result = yield call(ProductService.getProductCategories);
		yield put(productActions.setProductCategories(result.data));
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading("menuCategories", false));
}

export function* setAllCompatibilities({productId}) {
	try {
			if(typeof productId == 'number') {
			const result = yield call(ProductService.getAllCompatibilities, productId);
			yield put(productActions.setAllCompatibilities(result.data));
		}
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
}

export function* redirectToDetailById({productId}) {
	/* yield put(appActions.setAppLoading(true)) */
	try {
		const result = yield call(ProductService.getProductById, productId);

		if (result.data.slug) Router.push(`/producto/${result.data.slug}`);
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	/* yield put(appActions.setAppLoading(false)) */
}

export function* getModelsCompability({sku}) {
	yield put(appActions.setPartLoading("modelsCompabilit", true));

	try {
		const modelsResult = yield call(ProductService.getModelsCompatibility, sku);
		yield put(productActions.setModelsCompability(modelsResult.data));
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	/* yield put(appActions.setAppLoading(false)) */
}

export function* getProductSaga(action) {
	yield put(appActions.setAppLoading(true));
	const productCategoriesInit = yield select((store) =>
		store.get("product").get("productCategories").toJS()
	);
	if (productCategoriesInit.length == 0) {
		yield call(getProductCategories)
	}
	try {
		let resultProduct = yield ProductService.getProductBySlug(action.slug);
		if (
			resultProduct.data.length > 0 &&
			Object.hasOwnProperty.call(resultProduct.data[0], "sku")
		) {
			let currentProduct = resultProduct.data[0];
			if (!resultProduct.data[0].isFather) {
				resultProduct = yield ProductService.getProductByFather(
					resultProduct.data[0].id
				);
				currentProduct = resultProduct.data[0].product;
			}

			const productCategories = yield select((store) =>
				store.get("product").get("productCategories").toJS()
			);
			const defaultCategories = yield select((store) =>
				store.get("product").get("defaultCategories").toJS()
			);
			const {breadcrumbs} = getBreadcrumbsRecursive(
				currentProduct.productCategoryId,
				flattenCategories(productCategories)
			);

			const currentParentCategory =
				breadcrumbs && breadcrumbs[0] ? breadcrumbs[0].params.c : "";
			const isLifeStyle = currentParentCategory === defaultCategories.lifestyle || currentParentCategory == "style" || currentParentCategory == "rider-equipment";
			const isAccessory =
				currentParentCategory === defaultCategories.accesories;
			if (isLifeStyle) {
				const withVariations = yield ProductService.getColorVariations(
					currentProduct.sku
				);
				yield put(
					productActions.setCurrentProduct({
						...currentProduct,
						...withVariations.data,
						isLifeStyle,
						isAccessory,
					})
				);
				const result = yield call(ProductService.getAllCompatibilities, currentProduct.id);
				yield put(productActions.setAllCompatibilities(result.data));
			} else {
				const availability = yield call(
					ProductService.availability,
					resultProduct.data[0].sku
				);
				const productWithAvailability = availability.data;
				yield put(
					productActions.setAllCompatibilities(resultProduct.data[0].id)
				);
				yield put(
					productActions.setCurrentProduct({
						...resultProduct.data[0],
						...productWithAvailability,
						isLifeStyle,
						isAccessory,
					})
				);
				const result = yield call(ProductService.getAllCompatibilities, currentProduct.id);
				yield put(productActions.setAllCompatibilities(result.data));
			}
		} else {
			yield put(
				appActions.showFeedback({
					feedbackTitle: "¡El producto no existe o no está disponible!",
				})
			);
			yield put(appActions.setAppLoading(false));
		}
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setAppLoading(false));
}

export function* toggleProductInWishlist(action) {
	yield put(productActions.setAddWishlistSuccess(false));
	yield put(appActions.setPartLoading("addToWishlistButton", true));
	try {
		const {productId} = action;
		const user = yield select(currentUserSelector);

		// check if product in WishList
		const checkResult = yield call(UserService.checkIfInWishlist, productId, user.get("id"));

		// if records: product in wishlist, then remove it
		const isInWishlist = checkResult.data.length;
		if (isInWishlist) {
			// remove
			yield call(UserService.removeFromWishlist, checkResult.data[0].id);
		} else {
			// add
			yield call(UserService.addToWishlist, productId, user.get("id"));
		}
		yield put(productActions.setAddWishlistSuccess(true));
		yield put(productActions.setCurrentProductInWishlist(!isInWishlist));
		if (!isInWishlist) {
			const wishlistOnAdd = {
				feedbackTitle: "¡El producto se ha añadido a la lista de deseos!",
			};
			yield put(appActions.showFeedback(wishlistOnAdd));
		}
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading("addToWishlistButton", false));
}

export function* checkProductInWishlist(action) {
	yield put(appActions.setPartLoading("addToWishlistButton", true));
	try {
		const {productId} = action;
		const user = yield select(currentUserSelector);

		// check if product in Wishlist
		const checkResult = yield call(UserService.checkIfInWishlist, productId, user.get("id"));

		yield put(productActions.setCurrentProductInWishlist(!!checkResult.data.length));
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading("addToWishlistButton", false));
}

export function* getProductsByCategory(
	{
		inAppPart,
		categoryId,
		level,
		parentId,
		skus,
		offer
	}
) {
	yield put(appActions.setPartLoading(true));
	try {
		const result = yield call(
			ProductService.getProductsByCategory,
			categoryId,
			level,
			parentId,
			skus,
			null,
			null,
			null,
			offer
		);
		yield put(productActions.setProductsInPart(result.data, inAppPart));
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading(false));
}

export function* getSeries(action) {
	yield put(appActions.setPartLoading("vehicleFilters", true));
	try {
		const seriesResult = yield call(ProductService.getSeries);

		yield put(productActions.setSeries(seriesResult.data));
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading("vehicleFilters", false));
}

export function* getModels({vehicleSerieId}) {
	yield put(appActions.setPartLoading("vehicleFilters", true));
	try {
		const modelsResult = yield call(ProductService.getModels, vehicleSerieId);

		yield put(productActions.setModels(modelsResult.data));
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading("vehicleFilters", false));
}

export function* getSeriesAndModels(action) {
	yield put(appActions.setPartLoading("vehicleFilters", true));
	try {
		const [seriesResult, modelsResult] = yield all([
			call(ProductService.getSeries),
			call(ProductService.getModels),
		]);

		yield all([
			put(productActions.setSeries(seriesResult.data)),
			put(productActions.setModels(modelsResult.data)),
		]);
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading("vehicleFilters", false));
}

// GET PRODUCTS

export function* getProductsSaga({query}) {

	try {
		if (query.chassis) {
			yield call(getProductsByChassis, {...query, chassis: query.chassis});
			return
		}

		if (query.c) {
			yield call(getProductsByParamCategory, {...query, slugCategory: query.c});
			return
		}

		if (query.anio && query.serie && query.modelo) {
			yield call(getProductsByYearSerieModel, {
				...query,
				year: query.anio,
				serie: query.serie,
				model: query.modelo,
			});
			return
		}

		if (query.q || query.prom) {
			yield call(getProductsByQueryString, {...query, queryString: query.q});
			return
		}

		if (query.offer) {
			yield call(getProductsByQueryOffer, {
				...query,
				queryString: query.offer,
			});
			return
		}
		if (query.colection) {
			yield call(getProductsByQueryColection, {
				...query,
				queryString: query.colection,
			});
		}
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
}

export function* getProductsByChassis({chassis, page}) {
	yield put(appActions.setPartLoading("productsList", true));
	try {
		const productStatus = yield select((store) =>
			store.getIn(["product", "productsStatus"]).toJS()
		);

		const skip = ((page || 1) - 1) * productStatus.perPage;
		const limit = productStatus.perPage;

		const {data} = yield call(
			ProductService.getProductsByChassis,
			chassis,
			skip,
			limit
		);
		if (data.data && data.data.products) {
			yield put(productActions.setProducts(data.data.products));
			const {count} = data.data;

			const currentPage = parseInt(page) || 1;

			yield put(
				productActions.setProductsStatus({
					count,
					currentPage,
					order: null,
					perPage: limit,
				})
			);
		}
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading("productsList", false));
}

export function* getProductsByParamCategory(
	{
		slugCategory,
		page,
		order,
		level,
		parentId,
		offer
	}
) {
	yield put(appActions.setPartLoading("productsList", true));
	try {
		const productStatus = yield select((store) =>
			store.getIn(["product", "productsStatus"]).toJS()
		);

		const queryOrder = order || "createdAt ASC";

		const skip = ((page || 1) - 1) * productStatus.perPage;
		// const limit = productStatus.perPage

		const productsResult = yield call(
			ProductService.getProductsByCategory,
			slugCategory,
			level,
			[],
			skip,
			null,
			queryOrder,
			parentId,
			offer
		);

		const currentPage = parseInt(page) || 1;
		yield put(
			productActions.setProductsStatus({
				count: productsResult.data.length,
				currentPage,
				order: queryOrder,
				perPage: productsResult.data.length,
			})
		);

		yield put(productActions.setProducts(productsResult.data));
		let closest;
		const today = new Date()
		const toYear = today.getFullYear()
		productsResult.data.map(product => {
			/* console.log(product.productVariations, "data") */
			if (product.productVariations.length > 0) {
				closest = product.productVariations.reduce(
					(acc, loc) =>
						closest?.yearStart > acc?.yearStart ?
							acc?.yearStart < loc?.yearStart
								? acc
								: loc
							: closest
				)
			}
		})
		const fromYear = closest?.yearStart ? closest?.yearStart : 2000
		/* console.log(fromYear, closest) */
		const years = Array(toYear - fromYear + 1)
			.fill()
			.map(
				(_, index) => fromYear + index
			)
			.reverse()

		/* console.log(years, "testeo") */
		yield put(productActions.setYears(years));
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading("productsList", false));
}

export function* getProductsByYearSerieModel(
	{
		year,
		serie,
		model,
		page,
		order,
	}
) {
	yield put(appActions.setPartLoading("productsList", true));
	try {
		const yearStart = yield select((store) =>
			store.getIn(["product", "modelFilter", "yearStart"])
		);

		// const productStatus = yield select(store =>
		//   store.getIn(['product', 'productsStatus']).toJS()
		// )

		// const {
		//   data: { count }
		// } = yield call(ProductService.productVariationsCount, {
		//   vehicleModelId: model,
		//   vehicleSerieId: serie
		// })

		const queryOrder = order || "createdAt ASC";
		const filter = {
			where: {
				"or": [
					{
						vehicleModelId: model,
						vehicleSerieId: serie,
						yearEnd: {gte: year},
						yearStart: {lte: year}
					},
					{
						vehicleModelId: process.env.BRAND_ID == 3 ? 4948 : 5005,
						vehicleSerieId: process.env.BRAND_ID == 3 ? 147 : 163
					}
				]
			},
			include: {
				relation: "product",
				scope: {
					where: {
						active: true,
						brandId: process.env.BRAND_ID,
					},
					order: queryOrder,
					include: ["imageProducts", "skuVariations", "productCategory"],
				},
			},
		};
		if (process.env.BRAND_ID != 2) {
			filter.where.yearStart = {lte: year};
		}
		const productsResult = yield call(ProductService.productVariations, filter);
		const arrayProducts = [];

		if (productsResult.data.length > 0) {
			productsResult.data.forEach((item) => {
				if (
					item.product &&
					!arrayProducts.find((product) => product.id === item.product.id)
				) {
					arrayProducts.push(item.product);
				}
			});
		}
		yield put(productActions.setProducts(arrayProducts));

		// const { perPage } = yield select(store =>
		//   store.getIn(['product', 'productsStatus']).toJS()
		// )

		const currentPage = parseInt(page) || 1;

		yield put(
			productActions.setProductsStatus({
				anio: year,
				serie,
				modelo: model,
				count: arrayProducts.length,
				currentPage,
				order: queryOrder,
				perPage: arrayProducts.length,
			})
		);
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading("productsList", false));
}

export function* getProductsByQueryString({queryString, order, page}) {
	yield put(appActions.setPartLoading("productsList", true));
	try {
		const filter = {
			where: {
				or: [
					{
						name: {
							ilike: `%${queryString
								.normalize("NFD")
								.replace(/[\u0300-\u036f]/g, "")}%`,
						},
						brandId: process.env.BRAND_ID,
						active: true,
						isFather: true
					},
					{
						description: {
							ilike: `%${queryString
								.normalize("NFD")
								.replace(/[\u0300-\u036f]/g, "")}%`,
						},
						brandId: process.env.BRAND_ID,
						isFather: true,
						active: true
					},
					{
						sku: {
							ilike: `%${queryString
								.normalize("NFD")
								.replace(/[\u0300-\u036f]/g, "")}%`,
						},
						brandId: process.env.BRAND_ID,
						isFather: true,
						active: true
					},
					{
						slug: {
							ilike: `%${queryString
								.normalize("NFD")
								.replace(/[\u0300-\u036f]/g, "")}%`,
						},
						brandId: process.env.BRAND_ID,
						isFather: true,
						active: true
					},
				],
			},
		};

		const {
			data: {count},
		} = yield call(ProductService.countProducts, {...filter.where});

		const queryOrder = order || "createdAt ASC";

		const productStatus = yield select((store) =>
			store.getIn(["product", "productsStatus"]).toJS()
		);

		const productsResult = yield call(ProductService.getProducts, {
			...filter,
			order: queryOrder,
			skip: ((page || 1) - 1) * productStatus.perPage,
			limit: productStatus.perPage,
		});

		yield put(productActions.setProducts(productsResult.data));

		const {perPage} = yield select((store) =>
			store.getIn(["product", "productsStatus"]).toJS()
		);

		const currentPage = parseInt(page) || 1;

		yield put(
			productActions.setProductsStatus({
				count,
				currentPage,
				order: queryOrder,
				perPage,
				q: queryString,
			})
		);
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading("productsList", false));
}

export function* getProductsByQueryColection({queryString, order, page}) {
	yield put(appActions.setPartLoading("productsList", true));
	try {
		const filter = {
			where: {
				collection: {
					ilike: `%${queryString}%`,
				},
				brandId: process.env.BRAND_ID,
				isFather: true,
				active: true,
			},
			order: "createdAt ASC",
			include: ["imageProducts", "productCategory", "skuVariations"],
		};

		const {
			data: {count},
		} = yield call(ProductService.countProducts, {...filter.where});

		const queryOrder = order || "createdAt ASC";

		const productStatus = yield select((store) =>
			store.getIn(["product", "productsStatus"]).toJS()
		);

		const productsResult = yield call(ProductService.getProducts, {
			...filter,
			order: queryOrder,
			skip: ((page || 1) - 1) * productStatus.perPage,
			limit: productStatus.perPage,
		});

		yield put(productActions.setProducts(productsResult.data));

		const {perPage} = yield select((store) =>
			store.getIn(["product", "productsStatus"]).toJS()
		);

		const currentPage = parseInt(page) || 1;

		yield put(
			productActions.setProductsStatus({
				count,
				currentPage,
				order: queryOrder,
				perPage,
				q: queryString,
			})
		);
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading("productsList", false));
}

export function* getProductsByQueryOffer({queryString, order, page}) {
	yield put(appActions.setPartLoading("productsList", true));
	try {
		const filter = {
			where: {
				endDateDiscount: {
					gte: "2020-02-17",
				},
				brandId: process.env.BRAND_ID,
				isFather: true,
				active: true,
			},
			order: "createdAt ASC",
			include: ["imageProducts", "productCategory", "skuVariations"],
		};

		const {
			data: {count},
		} = yield call(ProductService.countProducts, {...filter.where});

		const queryOrder = order || "createdAt ASC";

		const productStatus = yield select((store) =>
			store.getIn(["product", "productsStatus"]).toJS()
		);

		const productsResult = yield call(ProductService.getProducts, {
			...filter,
			order: queryOrder,
			skip: ((page || 1) - 1) * productStatus.perPage
		});

		yield put(productActions.setProducts(productsResult.data));

		const {perPage} = yield select((store) =>
			store.getIn(["product", "productsStatus"]).toJS()
		);

		const currentPage = parseInt(page) || 1;

		yield put(
			productActions.setProductsStatus({
				count,
				currentPage,
				order: queryOrder,
				perPage,
				q: queryString,
			})
		);
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
	yield put(appActions.setPartLoading("productsList", false));
}

// get vehicles by user

export function* getVehiclesByProductSaga(action) {
	const {skuProduct, userId} = action;
	try {
		const result = yield call(ProductService.getVehicles, userId);

		yield put(productActions.setVehiclesByProduct(result.data));

		yield all(
			result.data.map((item, pos) =>
				fork(compatibilityProduct, {
					sku: skuProduct,
					chassis: item.chassis,
					pos,
				})
			)
		);
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
}

function* compatibilityProduct({sku, chassis, pos}) {
	try {
		const result = yield call(
			ProductService.getCompatibilityVehicleWithProduct,
			sku,
			chassis
		);

		yield put(
			productActions.setCompatibilityVehicle({
				pos,
				compatibility: result.data.data.compatibility,
			})
		);
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
}

export function* getCarouselProductRelation(
	{
		yearStart,
		yearEnd,
		serie,
		model,
	}
) {
	try {
		const filter = {
			where: {
				active: true,
				modelName: model,
				series: serie,
				yearEnd: {lte: yearEnd},
				yearStart: {gte: yearStart},
			},
			limit: 15,
		};
		const productsResult = yield call(ProductService.getProducts, filter);
		yield put(productActions.setRelationCarouselByProduct(productsResult.data));
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
}

function* getColorVariations({sku}) {
	try {
		yield call(ProductService.getColorVariations, sku);
	} catch (e) {
		yield put(appActions.setError(e.message));
	}
}

export default [
	takeLatest(Actions.REDIRECT_TO_DETAIL_BY_ID, redirectToDetailById),
	takeLatest(Actions.GET_PRODUCT, getProductSaga),
	takeLatest(Actions.GET_PRODUCTS, getProductsSaga),
	takeLatest(Actions.GET_MODELS_COMPABILITY, getModelsCompability),
	takeLatest(Actions.TOGGLE_PRODUCT_IN_WISHLIST, toggleProductInWishlist),
	takeLatest(Actions.CHECK_PRODUCT_IN_WISHLIST, checkProductInWishlist),
	takeLatest(Actions.GET_PRODUCT_CATEGORIES, getProductCategories),
	takeLatest(Actions.GET_PRODUCTS_BY_CATEGORY, getProductsByCategory),
	takeLatest(Actions.GET_SERIES_AND_MODELS, getSeriesAndModels),
	takeLatest(Actions.GET_PRODUCTS_BY_CHASSIS, getProductsByChassis),
	takeLatest(Actions.GET_VEHICLES_BY_PRODUCT, getVehiclesByProductSaga),
	takeLatest(
		Actions.GET_RELATION_CAROUSEL_BY_PRODUCT,
		getCarouselProductRelation
	),
	takeLatest(Actions.SET_ALL_COMPATIBILITIES, setAllCompatibilities),
	takeLatest(Actions.GET_SERIES, getSeries),
	takeLatest(Actions.GET_MODELS, getModels),
	takeLatest(Actions.GET_COLOR_VARIATIONS, getColorVariations),
];
