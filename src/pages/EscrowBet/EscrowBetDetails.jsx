import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import info from '../../assets/Info Circle.svg'
import Footer from '../../components/Footer'

const EscrowBetDetails = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const betDetails = state?.betDetails

  // State to handle selected outcome
  const [selectedOutcome, setSelectedOutcome] = useState('')

  // Options for the select input
  const outcomeOptions = [
    { value: '', label: '' },
    { value: 'win', label: 'Win' },
    { value: 'lose', label: 'Lose' },
    { value: 'draw', label: 'Draw' },
    // Add more options as needed
  ]

  return (
    <div className='w-full bg-gray-50 min-h-screen'>
      <div className='px-7 pt-20 xl:pt-5'>
        <button
          onClick={() => navigate('/admin/escrow')}
          className='flex items-center gap-3 text-[34px] text-[#1D1D1D] font-semibold hover:text-gray-800 transition'
        >
          <FaArrowLeftLong className='text-2xl' />
          <span>Bet Details</span>
        </button>
      </div>
      {/* Render bet details */}
      {betDetails && (
        <div className='ms-6 mx-6 lg:mr-24'>
          <div className='bg-white max-w-6xl mx-auto rounded-lg p-8 mt-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
              <div>
                <div className='flex gap-2'>
                  <p className='text-2xl font-semibold'>
                    {betDetails.participant}
                  </p>
                  <img src={info} alt='info-circle' className='' />
                </div>
                <p className='text-gray-600 text-lg font-medium'>
                  Participants
                </p>
              </div>
              <div>
                <p className='text-2xl font-semibold'>{betDetails.Betdate}</p>
                <p className='text-gray-600 text-lg font-medium'>
                  Date Created
                </p>
              </div>
              <div>
                <p className='text-2xl font-semibold'>{betDetails.Bet}</p>
                <p className='text-gray-600 text-lg font-medium'>
                  Escrow Prediction
                </p>
              </div>
              <div>
                <p className='text-2xl font-semibold'>{betDetails.betId}</p>
                <p className='text-gray-600 text-lg font-medium'>Bet Id</p>
              </div>
              <div>
                <p className='text-2xl font-semibold'>{betDetails.Amount}</p>
                <p className='text-gray-600 text-lg font-medium'>
                  Total Bet Amount
                </p>
              </div>
              <div>
                <p className='text-2xl font-semibold pb-1'>Choose Outcome</p>
                <select
                  value={selectedOutcome}
                  onChange={e => setSelectedOutcome(e.target.value)}
                  className='text-2xl w-full font-semibold border border-gray-300 rounded-lg p-1'
                >
                  {outcomeOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className='text-gray-600 text-sm font-medium'>
                  Selected Outcome: {selectedOutcome || 'None'}
                </p>
              </div>
              <div>
                <p className='text-2xl font-semibold'>NGN 7000</p>
                <p className='text-gray-600 text-lg font-medium'>Net Payout</p>
              </div>
              <div>
                <p className='text-2xl font-semibold'>NGN 1000</p>
                <p className='text-gray-600 text-lg font-medium'>Commission</p>
              </div>
              {/* ... other details ... */}
            </div>
          </div>
        </div>
      )}
      <div className='flex justify-end px-24 mt-8'>
        <button
          // onClick={openWinModal} // Uncomment if you want to handle the modal opening
          className='bg-light-blue-500 text-white py-6 px-14 rounded-lg transition hover:shadow-lg'
        >
          Choose Winner
        </button>
      </div>
      <div className='mt-[34rem]'>
        <Footer />
      </div>
    </div>
  )
}

export default EscrowBetDetails
