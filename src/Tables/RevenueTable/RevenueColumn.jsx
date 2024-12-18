import { HiOutlineDotsVertical } from 'react-icons/hi'
import RevenueActionDropdown from '../../Modals/RevenueActionDropdown'

const statusClasses = {
  Confirmed: {
    dot: 'bg-green-600',
    label: 'bg-green-100 text-green-600',
  },
  Pending: {
    dot: 'bg-yellow-600',
    label: 'bg-yellow-100 text-yellow-600',
  },
  Request: {
    dot: 'bg-red-600',
    label: 'bg-red-100 text-red-600',
  },
}

export const columns = (ToggleActionDropdown, isActionDropdown) => [
  {
    title: '',
    dataIndex: 'checkbox',
    key: 'checkbox',
    render: () => (
      <input
        type='checkbox'
        className='form-checkbox border focus:ring-0 focus:outline-none border-gray-400 rounded w-6 h-6'
      />
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Revenue Source',
    dataIndex: 'revenueSource',
    key: 'RevenueSource',
  },
  {
    title: 'Free Type',
    dataIndex: 'freeType',
    key: 'freeType',
  },

  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Method',
    dataIndex: 'method',
    key: 'method',
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <div className='flex items-center'>
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
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <>
        <button
          onClick={() => ToggleActionDropdown(record.key)}
          className='text-gray-400 hover:text-gray-600 text-xl'
        >
          <HiOutlineDotsVertical />
        </button>
        {isActionDropdown[record.key] && ( // Check if the dropdown for this row is open
          <div className='absolute right-0 z-20'>
            <RevenueActionDropdown />
          </div>
        )}
      </>
    ),
  },
]
