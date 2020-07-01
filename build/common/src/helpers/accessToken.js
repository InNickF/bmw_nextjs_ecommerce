import Cookies from 'universal-cookie'

const accessToken = 'accessToken'
const sessionUserId = 'userId'

export function getToken (ssrCookie) {
  const cookies = ssrCookie ? new Cookies(ssrCookie) : new Cookies()
  return {
    userId: cookies.get(sessionUserId),
    token: cookies.get(accessToken)
  }
}

export function setToken (token, userId) {
  const cookies = new Cookies()
  cookies.set(accessToken, token)
  cookies.set(sessionUserId, userId)
}

export function removeToken () {
  const cookies = new Cookies()
  cookies.remove(accessToken)
  cookies.remove(sessionUserId)
}
