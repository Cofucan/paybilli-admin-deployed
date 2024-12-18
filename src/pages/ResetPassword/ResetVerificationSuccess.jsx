import Logo from '../../assets/logo.svg'
import ValidImg from '../../assets/valid.svg'
import { Link } from 'react-router-dom'

const ResetVerificationSuccess = () => {
  return (
    <div className='bg-light-grey'>
      <div className='flex items-center gap-40 w-[95%] lg:w-[80%] mx-auto'>
        <div className='hidden lg:w-[40%] xl:block mt-[10rem]'>
          <img src={Logo} alt='logo' width={500} />
        </div>
        <div className='w-full smd:w-[90%] lg:w-[70%] mx-auto xl:w-[30vw]'>
          <div className='flex justify-center items-center my-10'>
            <img src={Logo} width={150} alt='logo' />
          </div>
          <div className='bg-white border-2 border-light-grey-500 mt-[5rem] lg:mt-[10rem]'>
            <div className='flex items-center justify-center my-10'>
              <img src={ValidImg} alt='valid' />
            </div>
            <div className='text-center font-medium'>
              <p className='text-lg flex flex-col'>
                Password Updated Successfully{' '}
                <span>You can continue to login</span>
              </p>
            </div>

            <div className='my-5'>
              <Link
                to='/login'
                className='py-3 flex justify-center w-[90%] md:w-[60%] lg:w-[90%] mx-auto gap-5 rounded-lg cursor-pointe text-white text-lg bg-light-blue-500 hover:bg-light-blue hover:duration-700'
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetVerificationSuccess
