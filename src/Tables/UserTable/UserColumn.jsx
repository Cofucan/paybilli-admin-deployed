import { Button } from 'antd'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { userImages } from './UserImages'
import UserActionDropdown from '../../Modals/UserActionDropdown'

const statusClasses = {
  Verified: {
    dot: 'bg-green-600',
    label: 'bg-green-100 text-green-600',
  },
  Unverified: {
    dot: 'bg-blue-600',
    label: 'bg-blue-100 text-blue-600',
  },
  Deactivated: {
    dot: 'bg-yellow-600',
    label: 'bg-yellow-100 text-yellow-600',
  },
  Suspended: {
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
    title: 'User',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => {
      const defaultImage = 'https://example.com/images/default.jpg'
      const userImage = userImages[record.name] || defaultImage

      return (
        <div className='flex items-center space-x-6'>
          <img
            src={userImage}
            alt={record.name}
            className='w-8 h-8 rounded-full'
          />
          <div>
            <p className='font-medium'>{record.name}</p>
            <p className='text-xs text-gray-400'>{record.username}</p>
          </div>
        </div>
      )
    },
  },
  {
    title: 'Email Address',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Date Registered',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Recent Activity',
    dataIndex: 'activity',
    key: 'activity',
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
            <UserActionDropdown />
          </div>
        )}
      </>
    ),
  },
]
