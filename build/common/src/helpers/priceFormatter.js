const formatter = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
})

export default input => formatter
  .format(input)
  .replace('COP', '$')
  .replace(/\,\b/gi, '.')
