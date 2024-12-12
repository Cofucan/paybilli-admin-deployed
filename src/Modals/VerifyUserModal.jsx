import React from "react";

const VerifyUserModal = () => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Verify users?
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Are you certain you want to verify all these users at once?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100"
            //   onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#3faae0] text-white rounded-lg hover:shadow-md"
            //   onClick={handleVerify}
          >
            Verify Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyUserModal;
