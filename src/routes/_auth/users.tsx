import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import StatisticList from "../../components/statistic/StatisticList";
import useTable from "../../components/table/hooks/useTable";
import TablePagination from "../../components/table/TablePagination.tsx";
import { usersColumns, usersStats } from "../../routeHelper/users/usersData";
import useUsersQuery, {
  FetchUsersTableProps,
} from "../../routeHelper/users/useUsersQuery";
import { generateUUID } from "../../utils/constants";
import TableHeader from "../../components/table/TableHeader.tsx";
import TableContent from "../../components/table/TableContent.tsx";

export const Route = createFileRoute("/_auth/users")({
  component: RouteComponent,
});
const checkboxId = generateUUID();

function RouteComponent() {
  const [tableData, setTableData] = useState<FetchUsersTableProps>({});
  const [columnIndex, setColumnIndex] = useState(-1);
  const navigate = useNavigate();
  const { statisticQuery, tableQuery, tableMutationAction } =
    useUsersQuery(tableData);
  const columns = usersColumns({
    checkboxId,
    navigate,
    tableMutationAction,
    columnIndex,
    setColumnIndex,
  });
  const { structure, pagination, filter } = useTable({
    columns,
    data: tableQuery.data?.data,
    pagination: tableQuery.data?.meta,
  });

  const tableHeaderData = [
    {
      header: "All Users",
      onClick: () => {
        filter.remove("status");
      },
    },
    {
      header: "Verified Users",
      onClick: () => {
        filter.set("status", "verified");
      },
    },
    {
      header: "Unverified Users",
      onClick: () => {
        filter.set("status", "unverified");
      },
    },
    {
      header: "Deactivated Accounts",
      onClick: () => {
        filter.set("status", "deactivated");
      },
    },
    {
      header: "Suspended Accounts",
      onClick: () => {
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
      status: filter.get("status"),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.data, pagination.itemsPerPage, pagination.currentPage]);

  useEffect(() => {
    document.onmousedown = () => {
      setColumnIndex(-1);
    };
  }, []);

  const handleSearch = (search: string) => {
    filter.set("user", search);
  };

  function handleFilter() {
    console.log("TODO: Handle Here");
  }

  function handleBulkSearch() {}

  return (
    <main className="mx-8 my-4 space-y-20">
      <StatisticList
        title={"Users Statistic"}
        stats={usersStats(statisticQuery.data)}
        isLoading={statisticQuery.isLoading}
      />
      <section className="rounded-t-lg bg-white shadow">
        <TableHeader
          title={"Users"}
          onSearch={handleSearch}
          filterOptions={tableHeaderData}
          onFilter={handleFilter}
          onBulkSearch={handleBulkSearch}
        />
        <div className={"p-6 pt-0"}>
          <TableContent structure={structure} />
          <TablePagination {...pagination} />
        </div>
      </section>
    </main>
  );
}
