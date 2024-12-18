import { useState } from 'react'
import { Button, Table } from 'antd'
import { columns } from './UserActionColumn' // Your columns definition
import userActionData from '../../UserProfileTable/UserAction.jsx/UserActionData'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const UserActionBody = () => {
  const [filteredUsers, setFilteredUsers] = useState(userActionData) // Initial data is all actions
  const [currentPage, setCurrentPage] = useState(1) // For pagination
  const [selectedFilter, setSelectedFilter] = useState('All Actions') // Default: show all actions
  const pageSize = 5 // Items per page

  const filterUsers = filter => {
    // Map display labels to actual data values
    const filterMap = {
      'All Actions': 'All',
      Transactions: 'Transactions',
      Events: 'Events',
      Profile: 'Profile',
      Settings: 'Settings',
    }

    const actualFilter = filterMap[filter] || filter

    setSelectedFilter(filter) // Set the selected button to active

    // If 'All Actions' is selected, show all data
    setFilteredUsers(
      actualFilter === 'All'
        ? userActionData
        : userActionData.filter(user => user.status === actualFilter), // Filter by status
    )

    setCurrentPage(1) // Reset to the first page after filtering
  }

  // Function to get the appropriate button style
  const getButtonClass = filter => {
    return selectedFilter === filter
      ? 'bg-[#93dbff] rounded-lg text-black bg-opacity-50' // Active filter button style
      : 'bg-white text-gray-500' // Inactive filter button style
  }

  // Calculate the current data to display based on pagination
  const startIndex = (currentPage - 1) * pageSize
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize)

  // Function to handle page change
  const handlePageChange = page => {
    setCurrentPage(page)
  }

  // Rendered columns, you might have the dropdown toggle logic here too
  const updatedColumns = columns(/* Add your column logic here */)

  return (
    <div className='px-6 bg-white overflow-x-auto pb-5 mb-10'>
      {/* Filter Buttons */}
      <div className='flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500 mb-5 border border-[#58bff2] lg:border-gray-200 rounded-xl py-2 px-4'>
        {['All Actions', 'Transactions', 'Events', 'Profile', 'Settings'].map(
          status => (
            <button
              key={status}
              className={`mx-2 border-none px-5 py-3 ${getButtonClass(status)}`}
              onClick={() => filterUsers(status)} // Filter the table based on the button clicked
            >
              {status}
            </button>
          ),
        )}
      </div>

      {/* User Table */}
      <Table
        columns={updatedColumns} // Use your defined columns
        dataSource={paginatedUsers} // Filtered and paginated data
        rowKey='id' // Assuming there's an 'id' field in your data
        pagination={false} // We are handling pagination manually
        className='custom-table overflow-x-auto'
      />

      {/* Pagination Controls */}
      <div className='flex justify-between items-center mt-4'>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft className='text-xs' />
          Previous
        </Button>

        <span className='text-light-blue-500'>
          Page {currentPage} of {Math.ceil(filteredUsers.length / pageSize)}
        </span>

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * pageSize >= filteredUsers.length}
          className='border border-gray-300 px-4 py-2'
        >
          <FaArrowRight className='text-xs' />
          Next
        </Button>
      </div>
    </div>
  )
}

export default UserActionBody
