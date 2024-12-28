import BetDetails from "./assets/BetDetails.svg";
import FreezeIcon from "./assets/Freeze.svg";
import DeleteIcon from "./assets/Delete.svg";
import verifyCheck from "./assets/Verified.svg";
import TotalWallet from "./assets/TotalWallet.svg";
import ActiveWallet from "./assets/ActiveWallet.svg";
import FrozenWallet from "./assets/FrozenWallet.svg";
import DeletedWallet from "./assets/DeletedWallet.svg";
import { UseNavigateResult } from "@tanstack/react-router";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import TableActionDropdown, {
  TableActionDropdownProps,
} from "../../components/dropdown/TableActionDropdown";
import { createColumn, TableColumn } from "../../components/table/hooks/useTable";
import { formatDate } from "../../utils/DateFormatter";
import { Wallet } from "../../utils/types";
import { WalletGetStatsResponse } from "../../hooks/useWalletQuery.ts";

const statusClasses = {
  open: {
    dot: "bg-green-600",
    label: "bg-green-100 text-green-600",
  },
  closed: {
    dot: "bg-red-600",
    label: "bg-red-200 text-red-600",
  },
  pending: {
    dot: "bg-yellow-600",
    label: "bg-yellow-100 text-yellow-600",
  },
  waiting: {
    dot: "bg-blue-600",
    label: "bg-blue-100 text-blue-600",
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
  columnIndex: number | string;
  setColumnIndex: Dispatch<SetStateAction<number | string>>;
}

export const walletsColumn = (props: WalletsColumn) =>
  [
    createColumn("id", { header: "S/N" }),
    {
      id: "creator",
      header: "Creator",
      cell: ({ creator }) => (
        <div className='flex items-center space-x-6'>
          <img
            src={creator.name}
            alt={creator.name + "'s Profile Picture"}
            className='h-8 w-8 rounded-full'
          />
          <div>
            {/* Access creator fields directly from record */}
            <p className='font-medium'>{creator.name || "Unknown Creator"}</p>
            <p className='text-xs text-gray-400'>{creator.username || "No Username"}</p>
          </div>
        </div>
      ),
      filterType: ({ creator }) => creator.name,
    },
    createColumn("event_type", { header: "Bet Type" }),
    createColumn("created_at", {
      header: "Bet Date",
      cell: ({ created_at }) => formatDate(created_at),
    }),
    createColumn("due_date", { header: "Due Date", cell: ({ due_date }) => formatDate(due_date) }),
    createColumn("amount", { header: "Amount" }),
    {
      id: "bet",
      header: "Bet",
      cell: () => "-----------",
      filterType: () => null,
    },
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
              {status}
            </span>
          </div>
        );
      },
    }),
    {
      cell: ({ id, creator }) => (
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
                id={{ id, userId: creator.id.toString() }}
                data={WalletsTableAction(props)}
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
