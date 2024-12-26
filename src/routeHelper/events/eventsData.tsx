import { UseNavigateResult } from "@tanstack/react-router";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import TableActionDropdown, {
  TableActionDropdownProps,
} from "../../components/dropdown/TableActionDropdown";
import { createColumn, TableColumn } from "../../components/table/hooks/useTable";
import { EventsGetStatsResponse } from "../../hooks/useEventQuery";
import { formatDate } from "../../utils/DateFormatter";
import { Events } from "../../utils/types";
import BetDetails from "./assets/BetDetails.svg";
import CloseBet from "./assets/CloseBet.svg";
import EventStarBlack from "./assets/EventBlack.svg";
import EventStarGold from "./assets/EventStarGold.svg";
import EventStarGreen from "./assets/EventStarGreen.svg";
import EventStarRed from "./assets/EventStarRed.svg";
import Eye from "./assets/Eye.svg";

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

export const eventsStats = (data?: EventsGetStatsResponse) => [
  { icon: EventStarBlack, count: data?.total_count, label: "Total Bets" },
  { icon: EventStarGreen, count: data?.open_count, label: "Open Bets" },
  {
    icon: EventStarGold,
    count: data?.pending_count,
    label: "Pending Bets",
  },
  {
    icon: EventStarRed,
    count: data?.closed_count,
    label: "Closed Bets",
  },
];

interface EventsTableAction {
  navigate: UseNavigateResult<string>;
  handleCloseBetButton: ({ id }: { id: number }) => void | Promise<void>;
}

export const eventsTableAction = ({
  navigate,
  handleCloseBetButton,
}: EventsTableAction): TableActionDropdownProps<{ id: number; userId: string }>["data"] => [
  {
    title: "View Bet Details",
    icon: BetDetails,
    onClick: ({ id }) => navigate({ to: "/event/$eventId", params: { eventId: id.toString() } }),
  },
  {
    title: "Close Bet",
    icon: CloseBet,
    onClick: handleCloseBetButton,
  },
  {
    title: "View User",
    icon: Eye,
    onClick: ({ userId }) => navigate({ to: "/user/$userId", params: { userId } }),
  },
];

interface EventsColumn extends EventsTableAction {
  columnIndex: number | string;
  setColumnIndex: Dispatch<SetStateAction<number | string>>;
}

export const eventsColumn = (props: EventsColumn) =>
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
                data={eventsTableAction(props)}
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
  ] as const satisfies readonly TableColumn<Events>[];
