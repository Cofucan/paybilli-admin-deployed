import React from "react";

interface ProfileSectionProps {
  EditPen: string;
  profileImage: string;
  onEdit: () => void;
  onEditPassword: () => void;
  onViewLogs: () => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  profileImage,
  EditPen,
  onEdit,
  onEditPassword,
  onViewLogs,
}) => {
  return (
    <div className='mx-auto my-5 flex w-[85%] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center'>
      {/* Profile Image Section */}
      <div className='flex flex-col items-center'>
        <div className='relative w-52 rounded-lg border border-[#e5f4fc]'>
          <div className='UserImg'>
            <img
              src={profileImage}
              alt='User Profile'
              className='h-full w-full rounded-lg object-cover'
            />
          </div>
          <div className='EditUserPics absolute -right-5 bottom-20'>
            {" "}
            <img src={EditPen} alt='EditProfile' />
          </div>
          <div className='py-4 text-center'>
            <p className='text-gray-500'>Admin</p>
          </div>
        </div>

        {/* Action Buttons Below Image */}
        <div className='mt-6 flex flex-col gap-4'>
          <button
            onClick={onEditPassword}
            className='w-52 rounded-md px-6 py-3 text-lg text-gray-500'
          >
            Change Password
          </button>
          <button onClick={onViewLogs} className='w-52 rounded-md px-6 py-3 text-lg text-gray-500'>
            View Activity Logs
          </button>
        </div>
      </div>

      {/* Edit Profile Button on the Right */}
      <div className='hidden lg:-mt-[17rem] lg:block'>
        <button
          onClick={onEdit}
          className='rounded-md bg-light-blue-500 px-14 py-4 text-sm font-medium text-white'
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
