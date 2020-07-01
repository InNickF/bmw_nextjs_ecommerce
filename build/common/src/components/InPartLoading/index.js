import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Container from './styles'
import { Loader } from '../'

const InPartLoading = props => {
  if (props.preload) {
    return (
      <Container
        canAbsolute={props.canAbsolute}
        hideContent={props.hideContent}
        preload={"true"}
        isLoading={props.isLoading}
      >
        <div className='loading' style={{ background: `${props.hiddenBack ? '#ffff' : 'rgba(255, 255, 255, 0.58)'}` }}>
          <Loader type={props.loaderType} color={props.loaderColor} />
        </div>
      </Container>
    )
  }
  return (
    <Fragment>
      {props.hideContent &&
        (props.isLoading ? (
          <Container hideContent={props.hideContent}>
            <div className='loading' style={{ background: `${props.hiddenBack ? '#ffff' : 'rgba(255, 255, 255, 0.58)'}` }}>
              <Loader type={props.loaderType} color={props.loaderColor} />
            </div>
          </Container>
        ) : (
            <Fragment>{props.children}</Fragment>
          ))}
      {!props.hideContent && (
        <Fragment>
          {props.isLoading && (
            <Container
              canAbsolute={props.canAbsolute}
              hideContent={props.hideContent}
            >
              {props.hiddenBack ?
                <div className='loading' style={{ background: `${props.hiddenBack ? '#ffff' : 'rgba(255, 255, 255, 0.58)'}`, position: 'fixed', top: '70px' }}>
                  <Loader type={props.loaderType} color={props.loaderColor} />
                </div> :
                <div className='loading' >
                  <Loader type={props.loaderType} color={props.loaderColor} />
                </div>
              }

            </Container>
          )}
          {props.children}
        </Fragment>
      )}
    </Fragment>
  )
}

InPartLoading.defaultProps = {
  isLoading: false,
  hideContent: false,
  canAbsolute: false,
  hiddenBack: false,
  loaderType: 'circle',
  loaderColor: 'black'
}

InPartLoading.propTypes = {
  isLoading: PropTypes.bool,
  hideContent: PropTypes.bool,
  canAbsolute: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loaderType: PropTypes.string,
  loaderColor: PropTypes.string
}

export default InPartLoading
