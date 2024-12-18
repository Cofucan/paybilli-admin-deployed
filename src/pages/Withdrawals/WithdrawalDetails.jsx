import { useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import ApprovedWithdrawal from '../../Modals/ApprovedWithdrawal'
import { useLocation, useNavigate } from 'react-router-dom'

const WithdrawalDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { approvedWithdrawalClose } = location.state || {}
  const [isApprovedModalOpen, setIsApprovedModalOpen] = useState(false)

  const OpenApprovedModal = () => {
    setIsApprovedModalOpen(true)
  }
  // const CloseApprovedModal = () => {
  //   setIsApprovedModalOpen(false)
  // }

  return (
    <div className='w-full bg-gray-50 min-h-screen'>
      <div className='px-12 pt-10 xl:pt-5'>
        <button
          onClick={() => navigate('/admin/event')}
          className='flex items-center gap-3 text-[34px] text-[#1D1D1D] font-semibold hover:text-gray-800 transition'
        >
          <FaArrowLeftLong className='text-2xl' />
          <span>Withdrawal Details</span>
        </button>
      </div>

      <div className='bg-white max-w-5xl mx-auto rounded-lg shadow-md p-10 mt-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
          <div>
            <p className='text-2xl font-semibold'>#WD23GH2</p>
            <p className='text-gray-600 text-lg'>Request ID</p>
          </div>
          <div>
            <p className='text-2xl font-semibold'>NGN 4,500</p>
            <p className='text-gray-600 text-lg'>Requested Amount</p>
          </div>
          <div>
            <p className='text-2xl font-semibold'>Naira Wallet</p>
            <p className='text-gray-600 text-lg'>Payment Method</p>
          </div>
          <div>
            <p className='text-2xl font-semibold'>02, August, 2024</p>
            <p className='text-gray-600 text-lg'>Request Date</p>
          </div>
          <div>
            <p className='text-2xl font-semibold'>Pending</p>
            <p className='text-gray-600 text-lg'>Status</p>
          </div>
          <div>
            <p className='text-2xl font-semibold'>NGN 1,200</p>
            <p className='text-gray-600 text-lg'>Processing Fees</p>
          </div>
          <div>
            <p className='text-2xl font-semibold'>NGN 4,400</p>
            <p className='text-gray-600 text-lg'>Net Amount</p>
          </div>
          <div>
            <p className='text-2xl font-semibold'>Naira</p>
            <p className='text-gray-600 text-lg'>Payment Method</p>
          </div>
          <div>
            <p className='text-2xl font-semibold'>1100693680</p>
            <p className='text-gray-600 text-lg'>Bank Details</p>
          </div>
        </div>
      </div>

      <div className='flex justify-end gap-4 px-24 mt-8'>
        <button
          //   onClick={openLossModal}
          className='bg-transparent border border-light-blue-500 text-light-blue-500 py-4 px-6 rounded-lg transition'
        >
          Decline
        </button>
        <button
          onClick={OpenApprovedModal}
          className='bg-light-blue-500 text-white py-4 px-12 rounded-lg transition hover:shadow-lg'
        >
          Approved
        </button>
      </div>

      {isApprovedModalOpen && (
        <div className='fixed inset-0 flex z-50 justify-center items-center'>
          <div className='bg-white p-6 rounded-md shadow-lg'>
            {/* Render the modal component */}
            <ApprovedWithdrawal
              approvedWithdrawalClose={approvedWithdrawalClose}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WithdrawalDetails

// {isLossModalOpen && (
//     <div className="fixed inset-0 flex z-50 justify-center items-center">
//       <div className="bg-white p-6 rounded-md shadow-lg">
//         {/* Render the modal component */}
//         <ConfirmEventLoss closeLossModal={closeLossModal} />
//       </div>
//     </div>
//   )}

//   {isWinModalOpen && (
//     <div className="fixed inset-0 flex z-50 justify-center items-center">
//       <div className="bg-white p-6 rounded-md shadow-lg">
//         {/* Render the modal component */}
//         <ConfirmEventWin />
//       </div>
//     </div>
//   )}
