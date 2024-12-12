import React from "react";
import ImportImgs from "../../components/ImportImgs";
import ArrowDown from "../../assets/ArrowDown.svg";

const SupportHeader = () => {
  const images = ImportImgs();

  return (
    <section className="relative w-full lg:w-[78vw]">
      <div className="lg:w-full">
        <div className="w-[95%] mx-auto mt-14 smd:mt-14 lg:mt-8 xl:mt-4">
          <h1 className="text-[34px] py-10 xl:py-8 text-[#1D1D1D] leading-[28px] font-semibold">
            Support
          </h1>
        </div>
        <div className="grid smd:grid-cols-3 lg:grid-cols-4 gap-2 mx-3 xl:ml-8 xl:mr-14">
          <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
            <img
              src={images.AllTicket}
              alt="#"
              className="ms-5 w-16 h-16 object-cover"
            />
            <div className="flex flex-col gap-2">
              <p className="text-[26px] smd:text-[18px] lg:text-[20px]">104</p>
              <p className="text-gray-500 text-sm">All Tickets</p>
            </div>
          </div>
          <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
            <img
              src={images.CloseTicket}
              alt="#"
              className="ms-5 w-16 h-16 object-cover"
            />
            <div className="flex flex-col gap-2">
              <p className="text-[26px] smd:text-[18px] lg:text-[20px]">60</p>
              <p className="text-gray-500 text-sm">Closed Tickets</p>
            </div>
          </div>
          <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
            <img
              src={images.OpenTicket}
              alt="#"
              className="ms-5 w-16 h-16 object-cover"
            />
            <div className="flex flex-col ">
              <p className="text-[26px] smd:text-[18px] lg:text-[20px]">44</p>
              <p className="text-gray-500 text-sm">Open Tickets</p>
            </div>
          </div>
          <div className="bg-white flex gap-6 py-3 rounded-lg shadow-sm ">
            <img
              src={images.LiveChat}
              alt="#"
              className="ms-5 w-16 h-16 object-cover"
            />
            <div className="flex flex-col ">
              <p className="text-[26px] smd:text-[18px] lg:text-[20px]">10</p>
              <p className="text-gray-500 text-sm">Live Chats</p>
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
    </section>
  );
};

export default SupportHeader;
