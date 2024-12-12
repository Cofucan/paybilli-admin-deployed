import React, { useState } from "react";
import FlagSuccesModal from "./FlagSuccesModal";

const FlagWithdrawalModal = ({ CloseFlagModal }) => {
  const [isSuccessFlag, setIsSuccessFlag] = useState(false);

  //Success flag logic
  const openSuccessFlag = () => {
    setIsSuccessFlag(true);
  };

  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-[#fafafa] w-[650px] p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Flag Withdrawal?
        </h2>

        {/* Modal Body */}
        <p className="text-sm text-gray-500 mb-6">
          Are you certain you want to flag this withdrawal?
        </p>

        {/* Buttons Section */}
        <div className="flex justify-end gap-4">
          {/* Cancel Button */}
          <button
            onClick={CloseFlagModal}
            className="px-6 py-3 border border-[#3faae0] text-[#3faae0] rounded-md"
          >
            Cancel
          </button>

          {/* Close Bet Button */}
          <button
            onClick={openSuccessFlag}
            className="px-6 py-3 bg-red-600 text-white rounded-md hover:shadow-md transition-all"
          >
            Flag Withdrawal
          </button>
        </div>
      </div>
      {isSuccessFlag && <FlagSuccesModal CloseFlagModal={CloseFlagModal} />}
    </div>
  );
};

export default FlagWithdrawalModal;
