import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ProfileImage from "../../routeHelper/Settings/assets/userImg.svg";
import EditPen from "../../routeHelper/Settings/assets/editPen.svg";
import PasswordModal from "../../components/modal/PasswordModal";
import ProfileSection from "../../routeHelper/Settings/ProfileSection";
import Modal from "../../components/modal/modal";

export const Route = createFileRoute("/_auth/setting")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isModalPassword, setIsModalPassword] = useState<boolean>(false);

  const toggleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleModalPassword = () => {
    setIsModalPassword(!isModalPassword);
  };

  return (
    <div className="relative w-full">
      <div className="lg:w-full">
        <div className="mx-auto mt-14 w-[85%] smd:mt-14 lg:mt-12 xl:mt-3">
          <h1 className="py-10 text-[34px] font-semibold leading-[28px] text-[#1D1D1D] xl:py-5">
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

        <PasswordModal
          isVisible={isModalPassword}
          toggleVisibility={toggleModalPassword}
        />

        <Modal
          isVisible={isModalVisible}
          toggleVisibility={toggleModalVisible}
          title="Edit Profile"
          children="children"
        >
          {/* Add the form content for editing profile */}
        </Modal>
      </div>
    </div>
  );
}
