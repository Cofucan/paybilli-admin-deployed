import React, { useState } from "react";

const WalletBalanceModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Wallet Balance</h2>
          <button onClick={handleClose} className="text-2xl">
            &times;
          </button>
        </div>

        {/* Balance Cards */}
        <div className="space-y-4 mt-6">
          {/* Naira Balance */}
          <div className="bg-black text-white py-7 px-10 rounded-xl relative flex justify-between items-center">
            <div>
              <p className="text-sm">Naira Balance</p>
              <h3 className="text-2xl font-bold">NGN 230,000</h3>
            </div>
            {/* Decorative graphic */}
            <div className="absolute top-0 right-0  w-10 h-10 bg-[#3faae0] rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0  w-10 h-10 bg-[#3faae0] rounded-tr-full"></div>
          </div>

          {/* Crypto Balance */}
          <div className="bg-black text-white py-7 px-10 rounded-xl relative flex justify-between items-center">
            <div>
              <p className="text-sm">Crypto Balance</p>
              <h3 className="text-2xl font-bold">$5,000.40</h3>
            </div>
            {/* Decorative graphic */}
            <div className="absolute top-0 right-0  w-10 h-10 bg-[#3faae0] rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0  w-10 h-10 bg-[#3faae0] rounded-tr-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletBalanceModal;
