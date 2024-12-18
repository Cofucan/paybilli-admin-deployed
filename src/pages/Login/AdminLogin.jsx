import Logo from '../../assets/logo.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CustomPassword from '../../components/form/CustomPassword'
import { useAuth } from '../../context/AuthContext.jsx'
import { customFetch } from '../../utils/constants.js'

const AdminLogin = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  async function handleSubmit(event) {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.currentTarget))
    const response = await customFetch.post('account/login/', {
      json: formData,
    })
    login(await response.json())
    // TODO:  Work Here
    const origin = location.state?.from?.pathname || '/admin'
    navigate(origin)
  }

  return (
    <div className='bg-light-white'>
      <div className='flex items-center justify-between w-[95%] lg:w-[85%] mx-auto'>
        <div className='hidden lg:w-[40%] lg:block'>
          <img src={Logo} alt='logo' width={500} />
        </div>

        <div className='w-[96vw] lg:w-[45%]'>
          <div className='flex justify-center items-center my-3'>
            <img src={Logo} width={100} alt='logo' />
          </div>
          <div className='bg-white border border-light-grey-500 shadow'>
            <div className='text-center py-5'>
              <h2 className='text-3xl font-semibold'>Admin</h2>
              <h3 className='text-2xl font-normal pt-5 text-gray-500'>
                Welcome Back
              </h3>
            </div>
            <form
              className=' mx-auto flex flex-col gap-6 lg:gap-8'
              onSubmit={handleSubmit}
            >
              <div className='w-[90%] mx-auto flex flex-col gap-3 lg:gap-5'>
                <label className='text-xl text-slate-700'>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                  className='border-2 border-light-grey-500 p-5 rounded-lg placeholder:text-lg
        focus:placeholder:text-sm focus:ring-blue-300 focus:border-blue-400 custom-placeholder'
                />
              </div>
              <div className='w-[90%] mx-auto flex flex-col gap-3 lg:gap-5'>
                <label className='text-xl text-slate-700'>Password</label>
                <CustomPassword />
              </div>
              <div className=''>
                <button className='p-5 flex justify-center items-center w-[90%] mx-auto flex-col gap-3 lg:gap-5 rounded-lg cursor-pointer text-white text-lg font-medium bg-light-blue-500 hover:bg-light-blue hover:duration-700'>
                  Login
                </button>
              </div>
              <div className='w-[90%] mx-auto flex  lg:gap-5 justify-between items-center mb-5'>
                <p className='text-lg text-gray-500 font-light'>
                  Forgot Password?
                </p>
                <Link
                  to='/reset-password'
                  className='text-lg font-light text-gray-500'
                >
                  Click Here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
