import { useQuery } from "@tanstack/react-query";
import { customFetch } from "../utils/constants";
import { Events, PaginationResponse } from "../utils/types";
import { EventsGetStatsResponse, EventsGetTableRequest } from "./useEventQuery";

const ESCROW = "escrow";
const QUERY_KEY = {
  getStats: [ESCROW, "stats"],
  getById: (id: string) => [ESCROW, id],
  getTable: (params: EventsGetTableRequest) => [ESCROW, params],
};
const baseSearch = () => new URLSearchParams({ is_system: "true" });


export const useEscrowGetStats = () => {
  return useQuery({
    queryKey: QUERY_KEY.getStats,
    queryFn: async () => {
      const res = await customFetch.get(`app_admin/events/stats/?${baseSearch().toString()}`);
      return (await res.json()) as EventsGetStatsResponse;
    },
  });
};

export const useEscrowGetTable = (params: EventsGetTableRequest) => {
  return useQuery({
    queryKey: QUERY_KEY.getTable(params),
    queryFn: async () => {
      const search = baseSearch();
      if (params.page) search.append("page", params.page.toString());
      if (params.search) search.append("search", params.search.toString());
      if (params.status) search.append("status", params.status.toString());
      if (params.page_size) search.append("page_size", params.page_size.toString());
      const res = await customFetch.get(`app_admin/events/?${search.toString()}`);
      const data = (await res.json()) as PaginationResponse<Events>;
      return {...data, results: data.results.map((x, i) => ({...x, serial_no: i+1
      }))}
    },
  });
};
