import { withState, withHandlers, compose, lifecycle } from 'recompose'

const openedLinks = withState(
  'openedLinks',
  'setOpenedLinks',
  props => props.openedItems || []
)
const funcs = withHandlers({
  toggleLink: props => categoryId => {
    // if open then close
    if (props.openedLinks.find(item => item === categoryId)) {
      const openedLinks = [...props.openedLinks].filter(
        item => item !== categoryId
      )
      props.setOpenedLinks(openedLinks)
      return
    }

    // then open
    props.setOpenedLinks([...props.openedLinks, categoryId])
  },
  isOpen: props => categoryId =>
    props.openedLinks.find(item => item === categoryId)
})

const withLifecycle = lifecycle({

})

const enhance = compose(
  openedLinks,
  funcs,
  withLifecycle
)

export default enhance
