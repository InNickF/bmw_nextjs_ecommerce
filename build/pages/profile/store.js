import { connect } from "react-redux";

import { app as coreApp } from "../../common/redux";

const { isPartLoadingSelector } = coreApp.selectors;

function mapStateToProps(store) {
  const wishlist = store
    .getIn(['user', 'wishlist'])
    .toJS() || []
  return {
    isLoading: isPartLoadingSelector(store, "currentCart"),
    isLogged: !!store.getIn(["user", "user", "id"]) || false,
    wishlist,
  };
}
function mapDispatchToProps(dispatch) {
  const { showFeedback, setDialogState } = coreApp.actions
  return {
    loginModal: () => dispatch(setDialogState('login', true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
