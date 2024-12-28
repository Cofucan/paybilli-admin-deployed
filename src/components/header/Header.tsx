import { useState } from "react";
import logo from "../../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import MessageIcon from "./assets/MessageIcon.jpg";
import Bell from "./assets/Bell.jpg";
import Settings from "./assets/Settings.svg";
import avatar from "./assets/avatar.svg";
import AvatarImg from "./assets/AvataImg.svg";
import SignoutIcon from "./assets/SignOut.svg";
import { useAuth } from "../../context/AuthContext.tsx";
import { Link, useNavigate } from "@tanstack/react-router";
import Sidebar from "../sidebar/Sidebar.tsx";
import { BASE_URL } from "../../utils/constants.ts";
// import Sidebar from './Sidebar'
// import { NavLink } from 'react-router-dom'
// import Notification from '../Modals/Notification'
// import Messages from '../Modals/Messages'
// import { useAuth } from '../context/AuthContext.jsx'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [toggleNotification, setToggleNotification] = useState(false);
  const [isModalToggle, setIsModalToggle] = useState(false);
  const [isModalProfileView, setIsModalProfileView] = useState(false);
  const { logout, user } = useAuth();
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

  async function handleLogout() {
    await logout();
    await navigate({ to: "/account/login" });
  }

  return (
    <div className='z-0'>
      {/* Header Section */}
      <div className='relative flex h-20 w-full items-center justify-between border-b-2 border-gray-200 bg-white px-4 md:px-10'>
        <div className='flex items-center gap-4'>
          <button onClick={toggleSidebar} className='text-2xl xl:hidden'>
            <FiMenu className='h- w-7 rounded-sm border border-light-blue-500 text-[#000]' />
          </button>
          <img src={logo} alt='logo' className='w-24 md:w-36' />
        </div>

        <div className='mx-4 hidden max-w-xl items-center rounded-lg border border-gray-300 p-1 smd:flex lg:mx-10 xl:w-full'>
          <CiSearch className='ms-3 text-2xl text-[black]' />
          <input
            className='w-full border-none text-gray-700 placeholder-gray-500 outline-none focus:border-none focus:ring-0'
            type='text'
            placeholder='Search here...'
          />
        </div>

        <div className='flex items-center gap-2 md:gap-5'>
          <button onClick={toggleMessages} className='cursor-pointer'>
            <img
              src={MessageIcon}
              alt='Message'
              className='h-full w-full rounded-xl border bg-light-grey object-cover p-2'
            />
          </button>
          <button onClick={toggleNotificationOpen} className='cursor-pointer'>
            <img
              src={Bell}
              alt='Bell'
              className='h-full w-full rounded-xl border bg-light-grey object-cover p-2'
            />
          </button>
          <Link to={"/setting"} className='cursor-pointer'>
            <img
              src={Settings}
              alt='Settings'
              className='h-full w-full rounded-xl border bg-light-grey object-cover p-2'
            />
          </Link>
          <button onClick={toggleProfileDropdown} className='flex items-center'>
            {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
            <img
              src={BASE_URL + user.data!.profile_image_url}
              alt='Avatar'
              className='w-8 rounded-full md:w-10'
            />
            <p className='ml-2 hidden smd:block'>
              {user.data?.first_name} {user.data?.last_name}
            </p>
          </button>
        </div>
        {isModalProfileView && (
          <div className='absolute right-5 top-[65px] z-20 w-40 border-4 border-[white] bg-[#FAFAFA] smd:top-[90px] lg:top-[95px] xl:right-10 xl:top-[54px]'>
            <div className='flex items-center gap-3 px-2 py-2 hover:rounded-md hover:bg-[#aea0b9] hover:px-2 hover:py-2'>
              <img src={AvatarImg} alt='#' className='object-cover' />
              <button className='text-slate-900'>View Profile</button>
            </div>
            <div className='flex items-center gap-3 px-2 py-2 hover:rounded-md hover:bg-[#aea0b9] hover:px-2 hover:py-2'>
              <img src={SignoutIcon} alt='#' className='object-cover text-slate-900' />
              <button onClick={handleLogout} className='text-slate-900'>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

      {/*Sidebar Section */}
      {/*TODO: Remove this code*/}
      <div
        className={`fixed left-0 top-0 z-20 h-full w-64 transform overflow-y-auto bg-white text-red-500 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <Sidebar />
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 z-10 bg-black opacity-50 md:hidden'
          onClick={toggleSidebar}
        ></div>
      )}

      {/*<div className="flex justify-end">*/}
      {/*  <div*/}
      {/*    className={`notification-panel fixed right-0 transition-transform duration-300 xl:top-[70px] ${*/}
      {/*      toggleNotification ? "translate-x-0" : "translate-x-full"*/}
      {/*    } h-[calc(100vh-70px)] w-[90%] overflow-y-auto bg-white shadow-lg smd:h-[71%] smd:w-[50%] xl:h-[calc(100vh-70px)] xl:w-[37%]`}*/}
      {/*  >*/}
      {/*    <Notification />*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="flex justify-end">*/}
      {/*  <div*/}
      {/*    className={`fixed right-0 border-b-2 border-l-2 border-[#E4E7EC] transition-transform duration-300 xl:top-[70px] ${*/}
      {/*      isModalToggle ? "translate-x-0" : "translate-x-full"*/}
      {/*    } z-5 h-[calc(100vh-70px)] w-[90%] bg-white smd:h-[59%] smd:w-[50%] xl:w-[37%]`}*/}
      {/*  >*/}
      {/*    <Messages />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Header;
