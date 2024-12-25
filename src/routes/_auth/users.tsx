import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import StatisticList from "../../components/statistic/StatisticList";
import useTable from "../../components/table/hooks/useTable";
import TableSection from "../../components/table/TableSection.tsx";
import { usersColumns, usersStats } from "../../routeHelper/users/usersData";
import useUsersQuery, { FetchUsersTableProps } from "../../routeHelper/users/useUsersQuery";
import { generateUUID } from "../../utils/constants";
import PageButtons from "../../components/custom-buttons/page-buttons/PageButtons.tsx";

export const Route = createFileRoute("/_auth/users")({
  component: RouteComponent,
});
const checkboxId = generateUUID();

function RouteComponent() {
  const [tableData, setTableData] = useState<FetchUsersTableProps>({});
  const [columnIndex, setColumnIndex] = useState<string | number>(-1);
  const navigate = useNavigate();
  const { statisticQuery, tableQuery, tableMutationAction } = useUsersQuery(tableData);
  const columns = usersColumns({ checkboxId, navigate, tableMutationAction, columnIndex, setColumnIndex });
  const { structure, pagination, filter } = useTable({
    columns,
    data: tableQuery.data?.data,
    pagination: tableQuery.data?.meta,
  });

  const tableHeaderData = [
    {
      header: "All Users", onClick: () => {
        filter.remove("status");
      },
    },
    {
      header: "Verified Users", onClick: () => {
        filter.set("status", "verified");
      },
    },
    {
      header: "Unverified Users", onClick: () => {
        filter.set("status", "unverified");
      },
    },
    {
      header: "Deactivated Accounts", onClick: () => {
        filter.set("status", "deactivated");
      },
    },
    {
      header: "Suspended Accounts", onClick: () => {
        filter.set("status", "suspended");
      },
    },
  ];
  console.log(pagination);

  useEffect(() => {
    setTableData({
      name: filter.get("user"),
      limit: pagination.itemsPerPage,
      page: pagination.currentPage,
      status: filter.get("status") as string,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.data, pagination.itemsPerPage, pagination.currentPage]);


  const handleSearch = (search: string) => {
    filter.set("user", search);
  };

  function handleFilter() {
    console.log("TODO: Handle Here");
  }

  function handleBulkSearch() {
    console.log("TODO: Handle Bulk Search");
  }

  function handleExportData() {
    console.log("TODO: Handle Export Data");
  }

  const handleInviteUser = () => {
    console.log("TODO: Handle Invite User");
  };

  return (
    <main className="mx-8 my-4">
      <StatisticList
        title={"Users Statistic"}
        stats={usersStats(statisticQuery.data)}
        isLoading={statisticQuery.isLoading}
      />
      <PageButtons
        onExportData={handleExportData}
        onAdd={handleInviteUser}
        addText={'Invite User'}
      />
      <TableSection
        title={'Users'}
        {...pagination}
        onSearch={handleSearch}
        onBulkSearch={handleBulkSearch}
        onFilter={handleFilter}
        filterOptions={tableHeaderData}
        structure={structure}
        placeholder={'Search Bets'}
      />
    </main>
  );
}
