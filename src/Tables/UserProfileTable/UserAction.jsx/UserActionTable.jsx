import React from "react";
import Filter from "../../../assets/Filter.svg";
import { CiSearch } from "react-icons/ci";
import UserTransactionTable from "../UserTransactionTable";

import UserActionBody from "./UserActionBody";

const UserActionTable = () => {
  return (
    <section className="bg-white w-[95%]">
      <div className="w-[100%] z-10 mt-10">
        {/*Header */}
        <div className="bg-white grid grid-cols-3 rounded-t-lg items-center px-10">
          <div className="hidden lg:block">
            <h1 className="text-lg text-black font-medium">Latest Actions</h1>
          </div>
          <div className="flex gap-2 lg:gap-0 justify-between col-span-3 lg:col-span-2 items-center py-2">
            <div className="flex xl:w-full max-w-xl items-center border border-gray-300 rounded-lg lg:p-2 lg:mx-4">
              <CiSearch className="ms-3 text-2xl text-[black]" />
              <input
                className="border-none focus:border-none focus:ring-0 outline-none w-full placeholder:text-xs placeholder:lg:text-lg smd:text-sm text-gray-700 placeholder-gray-950"
                type="text"
                placeholder="Search here..."
              />
            </div>
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-3 lg:py-4">
              <img src={Filter} alt="Filter" className="w-5 h-5" />
              <button className="text-gray-500 text-xs smd:text-sm">
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* <div className="w-[93%] mx-auto border border-gray-200 rounded-md mb-20">
          <div className="w-[95%] mx-auto flex justify-between items-center py-2">
            <div className="bg-[#bfeaff] px-5 py-2 rounded-md">
              <button>All Actions</button>
            </div>
            <div className="text-gray-400">
              <button>Transactions</button>
            </div>
            <div className="text-gray-400">
              <button>Events</button>
            </div>
            <div className="text-gray-400">
              <button>Profile</button>
            </div>
            <div className="text-gray-400">
              <button>Settings</button>
            </div>
          </div>
        </div> */}
        <UserActionBody />
      </div>
    </section>
  );
};

export default UserActionTable;
