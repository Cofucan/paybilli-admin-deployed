import { User } from "../../utils/types";

export interface UsersStatisticResponse {
  users: number;
  verified_users: number;
  unverified_users: number;
  deactivated_users: number;
  suspended_users: number;
}

export interface UsersTableResponse {
  count: number;
  results: User[];
}
