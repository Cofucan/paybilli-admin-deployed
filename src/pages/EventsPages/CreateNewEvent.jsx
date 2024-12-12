import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import EventModal from "../../Modals/EventModal"; // Event confirmation modal
import SuccessModal from "../../Modals/SuccessModal"; // Success modal
import SuccessEventModal from "../../Modals/SuccessEventModal";

const CreateNewEvent = () => {
  const navigate = useNavigate();
  const [betName, setBetName] = useState("");
  const [betType, setBetType] = useState("Debate");
  const [betCategory, setBetCategory] = useState("Sports");
  const [paymentMethod, setPaymentMethod] = useState("Crypto");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [winningCondition, setWinningCondition] = useState("");
  const [refundCondition, setRefundCondition] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSuccessEventModal, setIsSuccessEventModal] = useState(false);

  const handleCreateEvent = () => {
    // Logic for creating the event (e.g., sending data to the server)
    console.log("Event created!");

    // Close the confirmation modal
    setIsModalOpen(false);

    setIsSuccessEventModal(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessEventModal(false);
  };

  return (
    <section className="relative w-full">
      <div className="lg:w-full">
        <div className="w-[95%] mx-auto mt-14 smd:mt-14 lg:mt-8 xl:mt-4">
          <button onClick={() => navigate("/admin/event")} className="flex items-center gap-2 text-[34px] py-10 xl:py-5 text-[#1D1D1D] leading-[28px] font-semibold">
            <FaArrowLeftLong className="text-2xl text-black hover:text-black" />
            Create New Event
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-[95%] mx-auto mb-10">
          {/* Form Fields Section */}
          <div className="grid grid-cols-2 gap-6 mb-6 w-[80%]">
            {/* Bet Name */}
            <div>
              <label className="block pt-6 pb-2 font-medium">Bet Name</label>
              <input
                type="text"
                value={betName}
                onChange={(e) => setBetName(e.target.value)}
                placeholder="Enter Event Name"
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-[#3faae0]"
              />
            </div>

            {/* Bet Type Dropdown */}
            <div>
              <label className="block pt-6 pb-2 font-medium">Bet Type</label>
              <select
                value={betType}
                onChange={(e) => setBetType(e.target.value)}
                className="w-full px-4 py-2 text-gray-400 border-2 border-gray-200 rounded-lg  focus:outline-none focus:border-none focus:ring-2 focus:ring-[#3faae0]"
              >
                <option className="text-sm">Debate</option>
                <option className="text-sm">Inactive</option>
              </select>
            </div>

            {/* Bet Category */}
            <div>
              <label className="block py-2 font-medium">Bet Category</label>
              <select
                value={betCategory}
                onChange={(e) => setBetCategory(e.target.value)}
                className="w-full px-4 py-2 text-gray-400 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-[#3faae0]"
              >
                <option className="text-sm">Sports</option>
                <option className="text-sm">Politics</option>
              </select>
            </div>

            {/* Amount Input */}
            <div>
              <label className="block py-2 font-medium">Amount</label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Write amount here"
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-[#3faae0]"
              />
            </div>

            {/* Payment Method Dropdown */}
            <div>
              <label className="block font-medium">Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-200 text-gray-400 text-sm rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-[#3faae0]"
              >
                <option className="text-sm">Crypto</option>
                <option className="text-sm">Naira</option>
              </select>
            </div>

            {/* Due Date Input */}
            <div>
              <label className="block font-medium">Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-[#3faae0]"
              />
            </div>

            {/* Condition for Winning */}
            <div>
              <label className="block font-medium">Condition for winning</label>
              <textarea
                value={winningCondition}
                onChange={(e) => setWinningCondition(e.target.value)}
                placeholder="Write bet condition here"
                className="w-full px-4 pt-2 pb-20 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-[#3faae0]"
              ></textarea>
            </div>

            {/* Condition for Refund */}
            <div>
              <label className="block font-medium">Condition for refund</label>
              <textarea
                value={refundCondition}
                onChange={(e) => setRefundCondition(e.target.value)}
                placeholder="Write condition for refund here"
                className="w-full px-4 pt-2 pb-20 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-[#3faae0]"
              ></textarea>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end w-[80%]">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#3faae0] text-sm text-white px-10 py-3 rounded-lg hover:shadow-md"
            >
              Save Event
            </button>
          </div>
        </div>

        {/* Confirmation Modal */}
        {isModalOpen && (
          <EventModal onClose={handleCloseModal} onCreate={handleCreateEvent} />
        )}

        {isSuccessEventModal && (
          <SuccessEventModal onClose={handleCloseSuccessModal} />
        )}
      </div>
      <div className="mt-96">
        <Footer />
      </div>
    </section>
  );
};

export default CreateNewEvent;
