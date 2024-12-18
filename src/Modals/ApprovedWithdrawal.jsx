import { useState } from 'react'
import SuccessApprovedWithdrawal from './SuccessApprovedWithdrawal'

const ApprovedWithdrawal = ({ approvedWithdrawalClose }) => {
  const [isSuccessApprovedWithdrawal, setIsApprovedWithdrawal] = useState(false)

  const openSuccessApprovedWithdrawal = () => {
    setIsApprovedWithdrawal(true)
  }
  return (
    <div className='fixed inset-0  flex items-center justify-center bg-black bg-opacity-20'>
      <div className='bg-light-grey w-[650px] p-6 rounded-lg shadow-lg'>
        {/* Modal Header */}
        <h2 className='text-lg font-semibold text-gray-800 mb-2'>
          Approved Withdrawal?
        </h2>

        {/* Modal Body */}
        <p className='text-sm text-gray-500 mb-6'>
          Are you certain you want to approved this withdrawal?
        </p>

        {/* Buttons Section */}
        <div className='flex justify-end gap-4'>
          {/* Cancel Button */}
          <button
            onClick={approvedWithdrawalClose}
            className='px-6 py-3 border border-light-blue-500 text-light-blue-500 rounded-md'
          >
            Cancel
          </button>

          {/* Close Bet Button */}
          <button
            onClick={openSuccessApprovedWithdrawal}
            className='px-6 py-3 bg-light-blue-500 text-white rounded-md hover:shadow-md transition-all'
          >
            Approved
          </button>
        </div>
      </div>
      {isSuccessApprovedWithdrawal && (
        <SuccessApprovedWithdrawal
          approvedWithdrawalClose={approvedWithdrawalClose}
        />
      )}
    </div>
  )
}

export default ApprovedWithdrawal
