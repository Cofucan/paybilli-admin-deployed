import React, { useState } from "react";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const EditRevenueForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    revenueSource: "",
    revenueAmount: "",
    transactionDate: "",
    paymentMethod: "crypto",
    transactionId: "",
    feeDeducted: "",
    status: "Confirmed",
    user: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formState);
  };

  return (
    <section className="w-full">
      <form
        onSubmit={handleSubmit}
        className="w-[60%] mx-5 p-6 rounded shadow-sm"
      >
        <button
          onClick={() => navigate("/admin/revenue")}
          className="text-2xl font-bold my-4"
        >
          Edit Revenue
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Revenue Source */}
          <div>
            <label
              htmlFor="revenueSource"
              className="block text-sm font-medium text-black"
            >
              Revenue Source
            </label>
            <select
              id="revenueSource"
              name="revenueSource"
              value={formState.revenueSource}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500"
            >
              <option value="" className="">
                Select
              </option>
              <option value="Bet">Bet</option>
              <option value="Sale">Sale</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Revenue Amount */}
          <div>
            <label
              htmlFor="revenueAmount"
              className="block text-sm font-medium text-black"
            >
              Revenue Amount
            </label>
            <input
              type="text"
              id="revenueAmount"
              name="revenueAmount"
              value={formState.revenueAmount}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500"
            />
          </div>

          {/* Transaction Date */}
          <div>
            <label
              htmlFor="transactionDate"
              className="block text-sm font-medium text-gray-700"
            >
              Transaction Date
            </label>
            <input
              type="date"
              id="transactionDate"
              name="transactionDate"
              value={formState.transactionDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label
              htmlFor="paymentMethod"
              className="block text-sm font-medium text-gray-700"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formState.paymentMethod}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500"
            >
              <option value="crypto">Crypto</option>
              <option value="bank">Niara</option>
            </select>
          </div>

          {/* Transaction ID */}
          <div>
            <label
              htmlFor="transactionId"
              className="block text-sm font-medium text-gray-700"
            >
              Transaction ID
            </label>
            <input
              type="text"
              id="transactionId"
              name="transactionId"
              value={formState.transactionId}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500"
            />
          </div>

          {/* Fee Deducted */}
          <div>
            <label
              htmlFor="feeDeducted"
              className="block text-sm font-medium text-gray-700"
            >
              Fee Deducted
            </label>
            <input
              type="text"
              id="feeDeducted"
              name="feeDeducted"
              value={formState.feeDeducted}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500"
            />
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formState.status}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500"
            >
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* User */}
          <div>
            <label
              htmlFor="user"
              className="block text-sm font-medium text-gray-700"
            >
              User
            </label>
            <input
              type="text"
              id="user"
              name="user"
              value={formState.user}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500"
              placeholder="@"
            />
          </div>
        </div>

        {/* Notes */}
        <div className="mb-4">
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700"
          >
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formState.notes}
            onChange={handleInputChange}
            className="mt-1 block w-full h-32 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500"
            placeholder="Write notes here..."
          ></textarea>
        </div>

        {/* Save Button */}
        <div className="flex justify-end items-end">
          <button
            type="submit"
            className="bg-light-blue-500 text-white py-3 px-5 rounded-md hover:bg-light-blue-500"
          >
            Save Details
          </button>
        </div>
      </form>
      <div className="mt-[25rem]">
        <Footer />
      </div>
    </section>
  );
};

export default EditRevenueForm;
