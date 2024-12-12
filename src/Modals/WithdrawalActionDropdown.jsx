import React, { useState } from "react";
import ImportImgs from "../components/ImportImgs";
import ApprovedWithdrawal from "./ApprovedWithdrawal";
import DeclineWithdrawal from "./DeclineWithdrawal";
import { useNavigate } from "react-router-dom";
import FlagWithdrawalModal from "./FlagWithdrawalModal";

const WalletActionDropdown = () => {
  const images = ImportImgs();
  const navigate = useNavigate();
  const [approvedWithdrawal, setApprovedWithdrawal] = useState(false);
  const [declineWithdrawal, setDeclineWithdrawal] = useState(false);
  const [flagWithdrawal, setFlagWithdrawal] = useState(false);

  //Flag withdrawal logic
  const OpenFlagModal = () => {
    setFlagWithdrawal(true);
  };
  const CloseFlagModal = () => {
    setFlagWithdrawal(false);
  };

  //approved withdrawal logic
  const approvedWithdrawalOpen = () => {
    setApprovedWithdrawal(true);
  };
  const approvedWithdrawalClose = () => {
    setApprovedWithdrawal(false);
  };

  //decline withdrawal logic
  const declineWithdrawalOpen = () => {
    setDeclineWithdrawal(true);
  };
  const declineWithdrawalClose = () => {
    setDeclineWithdrawal(false);
  };

  return (
    <section>
      <div className="flex flex-col gap-3 border bg-white border-gray-300 rounded-md w-[14vw] h-full px-3 py-2 shadow-md">
        <div className="flex items-center gap-2">
          <img src={images.ThumbUp} alt="eyes" />
          <button
            onClick={approvedWithdrawalOpen}
            className="text-gray-600 text-sm font-medium hover:text-gray-600"
          >
            Approve Withdrawal
          </button>
        </div>
        <div className="flex items-center gap-2">
          <img src={images.ThumbDown} alt="eyes" />
          <button
            onClick={declineWithdrawalOpen}
            className="text-gray-600 text-sm font-medium "
          >
            Decline Withdrawal
          </button>
        </div>
        <div className="flex items-center gap-2">
          <img src={images.Eye} alt="eyes" />
          <button
            onClick={() =>
              navigate("/admin/withdrawal-details")
            }
            className="text-gray-600 text-sm font-medium"
          >
            View Withdrawal Details
          </button>
        </div>

        <div className="flex items-center gap-2">
          <img src={images.FlagWarning} alt="eyes" />
          <button
            onClick={OpenFlagModal}
            className="text-gray-600 text-sm font-medium "
          >
            Flag Withdrawal
          </button>
        </div>
      </div>

      {/*Approved Withdrawal modal */}
      {approvedWithdrawal && (
        <ApprovedWithdrawal approvedWithdrawalClose={approvedWithdrawalClose} />
      )}

      {/*Decline Withdrawal modal */}
      {declineWithdrawal && (
        <DeclineWithdrawal declineWithdrawalClose={declineWithdrawalClose} />
      )}

      {/*flag withdrawal */}

      {flagWithdrawal && (
        <FlagWithdrawalModal CloseFlagModal={CloseFlagModal}/>
      )}
    </section>
  );
};

export default WalletActionDropdown;
