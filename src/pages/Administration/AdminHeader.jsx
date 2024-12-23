import React, { useState } from "react";
import ImportImgs from "../../components/ImportImgs";
import ArrowDown from "../../assets/ArrowDown.svg";
import UsersBlack from "../../assets/UsersBlack.svg";
import UsersGreen from "../../assets/UsersGreen.svg";
import UsersPurple from "../../assets/UsersBlack.svg";
import UsersGold from "../../assets/UsersGold.svg";
import { useNavigate } from "react-router-dom";
import InviteAdminModal from "../../Modals/AdminModals/InviteAdminModal";

const AdminHeader = () => {
  const images = ImportImgs();
  const navigate = useNavigate();
  const [inviteAdmin, setInviteAdmin] = useState(false);

  const toggleInviteModal = () => {
    setInviteAdmin(!inviteAdmin);
  };
  return (
    <section className="">
      <div className="grid grid-cols-1 md:flex items-center justify-between space-x-4 mb-10 lg:mb-20">
        {/* Title */}
        <h2 className="text-3xl py-5 lg:py-0 font-semibold tracking-wide text-gray-900">
          Administrators
        </h2>

        <div className="flex flex-col gap-5 smd:flex-row items-center space-x-4">
          <div className="">
            {/* Create New Role */}
            <button
              onClick={() => navigate("/admin/administrator-role")}
              className="flex  gap-2 px-6 py-3 font-medium border border-gray-100 text-[#3faae0] hover:shadow-md hover:transition rounded-xl"
            >
              <span className="mr-1 font-bold">+</span>
              Create New Role
            </button>
          </div>

          {/* Invite New Admin */}
          <button
            onClick={toggleInviteModal}
            className="flex items-center gap-2 border-2 border-[#3faae0] px-8 py-3 rounded-md text-[#3faae0]"
          >
            <img src={images.addGrey} alt="addGrey" />
            Invite New Admin
          </button>

          {/* Manage Roles */}
          <button
            onClick={() => navigate("/admin/administrator-ManageRole")}
            className="flex gap-2 items-center bg-[#3faae0] px-10 py-4 rounded-md text-white"
          >
            <img src={images.WhitePen} alt="pen" />
            Manage Roles
          </button>
        </div>
      </div>
      {/*SubHeader ...... */}
      <div className="grid smd:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
          <img
            src={UsersBlack}
            alt="#"
            className="ms-5 w-16 h-16 object-cover"
          />
          <div className="flex flex-col gap-2">
            <p className="text-[26px] smd:text-[18px] lg:text-[20px]">7</p>
            <p className="text-gray-500 text-sm">Administrators</p>
          </div>
        </div>
        <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
          <img
            src={UsersGreen}
            alt="#"
            className="ms-5 w-16 h-16 object-cover"
          />
          <div className="flex flex-col gap-2">
            <p className="text-[26px] smd:text-[18px] lg:text-[20px]">1</p>
            <p className="text-gray-500 text-sm">Super Admin</p>
          </div>
        </div>
        <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
          <img
            src={images.adminPurple}
            alt="#"
            className="ms-5 w-16 h-16 object-cover"
          />
          <div className="flex flex-col ">
            <p className="text-[26px] smd:text-[18px] lg:text-[20px]">3</p>
            <p className="text-gray-500 text-sm">Admins</p>
          </div>
        </div>
        <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
          <img
            src={UsersGold}
            alt="#"
            className="ms-5 w-16 h-16 object-cover"
          />
          <div className="flex flex-col ">
            <p className="text-[26px] smd:text-[18px] lg:text-[20px]">3</p>
            <p className="text-gray-500 text-sm">Customer Support</p>
          </div>
        </div>
      </div>
      <div className="flex  justify-end pt-12 my-8 ">
        <div className="flex gap-5 mx-2 lg:mx-0">
          <button className="flex gap-2 px-8 py-3 font-semibold hover:shadow-md bg-[#4cb8ed] border border-[#4cb8ed] text-white rounded-md">
            <img src={ArrowDown} alt="#" className="w-6 h-6 object-cover" />
            Export Data
          </button>
        </div>
      </div>

      {inviteAdmin && (
        <InviteAdminModal toggleInviteModal={toggleInviteModal} />
      )}
    </section>
  );
};

export default AdminHeader;
