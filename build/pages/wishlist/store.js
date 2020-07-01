import { user as coreUser, app as coreApp } from '../../common/redux'

import { connect } from 'react-redux'

function mapStateToProps (store) {
  const { isPartLoadingSelector } = coreApp.selectors
  const wishlist = store.getIn(['user', 'wishlist']).toJS() || []
  const user = store.getIn(['user', 'user']).toJS()

  return {
    wishlist,
    user,
    isCardLoading: isPartLoadingSelector(store, 'wishlistCard')
  }
}
function mapDispatchToProps (dispatch) {
  const {
    requestRemoveWishlistItem,
    getWishlist
  } = coreUser.actions

  return {
    removeItem: id => () => dispatch(requestRemoveWishlistItem(id)),
    getWishlist: () => dispatch(getWishlist())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
