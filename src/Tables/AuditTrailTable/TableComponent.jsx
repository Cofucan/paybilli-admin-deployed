import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import Calenda from '../../components/Calenda'

// Sample data
const tableData = [
  {
    id: 1,
    date: '2024-07-18 14:23',
    user: 'Bola John',
    email: 'bolajohn@gmail.com',
    role: 'User',
    actionType: 'Bet',
    action: 'New Bet Placed',
    ip: '230.211.1.4',
  },
  {
    id: 2,
    date: '2024-07-18 14:23',
    user: 'Seyi James',
    email: 'seyijames@gmail.com',
    role: 'Admin',
    actionType: 'Approval',
    action: 'User Approved',
    ip: '230.211.1.4',
  },
  {
    id: 3,
    date: '2024-07-18 14:23',
    user: 'Ahmed Idris',
    email: 'ahmedidris@gmail.com',
    role: 'User',
    actionType: 'Event',
    action: 'Event Created',
    ip: '230.211.1.4',
  },
  {
    id: 4,
    date: '2024-07-18 14:23',
    user: 'Oke Donatus',
    email: 'okedonatus@gmail.com',
    role: 'User',
    actionType: 'Wallet',
    action: 'Wallet Funded',
    ip: '230.211.1.4',
  },
  {
    id: 5,
    date: '2024-07-18 14:23',
    user: 'Bel Chukwu',
    email: 'belchukwu@gmail.com',
    role: 'Admin',
    actionType: 'Withdrawal',
    action: 'Withdrawal Approved',
    ip: '230.211.1.4',
  },
  {
    id: 6,
    date: '2024-07-18 14:23',
    user: 'Ibrahim Adam',
    email: 'brahim@gmail.com',
    role: 'User',
    actionType: 'Settings',
    action: 'Profile Picture Changed',
    ip: '230.211.1.4',
  },
  {
    id: 7,
    date: '2024-07-18 14:23',
    user: 'Fatimah Abolaji',
    email: 'fatee@gmail.com',
    role: 'Admin',
    actionType: 'Settings',
    action: 'Password Updated',
    ip: '230.211.1.4',
  },
  {
    id: 8,
    date: '2024-07-18 14:23',
    user: 'Fatimah Abolaji',
    email: 'fatee@gmail.com',
    role: 'Admin',
    actionType: 'Settings',
    action: 'Password Updated',
    ip: '230.211.1.4',
  },
  {
    id: 9,
    date: '2024-07-18 14:23',
    user: 'Fatimah Abolaji',
    email: 'fatee@gmail.com',
    role: 'Admin',
    actionType: 'Settings',
    action: 'Password Updated',
    ip: '230.211.1.4',
  },
]

// Table header component
const TableHeader = () => (
  <thead className=''>
    <tr className='bg-white text-left text-xs text-gray-500'>
      <th className='px-4 py-3'>S/N</th>
      <th className='px-4 py-3'>Date</th>
      <th className='px-4 py-3'>User/Admin</th>
      <th className='px-4 py-3'>Role</th>
      <th className='px-4 py-3'>Action Type</th>
      <th className='px-4 py-3'>Action</th>
      <th className='px-4 py-3'>IP Address</th>
    </tr>
  </thead>
)

// Table row component
const TableRow = ({
  sn,
  date,
  user,
  email,
  role,
  actionType,
  action,
  ip,
  index,
}) => (
  <tr
    className={`${
      index % 2 === 1 ? 'bg-white' : 'bg-gray-50'
    } border-t border-gray-200 text-gray-500 text-sm`}
  >
    <td className='px-4 py-3'>{sn}</td>
    <td className='py-3'>{date}</td>
    <td className='px-4 py-3'>
      <p className='font-medium'>{user}</p>
      <p className='text-sm text-gray-500'>{email}</p>
    </td>
    <td className='px-4 py-3'>{role}</td>
    <td className='px-4 py-3'>{actionType}</td>
    <td className='px-4 py-3'>{action}</td>
    <td className='px-4 py-3'>{ip}</td>
  </tr>
)

// Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1)

  return (
    <div className='w-[90%] mx-auto flex justify-between items-center my-5'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-3 py-2 bg-white border flex items-center gap-2 border-gray-300 text-gray-600 rounded-lg hover:bg-gray-100'
      >
        <FaArrowLeft className='text-xs' />
        <span>Previous</span>
      </button>

      <div className='flex space-x-2'>
        {pageNumbers.map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === page
                ? 'bg-blue-100 text-blue-600'
                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-3 py-1 bg-white border  flex items-center gap-2 border-gray-300 text-gray-600 rounded-lg hover:bg-gray-100 disabled:opacity-50'
      >
        <FaArrowRight className='text-xs' />
        <span>Next</span>
      </button>
    </div>
  )
}

// Main table component
const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7
  const totalPages = Math.ceil(tableData.length / itemsPerPage)
  const [isCalendalVisible, setIsCalendaVisible] = useState(false)

  const currentData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  // const calendarRef = useRef(null); // Use a ref for the calendar

  const ToggleCalendaVisible = () => {
    setIsCalendaVisible(!isCalendalVisible)
  }

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  return (
    <div className='container mx-auto py-4 lg:p-4'>
      {/*Header */}
      <div className='bg-white grid grid-cols-3 border-b-2 border-gray-200 rounded-t-lg items-center px-3'>
        <div className='hidden lg:block'>
          <h1 className='text-lg text-black font-medium'>Audit Trail</h1>
        </div>
        <div className='flex gap-2 lg:gap-0 justify-between col-span-3 lg:col-span-2 items-center py-2'>
          <div className='flex xl:w-full max-w-xl items-center border border-gray-300 rounded-lg lg:p-2 lg:mx-4'>
            <CiSearch className='ms-3 text-2xl text-[black]' />
            <input
              className='border-none focus:border-none focus:ring-0 outline-none w-full placeholder:text-xs placeholder:lg:text-sm smd:text-sm text-gray-700 placeholder-gray-950'
              type='text'
              placeholder='Search Audit Trail...'
            />
          </div>
          <div
            onClick={ToggleCalendaVisible}
            className='flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-3 lg:py-4'
          >
            <MdOutlineCalendarMonth className='text-gray-500' />
            <button className='text-gray-500 text-xs smd:text-sm'>
              Filter
            </button>

            {isCalendalVisible && (
              <>
                <div
                  className='fixed inset-0 bg-black opacity-20 z-20'
                  onClick={ToggleCalendaVisible} // Close the calendar if the overlay is clicked
                ></div>
                <div
                  className='absolute top-[30%] lg:top-[47%] right-20 z-50'
                  onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the calendar
                >
                  <Calenda className='' />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className='overflow-x-auto bg-white shadow-lg rounded-lg pt-10'>
        <table className='min-w-full'>
          <TableHeader />
          <tbody>
            {currentData.map((item, index) => (
              <TableRow
                key={item.id}
                sn={item.id}
                date={item.date}
                user={item.user}
                email={item.email}
                role={item.role}
                actionType={item.actionType}
                action={item.action}
                ip={item.ip}
                index={index}
              />
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default TableComponent
