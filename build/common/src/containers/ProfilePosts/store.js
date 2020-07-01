import { lifecycle, compose } from 'recompose'
import { connect } from 'react-redux'

import {
  blog as coreBlog
} from '../../redux'

function mapStateToProps (store) {
  const userArticles = store
    .getIn(['blog', 'userPosts'])
    .valueSeq()
    .toJS()
  return {
    userArticles
  }
}

function mapDispatchToProps (dispatch) {
  const { getUserArticles } = coreBlog.actions

  return {
    getUserArticles: () => dispatch(getUserArticles())
  }
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount () {
      this.props.getUserArticles()
    }
  })
)

export default enhance
