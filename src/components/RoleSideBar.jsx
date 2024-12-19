import React from "react";

const RoleSidebar = () => {
  return (
    <div className="w-[35%] h-full bg-white p-4 border-2  border-gray-200">
      <div className="bg-[#3faae0] text-white px-3 py-1 rounded-md mb-4">
        <h3 className="text-lg font-semibold">Super Admin</h3>
        <p className="text-sm">Full access, control</p>
      </div>
      <div className="mb-4 border-b-2 pb-2">
        <h4 className="text-md font-semibold">Admins</h4>
        <p className="text-sm text-gray-500">Moderate access control</p>
      </div>
      <div>
        <h4 className="text-md font-semibold">Customer Service</h4>
        <p className="text-sm text-gray-500">Support-focused access</p>
      </div>
    </div>
  );
};

export default RoleSidebar;
