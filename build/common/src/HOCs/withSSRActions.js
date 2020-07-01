import React from 'react'
import { actionsOnSSR } from '../redux/bootActions'

export default Component => {
  const WithSSRActions = props => <Component {...props} />
  WithSSRActions.getInitialProps = async context => {
    const { ctx } = context
    actionsOnSSR(ctx.store)
    return {
      ...(Component.getInitialProps ? await Component.getInitialProps(context) : {})
    }
  }

  return WithSSRActions
}
