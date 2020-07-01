export default req => {
  if (req) {
    return `https://${req.headers.host}${req.originalUrl}`
  }
  return typeof window !== 'undefined' ? window.location.href : ''
}
