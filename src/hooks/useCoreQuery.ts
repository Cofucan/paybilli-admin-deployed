import { useQuery } from "@tanstack/react-query";
import { customFetch } from "../utils/constants";
const CORE = "core";
const QUERY_KEY = {
  getCommon: [CORE, "common"],
  getConstants: [CORE, "constants"],
};
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
    queryKey: QUERY_KEY.getCommon,
    queryFn: async () => {
      const res = await customFetch.get("/core/common");
      return (await res.json()) as CoreGetCommonResponse;
    },
  });
};

export interface CoreGetConstantsResponse {
  result: {
    account_status: {
      display: string;
      value: string;
    }[];
    airtime_provider: {
      display: string;
      value: string;
    }[];
    currency: {
      display: string;
      value: string;
    }[];
    dispute_status: {
      display: string;
      value: string;
    }[];
    payment_provider: {
      display: string;
      value: string;
    }[];
    payment_source: {
      display: string;
      value: string;
    }[];
    payment_status: {
      display: string;
      value: string;
    }[];
    payment_type: {
      display: string;
      value: string;
    }[];
    service_id: {
      display: string;
      value: string;
    }[];
    subscription_type: {
      display: string;
      value: string;
    }[];
    wallet_currency: {
      display: string;
      value: string;
    }[];
    withdrawal_method_type: {
      display: string;
      value: string;
    }[];
  };
}

export const useCoreGetConstantsQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY.getConstants,
    queryFn: async () => {
      const res = await customFetch.get("/core/constants/");
      return (await res.json()) as CoreGetConstantsResponse;
    },
  });
};
