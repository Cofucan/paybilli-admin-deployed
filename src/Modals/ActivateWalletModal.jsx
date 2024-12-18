import { useState } from 'react'
import ActivateSuccessModal from './ActivateSuccessModal'

const ActivateWalletModal = ({ CloseActivateWallet }) => {
  const [activateSuccessWallet, setActivateSuccessWallet] = useState(false)

  const ToggleSuccessModalOpen = () => {
    setActivateSuccessWallet(true)
  }

  return (
    <div className='fixed inset-0  flex items-center justify-center bg-black bg-opacity-20'>
      <div className='bg-[#fafafa] w-[650px] p-6 rounded-lg shadow-lg'>
        {/* Modal Header */}
        <h2 className='text-lg font-semibold text-gray-800 mb-2'>
          Activate Wallet?
        </h2>

        {/* Modal Body */}
        <p className='text-sm text-gray-500 mb-6'>
          Are you certain you want to Activate this Wallet?
        </p>

        {/* Buttons Section */}
        <div className='flex justify-end gap-4'>
          {/* Cancel Button */}
          <button
            onClick={CloseActivateWallet}
            className='px-6 py-3 border border-light-blue-500 text-light-blue-500 rounded-md'
          >
            Cancel
          </button>

          {/* Close Bet Button */}
          <button
            onClick={ToggleSuccessModalOpen}
            className='px-6 py-3 bg-red-600 text-white rounded-md hover:shadow-md transition-all'
          >
            Activate Wallet
          </button>
        </div>
      </div>

      {activateSuccessWallet && (
        <ActivateSuccessModal CloseActivateWallet={CloseActivateWallet} />
      )}
    </div>
  )
}

export default ActivateWalletModal
