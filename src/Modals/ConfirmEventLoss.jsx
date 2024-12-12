import React, { useState } from "react";
import SuccessEventLoss from "./SuccessEventLoss";
import { useNavigate } from "react-router-dom";

const ConfirmEventLoss = ({ closeLossModal }) => {
    const navigate = useNavigate();
    const [isSucessEventLoss, setIsSuccessEventLoss] = useState(false);

    const openSucessEventLossModal = () => {
        setIsSuccessEventLoss(true);
      };
    
    //   const closeSucessEventLossModal = () => {
    //     setIsSuccessEventLoss(false);
    //   };
  return (
    <div className="fixed inset-0  flex items-center justify-center ">
      <div className="bg-[#fafafa] w-[650px] p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Confirm Loss?
        </h2>

        {/* Modal Body */}
        <p className="text-sm text-gray-500 mb-6">
          Are you certain this user lost this bet?
        </p>

        {/* Buttons Section */}
        <div className="flex justify-end gap-4">
          {/* Cancel Button */}
          <button onClick={() => navigate("/admin/event-created")} className="px-6 py-3 border border-[#3faae0] text-[#3faae0] rounded-md">
            Cancel
          </button>

          {/* Confirm Loss Button */}
          <button onClick={openSucessEventLossModal} className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all">
           Confirm Loss
          </button>
        </div>
      </div>
    
    {isSucessEventLoss && (
        <SuccessEventLoss />
    )}
    </div>
  );
};

export default ConfirmEventLoss;
