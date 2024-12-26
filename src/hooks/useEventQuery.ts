import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { customFetch } from "../utils/constants";
import { Events, EventsStatus, PaginationRequest, PaginationRespose } from "../utils/types";

const EVENTS = "events";
const QUERY_KEY = {
  get: [EVENTS],
  getById: (id: string) => [EVENTS, id],
  getTable: (params: EventsGetTableRequest) => [EVENTS, params],
};
const baseSearch = () => new URLSearchParams({ is_system: "false" });

export interface EventsGetStatsResponse {
  total_count: number;
  open_count: number;
  pending_count: number;
  closed_count: number;
}
export const useEventsGetStats = () => {
  return useQuery({
    queryKey: QUERY_KEY.get,
    queryFn: async () => {
      const res = await customFetch.get(`app_admin/events/stats/?${baseSearch().toString()}`);
      return (await res.json()) as EventsGetStatsResponse;
    },
  });
};

export interface EventsGetTableRequest extends PaginationRequest {
  search?: string;
  status?: EventsStatus;
}

export const useEventsGetTable = (params: EventsGetTableRequest) => {
  return useQuery({
    queryKey: QUERY_KEY.getTable(params),
    queryFn: async () => {
      const search = baseSearch();
      if (params.page) search.append("page", params.page.toString());
      if (params.search) search.append("search", params.search.toString());
      if (params.status) search.append("status", params.status.toString());
      if (params.page_size) search.append("page_size", params.page_size.toString());
      const res = await customFetch.get(`app_admin/events/?${search.toString()}`);
      return (await res.json()) as PaginationRespose<Events>;
    },
  });
};
export interface EventsCreateRequest {
  event_name: string;
  due_date: string;
  event_type: string;
  amount: number;
  currency: string;
}
export const useEventsCreate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (json: EventsCreateRequest) => {
      const res = await customFetch.post(`app_admin/events/?${baseSearch().toString()}`, { json });
      return (await res.json()) as Events;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: QUERY_KEY.get });
    },
  });
};
