import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  AdvertisementBlock,
  PhraseTimer,
  Wrapper
} from '../../common/components'

import { Link } from '../../common/src/routes/bmw'

import { Container } from  '../../styles/HeaderAdvertisement'

import withStore from './store'

class HeaderAdvertisement extends Component {

  componentDidMount() {
    const { validateSession } = this.props
    validateSession()
  }

  render() {
    /*   const {
        advertisements
      } = this.props
      console.log(advertisements)
  
      const phrases = advertisements.map(
        item =>
          item.url && item.url.length ? (
            <Link href={item.url}>
              <a>{item.description}</a>
            </Link>
          ) : (
              <a>{item.description}</a>
            )
      ) */
    /* <Container>
          <Wrapper fullWrapper>
            {!!(phrases && phrases.length) && (
              <AdvertisementBlock margin='0' centerBlock={<PhraseTimer phrases={phrases} timer={7} />} />
            )}
          </Wrapper>
        </Container> */
    return (<></>)
  }
}

HeaderAdvertisement.propTypes = {
  user: PropTypes.object,
  authenticated: PropTypes.bool,
  advertisements: PropTypes.array.isRequired,
  logout: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  validateSession: PropTypes.func.isRequired
}

export default withStore(HeaderAdvertisement)
