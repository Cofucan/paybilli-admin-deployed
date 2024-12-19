import React, { useState } from "react";
import RoleSidebar from "../../components/RoleSideBar";
import PermissionsList from "../../components/PermissionsList";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const ManageRole = () => {
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState({
    manageBets: true,
    viewWallets: true,
    approveTransactions: true,
    manageWithdrawals: false,
    viewRevenue: true,
    suspendUsers: true,
    manageRoles: true,
    accessAuditLogs: true,
    issueRefunds: true,
    manageContent: true,
  });

  const handleToggle = (key) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="w-full">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:flex items-center justify-between space-x-4 mb-10 lg:mb-20 mt-5">
          {/* Title */}
          <button
            onClick={() => navigate("/admin/administrator")}
            className="flex items-center gap-2"
          >
            <FaArrowLeft className="text-xl" />
            <h2 className="text-3xl py-5 lg:py-0 font-semibold tracking-wide text-gray-900">
              Manage Role
            </h2>
          </button>

          <div className="flex flex-col gap-5 smd:flex-row items-center space-x-4 ">
            <div className="">
              {/* Create New Role */}
              <button
                onClick={() => navigate("/admin/administrator-role")}
                className="flex px-6 py-3 font-medium border border-gray-100 text-white bg-[#3faae0] hover:shadow-md hover:transition rounded"
              >
                <span className="mr-1 font-bold">+</span>
                Create New Role
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-10 bg-gray-100">
          {/* Sidebar */}
          <RoleSidebar />

          {/* Permissions Section */}
          <div className="w-full p-6 bg-white border-2  border-gray-200">
            <div className="border-b">
              <h2 className="text-lg font-semibold">Permissions</h2>
              <p className="text-sm text-gray-500 mb-4">
                See the list of permissions for this role
              </p>
            </div>

            <PermissionsList
              permissions={permissions}
              onToggle={handleToggle}
            />

            <div className="mt-4">{/* <SaveButton /> */}</div>
          </div>
        </div>
      </div>
      <div className="mt-60">
          <Footer />
        </div>
    </section>
  );
};

export default ManageRole;
