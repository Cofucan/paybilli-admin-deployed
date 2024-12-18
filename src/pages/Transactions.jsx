import { useState } from 'react'
import allIcon from '../assets/transactionblackicon.svg'
import greenIcon from '../assets/transactionsgreenicon.svg'
import pendingIcon from '../assets/transactionsgold.svg'
import FailedIcon from '../assets/transactionsfailed.svg'
import ArrowDownWhite from '../assets/ArrowDown.svg'
import TransactionsTable from '../Tables/TransactionsTable/TransactionsTable'
import Footer from '../components/Footer'
import { CiSearch } from 'react-icons/ci'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import Calenda from '../components/Calenda'

const Transactions = () => {
  const [isCalendalVisible, setIsCalendaVisible] = useState(false)

  const ToggleCalendaVisible = () => {
    setIsCalendaVisible(!isCalendalVisible)
  }

  return (
    <section className='relative w-full'>
      <div className='lg:w-full'>
        <div className='w-[95%] mx-auto mt-14 smd:mt-14 lg:mt-8 xl:my-4'>
          <h1 className='text-[34px] py-10 xl:py-5 text-[#1D1D1D] leading-[28px] font-semibold'>
            Transactions
          </h1>
        </div>
        <div className='grid smd:grid-cols-3 lg:grid-cols-4 gap-2 mx-3 xl:ml-8 xl:mr-14'>
          <div className='bg-white flex gap-6 py-3 rounded-lg shadow-sm '>
            <img
              src={allIcon}
              alt='#'
              className='ms-5 w-16 h-16 object-cover'
            />
            <div className='flex flex-col gap-2'>
              <p className='text-[26px] smd:text-[18px] lg:text-[20px]'>4223</p>
              <p className='text-gray-500 text-sm'>ALL Transactions</p>
            </div>
          </div>
          <div className='bg-white flex gap-6 py-3 rounded-lg shadow-sm '>
            <img
              src={greenIcon}
              alt='#'
              className='ms-5 w-16 h-16 object-cover'
            />
            <div className='flex flex-col gap-2'>
              <p className='text-[26px] smd:text-[18px] lg:text-[20px]'>3242</p>
              <p className='text-gray-500 text-sm'>Completed Transactions</p>
            </div>
          </div>
          <div className='bg-white flex gap-6 py-3 rounded-lg shadow-sm '>
            <img
              src={pendingIcon}
              alt='#'
              className='ms-5 w-16 h-16 object-cover'
            />
            <div className='flex flex-col '>
              <p className='text-[26px] smd:text-[18px] lg:text-[20px]'>400</p>
              <p className='text-gray-500 text-sm'>Pending Transactions</p>
            </div>
          </div>
          <div className='bg-white flex gap-6 py-3 rounded-lg shadow-sm '>
            <img
              src={FailedIcon}
              alt='#'
              className='ms-5 w-16 h-16 object-cover'
            />
            <div className='flex flex-col '>
              <p className='text-[26px] smd:text-[18px] lg:text-[20px]'>24</p>
              <p className='text-gray-500 text-sm'>Failed Transactions</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-end gap-5 mx-2 lg:mx-14 lg:my-14'>
        <button className='flex gap-2 px-6 py-3 font-semibold hover:shadow-md bg-[#4cb8ed] border border-[#4cb8ed] text-white rounded-xl'>
          <img src={ArrowDownWhite} alt='#' className='w-6 h-6 object-cover' />
          Export Data
        </button>
      </div>

      <div className='xl:ml-8 xl:mr-14 z-10'>
        {/*Header */}
        <div className='bg-white grid grid-cols-3 border-b-2 border-gray-200 rounded-t-lg items-center px-3'>
          <div className='hidden lg:block'>
            <h1 className='text-lg text-black font-medium'> Transactions</h1>
          </div>
          <div className='flex gap-2 lg:gap-0 justify-between col-span-3 lg:col-span-2 items-center py-2'>
            <div className='flex xl:w-full max-w-xl items-center border border-gray-300 rounded-lg lg:p-2 lg:mx-4'>
              <CiSearch className='ms-3 text-2xl text-[black]' />
              <input
                className='border-none focus:border-none focus:ring-0 outline-none w-full placeholder:text-xs placeholder:lg:text-[14px] smd:text-sm text-gray-700 placeholder-gray-950'
                type='text'
                placeholder='Search Wallets...'
              />
            </div>
            <div
              onClick={ToggleCalendaVisible}
              className='flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-3 lg:py-4'
            >
              <MdOutlineCalendarMonth className='text-gray-500' />
              <button className='text-gray-500 text-xs smd:text-sm'>
                Filter
              </button>

              {isCalendalVisible && (
                <>
                  <div
                    className='fixed inset-0 bg-black opacity-20 z-20'
                    onClick={ToggleCalendaVisible} // Close the calendar if the overlay is clicked
                  ></div>
                  <div
                    className='absolute top-[30%] right-20 z-50'
                    onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the calendar
                  >
                    <Calenda className='' />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className=''>
          <TransactionsTable />
        </div>
      </div>
      <div className='mt-60'>
        <Footer />
      </div>
    </section>
  )
}

export default Transactions
