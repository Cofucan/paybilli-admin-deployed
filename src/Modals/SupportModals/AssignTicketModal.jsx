import React, { useState } from "react";
import ImportImgs from "../../components/ImportImgs";
import SuccessTicketAssign from "./SuccessTicketAssign";

const AssignTicketModal = () => {
  const images = ImportImgs();
  const [successTiketAssign, setSuccessTicketAssign] = useState(false);

  const toggleTicketSuccessModal = () => {
    setSuccessTicketAssign(!successTiketAssign);
  };

  const administrators = [
    {
      id: 1,
      name: "John Oke",
      role: "Super Admin",
      username: "@John",
      image: images.imgUser,
    },
    {
      id: 2,
      name: "Sarah Adekunle",
      role: "Admin",
      username: "@Sarah",
      image: images.imgUser,
    },
    {
      id: 3,
      name: "Faith Chukwu",
      role: "Admin",
      username: "@Faith",
      image: images.imgUser,
    },
    {
      id: 4,
      name: "Donatus Agukwe",
      role: "Support",
      username: "@Donatus",
      image: images.imgUser,
    },
    {
      id: 5,
      name: "Ahmed Adam",
      role: "Support",
      username: "@Ahmed",
      image: images.imgUser,
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#222] bg-opacity-55">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[500px]">
        {/* Header */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Assign this ticket to
        </h2>

        {/* Table */}
        <div className="flex justify-between mb-2 text-[#4cb8ed] font-semibold text-2xl">
          <span>Administrators</span>
          <span>Role</span>
        </div>
        <div className="">
          {administrators.map((admin) => (
            <div
              key={admin.id}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center gap-3">
                {/* Checkbox */}
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded border border-black focus:ring-0 focus:outline-none"
                />
                {/* Profile Image */}
                <img
                  src={admin.image}
                  alt={admin.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {/* Admin Info */}
                <div>
                  <p className="font-medium text-gray-800">{admin.name}</p>
                  <p className="text-sm text-gray-500">{admin.username}</p>
                </div>
              </div>
              {/* Role */}
              <span className="text-gray-500 text-2xl font-medium">
                {admin.role}
              </span>
            </div>
          ))}
        </div>

        {/* Assign Button */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={toggleTicketSuccessModal}
            className="bg-[#4cb8ed] text-white font-medium px-4 py-2 rounded"
          >
            Assign
          </button>
        </div>
      </div>

      {successTiketAssign && <SuccessTicketAssign />}
    </div>
  );
};

export default AssignTicketModal;
