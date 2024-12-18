import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import Footer from '../../components/Footer'
import Calenda from '../../components/Calenda'
import RevenueTable from './RevenueTable'

const RevenueTableHeader = () => {
  const [isCalendalVisible, setIsCalendaVisible] = useState(false)

  const ToggleCalendaVisible = () => {
    setIsCalendaVisible(!isCalendalVisible)
  }
  return (
    <section>
      <div className='xl:ml-8 xl:mr-14 z-10'>
        <div className='bg-white grid grid-cols-3 border-b-2 border-gray-200 rounded-t-lg items-center px-3'>
          <div className='hidden lg:block'>
            <h1 className='text-lg text-black font-medium'> Revenue</h1>
          </div>
          <div className='flex gap-2 lg:gap-0 justify-between col-span-3 lg:col-span-2 items-center py-2'>
            <div className='flex xl:w-full max-w-xl items-center border border-gray-300 rounded-lg lg:p-2 lg:mx-4'>
              <CiSearch className='ms-3 text-2xl text-[black]' />
              <input
                className='border-none focus:border-none focus:ring-0 outline-none w-full placeholder:text-xs placeholder:lg:text-sm smd:text-sm text-gray-700 placeholder-gray-950'
                type='text'
                placeholder='Search revenue...'
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
            </div>
            {isCalendalVisible && (
              <>
                <div
                  className='fixed inset-0 bg-black opacity-20 z-10'
                  onClick={ToggleCalendaVisible}
                ></div>
                <div
                  className='absolute top-[30%] right-20 z-10'
                  onClick={e => e.stopPropagation()}
                >
                  <Calenda className='' />
                </div>
              </>
            )}
          </div>
        </div>
        <RevenueTable />
      </div>
      <div className='mt-40'>
        <Footer />
      </div>
    </section>
  )
}

export default RevenueTableHeader
