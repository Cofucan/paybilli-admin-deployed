import { HiOutlineDotsVertical } from "react-icons/hi";
import { eventImages } from "./EventImages";
import EventActionDropdown from "./EventActionDropdown";
const statusClasses = {
  Open: {
    dot: "bg-green-600",
    label: "bg-green-100 text-green-600",
  },
  Closed: {
    dot: "bg-red-600",
    label: "bg-red-200 text-red-600",
  },
  Pending: {
    dot: "bg-yellow-600",
    label: "bg-yellow-100 text-yellow-600",
  },
  Waiting: {
    dot: "bg-blue-600",
    label: "bg-blue-100 text-blue-600",
  },
};

export const columns = (ToggleActionDropdown, isActionDropdown) => [
  {
    title: "S/N",
    render: (_, __, index) => index + 1, // Serial number column
  },
  {
    title: "User",
    dataIndex: "name",
    key: "name",
    render: (text, record) => {
      const defaultImage = "https://example.com/images/default.jpg";
      const eventImage = eventImages[record.name] || defaultImage;

      return (
        <div className="flex items-center space-x-6">
          <img
            src={eventImage}
            alt={record.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="font-medium">{record.name}</p>
            <p className="text-xs text-gray-400">{record.username}</p>
          </div>
        </div>
      );
    },
  },
  {
    title: "Bet Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Bet Date",
    dataIndex: "Betdate",
    key: "Betdate",
  },
  {
    title: "Due Date",
    dataIndex: "Duedate",
    key: "Duedate",
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
  },
  {
    title: "Bet",
    dataIndex: "Bet",
    key: "Bet",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      const statusClass = statusClasses[status] || {
        dot: "bg-gray-600",
        label: "bg-gray-100 text-gray-600",
      };

      return (
        <div className="flex items-center">
          <span className={`w-2 h-2 rounded-full mr-2 ${statusClass.dot}`} />
          <span
            className={`px-2 py-1 text-xs rounded-lg font-medium ${statusClass.label}`}
          >
            {status}
          </span>
        </div>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <>
        <button
          onClick={() => ToggleActionDropdown(record.key)}
          className="text-gray-400 hover:text-gray-600 text-xl"
        >
          <HiOutlineDotsVertical />
        </button>
        {isActionDropdown[record.key] && ( // Check if the dropdown for this row is open
          <div className="absolute right-0 z-20">
            <EventActionDropdown />
            {/* <p>Pending</p> */}
          </div>
        )}
      </>
    ),
  },
];
