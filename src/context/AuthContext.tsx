import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { AuthResponse } from "../utils/types.ts";
import { customFetch } from "../utils/constants.ts";

export interface AuthContextProps {
  authToken: string | null;
  login: (authData: AuthResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);
const STORAGE_AUTH = "auth";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Invalid Auth Context");
  return context;
};

function setAuthentication(token: string | null) {
  const authToken = token ? `Bearer ${token}` : null;
  if (authToken) customFetch.defaultOptions.headers.Authorization = authToken;
}

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(getUserData());
  useEffect(() => {
    setAuthentication(authToken);
  }, [authToken]);

  function getUserData() {
    return localStorage.getItem(STORAGE_AUTH);
  }

  function login(authData: AuthResponse) {
    localStorage.setItem(STORAGE_AUTH, authData.token.access);
    setAuthToken(authData.token.access);
  }

  function logout() {
    localStorage.removeItem(STORAGE_AUTH);
    setAuthToken(null);
  }

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>{children}</AuthContext.Provider>
  );
};
