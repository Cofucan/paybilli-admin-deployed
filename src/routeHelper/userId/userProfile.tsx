// UserProfile.tsx
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Eye from "../userId/assets/Eye.svg";
import EditPen from "../userId/assets/editPen.svg";

interface UserProfileProps {
  profilePicture: string;
  fullName: string;
  email: string;
  username: string;
  country: string;
  accountCreated: string;
  dateOfBirth: string;
  status: string;
  bvn: string;
  phoneNumber: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  profilePicture,
  fullName,
  email,
  username,
  country,
  accountCreated,
  dateOfBirth,
  status,
  bvn,
  phoneNumber,
}) => {
  return (
    <div className="mx-10">
      <button className="flex items-center gap-2 pt-10">
        <FaArrowLeftLong className="text-2xl text-black hover:text-black" />
        <span className="text-xl font-semibold leading-[28px] text-[#1D1D1D] smd:text-[30px]">
          User Profile
        </span>
      </button>
      <div className="relative my-10 w-[95%] rounded-md bg-white shadow-sm shadow-[#c8edff]">
        <div className="flex px-10 py-8">
          <div className="w-[30%]">
            <img
              src={profilePicture}
              alt="profile"
              className="h-40 w-40 rounded-full object-cover"
            />
            <div className="px-5 pt-10">
              <h3 className="font-medium">{fullName}</h3>
              <p className="text-gray-500">{email}</p>
            </div>
          </div>

          <div className="w-[70%]">
            {/* User Details */}
            <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-4">
              <div>
                <p className="text-lg font-medium">{username}</p>
                <h4 className="text-gray-500">Username</h4>
              </div>
              <div>
                <p className="text-lg font-medium">{country}</p>
                <h4 className="text-gray-500">Country</h4>
              </div>
              <div>
                <p className="text-lg font-medium">{accountCreated}</p>
                <h4 className="text-gray-500">Account Created</h4>
              </div>
              <div>
                <p className="text-lg font-medium">{dateOfBirth}</p>
                <h4 className="text-gray-500">Date of Birth</h4>
              </div>
              <div>
                <h4 className="text-lg font-medium pb-1">Status</h4>
                <span
                  className={`rounded-md px-2 py-1 ${
                    status === "Active"
                      ? "bg-[#DFF6DD] text-[#2E7D32]"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {status}
                </span>
              </div>
              <div>
                <p className="text-lg font-medium">{bvn}</p>
                <h4 className="text-gray-500">BVN</h4>
              </div>
              <div>
                <p className="text-lg font-medium">{bvn}</p>
                <h4 className="text-gray-500">NIN</h4>
              </div>
              <div>
                <p className="text-lg font-medium">{phoneNumber}</p>
                <h4 className="text-gray-500">Phone Number</h4>
              </div>
            </div>
            <div className="flex w-[95%] items-center justify-between pt-8">
              <button className="flex items-center gap-2 rounded-md border-2 border-light-blue-500 bg-white px-3 py-2 font-medium text-light-blue-500">
                <img src={Eye} alt="Eye" />
                View Wallet
              </button>
              <button className="flex items-center rounded-md border-2 border-light-blue-500 bg-light-blue-500 px-3 font-medium text-white hover:text-white">
                <img src={EditPen} alt="Pen" />
                Edit User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
