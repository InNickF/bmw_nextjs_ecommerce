export const product = state => state.get('product')

export const currentProductSelector = state => product(state).get('currentProduct')
