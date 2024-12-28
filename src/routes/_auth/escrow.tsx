import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import PageButtons from "../../components/custom-buttons/page-buttons/PageButtons";
import ConfirmationModal from "../../components/modal/ConfirmationModal.tsx";
import StatisticList from "../../components/statistic/StatisticList";
import useTable from "../../components/table/hooks/useTable";
import TableSection from "../../components/table/TableSection";
import {
  useEscrowCloseByIdBet,
  useEscrowGetStats,
  useEscrowGetTable,
} from "../../hooks/useEscrowQuery";
import { EventsGetTableRequest } from "../../hooks/useEventQuery";
import { escrowColumn } from "../../routeHelper/escrow/escrowData";
import { eventsStats } from "../../routeHelper/events/eventsData";

export const Route = createFileRoute("/_auth/escrow")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const [columnIndex, setColumnIndex] = useState<string | number>(-1);
  const [tableData, setTableData] = useState<EventsGetTableRequest>({});
  const [closeBetIndex, setCloseBetIndex] = useState<string | number>(-1);

  const statsQuery = useEscrowGetStats();
  const tableQuery = useEscrowGetTable(tableData);
  const closeByIdQuery = useEscrowCloseByIdBet();

  const columns = escrowColumn({
    columnIndex,
    setColumnIndex,
    navigate,
    handleCloseBetButton: ({ id }: { id: number }) => {
      setCloseBetIndex(id);
    },
  });
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
      search: filter.get("event_name"),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.data, pagination.itemsPerPage, pagination.currentPage]);

  const handleSearch = (search: string) => {
    filter.set("event_name", search);
  };

  const handleExportData = () => {
    // Implement the export data functionality here
  };

  const handleFilter = () => {
    // Implement the filter functionality here
  };
  async function handleCloseBetButton(id: number) {
    await closeByIdQuery.mutateAsync(id);
  }

  return (
    <main className='mx-8 my-4'>
      <StatisticList
        isLoading={statsQuery.isLoading}
        stats={eventsStats(statsQuery.data)}
        title={"Escrow Bets"}
      />
      <PageButtons onExportData={handleExportData} addText={""} />
      <TableSection
        title={"Latest Actions"}
        {...pagination}
        onSearch={handleSearch}
        filterOptions={tableHeaderData}
        structure={structure}
        placeholder={"Search Bets"}
        onFilter={handleFilter}
      />
      {(tableQuery.data?.results ?? [])
        .filter((x) => x.id === closeBetIndex)
        .map((x) => {
          return (
            <ConfirmationModal
              key={x.id}
              isVisible={true}
              toggleVisibility={() => {
                setCloseBetIndex(-1);
              }}
              data={x.id}
              title={"Close Bet?"}
              text={
                <p className='mb-6 text-sm text-gray-500'>
                  Are you certain you want to close this bet?
                </p>
              }
              btn={{
                title: "Close Bet",
                className: "bg-red-600 text-white",
                onClose: handleCloseBetButton,
              }}
            />
          );
        })}
    </main>
  );
}
