import { useState } from 'react'
import ProfileImage from '../../assets/UserImg.svg'
import EditProfile from '../../assets/EditUserPics.svg'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModalPassword, setIsModalPassword] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const navigate = useNavigate()

  const ToggleModalVisible = () => {
    setIsModalVisible(!isModalVisible)
  }
  const ToggleModalPassword = () => {
    setIsModalPassword(!isModalPassword)
  }
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <div className='relative w-full'>
      <div className='lg:w-full'>
        <div className='w-[85%] mx-auto mt-14 smd:mt-14 lg:mt-12 xl:mt-0'>
          <h1 className='text-[34px] py-10 xl:py-5 text-[#1D1D1D] leading-[28px] font-semibold'>
            Settings
          </h1>
        </div>
        <div className='mx-8 lg:hidden mb-10'>
          <button
            onClick={ToggleModalVisible}
            className='bg-light-blue-500 text-white rounded-md px-14 py-4 text-sm font-[400]'
          >
            Edit Profile
          </button>
        </div>
        <div className='w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-center'>
          <div className='w-[70%]'>
            <div className='relative w-52 rounded-lg border border-[#e5f4fc]'>
              <div className='UserImg '>
                <img
                  src={ProfileImage}
                  alt='userpics'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='EditUserPics absolute bottom-20 -right-5'>
                {' '}
                <img src={EditProfile} alt='EditProfile' />
              </div>
              <div className='text-center py-2 text-gray-500'>
                <p>Admin</p>
              </div>
            </div>

            <div className=' lg:w-[70%] xxl:w-[50%] py-10'>
              <div className='grid smd:grid-cols-2 gap-5'>
                <div className='xl:pb-10'>
                  <h2 className='smd:text-2xl lg:text-lg font-medium'>
                    Chenedu Oke
                  </h2>
                  <p className='smd:text-lg lg:text-sm text-gray-500'>
                    Full Name:
                  </p>
                </div>
                <div>
                  <h2 className='smd:text-2xl lg:text-lg font-medium'>
                    Chinozy
                  </h2>
                  <p className='smd:text-lg lg:text-sm text-gray-500'>
                    Username:
                  </p>
                </div>
                <div>
                  <h2 className='smd:text-2xl lg:text-lg font-medium'>
                    Chinozy@gmail.com
                  </h2>
                  <p className='smd:text-lg lg:text-sm text-gray-500'>
                    Email Address:
                  </p>
                </div>
                <div>
                  <p className='smd:text-2xl lg:text-lg font-medium'>
                    08032324355
                  </p>
                  <p className='smd:text-lg lg:text-sm text-gray-500'>
                    Phone Number:
                  </p>
                </div>
                <div className='flex flex-col gap-10 text-lg'>
                  <button
                    onClick={ToggleModalPassword}
                    className='smd:text-2xl lg:text-lg text-gray-500'
                  >
                    Change Password
                  </button>
                  <button
                    onClick={() => navigate('/admin/setting-activitylogs')}
                    className='smd:text-2xl lg:text-lg text-gray-500'
                  >
                    View Activity Logs
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:mx-10 xl:mx-8 xxl:mx-14 lg:-mt-[29rem] hidden lg:block'>
            <button
              onClick={ToggleModalVisible}
              className='bg-light-blue-500  text-white rounded-md px-14 py-4 text-sm font-[400]'
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/*Edit Profile Modal */}
      {isModalVisible && (
        <>
          {/* Overlay */}
          <div
            className='fixed inset-0 bg-black opacity-20 z-0'
            onClick={ToggleModalVisible}
          ></div>

          {/* Modal Content */}
          <div className='grid place-items-center z-20'>
            <div className='bg-white w-[80%] xl:w-[45%] mt-14 sm:mt-24 xl:mt-0 rounded-3xl absolute top-5 lg:left-[10rem]'>
              <div className='w-[90%] py-5 mx-auto'>
                <h1 className='font-medium text-xl'>Edit Profile</h1>
              </div>
              <form className='w-[90%] mx-auto'>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Full Name</label>
                    <input
                      type='text'
                      autoComplete='off'
                      placeholder='Oke Chinedu'
                      className='border-2 rounded-lg border-gray-200 placeholder:text-sm placeholder-gray-400'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Username</label>
                    <input
                      type='text'
                      autoComplete='off'
                      placeholder='Oke chinozy'
                      className='border-2 rounded-lg border-gray-200 placeholder:text-sm placeholder-gray-400'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>
                      Your email address
                    </label>
                    <input
                      type='text'
                      autoComplete='off'
                      placeholder='okechinedu@gmail.com'
                      className='border-2 rounded-lg border-gray-200 placeholder:text-sm placeholder-gray-400'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm'>Phone number</label>
                    <input
                      type='text'
                      autoComplete='off'
                      placeholder='08032324356'
                      className='border-2 rounded-lg border-gray-200 placeholder:text-sm placeholder-gray-400'
                    />
                  </div>
                  <div className='flex justify-between items-center mb-10'>
                    <button className='py-3 px-3 border-2 border-gray-200 rounded-lg font-medium'>
                      Cancel
                    </button>
                    <button className='bg-light-blue-500 px-3 py-3 text-white rounded-lg'>
                      Update Profile
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}

      {/* change password Modal */}
      {isModalPassword && (
        <>
          {/*Overlay */}
          <div
            className='fixed inset-0 bg-black opacity-20 z-0'
            onClick={ToggleModalPassword}
          ></div>

          <div className='grid place-items-center z-20'>
            <div className='bg-white w-[80%] xl:w-[45%] mt-60 smd:mt-20 xl:mt-0 rounded-3xl absolute top-5 lg:left-[10rem]'>
              <div className='w-[90%] py-5 mx-auto'>
                <h1 className='font-bold text-2xl'>Password Settings</h1>
                <p className='text-gray-500'>
                  Update password for enhanced account Security
                </p>
              </div>
              <form className='w-[90%] mx-auto'>
                <div className='flex flex-col gap-4'>
                  <div className='w-full flex flex-col gap-2 relative'>
                    <label className='text-slate-800'>Current Password</label>
                    <div className='relative'>
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        name='password'
                        placeholder='*******'
                        className='border-2 border-light-grey-500 py-3 rounded-lg text-gray-500 focus:placeholder:text-sm custom-placeholder
                 focus:ring-blue-300 focus:border-blue-400      w-full '
                      />
                      {passwordVisible ? (
                        <FaEye
                          onClick={handlePasswordVisibility}
                          className='absolute right-3 top-1/2 text-lg  -translate-y-1/2 text-gray-400 cursor-pointer'
                        />
                      ) : (
                        <FaEyeSlash
                          onClick={handlePasswordVisibility}
                          className='absolute right-3 top-1/2  text-lg -translate-y-1/2 text-gray-400 cursor-pointer'
                        />
                      )}
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-2 relative'>
                    <label className='text-slate-800'>New Password</label>
                    <div className='relative'>
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        name='password'
                        className='border-2 border-light-grey-500 py-3 rounded-lg 
                 focus:ring-blue-300 focus:border-blue-400 w-full '
                      />
                      {passwordVisible ? (
                        <FaEye
                          onClick={handlePasswordVisibility}
                          className='absolute right-3 top-1/2 text-lg  -translate-y-1/2 text-gray-400 cursor-pointer'
                        />
                      ) : (
                        <FaEyeSlash
                          onClick={handlePasswordVisibility}
                          className='absolute right-3 top-1/2  text-lg -translate-y-1/2 text-gray-400 cursor-pointer'
                        />
                      )}
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-2 relative'>
                    <label className='text-slate-800'>
                      Confirm New Password
                    </label>
                    <div className='relative'>
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        name='password'
                        className='border-2 border-light-grey-500 py-3 rounded-lg placeholder:text-xl text-gray-500 
                 focus:ring-blue-300 focus:border-blue-400 w-full '
                      />
                      {passwordVisible ? (
                        <FaEye
                          onClick={handlePasswordVisibility}
                          className='absolute right-3 top-1/2 text-lg  -translate-y-1/2 text-gray-400 cursor-pointer'
                        />
                      ) : (
                        <FaEyeSlash
                          onClick={handlePasswordVisibility}
                          className='absolute right-3 top-1/2  text-lg -translate-y-1/2 text-gray-400 cursor-pointer'
                        />
                      )}
                    </div>
                  </div>
                  <div className='flex justify-between items-center mt-3 mb-10'>
                    <button className='border-2 border-gray-200 px-3 py-3 rounded-lg font-medium'>
                      {' '}
                      Cancel
                    </button>
                    <button className=' px-3 py-3 flex justify-center rounded-lg text-white bg-light-blue-500 hover:bg-light-blue hover:duration-700'>
                      Update Password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}

      <div className='bg-white mt-44'>
        <Footer />
      </div>
    </div>
  )
}

export default Settings
