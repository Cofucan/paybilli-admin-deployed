// const statusClasses = {
//   Verified: {
//     dot: "bg-green-600",
//     label: "bg-green-100 text-green-600",
//   },
//   Unverified: {
//     dot: "bg-blue-600",
//     label: "bg-blue-100 text-blue-600",
//   },
//   Deactivated: {
//     dot: "bg-yellow-600",
//     label: "bg-yellow-100 text-yellow-600",
//   },
//   Suspended: {
//     dot: "bg-red-600",
//     label: "bg-red-100 text-red-600",
//   },
// };

export const columns = () => [
  {
    title: 'S/N', // Serial Number column
    dataIndex: 'num',
    key: 'num',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
  {
    title: 'Date And Time', // Date and time of the record
    dataIndex: 'date',
    key: 'date',
  },

  // {
  //   title: "Status",  // Status label
  //   dataIndex: "status",
  //   key: "status",
  //   render: (status) => (
  //     <div className="flex items-center">
  //       <span className={`px-2 py-1 text-xs rounded-lg`}>
  //         {status}
  //       </span>
  //     </div>
  //   ),
  // },
]
