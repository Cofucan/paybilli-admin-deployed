import React from "react";;
import AdminHeader from "./AdminHeader";
import AdminTableHeader from "../../Tables/AdminTable/AdminTableHeader";

const Administrators = () => {
  return (
    <section className="relative w-full">
      <div className="lg:w-full">
        <div className="w-[95%] mx-auto mt-14 smd:mt-14 lg:mt-8 xl:mt-8">
          <AdminHeader />
        </div>
      </div>
      <div className="">
        <AdminTableHeader />
      </div>
    </section>
  );
};

export default Administrators;
