import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'
import AdminLogin from './pages/Login/AdminLogin'
// import Header from "./components/Header";
import Dashboard from './pages/Dashboard'
import Users from './pages/Users/Users'
import Settings from './pages/Settings/Settings'
import ActivityLogs from './pages/Settings/ActivityLogs'
import EscrowBets from './pages/EscrowBet/EscrowBets'
import Events from './pages/EventsPages/Events'
import Wallets from './pages/Wallets/Wallets'
import Transactions from './pages/Transactions'
import Withdrawals from './pages/Withdrawals/Withdrawals'
import Revenue from './pages/Revenue/Revenue'
import Notifications from './pages/Notifications'
import Supports from './pages/Support/Supports'
import Administrators from './pages/Administrations'

import NotificationSetting from './pages/NotificationSetting'
import UserProfile from './pages/Users/UserProfile'
import EditUser from './pages/Users/EditUser'
import CreateNewEvent from './pages/EventsPages/CreateNewEvent'
import BetDetails from './pages/EventsPages/BetDetails'
import EscrowBetDetails from './pages/EscrowBet/EscrowBetDetails'
import WithdrawalDetails from './pages/Withdrawals/WithdrawalDetails'
import EditRevenueForm from './pages/Revenue/EditRevenueForm'
import AuditTrail from './pages/AuditTrail/AuditTrail'
import TicketDetails from './pages/Support/TicketDetails'
import ResetPassword from './pages/ResetPassword/ResetPassword.jsx'
import LoggedOutAuthenticator from './layout/LoggedOutAuthenticator.jsx'
import LoggedInAuthenticator from './layout/LoggedInAuthenticator.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={'reset-password'} element={<ResetPassword />} />
      <Route path={'/'} element={<LoggedOutAuthenticator />}>
        <Route path={'login'} element={<AdminLogin />} />
      </Route>
      <Route index element={<Navigate to={'/admin/dashboard'} />} />
      <Route path='/admin' element={<LoggedInAuthenticator />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='user' element={<Users />} />
        <Route path='UserProfile' element={<UserProfile />} />
        <Route path='UserEdit' element={<EditUser />} />
        <Route path='event' element={<Events />} />
        <Route path='event-created' element={<CreateNewEvent />} />
        <Route path='event-betDetails' element={<BetDetails />} />
        <Route path='escrow' element={<EscrowBets />} />
        <Route path='escrow-betDetails' element={<EscrowBetDetails />} />
        <Route path='wallet' element={<Wallets />} />
        <Route path='transaction' element={<Transactions />} />
        <Route path='withdrawal' element={<Withdrawals />} />
        <Route path='withdrawal-details' element={<WithdrawalDetails />} />
        <Route path='revenue' element={<Revenue />} />
        <Route path='revenue-form' element={<EditRevenueForm />} />
        <Route path='setting' element={<Settings />} />
        <Route path='notification' element={<Notifications />} />
        <Route path='notificationSetting' element={<NotificationSetting />} />
        <Route path='Support' element={<Supports />} />
        <Route path='Support-ticketDetails' element={<TicketDetails />} />
        <Route path='administrator' element={<Administrators />} />
        <Route path='setting-activitylogs' element={<ActivityLogs />} />
        <Route path='audit-trial' element={<AuditTrail />} />
      </Route>
    </>,
  ),
)

const App = () => <RouterProvider router={router} />

export default App
