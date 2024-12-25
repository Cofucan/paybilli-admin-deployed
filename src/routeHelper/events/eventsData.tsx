import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  createColumn, TableColumn
} from "../../components/table/hooks/useTable";
import EventStarBlack from "./assets/EventBlack.svg";
import EventStarGold from "./assets/EventStarGold.svg";
import EventStarGreen from "./assets/EventStarGreen.svg";
import EventStarRed from "./assets/EventStarRed.svg";
import { EventsStatsResponse, EventsTableData } from "./eventsTypes";
const statusClasses = {
  open: {
    dot: 'bg-green-600',
    label: 'bg-green-100 text-green-600',
  },
  closed: {
    dot: 'bg-red-600',
    label: 'bg-red-200 text-red-600',
  },
  pending: {
    dot: 'bg-yellow-600',
    label: 'bg-yellow-100 text-yellow-600',
  },
  waiting: {
    dot: 'bg-blue-600',
    label: 'bg-blue-100 text-blue-600',
  },
}

export const eventsStats = (data?: EventsStatsResponse) => [
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


export const eventsColumn = () => [
  createColumn("id", { header: "S/N" }),
  createColumn("creator", {
    header: "Creator", cell({ creator }) {
      return (
        <div className="flex items-center space-x-6">
          <img
            src={creator.name}
            alt={creator.name + "'s Profile Picture"}
            className="w-8 h-8 rounded-full"
          />
          <div>
            {/* Access creator fields directly from record */}
            <p className="font-medium">{creator.name || 'Unknown Creator'}</p>
            <p className="text-xs text-gray-400">{creator.username || 'No Username'}</p>
          </div>
        </div>)
    },
  }),
  createColumn("bet_type", { header: "Bet Type" }),
  createColumn("created_at", {
    header: "Bet Date", cell({ created_at }) {
      return new Date(created_at).toDateString()
    },
  }),
  createColumn("due_date", { header: "Due Date" }),
  createColumn("amount", { header: "Amount" }),
  // TODO: Set the correct field
  createColumn("event_type", { header: "Bet" }),
  createColumn("status", {
    header: 'Status', cell({ status }) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      const statusClass = statusClasses[status] || {
        dot: 'bg-gray-600',
        label: 'bg-gray-100 text-gray-600',
      }
      return (
        <div className='flex items-center'>
          <span className={`w-2 h-2 rounded-full mr-2 ${statusClass.dot}`} />
          <span
            className={`px-2 py-1 text-xs rounded-lg font-medium ${statusClass.label}`}
          >
            {status}
          </span>
        </div>
      )
    },
  }),
  {
    cell() {
      return <>
        <button
          className='text-gray-400 hover:text-gray-600 text-xl'
        >
          <HiOutlineDotsVertical />
        </button>
      </>;
    },
    id: "action",
    header: "Action",
    filterType: () => null
  }
] as const satisfies readonly TableColumn<EventsTableData>[]
