import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const permissionsList = [
  "Can manage bets",
  "Can view user wallets",
  "Can approve transactions",
  "Can manage withdrawals",
  "Can view and edit revenue",
  "Can suspend users",
  "Can manage roles",
  "Can access audit logs",
  "Can issue refunds",
  "Can manage content",
];

const CreateNewRole = () => {
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState(
    permissionsList.reduce((acc, permission) => {
      acc[permission] = true; // default ON
      return acc;
    }, {})
  );

  const togglePermission = (permission) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: !prev[permission],
    }));
  };

  return (
    <section className="w-full">
      <button
        onClick={() => navigate("/admin/administrator")}
        className="flex items-center p-10"
      >
        <FaArrowLeft className="text-2xl text-black hover:text-black" />
        <h2 className="text-3xl py-5 lg:py-0 font-semibold tracking-wide text-gray-900">
          Create New Role
        </h2>
      </button>
      {/* Header Section */}
      <div className="grid grid-cols-2 gap-4 mb-6 w-[70%] ml-10">
        <div>
          <label className="block text-gray-700 mb-2">Role Name</label>
          <select
            className="w-full text-sm text-gray-500 px-4 py-2 border-2 border-gray-200 rounded  focus:ring-[#3faae0]"
            defaultValue=""
          >
            <option value="" disabled>
              Role Name
            </option>
            <option>Super Admin</option>
            <option>Admin</option>
            <option>Customer Service</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2 ">Access Type</label>
          <input
            type="text"
            placeholder="Access Type"
            className="w-full px-4 py-2 border-2 border-gray-200 rounded placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#3faae0]"
          />
        </div>
      </div>

      <div className="w-[70%] bg-white border-2 border-gray-200 shadow-md mx-10 p-5">
        {/* Permissions List */}
        <div className="pt-4">
          <div className=" border-b-2 pb-2">
            <h3 className="text-lg font-semibold text-gray-800 ">
              Permissions
            </h3>
            <p className="text-sm text-gray-500">
              See the list of permissions for this role
            </p>
          </div>
          <ul className="space-y-4 pt-4">
            {permissionsList.map((permission) => (
              <li
                key={permission}
                className="flex items-center justify-between text-gray-700"
              >
                <span>{permission}</span>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={permissions[permission]}
                    onChange={() => togglePermission(permission)}
                    className="hidden"
                  />
                  <div
                    className={`w-11 h-6 rounded-full transition duration-300 ${
                      permissions[permission] ? "bg-[#3faae0]" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                        permissions[permission]
                          ? "translate-x-5"
                          : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[70%] ml-10 flex justify-end items-center my-10">
        <button className="text-white bg-[#3faae0] py-3 px-5 rounded-md hover:bg-[#318ebc] transition">
          Save Details
        </button>
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </section>
  );
};

export default CreateNewRole;
