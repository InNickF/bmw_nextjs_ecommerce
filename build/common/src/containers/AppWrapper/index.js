import React, { Fragment } from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
import NProgress from 'nprogress'
import { withTheme } from 'styled-components'
import { Loader, FeedbackModal, Modal } from '../../components'
import { LoginModal, RegisterModal } from '../'
import CartModal from '../CartModal'
import Popup from '../Popup'

import withStore from './store'

class AppWrapper extends React.Component {

  constructor(props) {
    super(props)
    Router.onRouteChangeStart = () => {
      NProgress.start()
      document.body.classList.add('body-transition')
      props.hideMobileMenu()
    }

    Router.onRouteChangeComplete = () => {
      NProgress.done()
      document.body.classList.remove('body-transition')
    }

    Router.onRouteChangeError = () => {
      NProgress.done()
      document.body.classList.remove('body-transition')
    }
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }


  render() {
    const {
      children,
      feedbackShowing,
      hideFeedback,
      theme,
      authenticated,
      brandId,
      cart
    } = this.props
    return (
      <Fragment>
        {children}
        <FeedbackModal
          title={feedbackShowing.feedbackTitle}
          description={feedbackShowing.feedbackDescription}
          isVisible={feedbackShowing.isShowing}
          toggleModal={hideFeedback}
        />
        <div className='document-overlay'>
          <Loader type='circle' color={theme.colors.main} />
        </div>
        <div>
          <CartModal isVisible={cart.popUp} closeModal={this.handleClose} />
        </div>
        {!authenticated && (
          <Fragment>
            <LoginModal brandId={brandId} />
            <RegisterModal brandId={brandId} />
          </Fragment>
        )}
      </Fragment>
    )
  }
}

AppWrapper.propTypes = {
  authenticated: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  hideMobileMenu: PropTypes.func.isRequired,
  hideFeedback: PropTypes.func.isRequired,
  feedbackShowing: PropTypes.object.isRequired,
  cartPreviewShowing: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  brandId: PropTypes.string.isRequired,
  theme: PropTypes.object
}

export default withStore(withTheme(AppWrapper))
