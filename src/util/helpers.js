const getTokenFromStorage = () => localStorage.getItem('auth:token')

const decodeJwt = token => {
    const jwt = token
        .split('.')[1]
        .replace('-', '+')
        .replace('_', '/')
    return JSON.parse(window.atob(jwt))
}

const getRole = () => {
    const token = getTokenFromStorage()
    if (token) {
        const data = decodeJwt(getTokenFromStorage())
        return data.role
    }
    return null
}

const isAdmin = () => {
    const role = getRole()
    if (role !== 'admin') return false

    return true
}

const isAuth = () => {
    if (!getTokenFromStorage() || getTokenFromStorage() === '') {
        return false
    }

    const decodedToken = decodeJwt(getTokenFromStorage())
    if (new Date().valueOf() / 1000 > decodedToken.exp) {
        localStorage.clear()
        return false
    }
    return true
}

export { decodeJwt, isAuth, getRole, isAdmin }
