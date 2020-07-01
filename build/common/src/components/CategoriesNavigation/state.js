import { withTheme } from 'styled-components'
import { withState, withHandlers, compose } from 'recompose'

const TOP_LEVEL_PARENT_ID = 0

function getCategoriesByParentId(props) {
  return parentId => props.categories.filter(item => item.parentId === parentId)
}

function setNavigationState(props) {
  return ({ prevCategory, nextCategories, currentCategory, activedNavigation }) => {
    props.setNavigationStatus({
      currentCategory,
      prevCategory,
      nextCategories,
      rootCategories: props.categories,
      activedNavigation: activedNavigation
    })
  }
}

function setNextState(props) {
  return nextCategoryId => {
    const nextCategory = props.categories.find(
      item => item.id === nextCategoryId
    )
    const { prevCategory } = props.navigationStatus

    const navigationStatus = {
      currentCategory: nextCategoryId,
      activedNavigation: true,
      prevCategory: TOP_LEVEL_PARENT_ID
    }

    if (nextCategory && nextCategory.parentId !== TOP_LEVEL_PARENT_ID) {
      const parentCategory = props.categories.find(
        item => item.id === nextCategory.parentId
      )
      navigationStatus.prevCategory = nextCategory.parentId
      navigationStatus.navigationText = `${parentCategory.name}`
      props.setNavigationStatus(navigationStatus)
    }

    if (nextCategory && nextCategory.parentId === TOP_LEVEL_PARENT_ID) {
      navigationStatus.navigationText = nextCategory.name
      props.setNavigationStatus(navigationStatus)
    }

    if (nextCategoryId === TOP_LEVEL_PARENT_ID && prevCategory === TOP_LEVEL_PARENT_ID) {
      navigationStatus.navigationText = 'Menú'
      props.setNavigationStatus(navigationStatus)
    }
  }
}

function setPrevState(props) {
  return () => {
    const { prevCategory, currentCategory } = props.navigationStatus

    if (prevCategory === TOP_LEVEL_PARENT_ID && currentCategory === TOP_LEVEL_PARENT_ID) {
      props.setNavigationStatus({
        currentCategory: TOP_LEVEL_PARENT_ID,
        prevCategory: TOP_LEVEL_PARENT_ID,
        activedNavigation: false,
        navigationText: 'Volver a menú'
      })
      return
    }

    props.setNextState(prevCategory)
  }
}

const animationValues = withState('animationValues', 'setAnimationValues', {
  opacity: 0,
  marginLeft: 0
})

const navigationStatus = withState('navigationStatus', 'setNavigationStatus', {
  currentCategory: TOP_LEVEL_PARENT_ID,
  prevCategory: TOP_LEVEL_PARENT_ID,
  activedNavigation: false,
  navigationText: 'Volver a menú'
})

const getCategoriesFunc = withHandlers({
  getCategoriesByParentId
})

const nextStateFunc = withHandlers({
  setNextState
})

const funcs = withHandlers({
  setNavigationState,
  setPrevState
})

export const enhance = compose(
  withTheme,
  navigationStatus,
  animationValues,
  getCategoriesFunc,
  nextStateFunc,
  funcs
)

export default enhance
