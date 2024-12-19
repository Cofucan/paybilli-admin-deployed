import Logo from '../../assets/logo.svg'
import { customFetch } from '../../utils/constants.js'
import CustomPassword from '../../components/form/CustomPassword.jsx'
import PropTypes from 'prop-types'
import { useAuth } from '../../context/AuthContext.jsx'

const ResetNewLogin = ({ navigate }) => {
  const {login} = useAuth()
  async function handleSubmit(event) {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.currentTarget))
    const response = await customFetch.post('account/set-password/', {
      json: formData,
    })
    // TODO: Handle Error
    if (response.ok) {
      login(await response.json())
    }
    console.log(response)
    navigate()
  }

  return (
    <div className='bg-light-grey'>
      <div className='flex items-center justify-between w-[85%] mx-auto'>
        <div className='hidden lg:w-[40%] lg:block'>
          <img src={Logo} alt='logo' width={500} />
        </div>

        <div className='w-[90vw] lg:w-[45%]'>
          <div className='flex justify-center items-center my-3'>
            <img src={Logo} width={100} alt='logo' />
          </div>
          <div className='bg-white border border-light-grey-500 shadow'>
            <div className='text-center py-5'>
              <h2 className='text-3xl font-semibold'>Admin</h2>
              <h3 className='text-2xl font-normal pt-2 text-gray-500'>
                Welcome Back
              </h3>
            </div>
            <form
              className=' mx-auto flex flex-col gap-3'
              onSubmit={handleSubmit}
            >
              <div className='w-[90%] mx-auto flex flex-col gap-3'>
                <label className='text-lg text-slate-700'>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                  className='border-2 border-light-grey-500 py-4 rounded-lg placeholder:text-lg 
                  focus:placeholder:text-sm focus:ring-blue-300 focus:border-blue-400 custom-placeholder'
                />
              </div>

              <div className='w-[90%] mx-auto flex flex-col gap-3'>
                <label className='text-lg text-slate-700'>Password</label>
                <CustomPassword />
              </div>

              {/*retype password */}
              <div className='w-[90%] mx-auto flex flex-col gap-3'>
                <label className='text-lg text-slate-700'>
                  Retype New Password
                </label>
                <CustomPassword name='confirm_password' />
              </div>

              <div className='my-5'>
                <button className='py-5 flex justify-center items-center w-[90%] mx-auto flex-col gap-3 lg:gap-5 rounded-lg cursor-pointer text-white text-lg font-medium bg-light-blue-500 hover:bg-light-blue hover:duration-700'>
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
ResetNewLogin.propTypes = {
  navigate: PropTypes.func.isRequired,
}
export default ResetNewLogin
