import { useState } from 'react'
import { Table, Space, Pagination, Dropdown, Menu, Modal } from 'antd'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import completed from '../../assets/Badge-completed.svg'
import failed from '../../assets/Badge-failed.svg'
import pending from '../../assets/Badge-pending.svg'
import Eye from '../../assets/Eye.svg'
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineDotsVertical,
} from 'react-icons/hi'
import BulkButton from '../../components/BulkButton'
import TransactionDetailsModal from '../../Modals/TransactionDetailsModal'

const data = [
  {
    key: '1',
    user: {
      img: <img src={icon1} alt='icon1' className='w-8 h-8' />,
      name: 'Cynthia Boyega',
      username: '@JohnB',
    },
    amount: '₦25,000',
    type: 'Bet',
    status: 'Completed',
    statusColor: 'green',
    date: '29 Jul, 2024',
    time: '04:30pm',
    id: 'WCD134G',
  },
  {
    key: '2',
    user: {
      img: <img src={icon1} alt='icon1' className='w-8 h-8' />,
      name: 'Sarah Adekunle',
      username: '@Sarah',
    },
    amount: '$500',
    type: 'Deposit',
    status: 'Failed',
    statusColor: 'red',
    date: '29 Jul, 2024',
    time: '04:30pm',
    id: 'RCU45H7',
  },
  {
    key: '3',
    user: {
      img: <img src={icon2} alt='icon1' className='w-8 h-8' />,
      name: 'John Oke',
      username: '@John',
    },
    amount: '₦25,000',
    type: 'Payout',
    status: 'Pending',
    statusColor: 'orange',
    date: '29 Jul, 2024',
    time: '04:30pm',
    id: 'WCD134G',
  },
  {
    key: '4',
    user: {
      img: <img src={icon2} alt='icon1' className='w-8 h-8' />,
      name: 'Faith Chukwu',
      username: '@Faith',
    },
    amount: '₦25,000',
    type: 'Refund',
    status: 'Failed',
    statusColor: 'red',
    date: '29 Jul, 2024',
    time: '04:30pm',
    id: 'RCU45H7',
  },
  {
    key: '5',
    user: {
      img: <img src={icon1} alt='icon1' className='w-8 h-8' />,
      name: 'Donatus Agukwe',
      username: '@Donatus',
    },
    amount: '₦25,000',
    type: 'Deposit',
    status: 'Pending',
    statusColor: 'orange',
    date: '29 Jul, 2024',
    time: '04:30pm',
    id: 'WCD134G',
  },
  {
    key: '6',
    user: {
      img: <img src={icon1} alt='icon1' className='w-8 h-8' />,
      name: 'Donatus Agukwe',
      username: '@Donatus',
    },
    amount: '₦25,000',
    type: 'Deposit',
    status: 'Pending',
    statusColor: 'orange',
    date: '29 Jul, 2024',
    time: '04:30pm',
    id: 'WCD134G',
  },
  {
    key: '7',
    user: {
      img: <img src={icon1} alt='icon1' className='w-8 h-8' />,
      name: 'Donatus Agukwe',
      username: '@Donatus',
    },
    amount: '₦25,000',
    type: 'Deposit',
    status: 'Pending',
    statusColor: 'orange',
    date: '29 Jul, 2024',
    time: '04:30pm',
    id: 'WCD134G',
  },
  {
    key: '8',
    user: {
      img: <img src={icon1} alt='icon1' className='w-8 h-8' />,
      name: 'Donatus Agukwe',
      username: '@Donatus',
    },
    amount: '₦25,000',
    type: 'Deposit',
    status: 'Pending',
    statusColor: 'orange',
    date: '29 Jul, 2024',
    time: '04:30pm',
    id: 'WCD134G',
  },
  {
    key: '9',
    user: {
      img: <img src={icon2} alt='icon1' className='w-8 h-8' />,
      name: 'Faith Chukwu',
      username: '@Faith',
    },
    amount: '₦25,000',
    type: 'Refund',
    status: 'Failed',
    statusColor: 'red',
    date: '29 Jul, 2024',
    time: '04:30pm',
    id: 'RCU45H7',
  },
  {
    key: '10',
    user: {
      img: <img src={icon2} alt='icon1' className='w-8 h-8' />,
      name: 'Faith Chukwu',
      username: '@Faith',
    },
    amount: '₦25,000',
    type: 'Refund',
    status: 'Failed',
    statusColor: 'red',
    date: '29 Jul, 2024',
    time: '04:30pm',
    id: 'RCU45H7',
  },
]

