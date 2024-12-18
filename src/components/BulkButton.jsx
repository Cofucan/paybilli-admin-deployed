import { useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import editicon from '../assets/editicon.svg'
import erase from '../assets/icon.svg'
import VerifyUsersModal from '../Modals/VerifyMultipleUserModal'

const BulkButton = ({ onVerifyUsersClick, onVerifySuspendedClick }) => {
  const [isBulkActionActive, setIsBulkActionActive] = useState(false)
  const [isDotsMenuOpen, setIsDotsMenuOpen] = useState(false)

  const handleBulkActionClick = () => {
    setIsBulkActionActive(!isBulkActionActive) // Toggle bulk action state
    setIsDotsMenuOpen(false)
  }

  const handleDotsClick = () => {
    setIsDotsMenuOpen(!isDotsMenuOpen) // Toggle dropdown menu
  }

  return (
    <div className='flex justify-between items-center'>
      <button
        className={`mb-4 text-sm border-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
          isBulkActionActive
            ? 'bg-[#4cb8ed] text-white border-[#4cb8ed]'
            : 'bg-white text-[#4cb8ed] border-[#58bff2]'
        }`}
        onClick={handleBulkActionClick}
      >
        Bulk Action
      </button>

      <div className='mx-20'>
        {/* Show HiOutlineDotsVertical only when isBulkActionActive is true */}
        {isBulkActionActive && (
          <div
            className='text-2xl text-gray-400 cursor-pointer'
            onClick={handleDotsClick}
          >
            <HiOutlineDotsVertical />
          </div>
        )}

        {isDotsMenuOpen && (
          <div className='absolute right-0 mt-2 mx-24 bg-white border border-gray-300 rounded-lg shadow-lg z-10'>
            {/* Dropdown content */}
            <ul>
              <li
                onClick={onVerifyUsersClick}
                className='px-4 py-2 text-sm flex gap-2 hover:bg-gray-100 cursor-pointer'
              >
                <img src={editicon} alt='erase' />
                Verify Multiple Users
              </li>
              <li className='px-4 py-2 text-sm flex gap-2 hover:bg-gray-100 cursor-pointer'>
                <img src={editicon} alt='erase' />
                Reactivate Multiple Users
              </li>
              <li
                onClick={onVerifySuspendedClick}
                className='px-4 py-2 text-sm flex gap-2 hover:bg-gray-100 text-red-600 cursor-pointer'
              >
                <img src={erase} alt='erase' />
                Suspend Multiple Users
              </li>
            </ul>
          </div>
        )}

        {/* <VerifyUsersModal /> */}
      </div>
    </div>
  )
}

export default BulkButton
