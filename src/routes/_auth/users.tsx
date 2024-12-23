import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import StatisticList from "../../components/statistic/StatisticList";
import useTable from "../../components/table/hooks/useTable";
import TablePagination from "../../components/table/TablePagination.tsx";
import { usersColumns, usersStats } from "../../routeHelper/users/usersData";
import useUsersQuery, { FetchUsersTableProps } from "../../routeHelper/users/useUsersQuery";
import { generateUUID } from "../../utils/constants";
import TableHeader from "../../components/table/TableHeader.tsx";

export const Route = createFileRoute("/_auth/users")({
  component: RouteComponent,
});
const checkboxId = generateUUID();

function RouteComponent() {
  const [tableData, setTableData] = useState<FetchUsersTableProps>({});
  const { statisticQuery, tableQuery } = useUsersQuery(tableData);

  const { structure, pagination, filter } = useTable({
    columns: usersColumns(checkboxId),
    data: tableQuery.data?.data,
    pagination: tableQuery.data?.meta,
  });
  const tableHeaderData = [
    { header: "All Users", onClick: () => { filter.remove("status"); } },
    { header: "Verified Users", onClick: () => { filter.set("status", "verified") } },
    { header: "Unverified Users", onClick: () => { filter.set("status", "unverified") } },
    { header: "Deactivated Accounts", onClick: () => { filter.set("status", "deactivated") } },
    { header: "Suspended Accounts", onClick: () => { filter.set("status", "suspended") } },
  ]
  console.log(pagination);

  useEffect(() => {
    setTableData({ name: filter.get("user"), limit: pagination.itemsPerPage, page: pagination.currentPage, status: filter.get("status") });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.data, pagination.itemsPerPage, pagination.currentPage]);

  const handleSearch = (search: string) => {
    filter.set("user", search)
  }

  return (
    <main className="mx-10 space-y-20">
      <StatisticList
        title={"Users Statistic"}
        stats={usersStats(statisticQuery.data)}
        isLoading={statisticQuery.isLoading}
      />
      <section className="bg-white p-5 rounded shadow">
        <TableHeader title={"Users"} onSearch={handleSearch} filterOptions={tableHeaderData} />
        <table className="w-full text-sm">
          <thead>
            <tr>{structure.headers.map(x => <th key={x.id} className="text-center">{x.content}</th>)}</tr>
          </thead>
          <tbody>
            {structure.rows.map((rows, i) => <tr key={i}>{rows.map(x => <td key={x.id}>{x.content}</td>)}</tr>)}
          </tbody>
        </table>
        <TablePagination {...pagination} />
      </section>
    </main>
  );
}
