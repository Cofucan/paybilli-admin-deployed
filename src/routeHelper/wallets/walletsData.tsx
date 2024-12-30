import { UseNavigateResult } from "@tanstack/react-router";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import TableActionDropdown, {
  TableActionDropdownProps,
} from "../../components/dropdown/TableActionDropdown";
import { createColumn, TableColumn } from "../../components/table/hooks/useTable";
import { WalletGetStatsResponse } from "../../hooks/useWalletQuery.ts";
import { formatDate } from "../../utils/DateFormatter";
import { Wallet } from "../../utils/types";
import ActiveWallet from "./assets/ActiveWallet.svg";
import BetDetails from "./assets/BetDetails.svg";
import DeleteIcon from "./assets/Delete.svg";
import DeletedWallet from "./assets/DeletedWallet.svg";
import FreezeIcon from "./assets/Freeze.svg";
import FrozenWallet from "./assets/FrozenWallet.svg";
import TotalWallet from "./assets/TotalWallet.svg";
import verifyCheck from "./assets/Verified.svg";
import { capitalizeFirstLetter } from "../../utils/constants.ts";

const statusClasses = {
  active: {
    dot: "bg-green-600",
    label: "bg-green-100 text-green-600",
  },
  inactive: {
    dot: "bg-red-600",
    label: "bg-red-200 text-red-600",
  },
  frozen: {
    dot: "bg-yellow-600",
    label: "bg-yellow-100 text-yellow-600",
  },
};

export const walletsStats = (data?: WalletGetStatsResponse) => [
  { icon: TotalWallet, count: data?.total, label: "Total Wallets" },
  { icon: ActiveWallet, count: data?.active, label: "Active Wallets" },
  { icon: FrozenWallet, count: data?.frozen, label: "Frozen Wallets" },
  { icon: DeletedWallet, count: data?.inactive, label: "Deleted Wallets" },
];

interface WalletsTableAction {
  navigate: UseNavigateResult<string>;
  handleFreezeButton: ({ id }: { id: number }) => void | Promise<void>;
  handleActivateButton: ({ id }: { id: number }) => void | Promise<void>;
  handleDeleteButton: ({ id }: { id: number }) => void | Promise<void>;
}

export const walletsTableAction = (
  props: WalletsTableAction,
): TableActionDropdownProps<{
  id: number;
  userId: string;
}>["data"] => [
    {
      title: "View User",
      icon: BetDetails,
      onClick: ({ id }) =>
        props.navigate({ to: "/users/$userId", params: { userId: id.toString() } }),
    },
    {
      title: "Freeze Wallet",
      icon: FreezeIcon,
      onClick: props.handleFreezeButton,
    },
    {
      title: "Activate Wallet",
      icon: verifyCheck,
      onClick: props.handleActivateButton,
    },
    {
      title: "Delete Wallet",
      icon: DeleteIcon,
      onClick: props.handleDeleteButton,
    },
  ];

interface WalletsColumn extends WalletsTableAction {
  checkboxId: string
  columnIndex: number | string;
  setColumnIndex: Dispatch<SetStateAction<number | string>>;
}

export const walletsColumn = (props: WalletsColumn) =>
  [
    {
      id: "checkbox-data",
      header: <></>,
      cell: ({ id }) => (
        <input type={"checkbox"} name={id.toString()} className={`${props.checkboxId} rounded`} />
      ),
      filterType: () => null,
    }, 
    createColumn("wallet_id", { header: "Wallet ID" }),
    {
      id: "recent_activity",
      header: <>Recent Activity	</>,
      cell: () => <>Transaction </>,
      filterType: () => null
    },
    createColumn("currency", { header: "Wallet Type" }),
    createColumn("balance", { header: "Balance", }),
    createColumn("created_at", { header: "Due Date", cell: ({ created_at }) => formatDate(created_at) }),
    createColumn("status", {
      header: "Status",
      cell({ status }) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        const statusClass = statusClasses[status] || {
          dot: "bg-gray-600",
          label: "bg-gray-100 text-gray-600",
        };
        return (
          <div className='flex items-center'>
            <span className={`mr-2 h-2 w-2 rounded-full ${statusClass.dot}`} />
            <span className={`rounded-lg px-2 py-1 text-xs font-medium ${statusClass.label}`}>
              {capitalizeFirstLetter(status)}
            </span>
          </div>
        );
      },
    }),
    {
      cell: ({ id, owner }) => (
        <div className={"relative"}>
          <button
            onClick={() => {
              props.setColumnIndex(id === props.columnIndex ? -1 : id);
            }}
            className='text-xl text-gray-400 hover:text-gray-600'
          >
            <HiOutlineDotsVertical />
          </button>
          {id === props.columnIndex ? (
            <div className='absolute right-0 z-20'>
              <TableActionDropdown
                id={{ id, userId: owner.id.toString() }}
                data={walletsTableAction(props)}
              />
              ,
            </div>
          ) : null}
        </div>
      ),
      id: "action",
      header: "Action",
      filterType: () => null,
    },
  ] as const satisfies readonly TableColumn<Wallet>[];
