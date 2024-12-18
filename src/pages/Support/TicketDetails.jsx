import ImportImgs from '../../components/ImportImgs'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const TicketDetails = () => {
  const navigate = useNavigate()
  const images = ImportImgs()
  return (
    <div className='p-6 bg-gray-100 w-[70%] mx-5'>
      {/* Back Arrow and Title */}
      <div className='flex items-center mb-6'>
        <button
          onClick={() => navigate('/admin/Support')}
          className='text-3xl font-semibold text-black flex items-center'
        >
          <span className='mr-2'>
            <FaArrowLeftLong />
          </span>{' '}
          Ticket Details
        </button>
      </div>

      {/* Ticket Information */}
      <div className='bg-white p-6 rounded-lg shadow-sm'>
        {/* User and Details */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
          <div>
            <p className='font-semibold text-2xl'>Adeayo John</p>
            <p className='text-lg text-gray-500'>User</p>
          </div>
          <div>
            <p className='text-2xl font-semibold'>Open</p>
            <p className='text-lg text-gray-500'>Ticket Status</p>
          </div>
          <div>
            <p className='text-2xl font-semibold'>Chinozee</p>
            <p className='text-lg text-gray-500'>Assigned Admin</p>
          </div>
        </div>

        {/* Ticket Details */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
          <dlg>
            <p className='text-2xl font-semibold'>#EODI2343</p>
            <p className='text-sm text-gray-500'>Ticket ID</p>
          </dlg>
          <dlg>
            <p className='text-2xl font-semibold'>Payment Issue</p>
            <p className='text-sm text-gray-500'>Issue Type</p>
          </dlg>
          <dlg>
            <p className='text-2xl font-semibold'>02, August, 2024</p>
            <p className='text-sm text-gray-500'>Date Created</p>
          </dlg>
        </div>

        <div className='flex gap-10 items-center'>
          {/* Description */}
          <div className='w-[60%] bg-[#c8edff] bg-opacity-30 p-4 rounded-md mb-6'>
            <div className='flex items-start'>
              <span className='mr-2'>ℹ️</span>
              <p className='text-sm text-gray-700 leading-7'>
                I attempted to process a payment for a bet entry, but the
                transaction keeps failing. I have tried using two different
                payment methods (Naira and Crypto), but both resulted in error
                messages. The error code I received is ‘PAY-403’ and ‘Invalid
                Payment Details’. I have also checked my account balance, and
                there’s sufficient funds.
              </p>
            </div>
          </div>

          {/* File Upload */}
          <div className='w-[40%] flex items-center justify-between border border-[#4cb8ed] bg-gray-50 rounded-md p-4 -mb-20'>
            <div>
              <p className='text-sm font-semibold pb-1'>File Title.pdf</p>
              <p className='text-xs text-gray-500'>313 KB . 31 Aug, 2022</p>
            </div>
            <div className='flex items-center space-x-4'>
              <button className='text-blue-600 hover:underline'>
                <img src={images.DownloadIcon} alt='download' />
              </button>
              <button className='text-red-600 hover:underline'>
                <img src={images.DeleteIcon} alt='download' />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Actions */}
      <div className='flex justify-end my-10 space-x-4'>
        <button className='text-[#4cb8ed] px-7 py-5 rounded-md border border-[#4cb8ed]'>
          Live Chat
        </button>
        <button className='bg-[#4cb8ed] text-white px-7 py-4 rounded-md hover:bg-blue-600'>
          Assign Ticket
        </button>
      </div>
    </div>
  )
}

export default TicketDetails
