import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const LoggedInAuthenticator = () => {
  return (
    <div className="bg-[#F5F7FA] w-full h-full">
      <div className="flex flex-col w-full">
        <div className="fixed top-0 w-full z-10">
          <Header />
        </div>
        <div className="flex max-md:flex-col smd:mt-10 lg:mt-20 xl:mt-[70px]">
          <div className="hidden xl:block z-0">
            <Sidebar />
          </div>
          <Outlet />
           {/* This will render the nested routes, like Dashboard */}
        </div>
      </div>
    </div>
  );
};

export default LoggedInAuthenticator;
