import { useState } from 'react'
import SuccessModal from './SuccessModal'

const VerifyUsersModal = ({ onClose }) => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(true)
  const [isVerifyOpen, setIsVerifyOpen] = useState(false)

  const handleCancel = () => {
    // setIsOpen(false);
    onClose()
  }

  const handleVerify = () => {
    // Handle the verification logic here
    console.log('Users verified!')
    // setIsOpen(false);
    // onClose(); // Close the modal after verification
    setIsVerifyOpen(true)
  }

  return (
    <>
      {isOpen && (
        <>
          {/* Modal */}
          <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-20'>
            <div className='bg-white w-full max-w-xl p-6 rounded-lg shadow-lg'>
              <h2 className='text-lg font-semibold text-gray-800 mb-4'>
                Verify multiple users?
              </h2>
              <p className='text-sm text-gray-600 mb-6'>
                Are you certain you want to verify all these users at once?
              </p>
              <div className='flex justify-end space-x-4'>
                <button
                  className='px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100'
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className='px-4 py-2 bg-light-blue-500 text-white rounded-lg hover:shadow-md'
                  onClick={handleVerify}
                >
                  Verify Users
                </button>
              </div>
            </div>
          </div>

          {/* Second Div on Top */}
          {isVerifyOpen && <SuccessModal onClose={onClose} />}
        </>
      )}
    </>
  )
}

export default VerifyUsersModal
