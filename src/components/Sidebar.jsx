import { useAuth } from '../context/AuthContext'
import ImportImgs from './ImportImgs'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const images = ImportImgs() // Import images
  const location = useLocation()
  const navigate = useNavigate() // For redirection after logout
  const { logout } = useAuth() // Get the logout function from useAuth

  // Sidebar items
  const sidebarItems = [
    {
      label: 'Dashboard',
      to: 'dashboard',
      activeImage: images.Home,
      inactiveImage: images.HomeGray,
    },
    {
      label: 'Users',
      to: '/admin/user',
      activeImage: images.UserWhite,
      inactiveImage: images.User,
      startsWith: '/admin/user',
    },
    {
      label: 'Events',
      to: '/admin/event',
      activeImage: images.EventWhite,
      inactiveImage: images.Event,
      startsWith: '/admin/event',
    },
    {
      label: 'Escrow Bets',
      to: '/admin/escrow',
      activeImage: images.EscrowWhite,
      inactiveImage: images.Escrow,
      startsWith: '/admin/escrow',
    },
    {
      label: 'Wallets',
      to: '/admin/wallet',
      activeImage: images.WalletWhite,
      inactiveImage: images.Wallet,
    },
    {
      label: 'Transactions',
      to: '/admin/transaction',
      activeImage: images.TransactionWhite,
      inactiveImage: images.Transaction,
    },
    {
      label: 'Withdrawals',
      to: '/admin/withdrawal',
      activeImage: images.WithdrawWhite,
      inactiveImage: images.Withdraw,
    },
    {
      label: 'Revenue',
      to: '/admin/revenue',
      activeImage: images.RevenueWhite,
      inactiveImage: images.Revenue,
      startsWith: '/admin/revenue',
    },
    {
      label: 'Settings',
      to: '/admin/setting',
      activeImage: images.SettingsWhite,
      inactiveImage: images.Setting,
      startsWith: '/admin/setting',
    },
    {
      label: 'Notifications',
      to: '/admin/notification',
      activeImage: images.Notification,
      inactiveImage: images.Notification,
    },
    {
      label: 'Support',
      to: '/admin/support',
      activeImage: images.SupportWhite,
      inactiveImage: images.Support,
    },
    {
      label: 'Administrator',
      to: '/admin/administrator',
      activeImage: images.AdminWhite,
      inactiveImage: images.Admin,
    },
    {
      label: 'Audit Trail',
      to: '/admin/audit',
      activeImage: images.AuditWhite,
      inactiveImage: images.Audit,
    },
  ]

  // Function to determine active state and image
  const getImage = (isActive, activeImage, inactiveImage) =>
    isActive ? activeImage : inactiveImage

  // Handle the logout functionality
  const handleLogout = () => {
    logout() 
    navigate('/login') 
  }

  return (
    <section className='bg-[#fff] h-full w-[250px] lg:w-[320px] border-r'>
      <div className='flex flex-col h-full w-full'>
        {sidebarItems.map(
          ({ label, to, activeImage, inactiveImage, startsWith }, index) => {
            const isCurrentPage =
              location.pathname === to ||
              (startsWith && location.pathname.startsWith(startsWith))

            return (
              <div key={index} className='-mb-4'>
                <NavLink
                  className={({ isActive }) =>
                    isCurrentPage || isActive
                      ? 'bg-light-blue-500 text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2 hover:text-white'
                      : 'text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2'
                  }
                  to={to}
                >
                  <img
                    src={isCurrentPage ? activeImage : inactiveImage}
                    alt={`${label} Icon`}
                    className='h-5 w-5'
                  />
                  {label}
                </NavLink>
              </div>
            )
          },
        )}
      </div>
      <div
        className='flex items-center text-black rounded-md p-4 mx-4 cursor-pointer'
        onClick={handleLogout} 
      >
        <img src={images.Logout} alt='#' className='h-5 w-5' />
        <span className='ml-2 text-lg font-[400] text-slate-800'>
          Logout
        </span>
      </div>
    </section>
  )
}

export default Sidebar
