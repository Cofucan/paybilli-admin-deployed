import { FC, useState } from "react";
import { User } from "../../utils/types.ts";
import Eye from "../userId/assets/Eye.svg";
import EditPen from "../userId/assets/editPen.svg";
import { BASE_URL, capitalizeFirstLetter } from "../../utils/constants.ts";
import { formatDate } from "../../utils/DateFormatter.ts";
import { userStatusClasses } from "../users/usersData.tsx";
import { Link } from "@tanstack/react-router";
import UserProfileLoading from "./UserProfileLoading.tsx";
import SubPageHeader from "../../components/custom-buttons/SubPageHeader.tsx";
import { useWalletGetByName } from "../../hooks/useWalletQuery.ts";
import Modal from "../../components/modal/Modal.tsx";

const walletStatus = {
  ngn: "Naira",
  usd: "Dollar",
};
const UserProfile: FC<{ user: User | undefined }> = ({ user }) => {
  const userWalletQuery = useWalletGetByName(user?.username ?? "", !!user);
  const [isModalVisible, setIsModalVisible] = useState(false);
  if (!user) return <UserProfileLoading />;

  function toggleModalVisibility() {
    console.log(isModalVisible);
    setIsModalVisible((prev) => !prev);
  }

  return (
    <div className='mx-10 my-10'>
      <SubPageHeader title={"User Profile"} to={"/users"} />
      <div className='relative my-10 w-[95%] rounded-md bg-white shadow-sm shadow-[#c8edff]'>
        <div className='flex gap-4 px-10 py-8'>
          <div className='w-[30%]'>
            <img
              src={BASE_URL + user.profile_image_url}
              alt='profile'
              className='h-40 w-40 rounded-full object-cover'
            />
            <div className='pt-10'>
              <h3 className='font-medium'>
                {user.first_name} {user.last_name}
              </h3>
              <p className='text-gray-500'>{user.email}</p>
            </div>
          </div>
          <div className='w-[70%]'>
            {/* User Details */}
            <div className='mt-6 grid grid-cols-1 gap-10 md:grid-cols-4'>
              <div>
                <p className='text-lg font-medium'>{user.username}</p>
                <h4 className='text-gray-500'>Username</h4>
              </div>
              <div>
                <p className='text-lg font-medium'>{user.country}</p>
                <h4 className='text-gray-500'>Country</h4>
              </div>
              <div>
                <p className='text-lg font-medium'>{formatDate(user.date_joined, {})}</p>
                <h4 className='text-gray-500'>Account Created</h4>
              </div>
              <div>
                {/* TODO: Change this */}
                <p className='text-lg font-medium'>{`${user.date_of_birth} ${user.month_of_birth}`}</p>
                <h4 className='text-gray-500'>Date of Birth</h4>
              </div>
              <div>
                <h4 className='pb-1 text-lg font-medium'>Status</h4>
                <span
                  className={`rounded-md px-2 py-1 ${userStatusClasses[user.account_status].label}`}
                >
                  {capitalizeFirstLetter(user.account_status)}
                </span>
              </div>
              <div>
                <p className='text-lg font-medium'>{user.bvn}</p>
                <h4 className='text-gray-500'>BVN</h4>
              </div>
              <div>
                <p className='text-lg font-medium'>{user.nin}</p>
                <h4 className='text-gray-500'>NIN</h4>
              </div>
              <div>
                <p className='text-lg font-medium'>{user.phone_number}</p>
                <h4 className='text-gray-500'>Phone Number</h4>
              </div>
            </div>
            <div className='flex w-[95%] items-center justify-between pt-8'>
              {/* TODO: Work Here */}
              <button
                className='flex items-center gap-2 rounded-md border-2 border-light-blue-500 bg-white px-3 py-2 font-medium text-light-blue-500'
                disabled={userWalletQuery.isLoading}
                onClick={toggleModalVisibility}
              >
                <img src={Eye} alt='Eye' />
                View Wallet
              </button>
              <Link
                className='flex items-center rounded-md border-2 border-light-blue-500 bg-light-blue-500 px-3 font-medium text-white hover:text-white'
                to='/users/$userId/edit'
                params={{ userId: user.id }}
              >
                <img src={EditPen} alt='Pen' />
                Edit User
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        toggleVisibility={toggleModalVisibility}
        title={<h2 className={"mr-auto text-2xl font-semibold"}>Wallet Balance</h2>}
      >
        <div className={"mt-6 w-96 space-y-4"}>
          {(userWalletQuery.data?.results ?? []).map((x) => (
            <div
              key={x.id}
              className='relative flex items-center justify-between rounded-xl bg-black px-10 py-7 text-white'
            >
              <div>
                <p className='text-sm'>
                  {walletStatus[x.currency] ?? x.currency.toUpperCase()} Balance
                </p>
                <h3 className='text-2xl font-bold'>
                  {x.currency.toUpperCase()} {x.balance}
                </h3>
              </div>
              <div className='absolute right-0 top-0 h-10 w-10 rounded-bl-full bg-light-blue-500'></div>
              <div className='absolute bottom-0 left-0 h-10 w-10 rounded-tr-full bg-light-blue-500'></div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default UserProfile;
