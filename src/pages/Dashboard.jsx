import { useState } from 'react'
import ImportImgs from '../components/ImportImgs'

// import TransactionTable from "../Tables/Transactions";
import Footer from '../components/Footer'

// import TransactionChart from "../charts/TransactionChart";
// import Notification from "../Modals/Notification";
import TransactionsDashboard from '../Tables/TransactionsDashboard'

const Dashboard = () => {
  const images = ImportImgs()
  // Initial state
  const [currency, setCurrency] = useState('Naira')
  const [values, setValues] = useState({
    balance: 24000000,
    incoming: 4000000,
    outgoing: 2000000,
  })

  // Function to handle currency change
  const handleCurrencyChange = newCurrency => {
    setCurrency(newCurrency)

    // Update the values based on the selected currency
    if (newCurrency === 'Crypto') {
      setValues({
        balance: 4000,
        incoming: 2400,
        outgoing: 1600,
      })
    } else {
      setValues({
        balance: 24000000,
        incoming: 4000000,
        outgoing: 2000000,
      })
    }
  }

  return (
    <div className='w-full relative'>
      <div className='w-[90%] mx-auto'>
        <div className=''>
          <h1 className='text-[34px] py-7 text-[#1D1D1D] leading-[28px] font-semibold'>
            Dashboard
          </h1>
        </div>
        <div className='bg-white border-2 border-gray-300 rounded-lg px-1 py-1 w-[140px]'>
          <div className='flex justify-between items-center'>
            <button
              onClick={() => handleCurrencyChange('Naira')}
              className={`px-2 py-1 rounded ${
                currency === 'Naira' ? 'bg-light-blue-500 text-white' : ''
              }`}
            >
              Naira
            </button>
            <button
              onClick={() => handleCurrencyChange('Crypto')}
              className={`px-2 py-1 rounded ${
                currency === 'Crypto' ? 'bg-light-blue-500 text-white' : ''
              }`}
            >
              Crypto
            </button>
          </div>
        </div>
        <div className=' xl:w-[100%] grid grid-col smd:grid-cols-3 lg:grid-cols-3 gap-12 my-3'>
          <div className='smd:w-[30vw] xl:w-full bg-white flex gap-6 py-6 rounded-lg shadow-sm'>
            <img src={images.Balance} alt='#' className='ms-5' />
            <div className='flex flex-col'>
              {/* <p className="text-[26px]">
                <span>&#8358;</span>
                {balanceValue}
              </p> */}
              <p className='text-[26px] smd:text-[18px] lg:text-[26px]'>
                {currency === 'Naira'
                  ? `₦${values.balance.toLocaleString()}`
                  : `${values.balance.toLocaleString()} USDT`}
              </p>
              <p className='text-gray-500'>Balance</p>
            </div>
          </div>
          <div className='smd:w-[30vw] xl:w-full bg-white flex gap-6 py-6 rounded-lg shadow-sm'>
            <img src={images.Incoming} alt='#' className='ms-5' />
            <div className='flex flex-col'>
              <p className='text-[26px] smd:text-[18px] lg:text-[26px]'>
                {currency === 'Naira'
                  ? `₦${values.incoming.toLocaleString()}`
                  : `${values.incoming.toLocaleString()} USDT`}
              </p>
              <p className='text-gray-500'>Incoming</p>
            </div>
          </div>
          <div className='smd:w-[28vw] xl:w-full bg-white flex gap-6 py-6 rounded-lg shadow-sm'>
            <img src={images.Outcoming} alt='#' className='ms-5' />
            <div className='flex flex-col'>
              <p className='text-[26px] smd:text-[18px] lg:text-[26px]'>
                {currency === 'Naira'
                  ? `₦${values.outgoing.toLocaleString()}`
                  : `${values.outgoing.toLocaleString()} USDT`}
              </p>
              <p className='text-gray-500'>Outgoing</p>
            </div>
          </div>
          <div className='smd:w-[30vw] xl:w-full bg-white flex gap-6 py-6 rounded-lg shadow-sm'>
            <img src={images.Eventbet} alt='#' className='ms-5' />
            <div className='flex flex-col'>
              <p className='text-[26px]'>123</p>
              <p className='text-gray-500'>All Events</p>
            </div>
          </div>
          <div className='smd:w-[30vw] xl:w-full bg-white flex gap-6 py-6 rounded-lg shadow-sm'>
            <img src={images.Openbet} alt='#' className='ms-5' />
            <div className='flex flex-col'>
              <p className='text-[26px]'>73</p>
              <p className='text-gray-500'>Open Bets</p>
            </div>
          </div>
          <div className='smd:w-[28vw] xl:w-full bg-white flex gap-6 py-6 rounded-lg shadow-sm'>
            <img src={images.Closebet} alt='#' className='ms-5' />
            <div className='flex flex-col'>
              <p className='text-[26px]'>50</p>
              <p className='text-gray-500'>Closed Bets</p>
            </div>
          </div>
          <div className='smd:w-[30vw] xl:w-full bg-white flex gap-6 py-6 rounded-lg shadow-sm'>
            <img src={images.Wonbet} alt='#' className='ms-5' />
            <div className='flex flex-col'>
              <p className='text-[26px]'>50</p>
              <p className='text-gray-500'>Won Bets</p>
            </div>
          </div>
          <div className='smd:w-[30vw] xl:w-full bg-white flex gap-6 py-6 rounded-lg shadow-sm'>
            <img src={images.Lostbet} alt='#' className='ms-5' />
            <div className='flex flex-col'>
              <p className='text-[26px]'>25</p>
              <p className='text-gray-500'>Lost Bets</p>
            </div>
          </div>
          <div className='smd:w-[28vw] xl:w-full bg-white flex gap-6 py-6 rounded-lg shadow-sm'>
            <img src={images.Undecided} alt='#' className='ms-5' />
            <div className='flex flex-col'>
              <p className='text-[26px]'>30</p>
              <p className='text-gray-500'>Undecided Bets</p>
            </div>
          </div>
        </div>

        {/* <div className="flex items-center justify-center">
          <TransactionChart />
        </div> */}
        <div className='z-0'>
          <TransactionsDashboard />
        </div>
      </div>
      {/* <div className="absolute top-0 -right-[10rem]">
        <Notification />
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
