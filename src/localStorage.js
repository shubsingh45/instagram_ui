const storeToken = (e) => {
    localStorage.setItem('token', e)
}

const getToken = () => {
    const token = localStorage.getItem('token')
    return token
}

const removeToken = () => {
    const token = localStorage.removeToken('token')
    return token
}

export {storeToken, getToken, removeToken}