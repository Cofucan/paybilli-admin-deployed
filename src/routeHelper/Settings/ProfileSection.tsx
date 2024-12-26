import  { FC } from "react";
import { BASE_URL } from "../../utils/constants";
import { User } from "../../utils/types";
import EditPen from "./assets/editPen.svg";
import FormField from "../../components/form/FormField.tsx";
import { Link } from "@tanstack/react-router";

interface ProfileSectionProps {
  user: User;
  onEditImage: () => void;
  onEditPassword: () => void;
  onEditProfile: () => void;
}

const ProfileSection: FC<ProfileSectionProps> = (props) => {
  return (
    <div>
      <div className={"flex justify-between items-center"}>
        <div className="relative w-52">
          <img src={BASE_URL + props.user.profile_image_url} alt={"Your Profile Picture"}
               className="h-full w-full rounded-lg object-cover" />
          {/* TODO: Might change to Input Form*/}
          <button className="absolute -right-1/12 bottom-1/4" onClick={props.onEditImage}>
            <img src={EditPen} alt="EditProfile" />
          </button>
          <p className="text-gray-500 text-center">Admin</p>
        </div>
        <FormField.Button intent={"admin"} themeColor={"full-blue"} themeSize={"36"}
                          className={"bg-light-blue-500 px-14 h-full"} onClick={props.onEditProfile}>Edit
          Profile</FormField.Button>
      </div>
      <div className={"gap-5 grid grid-cols-2 gap-y-5 lg:w-[70%] xxl:w-[50%] mt-10"}>
        <div className="">
          <h2 className="smd:text-2xl lg:text-lg font-medium">
            {props.user.first_name} {props.user.last_name}
          </h2>
          <p className="smd:text-lg lg:text-sm text-gray-500">
            Full Name:
          </p>
        </div>
        <div className="">
          <h2 className="smd:text-2xl lg:text-lg font-medium">
            {props.user.username}
          </h2>
          <p className="smd:text-lg lg:text-sm text-gray-500">
            Username:
          </p>
        </div>
        <div className="">
          <h2 className="smd:text-2xl lg:text-lg font-medium">
            {props.user.email}
          </h2>
          <p className="smd:text-lg lg:text-sm text-gray-500">
            Email:
          </p>
        </div>
        <div className="">
          <h2 className="smd:text-2xl lg:text-lg font-medium">
            {props.user.phone_number}
          </h2>
          <p className="smd:text-lg lg:text-sm text-gray-500">
            Phone Number:
          </p>
        </div>
        <div><FormField.Button
          onClick={props.onEditPassword}
          className="w-52 rounded-md px-6 py-3 text-lg text-gray-500 hover:bg-white"
        >
          Change Password
        </FormField.Button>
          <Link to={"/setting/activity-log"} className="w-52 rounded-md px-6 py-3 text-lg text-gray-500 inline-block">
            View Activity Logs
          </Link></div>
      </div>
    </div>
  );
};

export default ProfileSection;
