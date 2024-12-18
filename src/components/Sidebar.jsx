import React, { useState } from "react";
import ImportImgs from "./ImportImgs";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const images = ImportImgs();
  const getImage = (isActive, activeImage, inactiveImage) =>
    isActive ? activeImage : inactiveImage;

  return (
    <section className="bg-[#fff] h-full w-[250px] lg:w-[320px] border-r">
      <div className="flex flex-col h-full max-md:items-stretch w-full ">
        <div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#3faae0] text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2 hover:text-white"
                : "text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to="dashboard"
          >
            {({ isActive }) => (
              <>
                <img
                  src={getImage(isActive, images.Home, images.HomeGray)} // Get image source based on isActive
                  alt="Home Icon"
                  className="h-5 w-5"
                />
                Dashboard
              </>
            )}
          </NavLink>
        </div>
        <div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive || window.location.pathname.startsWith("/admin/User")
                ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
                : "text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to="/admin/user"
          >
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ||
                    window.location.pathname.startsWith("/admin/User")
                      ? images.UserWhite
                      : images.User
                  } // Switch image based on active state
                  alt="User Icon"
                  className="h-5 w-5"
                />
                Users
              </>
            )}
          </NavLink>
        </div>

        <div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive || window.location.pathname.startsWith("/admin/event")
                ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
                : "text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to="/admin/event"
          >
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ||
                    window.location.pathname.startsWith("/admin/event")
                      ? images.EventWhite
                      : images.Event
                  } // Ensure EventWhite is used for all event pages
                  alt="Event Icon"
                  className="h-5 w-5"
                />
                Events
              </>
            )}
          </NavLink>
        </div>

        <div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive || window.location.pathname.startsWith("/admin/escrow")
                ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
                : "text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to={"/admin/escrow"}
          >
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ||
                    window.location.pathname.startsWith("/admin/escrow")
                      ? images.EscrowWhite
                      : images.Escrow
                  } // Ensure EventWhite is used for all event pages
                  alt="Event Icon"
                  className="h-5 w-5"
                />
                Escrow Bets
              </>
            )}
          </NavLink>
        </div>
        <div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2 "
                : " text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to={"/admin/wallet"}
          >
            {({ isActive }) => (
              <>
                <img
                  src={getImage(isActive, images.WalletWhite, images.Wallet)} // Get image source based on isActive
                  alt="Home Icon"
                  className="h-5 w-5"
                />
                Wallets
              </>
            )}
          </NavLink>
        </div>
        <div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2 "
                : " text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to={"/admin/transaction"}
          >
            {({ isActive }) => (
              <>
                <img
                  src={getImage(
                    isActive,
                    images.TransactionWhite,
                    images.Transaction
                  )} // Get image source based on isActive
                  alt="Home Icon"
                  className="h-5 w-5"
                />
                Transactions
              </>
            )}
          </NavLink>
        </div>
        <div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2 "
                : " text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to={"/admin/withdrawal"}
          >
            {({ isActive }) => (
              <>
                <img
                  src={getImage(
                    isActive,
                    images.WithdrawWhite,
                    images.Withdraw
                  )} // Get image source based on isActive
                  alt="Home Icon"
                  className="h-5 w-5"
                />
                Withdrawals
              </>
            )}
          </NavLink>
        </div>

        <div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive || window.location.pathname.startsWith("/admin/revenue")
                ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
                : "text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to={"/admin/revenue"}
          >
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ||
                    window.location.pathname.startsWith("/admin/revenue")
                      ? images.RevenueWhite
                      : images.Revenue
                  } // Ensure EventWhite is used for all event pages
                  alt="Event Icon"
                  className="h-5 w-5"
                />
                Revenue
              </>
            )}
          </NavLink>
        </div>

        <div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive || window.location.pathname.startsWith("/admin/setting")
                ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2 "
                : " text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to={"/admin/setting"}
          >
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ||
                    window.location.pathname.startsWith("/admin/setting")
                      ? images.SettingsWhite
                      : images.Setting
                  }
                  alt="Home Icon"
                  className="h-5 w-5"
                />
                Settings
              </>
            )}
          </NavLink>
        </div>
        <div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2 "
                : " text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to={"/admin/notification"}
          >
            {({ isActive }) => (
              <>
                <img
                  src={getImage(
                    isActive,
                    images.Notification,
                    images.Notification
                  )} // Get image source based on isActive
                  alt="Home Icon"
                  className="h-5 w-5"
                />
                Notifications
              </>
            )}
          </NavLink>
        </div>
  
        <div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive || window.location.pathname.startsWith("/admin/Support")
                ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2 "
                : " text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to={"/admin/Support"}
          >
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ||
                    window.location.pathname.startsWith("/admin/Support")
                      ? images.SupportWhite
                      : images.Support
                  }
                  alt="Home Icon"
                  className="h-5 w-5"
                />
                Supports
              </>
            )}
          </NavLink>
        </div>
        {/* <div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2 "
                : " text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to={"/admin/administrator"}
          >
            {({ isActive }) => (
              <>
                <img
                  src={getImage(isActive, images.AdminWhite, images.Admin)} // Get image source based on isActive
                  alt="Home Icon"
                  className="h-5 w-5"
                />
                Administrators
              </>
            )}
          </NavLink>
        </div> */}

<div className="-mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive || window.location.pathname.startsWith("/admin/administrator")
                ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
                : "text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
            }
            to={"/admin/administrator"}
          >
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ||
                    window.location.pathname.startsWith("/admin/administrator")
                      ? images.AdminWhite
                      : images.Admin
                  } // Ensure EventWhite is used for all event pages
                  alt="Event Icon"
                  className="h-5 w-5"
                />
                Administrators
              </>
            )}
          </NavLink>
        </div>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#3faae0] text-white hover:text-white flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2 "
              : " text-slate-800 hover:text-slate-800 flex items-center rounded-md p-4 mx-4 mt-5 text-lg font-[400] gap-2"
          }
          to={"/admin/audit-trial"}
        >
          {({ isActive }) => (
            <>
              <img
                src={getImage(isActive, images.AuditWhite, images.Audit)} // Get image source based on isActive
                alt="Home Icon"
                className="h-5 w-5"
              />
              Audit Trial
            </>
          )}
        </NavLink>

        <div className="flex items-center text-black rounded-md p-4 mx-4 my-28">
          <img src={images.Logout} alt="#" className="h-5 w-5" />
          <NavLink className="ml-2 text-lg font-[400] text-slate-800">
            Logout
          </NavLink>
        </div>

        {/* <div>Dashboard</div>
        <div>Dashboard</div> */}
      </div>
    </section>
  );
};

export default Sidebar;
