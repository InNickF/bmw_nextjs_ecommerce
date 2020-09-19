import {connect} from "react-redux";

import {app as coreApp, product as coreProduct} from "../../common/redux";

/* import homeActions from '../../common/src/redux/home/actions' */

const appActions = coreApp.actions;
const {currentTabSelector} = coreApp.selectors;

/* const homeActions = coreHome.actions */

function mapStateToProps(store) {
	const {
		home: {homePost, headerSlides, lastEvent, cards},
	} = store.toJS();

	const productCategories = store.getIn(["home", "categoriesMotivator"]).toJS();

	const motivators = productCategories
		.filter(
			(item) =>
				(item.name != "LIFESTYLE.") & (item.name != "ACCESORIOS PARA CARROS.")
		)
		.reduce(
			(list, item, index) =>
				list.concat({
					id: item.slug,
					label: item.name,
					level: item.level,
					img: item.cover,
					description: item.metaDescription,
				}),
			[]
		);
	const currentTab = currentTabSelector(store, "categoriesHome");

	const categoriesTabSelected =
		currentTab || (motivators[0] ? motivators[0].id : 0);
	const slides = headerSlides || [];

	const inAppPartProducts = store.get("product").get("productsInAppPart");
	return {
		lastEvent,
		cards: {
			top: cards.slice(0, 2),
			bottom: cards.slice(2, 5),
		},
		slides,
		categoriesTabSelected,
		homePost,
		motivators,
		inAppPartProducts,
	};
}

function mapDispatchToProps(dispatch) {
	const {getProductsByCategory} = coreProduct.actions;
	return {
		setCategoryTab: (tabId, level) => {
			const categoryId = tabId;
			const arraySkus = {
				3: {
					relojes: [
						"80262463267",
						"80262406686",
						"80262406691",
						"80262285900",
						"80262463266",
						"80262406692"
					],
					"cuidado-y-mantenimiento": [
						"83122285673",
						"83122285679",
						"83122298210",
						"83122405479",
						"83122288906",
						"83122288898"
					],
					"transporte-y-organización-de-equipaje": [
						"82712232293",
						"82720440791",
						"82712360951",
						"82730412015",
						"82712351061",
						"82712289107"
					],
				},
			};
			let currentSkus = arraySkus[process.env.BRAND_ID];
			dispatch(
				getProductsByCategory(
					categoryId,
					"categoriesHome",
					level,
					currentSkus[tabId],
					false
				)
			);
			dispatch(appActions.setTabState("categoriesHome", tabId));
		},
		getCategoryTab: (id, motivators) => {
			if (motivators && motivators.length > 0) {
				let currentTab = motivators.find((motivators) => id == motivators.id);
				return currentTab;
			} else {
				return "";
			}
		},
	};
}

function mergeProps(stateProps, dispatchProps, ownProps) {
	return {
		...stateProps,
		...ownProps,
		...dispatchProps,
		getInPartProducts: (inAppPart) => {
			const products = stateProps.inAppPartProducts.get(inAppPart);
			return products ? products.toJS() : [];
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps);
