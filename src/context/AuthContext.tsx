import { QueryClient, UseQueryResult } from "@tanstack/react-query";
import { createContext, FC, ReactNode, useContext } from "react";
import { ACCOUNT, useAccountGetUser } from "../hooks/useAccount.ts";
import { customFetch } from "../utils/constants.ts";
import { AuthResponse, User } from "../utils/types.ts";

export interface AuthContextProps {
  user: UseQueryResult<User>;
  login: (authData: AuthResponse, update?: boolean) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null | undefined>(null);
const STORAGE_AUTH = "auth";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Invalid Auth Context");
  return context;
};

function setAuthentication(token: string | null | undefined) {
  const authToken = token ? `Bearer ${token}` : null;
  if (authToken) customFetch.defaultOptions.headers.Authorization = authToken;
  else delete customFetch.defaultOptions.headers.Authorization;
}

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient();

  const user = useAccountGetUser(() => {
    setAuthentication(localStorage.getItem(STORAGE_AUTH));
    return true;
  });

  async function login(authData: AuthResponse, update = true ) {
    localStorage.setItem(STORAGE_AUTH, authData.token.access);
    setAuthentication(authData.token.access);
    if (update) {
      await queryClient.invalidateQueries({ queryKey: [ACCOUNT] });
      await user.refetch();
    }
  }

  async function logout() {
    localStorage.removeItem(STORAGE_AUTH);
    setAuthentication(null);
    await queryClient.invalidateQueries({ queryKey: [ACCOUNT] });
    await user.refetch();
  }

  return <AuthContext.Provider value={{ login, logout, user }}>{children}</AuthContext.Provider>;
};
