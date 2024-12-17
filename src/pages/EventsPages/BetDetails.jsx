import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import ConfirmEventLoss from "../../Modals/ConfirmEventLoss";
import { useNavigate } from "react-router-dom";
import ConfirmEventWin from "../../Modals/ConfirmEventWin";

const BetDetails = () => {
  const navigate = useNavigate();
  const [isLossModalOpen, setIsLossModalOpen] = useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const openLossModal = () => {
    setIsLossModalOpen(true);
  };

  const closeLossModal = () => {
    setIsLossModalOpen(false);
  };

  const openWinModal = () => {
    setIsWinModalOpen(true);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="px-7 pt-10 xl:pt-5">
        <button
          onClick={() => navigate("/admin/event")}
          className="flex items-center gap-3 text-[34px] text-[#1D1D1D] font-semibold hover:text-gray-800 transition"
        >
          <FaArrowLeftLong className="text-2xl" />
          <span>Bet Details</span>
        </button>
      </div>

      <div className="bg-white max-w-6xl mx-auto rounded-lg shadow-md p-10 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="text-2xl font-semibold">Bolajoko John</p>
            <p className="text-gray-600 text-lg">Bet Placer</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">02, August, 2024</p>
            <p className="text-gray-600 text-lg">Date Created</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Win/Lose</p>
            <p className="text-gray-600 text-lg">Bet Type</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">WCDO2492</p>
            <p className="text-gray-600 text-lg">Bet ID</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">NGN 8,000</p>
            <p className="text-gray-600 text-lg">Total Bet Amount</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Trump Won</p>
            <p className="text-gray-600 text-lg">Outcome</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">NGN 7,000</p>
            <p className="text-gray-600 text-lg">Net Payout</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">NGN 1000</p>
            <p className="text-gray-600 text-lg">Commission</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Kamala To Win</p>
            <p className="text-gray-600 text-lg">Bet Placer Prediction</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 px-7 mt-8">
        <button
          onClick={openLossModal}
          className="bg-transparent border border-light-blue-500 text-light-blue-500 py-4 px-6 rounded-lg transition"
        >
          Confirm Loss
        </button>
        <button
          onClick={openWinModal}
          className="bg-light-blue-500 text-white py-4 px-6 rounded-lg transition hover:shadow-lg"
        >
          Confirm Win
        </button>
      </div>
      {isLossModalOpen && (
        <div className="fixed inset-0 flex z-50 justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            {/* Render the modal component */}
            <ConfirmEventLoss closeLossModal={closeLossModal} />
          </div>
        </div>
      )}

      {isWinModalOpen && (
        <div className="fixed inset-0 flex z-50 justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            {/* Render the modal component */}
            <ConfirmEventWin />
          </div>
        </div>
      )}
    </div>
  );
};

export default BetDetails;
