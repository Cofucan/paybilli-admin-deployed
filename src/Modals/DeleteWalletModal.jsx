import React, { useState } from "react";
import DeleteSuccessWallet from "./DeleteSuccessWallet";

const DeleteWalletModal = ({CloseDeleteModal}) => {
    const [openSuccessModal, setOpenSuccessModal] = useState(false);

    //DeleteSuccessModal Open
    const ToggleSuccessModalOpen = () => {
        setOpenSuccessModal(true);
    }

  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-[#fafafa] w-[650px] p-6 rounded-lg shadow-lg">
        {/* Modal Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Delete Wallet?
        </h2>

        {/* Modal Body */}
        <p className="text-sm text-gray-500 mb-6">
          Are you certain you want to Delete this Wallet?
        </p>

        {/* Buttons Section */}
        <div className="flex justify-end gap-4">
          {/* Cancel Button */}
          <button
            onClick={CloseDeleteModal}
            className="px-6 py-3 border border-[#3faae0] text-[#3faae0] rounded-md"
          >
            Cancel
          </button>

          {/* Close Bet Button */}
          <button
            onClick={ToggleSuccessModalOpen}
            className="px-6 py-3 bg-red-600 text-white rounded-md hover:shadow-md transition-all"
          >
            Activate Wallet
          </button>
        </div>
      </div>

      {openSuccessModal && (
        <DeleteSuccessWallet CloseDeleteModal={CloseDeleteModal}/>
      )}
    </div>
  );
};

export default DeleteWalletModal;
