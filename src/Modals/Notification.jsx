import React from "react";
import BetUpdate from "../assets/BetUpdate.svg";
import SystemAlert from "../assets/SystemAlert.svg";
import FinancialIcon from "../assets/FinancialIcon.svg";
import UserAction from "../assets/UserAction.svg";
import NewUserReg from "../assets/NewUserReg.svg";
import AccountSuspension from "../assets/AccountSuspension.svg";

import EllipsePoint from "../assets/EllipsePoint.svg";

const Notification = () => {
  return (
    <section className="w-full h-full ">
      <div className="border-l-[2px] border-[#E4E7EC]">
        <div className=" flex justify-between items-center px-5 py-3 border-b-2 border-[#E4E7EC]">
          <h1 className="text-xl font-semibold">Notifications</h1>
          <button className="border-2 border-[#E4E7EC] rounded-lg text-sm font-semibold px-3 py-2">
            Mark As Read
          </button>
        </div>
        <div className="flex justify-between items-center border-b-2 border-[#E4E7EC] px-5">
          <div className="flex items-center gap-3 my-5">
            <div className="w-[52px] h-[50px]">
              <img
                src={BetUpdate}
                alt="#"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 w-[90%]">
              <p className="font-semibold">
                Bet Update:{" "}
                <span className="text-[#525252] font-normal text-[14px]">
                  Bet ID: 1123454 has been Successfully closed
                </span>
              </p>
              <p className="text-[#525252]">14 August 2024, 01:50pm</p>
            </div>
          </div>
          <div className="bg-[#f97316] h-2 w-2 rounded-lg"></div>
        </div>
        <div className="flex justify-between items-center border-b-2 border-[#E4E7EC] px-5">
          <div className="flex items-center gap-3 my-5">
            <div className="w-[50px] h-[50px]">
              <img
                src={SystemAlert}
                alt="#"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 w-[85%]">
              <p className="font-semibold">
                System Alert:{" "}
                <span className="text-[#525252] font-normal text-[14px]">
                  Schedule system maintenance on August 20, 2024, from 02:00 AM
                  to 04:00 AM WAT
                </span>
              </p>
              <p className="text-[#525252]">14 August 2024, 01:50pm</p>
            </div>
          </div>
          <div className="">
            <img src={EllipsePoint} alt="" />
          </div>
        </div>

        <div className=" flex justify-between items-center border-b-2 border-[#E4E7EC] px-5">
          <div className="flex items-center gap-3 my-5">
            <div className="w-[50px] h-[50px]">
              <img
                src={FinancialIcon}
                alt="#"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 w-[85%]">
              <p className="font-semibold">
                Financial Transaction:{" "}
                <span className="text-[#525252] font-normal text-[14px]">
                  Withdrawal request for $500 from User Name: Chinedu Oke has
                  been approved
                </span>
              </p>
              <p className="text-[#525252]">14 August 2024, 01:50pm</p>
            </div>
          </div>
          <div className="">
            <img src={EllipsePoint} alt="" />
          </div>
        </div>
        <div className=" flex justify-between items-center border-b-2 border-[#E4E7EC] px-5">
          <div className="flex items-center gap-3 my-5">
            <div className="w-[50px] h-[50px]">
              <img
                src={UserAction}
                alt="#"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 w-[80%]">
              <p className="font-semibold">
                User Action:{" "}
                <span className="text-[#525252] font-normal text-[14px]">
                  User Name: Bolajoko Tolu has submitted a dispute for Bet ID:
                  234355
                </span>
              </p>
              <p className="text-[#525252]">14 August 2024, 01:50pm</p>
            </div>
          </div>
          <div className="">
            <img src={EllipsePoint} alt="" />
          </div>
        </div>
        <div className=" flex justify-between items-center border-b-2 border-[#E4E7EC] px-5">
          <div className="flex items-center gap-3 my-5">
            <div>
              <img src={NewUserReg} alt="#" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">
                New User Registration:{" "}
                <span className="text-[#525252] font-normal text-[14px]">
                  A new user [Ahmed Idris] has register
                </span>
              </p>
              <p className="text-[#525252]">14 August 2024, 01:50pm</p>
            </div>
          </div>
          <div className="">
            <img src={EllipsePoint} alt="" />
          </div>
        </div>
        <div className=" flex justify-between items-center border-b-2 border-[#E4E7EC] px-5">
          <div className="flex items-center gap-3 my-5">
            <div>
              <img src={AccountSuspension} alt="#" />
            </div>
            <div className="flex flex-col gap-2 w-[90%]">
              <p className="font-semibold">
                Account Suspension:{" "}
                <span className="text-[#525252] font-normal text-[14px]">
                  User [Oke Cynthia] has been suspended
                </span>
              </p>
              <p className="text-[#525252]">14 August 2024, 01:50pm</p>
            </div>
          </div>
          <div className="">
            <img src={EllipsePoint} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;
