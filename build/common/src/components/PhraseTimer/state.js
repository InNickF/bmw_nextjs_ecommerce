import { withState, lifecycle, withHandlers, compose } from 'recompose'

let timer

const currentPhrase = withState(
  'currentPhrase',
  'setCurrentPhrase',
  props => props.phrases[0]
)

const funcs = withHandlers({
  swithPhrases: ({ currentPhrase, phrases, setCurrentPhrase }) => () => {
    const prevPhraseIndex = phrases.indexOf(currentPhrase)
    const nextPhrase = phrases[prevPhraseIndex + 1]

    // if exists nextPhrase
    if (nextPhrase) {
      setCurrentPhrase(nextPhrase)
      return
    }

    // set first phase
    setCurrentPhrase(phrases[0])
  }
})

const cycles = lifecycle({
  componentDidMount () {
    if (this.props.phrases.length) {
      timer = setInterval(this.props.swithPhrases, (this.props.timer || 5) * 1000)
    }
  },
/*   componentWillUnmount () {
    clearInterval(timer)
  } */
})

const enhance = compose(currentPhrase, funcs, cycles)

export default enhance
