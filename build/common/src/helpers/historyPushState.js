export default params => typeof window !== 'undefined'
  ? window.history.pushState(null, null, params)
  : params
