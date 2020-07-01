import React from 'react'
import PropTypes from 'prop-types'
import withStore from './state'

function PhraseTimer ({ phrases, timer, currentPhrase }) {
  return (
    <p>{currentPhrase}</p>
  )
}

PhraseTimer.defaultProps = {
  timer: 5,
  phases: []
}

PhraseTimer.propTypes = {
  phrases: PropTypes.array,
  currentPhrase: PropTypes.any,
  timer: PropTypes.number
}

export default withStore(PhraseTimer)
