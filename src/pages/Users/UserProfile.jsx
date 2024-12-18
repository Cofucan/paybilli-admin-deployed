import { useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import userpic from '../../assets/userprofile.svg'
import Eye from '../../assets/EyeBlue.svg'
import Pen from '../../assets/editPen.svg'
import UserDashboardStat from './UserDashboardStat'
import UserTransactionTable from '../../Tables/UserProfileTable/UserTransactionTable'
import { CiSearch } from 'react-icons/ci'
import Filter from '../../assets/Filter.svg'
import UserActionTable from '../../Tables/UserProfileTable/UserAction.jsx/UserActionTable'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import WalletBalanceModal from '../../components/WalletBalanceModal'

const UserProfile = () => {
  const navigate = useNavigate()
  const [isWalletBalanceOpen, setIsWalletBalanceOpen] = useState(false)

  const ModalOpen = () => {
    setIsWalletBalanceOpen(!isWalletBalanceOpen)
  }
  return (
    <section className='w-full h-full mt-16 smd:mt-20 lg:mt-10 xl:mt-0'>
      <div className='mx-10'>
        <button
          onClick={() => navigate('/admin/user')}
          className='flex items-center gap-2 pt-10'
        >
          <FaArrowLeftLong className='text-2xl text-black hover:text-black' />
          <span className='text-xl smd:text-[34px] text-[#1D1D1D] leading-[28px] font-semibold'>
            User Profile
          </span>
        </button>
        <div className='relative w-[95%] bg-white shadow-sm shadow-[#c8edff] rounded-md my-10'>
          <div className='flex px-10 py-8'>
            <div className='w-[30%]'>
              <img src={userpic} alt='user' />
              <div className='pt-5 px-5'>
                <h3 className='text-lg font-medium'>John Badarin</h3>
                <p className='text-gray-500'>johnbaderin@gmail.com</p>
              </div>
            </div>

            <div className='w-[70%]'>
              {/* User Details */}
              <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 mt-6'>
                <div>
                  <p className='text-lg font-medium'>Johnie</p>
                  <h4 className='text-gray-500'>Username</h4>
                </div>
                <div>
                  <p className='text-lg font-medium'>Nigeria</p>
                  <h4 className='text-gray-500'>Country</h4>
                </div>
                <div>
                  <p className='text-lg font-medium'>02 August, 2023</p>
                  <h4 className='text-gray-500'>Account Created</h4>
                </div>
                <div>
                  <p className='text-lg font-medium'>12 August, 1994</p>
                  <h4 className='text-gray-500'>Date of Birth</h4>
                </div>
                <div className='w-[40%]'>
                  <h4 className='text-lg font-medium'>Status</h4>
                  <p className='bg-[#DFF6DD] text-[#2E7D32] px-2 py-1 rounded-md'>
                    Active
                  </p>
                </div>
                <div>
                  <p className='text-lg font-medium'>33440233233</p>
                  <h4 className='text-gray-500'>BVN/NIN</h4>
                </div>
                <div>
                  <p className='text-lg font-medium'>0902323743</p>
                  <h4 className='text-gray-500'>Phone Number</h4>
                </div>

                <div>
                  <p className='text-lg font-medium'>33440233233</p>
                  <h4 className='text-gray-500'>BVN/NIN</h4>
                </div>
              </div>
              <div className='w-[95%] pt-8 flex justify-between items-center'>
                <button
                  onClick={ModalOpen}
                  className='flex items-center gap-2 bg-white border-2 border-light-blue-500 text-light-blue-500 font-medium px-3 py-2 rounded-md'
                >
                  <img src={Eye} alt='Eye' />
                  View Wallet
                </button>
                <button
                  onClick={() => navigate('/admin/UserEdit')}
                  className='flex items-center gap-2 hover:text-white text-white border-2 border-light-blue-500 bg-light-blue-500 font-medium px-5 py-2 rounded-md'
                >
                  <img src={Pen} alt='Eye' />
                  Edit User
                </button>
              </div>
            </div>
          </div>

          {isWalletBalanceOpen && <WalletBalanceModal />}
        </div>

        <div className=''>
          <UserDashboardStat />
        </div>
        <div className='w-[95%] z-10 mt-10'>
          {/*Header */}
          <div className='bg-white grid grid-cols-3 rounded-t-lg items-center px-10'>
            <div className='hidden lg:block'>
              <h1 className='text-lg text-black font-medium'>Transactions</h1>
            </div>
            <div className='flex gap-2 lg:gap-0 justify-between col-span-3 lg:col-span-2 items-center py-2'>
              <div className='flex xl:w-full max-w-xl items-center border border-gray-300 rounded-lg lg:p-2 lg:mx-4'>
                <CiSearch className='ms-3 text-2xl text-[black]' />
                <input
                  className='border-none focus:border-none focus:ring-0 outline-none w-full placeholder:text-xs placeholder:lg:text-lg smd:text-sm text-gray-700 placeholder-gray-950'
                  type='text'
                  placeholder='Search here...'
                />
              </div>
              <div className='flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-3 lg:py-4'>
                <img src={Filter} alt='Filter' className='w-5 h-5' />
                <button className='text-gray-500 text-xs smd:text-sm'>
                  Filter
                </button>
              </div>
            </div>
          </div>

          <UserTransactionTable />
        </div>
        <UserActionTable />
      </div>
      <div className='mt-40'>
        <Footer />
      </div>
    </section>
  )
}

export default UserProfile
