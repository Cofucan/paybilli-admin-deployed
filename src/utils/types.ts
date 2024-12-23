export interface AuthResponse {
  token: { access: string; refresh: string };
  user: User;
}

export interface User {}
