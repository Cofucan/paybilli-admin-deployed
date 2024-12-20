import React from "react";
import Success from "../assets/SuccessMark.svg";
import { useNavigate } from "react-router-dom";

const SuccessEventLoss = () => {
    const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg text-center">
        {/* Green Checkmark Icon */}
        <div className="flex justify-center items-center pb-5">
          <img src={Success} alt="successMark" className="" />
        </div>

        {/* Success Message */}
        <h2 className="text-xl font-semibold text-black mb-4">
         The User has been confirmed to have lost the bet
        </h2>

        {/* Continue Button */}
        <button
          className="mt-6 px-6 py-3 w-full bg-[#3faae0] text-white rounded-lg hover:shadow-md"
          onClick={() => navigate("/admin/event")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessEventLoss;
