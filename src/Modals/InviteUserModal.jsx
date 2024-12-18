import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import outline from '../assets/outline.svg'
import SendOutline from '../assets/sendOutline.svg'
import SubInviteUsermModal from '../Modals/SubInviteUserModal'

const InviteUserModal = () => {
  const closeModal = () => {
    // setIsModalVisible(false)
  }

  const stopPropagation = e => {
    e.stopPropagation() // Prevents the click event from bubbling to the overlay
  }

  return (
    <>
      {/* Overlay */}
      <div
        className='fixed inset-0 bg-black opacity-20 z-20'
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div
        className='grid place-items-center absolute inset-0 z-50'
        onClick={closeModal} // Clicking anywhere outside the modal will close it
      >
        <div
          className='bg-white w-[80%] xl:w-[55%] mt-14 sm:mt-24 xl:mt-0 rounded-3xl p-6 relative'
          onClick={stopPropagation} // Clicking inside the modal won't close it
        >
          <h1 className='font-medium text-2xl text-center pb-4'>
            Invite new user to this platform
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
                  <MdOutlineKeyboardArrowDown className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400' />
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

        <SubInviteUsermModal />
      </div>
    </>
  )
}

export default InviteUserModal
