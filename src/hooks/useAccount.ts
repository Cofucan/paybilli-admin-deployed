import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { customFetch, objectToFormData } from "../utils/constants";
import { User } from "../utils/types";

export const ACCOUNT = "account";
const QUERY_KEY = {
  get: [ACCOUNT],
};

export const useAccountGetUser = (enabled = () => true) => {
  return useQuery({
    queryKey: QUERY_KEY.get,
    retry: 0,
    staleTime: 0,
    
    queryFn: async () => {
      const res = await customFetch.get(`account/user-details/`);
      console.log(res.ok);
      
      if (!res.ok) throw new Error("")
      return (await res.json()) as User;
    },
    enabled
  });
};
export const useAccountEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (json: Partial<User>) => {
      const body = objectToFormData(json as unknown as Record<string, never>);
      const res = await customFetch.put(`account/user-details/`, { body });
      return (await res.json()) as User;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [ACCOUNT] });
    },
  });
};

export interface AccountChangePasswordRequest {
  old_password: string
  new_password: string
  confirm_new_password: string
}
export const useAccountChangePassword = () => {
  return useMutation({
    mutationFn: async (json: AccountChangePasswordRequest) => {
      const res = await customFetch.post(`account/change-password/`, { json });
      return (await res.json()) as User;
    }
  });
}