import { useQuery } from "@tanstack/react-query";
import { customFetch } from "../../utils/constants";
import { EventsStatsResponse, EventsTableResponse } from "./eventsTypes";
export interface FetchEventsTableProps {
  page?: number;
  limit?: number;
  status?: string;
}


async function fetchTable({
  page = 1,
  limit = 10,
  status = "",
}: FetchEventsTableProps) {
  const query = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...(status && { status }),
  });

  const response = await fetch(
    `http://localhost:3000/events?${query.toString()}`,
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (await response.json()) as EventsTableResponse;
}

const fetchStatistics = async () => {
  const res = await customFetch.get("app_admin/events/stats/");
  return (await res.json()) as EventsStatsResponse;
};

const useEventsQuery = (props: FetchEventsTableProps) => {
  const statisticQuery = useQuery({
    queryKey: ["events"],
    queryFn: fetchStatistics,
  });
  const tableQuery = useQuery({
    queryKey: ["events", props],
    queryFn: () => fetchTable(props),
  });

  return { statisticQuery, tableQuery };
};

export default useEventsQuery;
