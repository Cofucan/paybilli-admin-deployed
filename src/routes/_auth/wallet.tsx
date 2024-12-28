import { createFileRoute } from "@tanstack/react-router";
import {
  useWalletGetStats,
  useWalletGetTable,
  WalletGetTableRequest,
} from "../../hooks/useWalletQuery.ts";
import { useState } from "react";
import StatisticList from "../../components/statistic/StatisticList.tsx";
import { walletsStats } from "../../routeHelper/wallets/walletsData.tsx";

export const Route = createFileRoute("/_auth/wallet")({
  component: RouteComponent,
});

function RouteComponent() {
  const [tableData, setTableData] = useState<WalletGetTableRequest>({});

  const statsQuery = useWalletGetStats();
  const tableQuery = useWalletGetTable(tableData);
  console.log(tableQuery.data, statsQuery.data);

  return (
    <main className='mx-8 my-4'>
      <StatisticList
        isLoading={statsQuery.isLoading}
        stats={walletsStats(statsQuery.data)}
        title={"Wallets"}
      />
    </main>
  );
}
