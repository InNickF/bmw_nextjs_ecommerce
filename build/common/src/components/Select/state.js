import { withState, compose, withHandlers } from 'recompose'
import { withTheme } from 'styled-components'

const state = withState('selectedText', 'setSelectedText',
  props => props.defaultValue ? props.defaultValue.text : ''
)

const funcs = withHandlers({
  onSelectItem: props => (e, { value, label }) => {
    props.setSelectedText(label)
    if (props.onChange) {
      props.onChange({
        value,
        text: label
      })
    }
  }
})

const enhance = compose(withTheme, state, funcs)

export default enhance
