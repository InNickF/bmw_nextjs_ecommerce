import React from 'react'
import { getToken } from '../helpers/accessToken'
import appActions from '../redux/app/actions'

export default Component => {
  const WithIsomorphicToken = props => <Component {...props} />
  WithIsomorphicToken.getInitialProps = async context => {
    const { ctx } = context
    const cookies = getToken(ctx.isServer ? ctx.req.headers.cookie : null)
    if (cookies.token) {
      ctx.store.dispatch(
        appActions.setToken(cookies.token, cookies.userId)
      )
    }

    return {
      ...(Component.getInitialProps ? await Component.getInitialProps(context) : {})
    }
  }

  return WithIsomorphicToken
}
