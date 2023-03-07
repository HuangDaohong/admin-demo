import Storage from './storage'

const getToken = () => Storage.find('token')

const setToken = (token: string) => Storage.save('token', token)

const removeToken = () => Storage.delete('token')

export { getToken, setToken, removeToken }
