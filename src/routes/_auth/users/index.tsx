import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import PageButtons from "../../../components/custom-buttons/page-buttons/PageButtons"
import StatisticList from "../../../components/statistic/StatisticList"
import useTable from "../../../components/table/hooks/useTable"
import TableSection from "../../../components/table/TableSection"
import { UserGetTableRequest, useUserChangeStatus, useUserGetStats, useUserGetTable } from "../../../hooks/useUsersQuery"
import { usersColumns, usersStats } from "../../../routeHelper/users/usersData"
import { generateUUID } from "../../../utils/constants"

export const Route = createFileRoute('/_auth/users/')({
  component: RouteComponent,
})
const checkboxId = generateUUID()

function RouteComponent() {
  const [tableData, setTableData] = useState<UserGetTableRequest>({})
  const [columnIndex, setColumnIndex] = useState<string | number>(-1)
  const navigate = useNavigate()
  const statisticQuery = useUserGetStats()
  const tableQuery = useUserGetTable(tableData)
  const tableMutationAction = useUserChangeStatus()
  const columns = usersColumns({
    checkboxId,
    navigate,
    tableMutationAction,
    columnIndex,
    setColumnIndex,
  })
  const { structure, pagination, filter } = useTable({
    columns,
    data: tableQuery.data?.results,
    pagination: { totalItems: tableQuery.data?.count, itemsPerPage: 20 },
  })

  const tableHeaderData = [
    {
      header: 'All Users',
      onClick: () => {
        filter.remove('account_status')
      },
    },
    {
      header: 'Verified Users',
      onClick: () => {
        filter.set('account_status', 'verified')
      },
    },
    {
      header: 'Unverified Users',
      onClick: () => {
        filter.set('account_status', 'unverified')
      },
    },
    {
      header: 'Deactivated Accounts',
      onClick: () => {
        filter.set('account_status', 'deactivated')
      },
    },
    {
      header: 'Suspended Accounts',
      onClick: () => {
        filter.set('account_status', 'suspended')
      },
    },
  ]

  useEffect(() => {
    setTableData({
      search: filter.get('user'),
      page_size: pagination.itemsPerPage,
      page: pagination.currentPage,
      account_status: filter.get('account_status')
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.data, pagination.itemsPerPage, pagination.currentPage])

  const handleSearch = (search: string) => {
    filter.set('user', search)
  }

  function handleFilter() {
    console.log('TODO: Handle Here')
  }

  function handleBulkSearch() {
    console.log('TODO: Handle Bulk Search')
  }

  function handleExportData() {
    console.log('TODO: Handle Export Data')
  }

  const handleInviteUser = () => {
    console.log('TODO: Handle Invite User')
  }

  return (
    <main className="mx-8 my-4">
      <StatisticList
        title={'Users Statistic'}
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
  )
}
