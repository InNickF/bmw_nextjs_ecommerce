export default (str, maxCh) => {
  const numCharacters = str.length || 0

  return numCharacters >= maxCh ? `${str.slice(0, maxCh - 3)}...` : str
}
