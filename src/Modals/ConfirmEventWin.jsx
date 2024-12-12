import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessEventWin from "./SuccessEventWin";

const ConfirmEventWin = () => {
  const navigate = useNavigate();
  const [isSucessEventWin, setIsSuccessEventWin] = useState(false);

  const openSucessEventWinModal = () => {
    setIsSuccessEventWin(true);
  };

  //   const closeSucessEventLossModal = () => {
  //     setIsSuccessEventWin(false);
  //   };

  return (
    <div className="fixed inset-0  flex items-center justify-center ">
      <div className="bg-[#fafafa] w-[650px] p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Confirm Win?
        </h2>

        {/* Modal Body */}
        <p className="text-sm text-gray-500 mb-6">
          Are you certain this user won this bet?
        </p>

        {/* Buttons Section */}
        <div className="flex justify-end gap-4">
          {/* Cancel Button */}
          <button
            onClick={() => navigate("/admin/event-created")}
            className="px-6 py-3 border border-[#3faae0] text-[#3faae0] rounded-md"
          >
            Cancel
          </button>

          {/* Confirm Win Button */}
          <button
            onClick={openSucessEventWinModal}
            className="px-6 py-3 bg-[#3faae0] text-white rounded-md hover:bg-[#4fc1fa] transition-all"
          >
            Confirm Win
          </button>
        </div>
      </div>

      {isSucessEventWin && <SuccessEventWin />}
    </div>
  );
};

export default ConfirmEventWin;
