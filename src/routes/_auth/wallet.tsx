import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import PageButtons from "../../components/custom-buttons/page-buttons/PageButtons"
import ConfirmationModal from "../../components/modal/ConfirmationModal"
import StatisticList from "../../components/statistic/StatisticList"
import useTable from "../../components/table/hooks/useTable"
import TableSection from "../../components/table/TableSection"
import { WalletChangeStatusRequest, WalletGetTableRequest, useWalletChangeStatus, useWalletGetStats, useWalletGetTable } from "../../hooks/useWalletQuery"
import { walletsColumn, walletsStats } from "../../routeHelper/wallets/walletsData"
import { generateUUID } from "../../utils/constants"

export const Route = createFileRoute('/_auth/wallet')({
  component: RouteComponent,
})
const checkboxId = generateUUID()

function RouteComponent() {
  const [tableData, setTableData] = useState<WalletGetTableRequest>({})
  const [columnIndex, setColumnIndex] = useState<string | number>(-1)

  const [freezeWalletIndex, setFreezeWalletIndex] = useState<string | number>(-1);
  const [activateWalletIndex, setActivateWalletIndex] = useState<string | number>(-1);
  const [deleteWalletIndex, setDeleteWalletIndex] = useState<string | number>(-1);



  const statisticQuery = useWalletGetStats()
  const tableQuery = useWalletGetTable(tableData)
  const changeStatusQuery = useWalletChangeStatus();

  const navigate = useNavigate()
  const columns = walletsColumn({
    checkboxId,
    navigate,
    columnIndex,
    setColumnIndex,
    handleFreezeButton: ({ id }: { id: number }) => {
      setFreezeWalletIndex(id)
    },
    handleActivateButton: ({ id }: { id: number }) => {
      setActivateWalletIndex(id)
    },
    handleDeleteButton: ({ id }: { id: number }) => {
      setDeleteWalletIndex(id)
    }
  })
  const { structure, pagination, filter } = useTable({
    columns,
    data: tableQuery.data?.results,
    pagination: { totalItems: tableQuery.data?.count, itemsPerPage: 20 },
  })

  useEffect(() => {
    setTableData({
      search: filter.get('wallet_id'),
      page_size: pagination.itemsPerPage,
      page: pagination.currentPage,
      status: filter.get('status'),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.data, pagination.itemsPerPage, pagination.currentPage])

  const handleSearch = (search: string) => {
    filter.set('wallet_id', search)
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
  async function handleChangeStatus(props: WalletChangeStatusRequest) {
    await changeStatusQuery.mutateAsync(props)
  }

  return (
    <main className="mx-3 lg:mx-8 my-4">
      <StatisticList
        title={'Wallets'}
        stats={walletsStats(statisticQuery.data)}
        isLoading={statisticQuery.isLoading}
      />
      <PageButtons
        onExportData={handleExportData}
        addText={'Invite Wallet'}
      />
      <TableSection
        filterOptions={[]} title={'Wallets'}
        {...pagination}
        onSearch={handleSearch}
        onBulkSearch={handleBulkSearch}
        onFilter={handleFilter}
        structure={structure}
        placeholder={'Search Bets'} />
      {(tableQuery.data?.results ?? [])
        .filter((x) => x.id === freezeWalletIndex)
        .map((x) => {
          return (
            <ConfirmationModal
              key={x.id}
              isVisible={true}
              toggleVisibility={() => {
                setFreezeWalletIndex(-1);
              }}
              data={{ id: x.id.toString(), status: "frozen" }}
              title={"Freeze Wallet?"}
              text={
                <p className='mb-6 text-sm text-gray-500'>
                  Are you certain you want to freeze this Wallet?
                </p>
              }
              btn={{
                title: "Freeze Wallet",
                className: "bg-red-600 text-white",
                onClose: handleChangeStatus,
              }}
            />
          );
        })}
      {(tableQuery.data?.results ?? [])
        .filter((x) => x.id === activateWalletIndex)
        .map((x) => {
          return (
            <ConfirmationModal
              key={x.id}
              isVisible={true}
              toggleVisibility={() => {
                setActivateWalletIndex(-1);
              }}
              data={{ id: x.id.toString(), status: "active" }}
              title={"Activate Wallet?"}
              text={
                <p className='mb-6 text-sm text-gray-500'>
                  Are you certain you want to Activate this Wallet?
                </p>
              }
              btn={{
                title: "Activate Wallet",
                className: "bg-red-600 text-white",
                onClose: handleChangeStatus,
              }}
            />
          );
        })}
      {(tableQuery.data?.results ?? [])
        .filter((x) => x.id === deleteWalletIndex)
        .map((x) => {
          return (
            <ConfirmationModal
              key={x.id}
              isVisible={true}
              toggleVisibility={() => {
                setDeleteWalletIndex(-1);
              }}
              data={{ id: x.id.toString(), status: "inactive" }}
              title={"Delete Wallet?"}
              text={
                <p className='mb-6 text-sm text-gray-500'>
                  Are you certain you want to Delete this Wallet?
                </p>
              }
              btn={{
                title: "Delete Wallet",
                className: "bg-red-600 text-white",
                onClose: handleChangeStatus,
              }}
            />
          );
        })}
    </main>
  )
}
