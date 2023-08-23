export const setToken = (payload: { authToken: string }) => {
    const { authToken } = payload
    try {
        const token = JSON.stringify(authToken)
        localStorage.setItem('petshop', token)
        return true
    } catch (error) {
        return false
    }
}
export const getToken = () => {
    try {
        const token = localStorage.getItem('petshop') ?? ''
        return JSON.parse(token)

    } catch (error) {
        return false
    }
}

export const removeToken = () => {
    try {
        localStorage.removeItem('petshop')
        return true
    } catch (error) {
        return false
    }
}