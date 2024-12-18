import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const LoggedInAuthenticator = () => {
  const { authData } = useAuth()
  const location = useLocation()

  if (!authData)
    return <Navigate to={'/login'} replace state={{ from: location }} />

  return (
    <div className='bg-light-grey w-full h-full'>
      <div className='flex flex-col w-full'>
        <div className='sticky top-0 w-full z-10'>
          <Header />
        </div>
        <div className='flex max-md:flex-col relative'>
          <div className='hidden xl:block z-0'>
            <Sidebar />
          </div>
          <Outlet />
          {/* This will render the nested routes, like Dashboard */}
        </div>
      </div>
    </div>
  )
}

export default LoggedInAuthenticator
