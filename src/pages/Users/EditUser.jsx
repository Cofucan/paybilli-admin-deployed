import { FaArrowLeftLong } from 'react-icons/fa6'
import { NavLink, useNavigate } from 'react-router-dom'
import ProfileForm from '../../components/ProfileForm'
import Footer from '../../components/Footer'

const EditUser = () => {
  const navigate = useNavigate()
  return (
    <section className='w-full h-full mt-16 smd:mt-20 lg:mt-10 xl:mt-0'>
      <div className='w-[90%] mx-auto'>
        <button
          onClick={() => navigate('/admin/UserProfile')}
          className='flex items-center gap-2 pt-10'
        >
          <FaArrowLeftLong className='text-2xl text-black hover:text-black' />
          <h1 className='text-xl smd:text-[34px] text-[#1D1D1D] leading-[28px] font-semibold'>
            Edit User
          </h1>
        </button>
      </div>
      <ProfileForm />
      <div className='mt-96'>
        <Footer />
      </div>
    </section>
  )
}

export default EditUser
