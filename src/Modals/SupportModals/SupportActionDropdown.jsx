import React from "react";
import ImportImgs from "../../components/ImportImgs";
import { useNavigate } from "react-router-dom";

const SupportActionDropdown = () => {
  const navigate = useNavigate();
  const images = ImportImgs();
  return (
    <section>
      <div className="flex flex-col gap-3 border bg-white border-gray-300 rounded-md w-36 h-full px-3 py-2 shadow-md">
        <div className="flex items-center gap-2">
          <img src={images.Eye} alt="eyes" />
          <button
            onClick={() => navigate("/admin/Support-ticketDetails")}
            className="text-gray-600 text-sm font-medium hover:text-gray-600"
          >
            View Details
          </button>
        </div>
        <div className="flex items-center gap-2">
          <img src={images.Pen} alt="eyes" />
          <button
            // onClick={declineWithdrawalOpen}
            className="text-gray-600 text-sm font-medium "
          >
            Assign
          </button>
        </div>
        <div className="flex items-center gap-2">
          <img src={images.Chat} alt="eyes" />
          <button className="text-gray-600 text-sm font-medium">
            Live Chat
          </button>
        </div>

        <div className="flex items-center gap-2">
          <img src={images.TicketClose} alt="eyes" />
          <button
            // onClick={OpenFlagModal}
            className="text-gray-600 text-sm font-medium "
          >
            Close Ticket
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportActionDropdown;
