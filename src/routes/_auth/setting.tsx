import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import EditPen from "../../routeHelper/Settings/assets/editPen.svg";
import ProfileImage from "../../routeHelper/Settings/assets/userImg.svg";
import ProfileSection from "../../routeHelper/Settings/ProfileSection";
import SettingChangePasswordFormModal, {
  SettingChangePasswordForm,
} from "../../routeHelper/Settings/SettingChangePasswordFormModal";
import SettingEditProfileFormModal, {
  SettingEditProfileForm,
} from "../../routeHelper/Settings/SettingEditProfileFormModal";
import useCustomForm from "../../components/form/useCustomForm";

export const Route = createFileRoute("/_auth/setting")({
export const Route = createFileRoute("/_auth/setting")({
  component: RouteComponent,
});
function RouteComponent() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isModalPassword, setIsModalPassword] = useState<boolean>(false);

  const editProfileForm = useCustomForm<SettingEditProfileForm>();
  const resetPasswordForm = useCustomForm<SettingChangePasswordForm>();

  const toggleModalPassword = () => {
    setIsModalPassword(!isModalPassword);
  };
  const toggleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  function handleEditProfile(data: SettingEditProfileForm): void | Promise<void> {
    console.log(data);
    throw new Error("Function not implemented.");
  }

  function handleResetPassword(data: SettingChangePasswordForm): void | Promise<void> {
    console.log(data);
    throw new Error("Function not implemented.");
  }

  return (
    <div className='relative w-full'>
      <div className='lg:w-full'>
        <div className='mx-auto mt-14 w-[85%] smd:mt-14 lg:mt-12 xl:mt-3'>
          <h1 className='py-10 text-[34px] font-semibold leading-[28px] text-[#1D1D1D] xl:py-5'>
            Settings
          </h1>
        </div>
        <ProfileSection
          profileImage={ProfileImage}
          onEdit={toggleModalVisible}
          onEditPassword={toggleModalPassword}
          onViewLogs={toggleModalVisible}
          EditPen={EditPen}
        />

        <SettingChangePasswordFormModal
          form={resetPasswordForm}
          isModalVisible={isModalPassword}
          setIsModalVisible={setIsModalPassword}
          onSubmit={handleResetPassword}
        />
        <SettingEditProfileFormModal
          form={editProfileForm}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          onSubmit={handleEditProfile}
        />
      </div>
    </div>
  );
}
