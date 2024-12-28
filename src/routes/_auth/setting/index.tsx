import { createFileRoute, Navigate } from "@tanstack/react-router";
import { ChangeEvent, useState } from "react";
import { useAuth } from "../../../context/AuthContext.tsx";
import useCustomForm from "../../../components/form/useCustomForm.ts";
import { User } from "../../../utils/types.ts";
import {
  AccountChangePasswordRequest,
  useAccountChangePassword,
  useAccountChangePicture,
  useAccountEditUser,
} from "../../../hooks/useAccount.ts";
import ProfileSection from "../../../routeHelper/Settings/ProfileSection.tsx";
import SettingChangePasswordFormModal from "../../../routeHelper/Settings/SettingChangePasswordFormModal.tsx";
import SettingEditProfileFormModal from "../../../routeHelper/Settings/SettingEditProfileFormModal.tsx";

export const Route = createFileRoute("/_auth/setting/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isModalPassword, setIsModalPassword] = useState<boolean>(false);
  const { user } = useAuth();

  const editProfileForm = useCustomForm<User>({ defaultValues: user.data });
  const editProfileMutation = useAccountEditUser();

  const resetPasswordForm = useCustomForm<AccountChangePasswordRequest>();
  const resetPasswordMutation = useAccountChangePassword();

  const changePictureMutation = useAccountChangePicture();

  if (!user.data) return <Navigate to='/account/login' />;

  const toggleModalPassword = () => {
    setIsModalPassword(!isModalPassword);
  };
  const toggleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  function handleEditProfile(data: User): void | Promise<void> {
    editProfileMutation.mutate(data);
  }

  function handleResetPassword(data: AccountChangePasswordRequest): void | Promise<void> {
    resetPasswordMutation.mutate(data);
  }

  async function handleEditImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    await changePictureMutation.mutateAsync(file);
  }

  return (
    <div className='ml-14 mr-20'>
      <h1 className='py-10 text-[34px] font-semibold leading-[28px] text-[#1D1D1D] xl:py-5'>
        Settings
      </h1>
      <ProfileSection
        user={user.data}
        onEditImage={handleEditImage}
        onEditPassword={toggleModalPassword}
        onEditProfile={toggleModalVisible}
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
  );
}
