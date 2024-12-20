import UsersBlack from '../../assets/UsersBlack.svg'
import UsersPurple from '../../assets/UsersBlack.svg'
import UsersGreen from '../../assets/UsersGreen.svg'
import UsersGold from '../../assets/UsersGold.svg'
import UsersRed from '../../assets/UsersRed.svg'
import { customFetch } from '../../utils/constants.js'
import { useQuery } from '@tanstack/react-query'

async function fetchUserStatistic() {
  return await (await customFetch.get("app_admin/users/")).json()
}

const UserStatistic = () => {
  const { isLoading, data } = useQuery({queryFn: fetchUserStatistic, queryKey: ["user", "statistic"]})
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="lg:w-full">
      <div className="w-[95%] mx-auto mt-14 smd:mt-14 lg:mt-8 xl:mt-4">
        <h1 className="text-[34px] py-10 xl:py-5 text-[#1D1D1D] leading-[28px] font-semibold">
          Users Statistic
        </h1>
      </div>
      <div className="grid smd:grid-cols-3 lg:grid-cols-5 gap-2 mx-3 xl:ml-8 xl:mr-14">
        <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
          <img
            src={UsersBlack}
            alt="#"
            className="ms-5 w-16 h-16 object-cover"
          />
          <div className="flex flex-col gap-2">
            <p className="text-[26px] smd:text-[18px] lg:text-[20px]">{data.users}</p>
            <p className="text-gray-500 text-sm">Total Users</p>
          </div>
        </div>
        <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
          <img
            src={UsersGreen}
            alt="#"
            className="ms-5 w-16 h-16 object-cover"
          />
          <div className="flex flex-col gap-2">
            <p className="text-[26px] smd:text-[18px] lg:text-[20px]">{data.verified_users}</p>
            <p className="text-gray-500 text-sm">Verified Users</p>
          </div>
        </div>
        <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
          <img
            src={UsersPurple}
            alt="#"
            className="ms-5 w-16 h-16 object-cover"
          />
          <div className="flex flex-col ">
            <p className="text-[26px] smd:text-[18px] lg:text-[20px]">{data.unverified_users}</p>
            <p className="text-gray-500 text-sm">Unverified Users</p>
          </div>
        </div>
        <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
          <img
            src={UsersGold}
            alt="#"
            className="ms-5 w-16 h-16 object-cover"
          />
          <div className="flex flex-col ">
            <p className="text-[26px] smd:text-[18px] lg:text-[20px]">{data.deactivated_users}</p>
            <p className="text-gray-500 text-sm">Deactivated Accounts</p>
          </div>
        </div>
        <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
          <img
            src={UsersRed}
            alt="#"
            className="ms-5 w-16 h-16 object-cover"
          />
          <div className="flex flex-col ">
            <p className="text-[26px] smd:text-[18px] lg:text-[20px]">{data.suspended_users}</p>
            <p className="text-gray-500 text-sm">Suspended Accounts</p>
          </div>
        </div>
      </div>
    </div>)
}
export default UserStatistic
