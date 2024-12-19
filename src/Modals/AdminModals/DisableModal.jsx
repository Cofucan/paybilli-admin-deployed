import React, { useState } from "react";
import DisableSuccessModal from "./DisableSuccessModal";

const DisableModal = ({ toggleDisableModal }) => {
  const [openDisableSuccessModal, setopenDisableSuccessModal] = useState(false);

  const toggleSuccessModal = () => {
    setopenDisableSuccessModal(!openDisableSuccessModal);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-[#fafafa] w-[650px] p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Disable Admin?
        </h2>

        {/* Modal Body */}
        <p className="text-sm text-gray-500 mb-6">
          Are you sure you want to disable this admin?
        </p>

        {/* Buttons Section */}
        <div className="flex justify-end gap-4">
          {/* Cancel Button */}
          <button
            onClick={toggleDisableModal}
            className="px-6 py-3 border border-[#3faae0] text-[#3faae0] rounded-md"
          >
            Cancel
          </button>

          {/* Confirm Loss Button */}
          <button
            onClick={toggleSuccessModal}
            className="px-6 py-3 bg-[#e72828] text-white rounded-md hover:bg-[#ff3737f7] transition-all"
          >
            Disable Admin
          </button>
        </div>
      </div>

      {openDisableSuccessModal && (
        <DisableSuccessModal toggleDisableModal={toggleDisableModal} />
      )}
    </div>
  );
};

export default DisableModal;
