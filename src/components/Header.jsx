import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import MessageIcon from "../assets/MessageIcon.jpg";
import Bell from "../assets/Bell.jpg";
import Settings from "../assets/Settings.svg";
import avatar from "../assets/avatar.svg";
import AvataImg from "../assets/AvataImg.svg";
import signout from "../assets/SignOut.svg";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import Notification from "../Modals/Notification";
import Messages from "../Modals/Messages";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [toggleNotification, setToggleNotification] = useState(false);
  const [isModalToggle, setIsModalToggle] = useState(false);
  const [isModalProfileView, setIsModalProfileView] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNotificationOpen = () => {
    setToggleNotification(!toggleNotification);
    setIsModalToggle(false);
  };
  const toggleMessages = () => {
    setIsModalToggle(!isModalToggle);
    setToggleNotification(false);
  };
  const toggleProfileDropdown = () => {
    setIsModalProfileView(!isModalProfileView);
  };

  return (
    <div className="z-0">
      {/* Header Section */}
      <div className="bg-white border-b-2 border-gray-200 w-full h-[10vh] flex justify-between items-center px-4 md:px-10  relative">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="xl:hidden text-2xl">
            <FiMenu className="border border-light-blue-500 w-7 h- rounded-sm text-[#000]" />
          </button>
          <img src={logo} alt="logo" className="w-24 md:w-36" />
        </div>

        <div className="hidden smd:flex xl:w-full max-w-xl items-center border border-gray-300 rounded-lg p-1 mx-4 lg:mx-10">
          <CiSearch className="ms-3 text-2xl text-[black]" />
          <input
            className="border-none focus:border-none focus:ring-0 outline-none w-full text-gray-700 placeholder-gray-500"
            type="text"
            placeholder="Search here..."
          />
        </div>

        <div className="flex items-center gap-2 md:gap-5">
          <button onClick={toggleMessages} className="cursor-pointer">
            <img
              src={MessageIcon}
              alt="Message"
              className="border p-2 bg-light-grey rounded-xl w-full h-full object-cover"
            />
          </button>
          <button onClick={toggleNotificationOpen} className="cursor-pointer">
            <img
              src={Bell}
              alt="Bell"
              className="border p-2 bg-light-grey rounded-xl w-full h-full object-cover"
            />
          </button>
          <NavLink to={"/admin/setting"} className="cursor-pointer">
            <img
              src={Settings}
              alt="Settings"
              className="border p-2 bg-light-grey rounded-xl w-full h-full object-cover"
            />
          </NavLink>
          <button onClick={toggleProfileDropdown} className="flex items-center">
            <img src={avatar} alt="Avatar" className="w-8 md:w-10" />
            <p className="hidden smd:block ml-2">Ajayi Joshua</p>
          </button>
        </div>
        {isModalProfileView && (
          <div className="bg-[#FAFAFA] border-4 border-[white] w-40 absolute top-[65px] right-5 smd:top-[90px] lg:top-[95px] xl:right-10 xl:top-[54px]">
            <div className="flex gap-3 items-center px-2 py-2 hover:bg-[#aea0b9] hover:py-2 hover:px-2 hover:rounded-md">
              <img src={AvataImg} alt="#" className="object-cover" />
              <button className="text-slate-900">View Profile</button>
            </div>
            <div className="flex gap-3 items-center px-2 py-2 hover:bg-[#aea0b9] hover:py-2 hover:px-2 hover:rounded-md">
              <img
                src={signout}
                alt="#"
                className="text-slate-900 object-cover"
              />
              <button onClick={() => navigate("/")} className="text-slate-900">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar Section */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-red-500 transform z-20 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <Sidebar className="block xl:hidden" />
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      <div className="flex justify-end">
        <div
          className={`notification-panel fixed xl:top-[70px] right-0 transition-transform duration-300 ${
            toggleNotification ? "translate-x-0" : "translate-x-full"
          } w-[90%] h-[calc(100vh-70px)] smd:h-[71%] smd:w-[50%] xl:w-[37%] xl:h-[calc(100vh-70px)] bg-white shadow-lg overflow-y-auto`}
        >
          <Notification />
        </div>
      </div>

      <div className="flex justify-end">
        <div
          className={`fixed xl:top-[70px] right-0 transition-transform duration-300 border-l-2 border-b-2 border-[#E4E7EC] ${
            isModalToggle ? "translate-x-0" : "translate-x-full"
          } w-[90%] h-[calc(100vh-70px)] smd:h-[59%] smd:w-[50%] xl:w-[37%] bg-white z-5`}
        >
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default Header;
