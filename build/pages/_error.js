import React from 'react'
import { Link } from '../common/src/routes/bmw'
import {
  NotFound,
  Wrapper
} from '../common/components'

export default class Error extends React.Component {

  static getInitialProps({ res, err }) {
    let code
    if (res) code = res.statusCode
    else code = err ? err.statusCode : null

    return { statusCode: code }
  }
  render() {
    const { statusCode } = this.props

    return (
      <div title="Oh no :(">
        <Wrapper>
          {statusCode === 404 && <NotFound />}
        </Wrapper>
      </div>
    )
  }
}