import { ComponentPropsWithoutRef } from "react";

export interface AuthResponse {
  token: { access: string; refresh: string };
  user: User;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  profilePicture: string;
  dateRegistered: string;
  recentActivity: string;
  status: UserStatus;
}

export type UserStatus =
  | "verified"
  | "unverified"
  | "deactivated"
  | "suspended";

export type CustomIconProps = {
  pathClassName?: string;
} & ComponentPropsWithoutRef<"svg">;
