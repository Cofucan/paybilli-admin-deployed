import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SubInviteAdminmModal from "./SubInviteAdminModal";

const InviteAdminModal = ({ toggleInviteModal }) => {
  const [isSubModalVisible, setIsModalVisible] = useState(false);
  const toggleSubModal = () => {
    setIsModalVisible(!isSubModalVisible);
  };
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-20 z-20"></div>

      {/* Modal Content */}
      <div className="grid place-items-center fixed inset-0 z-50">
        <div className="bg-white w-[80%] xl:w-[45%] mt-14 sm:mt-24 xl:mt-0 rounded-3xl p-6 relative">
          <h1 className="font-medium text-2xl pb-4 text-center relative">
            Invite new user to this platform{" "}
            <span
              className="absolute right-0 top-2 hover:cursor-pointer"
              onClick={toggleInviteModal}
            >
              {" "}
              <LiaTimesSolid />
            </span>
          </h1>

          <form className="w-[90%] mx-auto">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-sm">Enter Email</label>
                <input
                  type="email"
                  autoComplete="off"
                  placeholder="e.g ezey@gmail.com"
                  className="border-2 rounded-lg border-gray-200 pb-20 placeholder:text-sm placeholder-gray-400"
                />

                <div className="flex justify-between items-center pt-3">
                  <label className="font-medium text-sm">Invite as</label>
                  <button className="font-medium text-xs text-[#4cb8ed]">
                    Set multiple role
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Admin"
                    className="border-2 rounded-lg border-gray-200 placeholder:text-sm placeholder-gray-400 pr-10 w-full"
                  />
                  <MdOutlineKeyboardArrowDown
                    onClick={toggleSubModal}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {/* <img src={outline} alt="outline-copyLink" /> */}
                  <p className="text-[#4cb8ed] text-xs">Copy invite link</p>
                </div>
                <button className="flex items-center gap-1 bg-[#3faae0] px-4 py-2 text-white rounded-lg">
                  Send
                  {/* <img src={SendOutline} alt="SendOutline" /> */}
                </button>
              </div>
            </div>
          </form>
        </div>
        {isSubModalVisible && (
          <SubInviteAdminmModal toggleSubModal={toggleSubModal} />
        )}
      </div>
    </>
  );
};

export default InviteAdminModal;