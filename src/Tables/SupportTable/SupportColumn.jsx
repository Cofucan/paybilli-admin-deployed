import { HiOutlineDotsVertical } from "react-icons/hi";
import WithdrawalActionDropdown from "../../Modals/WithdrawalActionDropdown";
import SupportActionDropdown from "../../Modals/SupportModals/SupportActionDropdown";

const statusClasses = {
  Open: {
    dot: "bg-green-600",
    label: "bg-green-100 text-green-600",
  },
  Pending: {
    dot: "bg-yellow-600",
    label: "bg-yellow-100 text-yellow-600",
  },
  Closed: {
    dot: "bg-red-600",
    label: "bg-red-100 text-red-600",
  },
};

export const columns = (ToggleActionDropdown, isActionDropdown) => [
  {
    title: "S/N",
    render: (_, __, index) => index + 1,
  },
  {
    title: "Ticket ID",
    dataIndex: "ticketId",
    key: "ticketId",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Issue Type",
    dataIndex: "issueType",
    key: "issueType",
  },
  {
    title: "Date Created",
    dataIndex: "dateCreated",
    key: "dateCreated",
  },
  {
    title: "Assigned Admin",
    dataIndex: "assignedAdmin",
    key: "assignedAdmin",
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <div className="flex items-center">
        <span
          className={`w-2 h-2 rounded-full mr-2 ${statusClasses[status].dot}`}
        />
        <span
          className={`px-2 py-1 text-xs rounded-lg ${statusClasses[status].label}`}
        >
          {status}
        </span>
      </div>
    ),
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
            <SupportActionDropdown />
          </div>
        )}
      </>
    ),
  },
];
