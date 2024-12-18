import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)
const STORAGE_AUTH = 'auth'

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('Invalid Auth Context')
  return context
}

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(getUserData())

  function getUserData() {
    const data = localStorage.getItem(STORAGE_AUTH)
    return data ? JSON.parse(data) : null
  }

  function login(authData) {
    localStorage.setItem(STORAGE_AUTH, JSON.stringify(authData.token.access))
    setAuthData(authData)
  }

  function logout() {
    localStorage.removeItem(STORAGE_AUTH)
    setAuthData(null)
  }

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = { children: PropTypes.element.isRequired }
