import React, { useState } from "react";
import AdminSuccessModal from "./AdminSuccessModal";

const EnableModal = ({ toggleEnableModal }) => {
  const [openAdminSuccessModal, setOpenAdminSuccessModal] = useState(false);

  const toggleAdminSuccessModal = () => {
    setOpenAdminSuccessModal(!openAdminSuccessModal);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-[#fafafa] w-[650px] p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Enable Admin?
        </h2>

        {/* Modal Body */}
        <p className="text-sm text-gray-500 mb-6">
          Are you sure you want to enable Admin?
        </p>

        {/* Buttons Section */}
        <div className="flex justify-end gap-4">
          {/* Cancel Button */}
          <button
            onClick={toggleEnableModal}
            className="px-6 py-3 border border-[#3faae0] text-[#3faae0] rounded-md"
          >
            Cancel
          </button>

          {/* Confirm Loss Button */}
          <button
            onClick={toggleAdminSuccessModal}
            className="px-6 py-3 bg-[#3faae0] text-white rounded-md hover:bg-[#2e8fc0] transition-all"
          >
            Enable Admin
          </button>
        </div>
      </div>

      {openAdminSuccessModal && (
        <AdminSuccessModal toggleEnableModal={toggleEnableModal} />
      )}
    </div>
  );
};

export default EnableModal;
