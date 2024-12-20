import { useEffect, useRef, useState } from 'react'
import outline from '../../assets/outline.svg'
import SendOutline from '../../assets/SendOutline.svg'
import ArrowDownBlue from '../../assets/ArrowDownBlue.svg'
import add from '../../assets/add.svg'
import UserTable from '../../Tables/UserTable/UserTable'
import { CiSearch } from 'react-icons/ci'
import { MdOutlineCalendarMonth, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Footer from '../../components/Footer'
import SubInviteUserModal from '../../Modals/SubInviteUserModal'
import { LiaTimesSolid } from 'react-icons/lia'
import Calendar from '../../components/Calenda'
import UserStatistic from './UserStatistic.jsx'

const Users = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isSubModalVisible, setSubIsModalVisible] = useState(false)
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const calendarRef = useRef(null) // Use a ref for the calendar
  // const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false)

  // const ToggleVerifyModal = () => {
  //   setIsVerifyModalOpen(true)
  // }

  const ToggleModalVisible = () => {
    setIsModalVisible(!isModalVisible)
  }

  const ToggleSubModalVisible = () => {
    setSubIsModalVisible(!isSubModalVisible)
  }

  const ToggleCalendarVisible = () => {
    setIsCalendarVisible(!isCalendarVisible)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const stopPropagation = e => {
    e.stopPropagation() // Prevents the click event from bubbling to the overlay
  }

  // Effect to close the calendar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = event => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarVisible(false) // Close the calendar if clicked outside
      }
    }
    if (isCalendarVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isCalendarVisible])

  return (
    <section className='relative w-full'>
      <UserStatistic />
      <div className='flex justify-end lg:px-14 pt-12 my-8 '>
        <div className='flex gap-5 mx-2 lg:mx-0'>
          <button className='flex gap-2 px-6 py-3 font-semibold bg-white border border-[#4cb8ed] text-[#4cb8ed] rounded-xl'>
            <img src={ArrowDownBlue} alt='#' className='w-6 h-6 object-cover' />
            Export Data
          </button>
          {/* Invite User Button */}
          <div className=''>
            <button
              onClick={ToggleModalVisible}
              className='flex gap-2 px-6 py-3 bg-[#4cb8ed] font-medium border border-gray-100 text-white rounded-xl'
            >
              <img src={add} alt='#' className='w-6 h-6 object-cover' />
              Invite User
            </button>
          </div>
        </div>
      </div>

      {/* Invite User Modal */}
      {isModalVisible && (
        <>
          {/* Overlay */}
          <div
            className='fixed inset-0 bg-black opacity-20 z-20'
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div
            className='grid place-items-center fixed inset-0 z-50'
            onClick={closeModal} // Clicking anywhere outside the modal will close it
          >
            <div
              className='bg-white w-[80%] xl:w-[45%] mt-14 sm:mt-24 xl:mt-0 rounded-3xl p-6 relative'
              onClick={stopPropagation} // Clicking inside the modal won't close it
            >
              <h1 className='font-medium text-2xl pb-4 text-center relative'>
                Invite new user to this platform{' '}
                <span
                  className='absolute right-0 top-2'
                  onClick={() => setIsModalVisible(false)}
                >
                  {' '}
                  <LiaTimesSolid />
                </span>
              </h1>

              <form className='w-[90%] mx-auto'>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Enter Email</label>
                    <input
                      type='email'
                      autoComplete='off'
                      placeholder='e.g ezey@gmail.com'
                      className='border-2 rounded-lg border-gray-200 pb-20 placeholder:text-sm placeholder-gray-400'
                    />

                    <div className='flex justify-between items-center pt-3'>
                      <label className='font-medium text-sm'>Invite as</label>
                      <button className='font-medium text-xs text-[#4cb8ed]'>
                        Set multiple role
                      </button>
                    </div>
                    <div className='relative'>
                      <input
                        type='text'
                        autoComplete='off'
                        placeholder='Member'
                        className='border-2 rounded-lg border-gray-200 placeholder:text-sm placeholder-gray-400 pr-10 w-full'
                      />
                      <MdOutlineKeyboardArrowDown
                        onClick={ToggleSubModalVisible}
                        className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400'
                      />
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                      <img src={outline} alt='outline-copyLink' />
                      <p className='text-[#4cb8ed] text-xs'>Copy invite link</p>
                    </div>
                    <button className='flex items-center gap-1 bg-light-blue-500 px-4 py-2 text-white rounded-lg'>
                      Send
                      <img src={SendOutline} alt='SendOutline' />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {isSubModalVisible && (
              <SubInviteUserModal onClick={stopPropagation} />
            )}
          </div>
        </>
      )}

      <div className='xl:ml-8 xl:mr-14 z-10'>
        {/*Header */}
        <div className='bg-white grid grid-cols-3 border-b-2 border-gray-200 rounded-t-lg items-center px-3'>
          <div className='hidden lg:block'>
            <h1 className='text-lg text-black font-medium'>Users</h1>
          </div>
          <div className='flex gap-2 lg:gap-0 justify-between col-span-3 lg:col-span-2 items-center py-2'>
            <div className='flex xl:w-full max-w-xl items-center border border-gray-300 rounded-lg lg:p-2 lg:mx-4'>
              <CiSearch className='ms-3 text-2xl text-[black]' />
              <input
                className='border-none focus:border-none focus:ring-0 outline-none w-full placeholder:text-xs placeholder:lg:text-lg smd:text-sm text-gray-700 placeholder-gray-950'
                type='text'
                placeholder='Search Users'
              />
            </div>
            <div
              onClick={ToggleCalendarVisible}
              className='flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-3 lg:py-4'
            >
              <MdOutlineCalendarMonth className='text-gray-500' />
              <button className='text-gray-500 text-xs smd:text-sm'>
                Filter
              </button>
            </div>
            {isCalendarVisible && (
              <>
                {/*Overlay */}
                <div className='fixed inset-0 bg-black opacity-20 z-20'></div>
                <div
                  ref={calendarRef}
                  className='absolute top-[30%] right-20 z-20'
                >
                  <Calendar className='' />
                </div>
              </>
            )}
          </div>
        </div>
        {/* <div>
          <VerifyUserModal />
        </div> */}
        <UserTable className='' />
      </div>
      <div className='mt-40'>
        <Footer />
      </div>
    </section>
  )
}

export default Users
