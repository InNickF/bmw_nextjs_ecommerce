import { connect } from 'react-redux'

import { user as coreUser } from '../../redux'

function mapStateToProps (state) {
  const { selectProfile } = coreUser.selectors

  const user = state.get('user')

  return {
    userId: user.get('user').get('id'),
    avatar: user.get('user').get('avatar'),
    initialValues: selectProfile(user)
  }
}

function mapDispatchToProps (dispatch) {
  const { saveUserData, updateAvatar } = coreUser.actions

  return {
    handleProfileEdit: values => dispatch(saveUserData(values)),
    updateAvatar: avatar => dispatch(updateAvatar(avatar))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
