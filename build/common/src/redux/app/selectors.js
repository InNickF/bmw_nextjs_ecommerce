
const app = state => state.get('app')

export const isPartLoadingSelector = (state, partName) =>
  app(state).getIn([
    'isPartLoading',
    partName
  ]) || false

export const currentTabSelector = (state, tabName) =>
  app(state).getIn([
    'tabs',
    tabName
  ]) || undefined
