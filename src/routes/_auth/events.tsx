import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import StatisticList from '../../components/statistic/StatisticList'
import useTable from '../../components/table/hooks/useTable'
import TableHeader from '../../components/table/TableHeader'
import TablePagination from '../../components/table/TablePagination'
import { eventsColumn, eventsStats } from '../../routeHelper/events/eventsData'
import useEventsQuery, { FetchEventsTableProps } from '../../routeHelper/events/useEventsQuery'
import TableContent from '../../components/table/TableContent'

export const Route = createFileRoute('/_auth/events')({
  component: RouteComponent,
})

function RouteComponent() {
  const [tableData, setTableData] = useState<FetchEventsTableProps>({});
  const { statisticQuery, tableQuery } = useEventsQuery(tableData);
  const { structure, pagination, filter } = useTable({
    columns: eventsColumn(),
    data: tableQuery.data?.results,
    pagination: { initialPage: 1, itemsPerPage: 10, totalPages: tableQuery.data ? (tableQuery.data.count / 10 - 1) : -1, },
  });

  const tableHeaderData = [
    { header: "All Bet", onClick: () => { filter.remove("status"); } },
    { header: "Open Bet", onClick: () => { filter.set("status", "open") } },
    { header: "Pending Bet", onClick: () => { filter.set("status", "pending") } },
    { header: "Closed Bet", onClick: () => { filter.set("status", "closed") } },
    { header: "Waiting for Approval", onClick: () => { filter.set("status", "waiting") } },
  ]
  console.log(pagination);

  useEffect(() => {
    setTableData({ limit: pagination.itemsPerPage, page: pagination.currentPage, status: filter.get("status") });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.data, pagination.itemsPerPage, pagination.currentPage]);

  const handleSearch = (search: string) => {
    filter.set("creator", { name: search, username: "" })
  }

  return <div>
    <StatisticList isLoading={statisticQuery.isLoading} stats={eventsStats(statisticQuery.data)} title={'Events'} />
    <section className=" m-5 bg-white p-6 rounded shadow">
      <TableHeader title={"Users"} onSearch={handleSearch} filterOptions={tableHeaderData} />
      <TableContent structure={structure} />
      <TablePagination {...pagination} />
    </section>
  </div>
}
