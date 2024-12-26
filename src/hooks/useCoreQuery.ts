import { useQuery } from "@tanstack/react-query";
import { customFetch } from "../utils/constants";
export interface CoreGetCommonResponse {
  event_types: {
    id: number;
    name: string;
  }[];
  wallet_types: {
    code: string;
    name: string;
  }[];
  system_settings: {
    event_commission_rate: string;
  };
}

export const useCoreGetCommonQuery = () => {
  return useQuery({
    queryKey: ["core", "common"],
    queryFn: async () => {
      const res = await customFetch.get("/core/common");
      return (await res.json()) as CoreGetCommonResponse;
    },
  });
};
