import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { customFetch, generateUUID } from "../utils/constants";
import { User, UserStatus, PaginationRequest, PaginationRespose } from "../utils/types";

const USER = "user";
const QUERY_KEY = {
  getStats: [USER, "stats"],
  getById: (id: string) => [USER, id],
  getTable: (params: UserGetTableRequest) => [USER, params],
};

export interface UserGetStatsResponse {
  users: number;
  verified_users: number;
  unverified_users: number;
  deactivated_users: number;
  suspended_users: number;
}
export const useUserGetStats = () => {
  return useQuery({
    queryKey: QUERY_KEY.getStats,
    queryFn: async () => {
      const res = await customFetch.get(`app_admin/users/stats/`);
      return (await res.json()) as UserGetStatsResponse;
    },
  });
};

export interface UserGetTableRequest extends PaginationRequest {
  account_status?: UserStatus;
  search?: string;
}

export const useUserGetTable = (params: UserGetTableRequest) => {
  return useQuery({
    queryKey: QUERY_KEY.getTable(params),
    queryFn: async () => {
      const { page = 1, page_size = 20 } = params;
      const query = new URLSearchParams({
        page: page.toString(),
        page_size: page_size.toString(),
        ...(params.account_status && { account_status: params.account_status }),
        ...(params.search && { search: params.search }),
      });
      const response = await customFetch.get(`app_admin/users/?${query.toString()}`);
      const res = (await response.json()) as PaginationRespose<User>;
      return { ...res, results: res.results.map((x) => ({ ...x, id: generateUUID() })) };
    },
  });
};
// TODO: Optimize Later
export const useUserGetById = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEY.getById(id),
    queryFn: async () => {
      const res = await customFetch.get(`app_admin/users/${id}/`);
      return (await res.json()) as User;
    },
  });
};

export interface UserEditRequest {
  event_name: string;
  due_date: string;
  event_type: string;
  amount: number;
  currency: string;
}
export const useUserEdit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (json: UserEditRequest) => {
      // const res = await customFetch.post(`app_admin/user/`, { json });
      // return (await res.json()) as User;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [USER] });
    },
  });
};
export interface UserChangeStatusRequest {
  id: string;
  status: "verified" | "suspended" | "deactivated";
}
export const useUserChangeStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, status }: UserChangeStatusRequest) => {
      const body = new FormData();
      body.append(status, status);
      const res = await customFetch.put(`app_admin/users/${id}/`, { body });
      return (await res.json()) as User;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [USER] });
    },
  });
};
