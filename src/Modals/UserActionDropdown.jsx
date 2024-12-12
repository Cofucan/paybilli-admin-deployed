import React, { useState } from "react";
import Eye from "../assets/Eye.svg";
import editicon from "../assets/editicon.svg";
import verifyCheck from "../assets/Verified.svg";
import like from "../assets/Like.svg";
import erase from "../assets/icon.svg";
import { NavLink, useNavigate } from "react-router-dom";

const UserActionDropdown = () => {
  
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 border bg-white border-gray-300 rounded-md w-[10vw] h-full px-3 py-2 shadow-md">
      <div className="flex items-center gap-2">
        <img src={Eye} alt="eyes" />
        <NavLink
          to={"/admin/UserProfile"}
          className="text-gray-600 text-sm font-medium hover:text-gray-600"
        >
          View User
        </NavLink>
      </div>
      <div className="flex items-center gap-2">
        <img src={editicon} alt="eyes" />
        <button onClick={() => navigate("/admin/UserEdit")} className="text-gray-600 text-sm font-medium ">
          Edit User
        </button>
      </div>
      <div  className="flex items-center gap-2">
        <img src={verifyCheck} alt="eyes" />
        <button className="text-gray-600 text-sm font-medium ">Verify User</button>
      </div>
      <div className="flex items-center gap-2">
        <img src={like} alt="eyes" />
        <p className="text-gray-600 text-sm font-medium ">Reactivate User</p>
      </div>
      <div className="flex items-center gap-2">
        <img src={erase} alt="eyes" />
        <p className="text-red-600 text-sm font-medium ">Suspend User</p>
      </div>
    </div>
  );
};

export default UserActionDropdown;
