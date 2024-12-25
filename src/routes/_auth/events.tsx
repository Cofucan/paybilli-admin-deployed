import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import StatisticList from "../../components/statistic/StatisticList";
import useTable from "../../components/table/hooks/useTable";
import { eventsColumn, eventsStats } from "../../routeHelper/events/eventsData";
import useEventsQuery, {
  FetchEventsTableProps,
} from "../../routeHelper/events/useEventsQuery";
import TableSection from "../../components/table/TableSection.tsx";
import PageButtons from "../../components/custom-buttons/page-buttons/PageButtons.tsx";

export const Route = createFileRoute("/_auth/events")({
  component: RouteComponent,
});

function RouteComponent() {
  const [tableData, setTableData] = useState<FetchEventsTableProps>({});
  const { statisticQuery, tableQuery } = useEventsQuery(tableData);
  const [columnIndex, setColumnIndex] = useState<string | number>(-1);
  const navigate = useNavigate();
  const columns = eventsColumn({ columnIndex, setColumnIndex, navigate, handleCloseBetButton });
  const { structure, pagination, filter } = useTable({
    columns,
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
    filter.set("creator", search);
  };

  const handleExportData = () => {
    // Implement the export data functionality here
  };

  const handleCreateEvent = () => {
    // Implement the create event functionality here
  };
  function handleCloseBetButton() {
    // Implement the handle close bet button functionality here
  }

  return (
    <main className="mx-8 my-4">
      <StatisticList
        isLoading={statisticQuery.isLoading}
        stats={eventsStats(statisticQuery.data)}
        title={"Events"}
      />
      <PageButtons
        onExportData={handleExportData}
        onAdd={handleCreateEvent}
        addText={'Create New Events'}
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
