import React from "react";
import ArrowDown from "../../assets/ArrowDown.svg";
import TableComponent from "../../Tables/AuditTrailTable/TableComponent";
import Footer from "../../components/Footer";

const AuditTrail = () => {
  return (
    <section className="w-full mt-10 lg:mt-5 xl:mt-0">
      <div className="w-full lg:w-[95%] mx-auto">
        <div className="mt-5 mx-4">
          <h1 className="text-[30px] py-7 text-[#1D1D1D] font-semibold">
            Audit Trail
          </h1>
        </div>
        <div className="mx-5 flex justify-end items-center">
          <button className="flex gap-2 px-6 py-3 font-semibold bg-[#4cb8ed] border border-[#4cb8ed] text-[#fff] rounded-xl">
            <img src={ArrowDown} alt="#" className="w-6 h-6 object-cover " />
            Export Data
          </button>
        </div>
        <TableComponent />
      </div>
      <div className="mt-48">
        <Footer />
      </div>
    </section>
  );
};

export default AuditTrail;
