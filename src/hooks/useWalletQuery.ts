import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { customFetch } from "../utils/constants";
import { Wallet, WalletStatus, PaginationRequest, PaginationResponse } from "../utils/types";

const WALLET = "wallet";
const QUERY_KEY = {
  getStats: [WALLET, "stats"],
  getByName: (id: string) => [WALLET, id],
  getTable: (params: WalletGetTableRequest) => [WALLET, params],
};
export interface WalletGetStatsResponse {
  total: number;
  active: number;
  inactive: number;
  frozen: number;
  total_balance: number;
}
export const useWalletGetStats = () => {
  return useQuery({
    queryKey: QUERY_KEY.getStats,
    queryFn: async () => {
      const res = await customFetch.get(`app_admin/wallets/stats/`);
      return (await res.json()) as WalletGetStatsResponse;
    },
  });
};

export const useWalletGetByName = (name: string, enabled: boolean) => {
  return useQuery({
    queryKey: QUERY_KEY.getByName(name),
    queryFn: async () => {
      const res = await customFetch.get(`app_admin/wallets/?user=${name}`);
      const data = await res.json();
      return data as PaginationResponse<Wallet>;
    },
    enabled,
  });
};

export interface WalletGetTableRequest extends PaginationRequest {
  search?: string;
  status?: WalletStatus;
}

export const useWalletGetTable = (params: WalletGetTableRequest) => {
  return useQuery({
    queryKey: QUERY_KEY.getTable(params),
    queryFn: async () => {
      const search = new URLSearchParams();
      if (params.page) search.append("page", params.page.toString());
      if (params.search) search.append("search", params.search.toString());
      if (params.status) search.append("status", params.status.toString());
      if (params.page_size) search.append("page_size", params.page_size.toString());
      const res = await customFetch.get(`app_admin/wallets/?${search.toString()}`);
      return (await res.json()) as PaginationResponse<Wallet>;
    },
  });
};
export interface WalletCreateRequest {
  event_name: string;
  due_date: string;
  event_type: string;
  amount: number;
  currency: string;
}
export const useWalletCreate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (json: WalletCreateRequest) => {
      const res = await customFetch.post(`app_admin/wallet/`, { json });
      return (await res.json()) as Wallet;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [WALLET] });
    },
  });
};
