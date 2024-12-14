import React from "react";
import success from "../assets/SuccessMark.svg";

const ActivateSuccessModal = ({ CloseActivateWallet }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg text-center">
        {/* Green Checkmark Icon */}
        <div className="flex justify-center items-center pb-5">
          <img src={success} alt="successMark" className="" />
        </div>

        {/* Success Message */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          The User Wallet Has Been Activated
        </h2>

        {/* Continue Button */}
        <button
          className="mt-6 px-6 py-3 w-full bg-[#3faae0] text-white rounded-lg hover:shadow-md"
          onClick={CloseActivateWallet}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ActivateSuccessModal;
