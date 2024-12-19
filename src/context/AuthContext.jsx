import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'
import { customFetch } from '../utils/constants'

const AuthContext = createContext(null)
const STORAGE_AUTH = 'auth'

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('Invalid Auth Context')
  return context
}

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(getUserData())

  function setAuthentication(token) {
    console.log(token);
    if (token) {
      // @ts-expect-error Header is not Type Safe
      customFetch.defaultOptions.headers['Authorization'] = `Bearer ${token}`
    }
  }

  function getUserData() {
    const storageItem = localStorage.getItem(STORAGE_AUTH)    
    setAuthentication(storageItem)
    return storageItem
  }

  function login(authData) {
    localStorage.setItem(STORAGE_AUTH, authData.token.access)
    setAuthentication(authData.token.access)
    setAuthData(authData)
  }

  function logout() {
    localStorage.removeItem(STORAGE_AUTH)
    setAuthentication(null)
    setAuthData(null)
  }

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = { children: PropTypes.element.isRequired }
