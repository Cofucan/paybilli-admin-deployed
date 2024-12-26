import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { customFetch } from "../utils/constants";
import { Wallet, WalletStatus, PaginationRequest, PaginationRespose } from "../utils/types";

const WALLET = "wallet";
const QUERY_KEY = {
  getStats: [WALLET, "stats"],
  getById: (id: string) => [WALLET, id],
  getTable: (params: WalletGetTableRequest) => [WALLET, params],
};

export interface WalletGetStatsResponse {
  total_count: number;
  open_count: number;
  pending_count: number;
  closed_count: number;
}
export const useWalletGetStats = () => {
  return useQuery({
    queryKey: QUERY_KEY.getStats,
    queryFn: async () => {
      const res = await customFetch.get(`app_admin/wallet/stats/?${baseSearch().toString()}`);
      return (await res.json()) as WalletGetStatsResponse;
    },
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
      const search = baseSearch();
      if (params.page) search.append("page", params.page.toString());
      if (params.search) search.append("search", params.search.toString());
      if (params.status) search.append("status", params.status.toString());
      if (params.page_size) search.append("page_size", params.page_size.toString());
      const res = await customFetch.get(`app_admin/wallet/?${search.toString()}`);
      return (await res.json()) as PaginationRespose<Wallet>;
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
      const res = await customFetch.post(`app_admin/wallet/?${baseSearch().toString()}`, { json });
      return (await res.json()) as Wallet;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [WALLET] });
    },
  });
};
