import { connect } from "react-redux";

import { app as coreApp, product as coreProduct } from "../../common/redux";

/* import homeActions from '../../common/src/redux/home/actions' */

const appActions = coreApp.actions;
const { currentTabSelector } = coreApp.selectors;
/* const homeActions = coreHome.actions */

function mapStateToProps(store) {
  const {
    home: { homePost, headerSlides, lastEvent, cards },
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
  const { getProductsByCategory } = coreProduct.actions;
  return {
    setCategoryTab: (tabId, level) => {
      const categoryId = tabId;
      const arraySkus = {
        1: {
          "trajes-de-proteccion": [
            "76111540153",
            "76121539752",
            "76129899235",
            "76149899242",
            "76111540166",
            "76238541427",
          ],
          cascos: [
            "76311540062",
            "76311540068",
            "76311540073",
            "76311540078",
            "76311540083",
            "76311540089",
          ],
          almacenamiento: [
            "77438566446",
            "71607713012",
            "77498534712",
            "71607653846",
            "71607711245",
            "71607719740",
          ],
        },
        2: {
          gorras: [
            "80162454532",
            "80162445651",
            "80162445655",
            "80162463256",
            "80162460851",
            "80162445652",
            "80162454533",
            "80162445655",
            "80162445651",
          ],
          "chaquetas-y-buzos": [
            "80142460812",
            "80142463204",
            "80142454946",
            "80142463248",
            "80142445590",
            "80142463250",
          ],
          tapetes: [
            "51472408523",
            "51472447606",
            "51472354158",
            "51472447613",
            "51472354164",
            "51472408527",
          ],
        },
        3: {
          "chaquetas-y-buzos": [
            "80142461091",
            "80142460933",
            "80142460993",
            "80142461041",
            "80142454700",
            "80142460948",
            "80142446406",
            "80142461111",
            "80142461116"
          ],
          miniaturas: [
            "80422336869",
            "80422348788",
            "80422318969",
            "80422336837",
            "80422320228",
            "80432406146",
            "80432454788",
            "80432318513",
            "80422336839",
            "80422348801"
          ],
          tapetes: [
            "51472407170",
            "51472163801",
            "51472210210",
            "51472365857",
            "51472458442",
            "51472451592",
            "51472365435"
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
