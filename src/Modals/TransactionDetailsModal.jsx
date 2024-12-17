import React from "react";
import { GrCircleInformation } from "react-icons/gr";
const TransactionDetailsModal = ({ handleCancel }) => {
  return (
    <section>
      <div className="p-4 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Transaction ID and Due Date */}
          <div>
            <p className="font-semibold">#WD23GH2</p>
            <p className="text-gray-500">Transaction ID</p>
          </div>
          <div>
            <p className="font-semibold">02, August, 2024</p>
            <p className="text-gray-500">Due Date</p>
          </div>

          {/* Amount and Date Paid */}
          <div>
            <p className="font-semibold">NGN 4,500</p>
            <p className="text-gray-500">Amount</p>
          </div>
          <div>
            <p className="font-semibold">02, August, 2024</p>
            <p className="text-gray-500">Date Paid</p>
          </div>

          {/* Payment Method and Invoice Date */}
          <div>
            <p className="font-semibold">Naira Wallet</p>
            <p className="text-gray-500">Payment Method</p>
          </div>
          <div>
            <p className="font-semibold">02, August, 2024</p>
            <p className="text-gray-500">Invoice Date</p>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-light-blue-500 bg-opacity-20 p-4 rounded-md flex items-start">
          <GrCircleInformation className="text-black w-16 h-16 -mt-5 mr-2" />
          <p className="text-black leading-6 text-sm">
            This transaction represents the purchase of airtime for mobile phone
            number +2349134827434. The airtime was successfully credited to the
            specified number immediately upon purchase. No further action is
            required.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleCancel}
            className="bg-white border border-light-blue-500 text-light-blue-500 py-2 px-6 rounded"
          >
            Cancel
          </button>
          <button className="bg-light-blue-500 text-white py-3 px-6 rounded">
            Download Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransactionDetailsModal;
