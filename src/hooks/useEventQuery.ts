import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { customFetch } from "../utils/constants";
import { Events, EventsStatus, PaginationRequest, PaginationResponse } from "../utils/types";

const EVENTS = "events";
const QUERY_KEY = {
  getStats: [EVENTS, "stats"],
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
    queryKey: QUERY_KEY.getStats,
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
      const data = (await res.json()) as PaginationResponse<Events>;
      return { ...data, results: data.results.map((x, i) => ({ ...x, serial_no: i + 1 })) };
    },
  });
};

// TODO: Optimize Later
export const useEventsGetById = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEY.getById(id),
    queryFn: async () => {
      const res = await customFetch.get(`app_admin/events/${id}/`);
      return (await res.json()) as Events;
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
      await queryClient.invalidateQueries({ queryKey: [EVENTS] });
    },
  });
};

export const useEventsCloseByIdBet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const res = await customFetch.post(`/app_admin/events/${id.toString()}/status/`, {
        json: { status: "closed" },
      });
      return (await res.json()) as Events;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [EVENTS] });
    },
  });
};
