import { useState } from 'react'
import SuspendSuccessModal from './SuspendSuccessModal'

const VerifySupendedClick = ({ onClose }) => {
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
                Suspended multiple users?
              </h2>
              <p className='text-sm text-gray-600 mb-6'>
                Are you certain you want to suspended all these users at once?
              </p>
              <div className='flex justify-end space-x-4'>
                <button
                  className='px-4 py-2 text-[#4cb8ed] bg-white border border-[#4cb8ed] rounded-lg hover:shadow-md'
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className='px-5 py-2 bg-red-700 text-white rounded-lg hover:shadow-md'
                  onClick={handleVerify}
                >
                  Suspended Users
                </button>
              </div>
            </div>
          </div>

          {/* Second Div on Top */}
          {isVerifyOpen && <SuspendSuccessModal onClose={onClose} />}
        </>
      )}
    </>
  )
}

export default VerifySupendedClick
