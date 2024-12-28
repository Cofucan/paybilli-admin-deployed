import { ChangeEvent, FC } from "react";
import { BASE_URL } from "../../utils/constants";
import { User } from "../../utils/types";
import EditPen from "./assets/editPen.svg";
import FormField from "../../components/form/FormField.tsx";
import { Link } from "@tanstack/react-router";

interface ProfileSectionProps {
  user: User;
  onEditImage: (event: ChangeEvent<HTMLInputElement>) => void;
  onEditPassword: () => void;
  onEditProfile: () => void;
}

const ProfileSection: FC<ProfileSectionProps> = (props) => {
  return (
    <div>
      <div className={"flex items-center justify-between"}>
        <div className='relative w-52'>
          <img
            src={BASE_URL + props.user.profile_image_url}
            alt={"Your Profile Picture"}
            className='h-full w-full rounded-lg object-cover'
          />
          {/* TODO: Might change to Input Form*/}
          <label className='absolute -right-1/12 bottom-1/4 cursor-pointer'>
            <input type='file' className='hidden' accept='image/*' onChange={props.onEditImage} />
            <img src={EditPen} alt='EditProfile' />
          </label>
          <p className='text-center text-gray-500'>Admin</p>
        </div>
        <FormField.Button
          intent={"admin"}
          themeColor={"full-blue"}
          themeSize={"36"}
          className={"h-full bg-light-blue-500 px-14"}
          onClick={props.onEditProfile}
        >
          Edit Profile
        </FormField.Button>
      </div>
      <div className={"mt-10 grid grid-cols-2 gap-5 gap-y-5 lg:w-[70%] xxl:w-[50%]"}>
        <div className=''>
          <h2 className='font-medium smd:text-2xl lg:text-lg'>
            {props.user.first_name} {props.user.last_name}
          </h2>
          <p className='text-gray-500 smd:text-lg lg:text-sm'>Full Name:</p>
        </div>
        <div className=''>
          <h2 className='font-medium smd:text-2xl lg:text-lg'>{props.user.username}</h2>
          <p className='text-gray-500 smd:text-lg lg:text-sm'>Username:</p>
        </div>
        <div className=''>
          <h2 className='font-medium smd:text-2xl lg:text-lg'>{props.user.email}</h2>
          <p className='text-gray-500 smd:text-lg lg:text-sm'>Email:</p>
        </div>
        <div className=''>
          <h2 className='font-medium smd:text-2xl lg:text-lg'>{props.user.phone_number}</h2>
          <p className='text-gray-500 smd:text-lg lg:text-sm'>Phone Number:</p>
        </div>
        <div>
          <FormField.Button
            onClick={props.onEditPassword}
            className='w-52 rounded-md px-6 py-3 text-lg text-gray-500 hover:bg-white'
          >
            Change Password
          </FormField.Button>
          <Link
            to={"/setting/activity-log"}
            className='inline-block w-52 rounded-md px-6 py-3 text-lg text-gray-500'
          >
            View Activity Logs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
