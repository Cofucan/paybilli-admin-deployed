import React, { useState } from "react";
import BetDetails from "../assets/BetDetails.svg";
import freeze from "../assets/freeze.svg";
import verifyCheck from "../assets/Verified.svg";
import erase from "../assets/icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import FreezeWalletModal from "./FreezeWalletModal";
import ActivateWalletModal from "./ActivateWalletModal";
import DeleteWalletModal from "./DeleteWalletModal";

const WalletActionDropdown = () => {
  const [openFreezeWallet, setOpenFreezeWallet] = useState(false);
  const [activateWallet, setActivateWallet] = useState(false);
  const [deleteWallet, setDeleteWallet] = useState(false);

  //freezewallet open
  const ToggleFreezeWalletOpen = () => {
    setOpenFreezeWallet(true);
  };
  //freezewallet close
  const ToggleFreezeWalletClose = () => {
    setOpenFreezeWallet(false);
  };
  //activate wallet start
  const OpenActivateWallet = () => {
    setActivateWallet(true);
  };
  const CloseActivateWallet = () => {
    setActivateWallet(false);
  };

  //Delete Wallet Start
  const OpenDeleteModal = () => {
    setDeleteWallet(true);
  };
  const CloseDeleteModal = () => {
    setDeleteWallet(false);
  };

  return (
    <section>
      <div className="flex flex-col gap-3 border bg-white border-gray-300 rounded-md w-[10vw] h-full px-3 py-2 shadow-md">
        <div className="flex items-center gap-2">
          <img src={BetDetails} alt="eyes" />
          <NavLink
            to={"/admin/UserProfile"}
            className="text-gray-600 text-sm font-medium hover:text-gray-600"
          >
            View User
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <img src={freeze} alt="eyes" />
          <button
            onClick={ToggleFreezeWalletOpen}
            className="text-gray-600 text-sm font-medium "
          >
            Freeze Wallet
          </button>
        </div>
        <div className="flex items-center gap-2">
          <img src={verifyCheck} alt="eyes" />
          <button
            onClick={OpenActivateWallet}
            className="text-gray-600 text-sm font-medium "
          >
            Activate Wallet
          </button>
        </div>
        <div className="flex items-center gap-2">
          <img src={erase} alt="eyes" />
          <button
            onClick={OpenDeleteModal}
            className="text-gray-600 text-sm font-medium "
          >
            Delete Wallet
          </button>
        </div>
      </div>

      {/*Freeze Wallet Modal */}
      {openFreezeWallet && (
        <FreezeWalletModal ToggleFreezeWalletClose={ToggleFreezeWalletClose} />
      )}

      {/*Activate Wallet Modal */}
      {activateWallet && (
        <ActivateWalletModal CloseActivateWallet={CloseActivateWallet} />
      )}

      {/*Delete Wallet Modal */}
      {deleteWallet && (
        <DeleteWalletModal CloseDeleteModal={CloseDeleteModal} />
      )}
    </section>
  );
};

export default WalletActionDropdown;
