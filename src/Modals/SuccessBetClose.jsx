import React from "react";
import Success from "../assets/SuccessMark.svg";
import { useNavigate } from "react-router-dom";

const SuccessBetClose = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg text-center">
        {/* Green Checkmark Icon */}
        <div className="flex justify-center items-center pb-5">
          <img src={Success} alt="successMark" className="" />
        </div>

        {/* Success Message */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Bet Closed</h2>

        {/* Continue Button */}
        <button
          className="mt-6 px-6 py-3 w-full bg-light-blue-500 text-white rounded-lg hover:shadow-md"
          onClick={() => {
            // console.log("Navigating to /admin/event...");
            navigate("/admin/event-created");
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessBetClose;
