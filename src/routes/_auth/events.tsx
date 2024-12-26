import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import PageButtons from "../../components/custom-buttons/page-buttons/PageButtons.tsx";
import StatisticList from "../../components/statistic/StatisticList";
import useTable from "../../components/table/hooks/useTable";
import TableSection from "../../components/table/TableSection.tsx";
import {
  EventsGetTableRequest,
  useEventsGetStats,
  useEventsGetTable,
} from "../../hooks/useEventQuery.ts";
import { eventsColumn, eventsStats } from "../../routeHelper/events/eventsData";

export const Route = createFileRoute("/_auth/events")({
  component: RouteComponent,
});

function RouteComponent() {
  const [tableData, setTableData] = useState<EventsGetTableRequest>({});
  const statsQuery = useEventsGetStats();
  const tableQuery = useEventsGetTable(tableData);
  const [columnIndex, setColumnIndex] = useState<string | number>(-1);
  const navigate = useNavigate();
  const columns = eventsColumn({ columnIndex, setColumnIndex, navigate, handleCloseBetButton });
  const { structure, pagination, filter } = useTable({
    columns,
    data: tableQuery.data?.results,
    pagination: {
      initialPage: 1,
      itemsPerPage: 20,
      totalItems: tableQuery.data?.count ?? -1,
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

  useEffect(() => {
    setTableData({
      page_size: pagination.itemsPerPage,
      page: pagination.currentPage,
      status: filter.get("status"),
      search: filter.get("creator"),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.data, pagination.itemsPerPage, pagination.currentPage]);

  const handleSearch = (search: string) => {
    filter.set("creator", search);
  };

  const handleExportData = () => {
    // Implement the export data functionality here
  };

  const handleCreateEvent = async () => {
    // Implement the create event functionality here
    await navigate({ to: "/event/create" });
  };
  function handleCloseBetButton() {
    // Implement the handle close bet button functionality here
  }

  return (
    <main className='mx-8 my-4'>
      <StatisticList
        isLoading={statsQuery.isLoading}
        stats={eventsStats(statsQuery.data)}
        title={"Events"}
      />
      <PageButtons
        onExportData={handleExportData}
        onAdd={handleCreateEvent}
        addText={"Create New Events"}
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
