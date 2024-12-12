import React, { useState } from "react";
import EventStarGreen from "../../assets/EventStarGreen.svg";
import EventStarGold from "../../assets/EventStarGold.svg";
import EventStarRed from "../../assets/EventStarRed.svg";
import EventStarBlack from "../../assets/EventBlack.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Calenda from "../../components/Calenda";
import EscrowTable from "../../Tables/EscrowBet/EscrowTable";
import Footer from "../../components/Footer";

const EscrowBets = () => {
  const [isCalendalVisible, setIsCalendaVisible] = useState(false);

  const ToggleCalendaVisible = () => {
    setIsCalendaVisible(!isCalendalVisible);
  };

  return (
    <section className="relative w-full">
      <div className="lg:w-full">
        <div className="w-[95%] mx-auto mt-14 smd:mt-14 lg:mt-8 xl:mt-4">
          <h1 className="text-[34px] py-10 xl:py-5 text-[#1D1D1D] leading-[28px] font-semibold">
            Escrow Bets
          </h1>
        </div>
        <div className="grid smd:grid-cols-3 lg:grid-cols-4 gap-2 mx-3 xl:ml-8 xl:mr-14">
          <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
            <img
              src={EventStarBlack}
              alt="#"
              className="ms-5 w-16 h-16 object-cover"
            />
            <div className="flex flex-col gap-2">
              <p className="text-[26px] smd:text-[18px] lg:text-[20px]">3000</p>
              <p className="text-gray-500 text-sm">Total Bets</p>
            </div>
          </div>
          <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
            <img
              src={EventStarGreen}
              alt="#"
              className="ms-5 w-16 h-16 object-cover"
            />
            <div className="flex flex-col gap-2">
              <p className="text-[26px] smd:text-[18px] lg:text-[20px]">1500</p>
              <p className="text-gray-500 text-sm">Open Bets</p>
            </div>
          </div>
          <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
            <img
              src={EventStarGold}
              alt="#"
              className="ms-5 w-16 h-16 object-cover"
            />
            <div className="flex flex-col ">
              <p className="text-[26px] smd:text-[18px] lg:text-[20px]">840</p>
              <p className="text-gray-500 text-sm">Pending Bets</p>
            </div>
          </div>
          <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
            <img
              src={EventStarRed}
              alt="#"
              className="ms-5 w-16 h-16 object-cover"
            />
            <div className="flex flex-col ">
              <p className="text-[26px] smd:text-[18px] lg:text-[20px]">550</p>
              <p className="text-gray-500 text-sm">Closed Bets</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-end lg:px-14 pt-12 my-8 ">
        <div className="flex gap-5 mx-2 lg:mx-0">
          <button className="flex gap-2 px-6 py-3 font-semibold hover:shadow-md bg-[#4cb8ed] border border-[#4cb8ed] text-white rounded-xl">
            <img src={ArrowDown} alt="#" className="w-6 h-6 object-cover" />
            Export Data
          </button>
        </div>
      </div>

      <div className="xl:ml-8 xl:mr-14 z-10">
        {/*Header */}
        <div className="bg-white grid grid-cols-3 border-b-2 border-gray-200 rounded-t-lg items-center px-3">
          <div className="hidden lg:block">
            <h1 className="text-lg text-black font-medium"> Latest Actions</h1>
          </div>
          <div className="flex gap-2 lg:gap-0 justify-between col-span-3 lg:col-span-2 items-center py-2">
            <div className="flex xl:w-full max-w-xl items-center border border-gray-300 rounded-lg lg:p-2 lg:mx-4">
              <CiSearch className="ms-3 text-2xl text-[black]" />
              <input
                className="border-none focus:border-none focus:ring-0 outline-none w-full placeholder:text-xs placeholder:lg:text-lg smd:text-sm text-gray-700 placeholder-gray-950"
                type="text"
                placeholder="Search Bets"
              />
            </div>
            <div
              onClick={ToggleCalendaVisible}
              className="flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-3 lg:py-4"
            >
              <MdOutlineCalendarMonth className="text-gray-500" />
              <button className="text-gray-500 text-xs smd:text-sm">
                Filter
              </button>

              {isCalendalVisible && (
                <>
                  <div
                    className="fixed inset-0 bg-black opacity-20 z-20"
                    onClick={ToggleCalendaVisible}
                  ></div>
                  <div
                    className="absolute top-[30%] right-20 z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Calenda className="z-0" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <EscrowTable />
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </section>
  );
};

export default EscrowBets;
