import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import StatisticList from "../../components/statistic/StatisticList";
import useTable from "../../components/table/hooks/useTable";
import { eventsColumn, eventsStats } from "../../routeHelper/events/eventsData";
import useEventsQuery, {
  FetchEventsTableProps,
} from "../../routeHelper/events/useEventsQuery";
import TableSection from "../../components/table/TableSection.tsx";

export const Route = createFileRoute("/_auth/events")({
  component: RouteComponent,
});

function RouteComponent() {
  const [tableData, setTableData] = useState<FetchEventsTableProps>({});
  const { statisticQuery, tableQuery } = useEventsQuery(tableData);
  const { structure, pagination, filter } = useTable({
    columns: eventsColumn(),
    data: tableQuery.data?.results,
    pagination: {
      initialPage: 1,
      itemsPerPage: 10,
      totalPages: tableQuery.data ? tableQuery.data.count / 10 - 1 : -1,
    },
  });

  const tableHeaderData = [
    {
      header: "All Bet",
      onClick: () => {
        filter.remove("status");
      },
    },
    {
      header: "Open Bet",
      onClick: () => {
        filter.set("status", "open");
      },
    },
    {
      header: "Pending Bet",
      onClick: () => {
        filter.set("status", "pending");
      },
    },
    {
      header: "Closed Bet",
      onClick: () => {
        filter.set("status", "closed");
      },
    },
    {
      header: "Waiting for Approval",
      onClick: () => {
        filter.set("status", "waiting");
      },
    },
  ];
  console.log(pagination);

  useEffect(() => {
    setTableData({
      limit: pagination.itemsPerPage,
      page: pagination.currentPage,
      status: filter.get("status"),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.data, pagination.itemsPerPage, pagination.currentPage]);

  const handleSearch = (search: string) => {
    filter.set("creator", { name: search, username: "" });
  };

  return (
    <main className="mx-8 my-4 space-y-20">
      <StatisticList
        isLoading={statisticQuery.isLoading}
        stats={eventsStats(statisticQuery.data)}
        title={"Events"}
      />
      <TableSection
        title={"Latest Actions"}
        {...pagination}
        onSearch={handleSearch}
        filterOptions={tableHeaderData}
        structure={structure}
        placeholder={"Search Bets"}
      />
    </main>
  );
}
