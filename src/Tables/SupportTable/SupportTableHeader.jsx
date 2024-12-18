import { CiSearch } from 'react-icons/ci'
import Footer from '../../components/Footer'
import SupportTable from './SupportTable'

const SupportTableHeader = () => {
  return (
    <section>
      <div className='xl:ml-8 xl:mr-14 z-10'>
        <div className='bg-white grid grid-cols-2 border-b-2 border-gray-200 rounded-t-lg items-center px-3'>
          <div className='hidden lg:block'>
            <h1 className='text-lg text-black font-medium'> Support</h1>
          </div>
          <div className='flex gap-2 lg:gap-0 justify-between col-span-3 lg:col-span-1 items-center py-2'>
            <div className='flex xl:w-full max-w-xl items-center border border-gray-300 rounded-lg lg:p-2 lg:mx-4'>
              <CiSearch className='ms-3 text-2xl text-[black]' />
              <input
                className='border-none focus:border-none focus:ring-0 outline-none w-full placeholder:text-xs placeholder:lg:text-sm smd:text-sm text-gray-700 placeholder-gray-950'
                type='text'
                placeholder='Search admin...'
              />
            </div>
          </div>
        </div>
        <SupportTable />
      </div>
      <div className='mt-40'>
        <Footer />
      </div>
    </section>
  )
}

export default SupportTableHeader