const menu = onClickAction => (
  <Menu>
    <Menu.Item key='1' onClick={onClickAction}>
      <div className='flex items-center gap-2'>
        <img src={Eye} alt='Eye' />
        <span>View Transaction Details</span>
      </div>
    </Menu.Item>
  </Menu>
)

const columns = onClickAction => [
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    render: user => (
      <Space size='middle'>
        <input
          type='checkbox'
          className='focus:outline-none focus:ring-0 smd:w-7 smd:h-7 border-none bg-gray-100 rounded-md p-2'
        />
        <div>{user.img}</div>
        <div>
          <div className='font-bold'>{user.name}</div>
          <div className='text-gray-500'>{user.username}</div>
        </div>
      </Space>
    ),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Transaction Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => {
      let icon
      if (status === 'Completed') {
        icon = <img src={completed} alt='completed' />
      } else if (status === 'Failed') {
        icon = <img src={failed} alt='failed' />
      } else if (status === 'Pending') {
        icon = <img src={pending} alt='pending' />
      }
      return <Space size='middle'>{icon}</Space>
    },
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (date, record) => (
      <>
        <div>{date}</div>
        <div className='text-gray-500'>{record.time}</div>
      </>
    ),
  },
  {
    title: 'Transaction ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '',
    key: 'action',
    render: () => (
      <Dropdown overlay={menu(onClickAction)} trigger={['click']}>
        <HiOutlineDotsVertical className='w-5 h-5 cursor-pointer' />
      </Dropdown>
    ),
  },
]

const TransactionsTable = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const pageSize = 7

  // Handle pagination page change
  const handlePageChange = page => {
    setCurrentPage(page)
  }

  // Show modal when dropdown action is clicked
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  // Paginate data manually
  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  return (
    <div className='bg-white rounded-md overflow-x-auto mb-10'>
      <div className='mx-3 mt-4'>
        <BulkButton />
      </div>
      <div className='pe-5'>
        <Table
          columns={columns(showModal)}
          dataSource={paginatedData}
          pagination={false}
          rowClassName={(record, index) =>
            index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
          }
          className='custom-table'
        />
      </div>

      {/* Custom Pagination */}
      <div className='flex justify-between items-center p-5'>
        {/* Pagination Controls */}
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.length}
          onChange={handlePageChange}
          showSizeChanger={false}
          itemRender={(page, type, originalElement) => {
            if (type === 'prev') {
              return (
                <button className='flex items-center space-x-2 border px-4 py-1 rounded-md text-gray-600 hover:bg-gray-100'>
                  <HiChevronLeft />
                  <span>Previous</span>
                </button>
              )
            }
            if (type === 'page') {
              return (
                <button
                  className={`px-3 py-1 mx-1 rounded-md ${
                    page === currentPage
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              )
            }
            if (type === 'next') {
              return (
                <button className='flex items-center space-x-2 border px-4 py-1 rounded-md text-gray-600 hover:bg-gray-100'>
                  <span>Next</span>
                  <HiChevronRight />
                </button>
              )
            }
            return originalElement
          }}
        />
      </div>

      {/* Modal */}
      <Modal
        title='Transaction Details'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <TransactionDetailsModal handleCancel={handleCancel} />
      </Modal>
    </div>
  )
}

export default TransactionsTable
