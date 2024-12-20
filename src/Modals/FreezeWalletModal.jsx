import React, { useState } from "react";
import FreezeSuccessModal from "./FreezeSuccessModal";

const FreezeWalletModal = ({ToggleFreezeWalletClose}) => {
    const [openSuccessWallet, setOpenSuccessWallet] = useState(false);

    const ToggleSuccessModalOpen = () => {
        setOpenSuccessWallet(true);
    }

  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-[#fafafa] w-[650px] p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Freeze Wallet?</h2>

        {/* Modal Body */}
        <p className="text-sm text-gray-500 mb-6">
          Are you certain you want to freeze this Wallet?
        </p>

        {/* Buttons Section */}
        <div className="flex justify-end gap-4">
          {/* Cancel Button */}
          <button
            onClick={ToggleFreezeWalletClose}
            className="px-6 py-3 border border-[#3faae0] text-[#3faae0] rounded-md"
          >
            Cancel
          </button>

          {/* Close Bet Button */}
          <button
            onClick={ToggleSuccessModalOpen}
            className="px-6 py-3 bg-red-600 text-white rounded-md hover:shadow-md transition-all"
          >
           Freeze Wallet
          </button>
        </div>
      </div>

      {openSuccessWallet && (
        <FreezeSuccessModal ToggleFreezeWalletClose={ToggleFreezeWalletClose}/>
      )}
     
    </div>
  );
};

export default FreezeWalletModal;
