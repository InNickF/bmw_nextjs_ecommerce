export const user = state => state.get('user')

export const selectProfile = state =>
  user(state).size ? user(state) : {}

export const currentUserSelector = state => user(state).get('user')
