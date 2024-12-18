// import React, { useState } from "react";
// import Eye from "../../assets/Eye.svg";
// import CloseBet from "../../assets/CloseBet.svg";
// import BetDetails from "../../assets/BetDetails.svg";
// import { useNavigate } from "react-router-dom";
// import CloseBetModal from "../../Modals/CloseBetModal";

// const EscrowActionDropdown = () => {
//   const [isCloseBet, setIsCloseBet] = useState(false);

//   const openCloseBetModal = () => {
//     setIsCloseBet(true);
//   };
//   const closeCloseBetModal = () => {
//     setIsCloseBet(false);
//   };
//   const navigate = useNavigate();
//   return (
//     <div className="flex flex-col gap-3 border bg-white border-gray-300 rounded-md w-[10vw] h-full px-3 py-2 shadow-md">
//       <div className="flex items-center gap-2">
//         <img src={BetDetails} alt="eyes" />
//         <button
//           onClick={() => navigate("/admin/escrow-betDetails")}
//           className="text-gray-600 text-sm font-medium "
//         >
//           View Bet Details
//         </button>
//       </div>
//       <div onClick={openCloseBetModal} className="flex items-center gap-2">
//         <img src={CloseBet} alt="eyes" />
//         <button className="text-gray-600 text-sm font-medium ">
//           Close Bet
//         </button>
//       </div>
//       <div className="flex items-center gap-2">
//         <img src={Eye} alt="eyes" />
//         <button
//           onClick={() => navigate("/admin/UserProfile")}
//           className="text-gray-600 text-sm font-medium "
//         >
//           View User
//         </button>
//       </div>
//       {isCloseBet && <CloseBetModal closeCloseBetModal={closeCloseBetModal} />}
//     </div>
//   );
// };

// export default EscrowActionDropdown;

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CloseBet from '../../assets/CloseBet.svg'
import BetDetails from '../../assets/BetDetails.svg'
import CloseBetModal from '../../Modals/CloseBetModal'

const EscrowActionDropdown = ({ betDetails }) => {
  const [isCloseBet, setIsCloseBet] = useState(false)
  const navigate = useNavigate()

  const openCloseBetModal = () => setIsCloseBet(true)
  const closeCloseBetModal = () => setIsCloseBet(false)

  const viewBetDetails = () => {
    navigate('/admin/escrow-betDetails', { state: { betDetails } })
  }

  return (
    <div className='flex flex-col gap-3 border bg-white border-gray-300 rounded-md w-[10vw] h-full px-3 py-2 shadow-md'>
      <div className='flex items-center gap-2'>
        <img src={BetDetails} alt='Bet Details' />
        <button
          onClick={viewBetDetails}
          className='text-gray-600 text-sm font-medium'
        >
          View Bet Details
        </button>
      </div>
      <div onClick={openCloseBetModal} className='flex items-center gap-2'>
        <img src={CloseBet} alt='Close Bet' />
        <button className='text-gray-600 text-sm font-medium'>Close Bet</button>
      </div>
      {isCloseBet && <CloseBetModal closeCloseBetModal={closeCloseBetModal} />}
    </div>
  )
}

export default EscrowActionDropdown
