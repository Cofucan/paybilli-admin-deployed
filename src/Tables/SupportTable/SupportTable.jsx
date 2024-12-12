import React, { useState } from "react";
import { Table, Button, Pagination } from "antd";
// import "./UserTable.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SupportData } from "../SupportTable/SupportData";
import { columns } from "../SupportTable/SupportColumn";


const SupportTable = () => {
  const [filterTickets, setfilterTickets] = useState(SupportData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isActionDropdown, setIsActionDropdown] = useState({});
  const pageSize = 7;  

  const ToggleActionDropdown = (key) => {
    setIsActionDropdown((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle the dropdown for the specific row by key
    }));
  };

  const filterWithdrawals = (filter) => {
    // Map display labels to actual data values
    const filterMap = {
     "All Tickets": "All",
      "Open Tickets": "Open",
      "Closed Tickets": "Closed",
    };

    const actualFilter = filterMap[filter] || filter;

    setSelectedFilter(actualFilter);

    setfilterTickets(
      actualFilter === "All"
        ? SupportData
        : SupportData.filter((user) => user.status === actualFilter)
    );

    setCurrentPage(1); // Reset to the first page after filtering
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedUsers = filterTickets.slice(startIndex, startIndex + pageSize);

  // Conditional button style
  const getButtonClass = (filter) => {
    const filterMap = {
      "All Tickets": "All",
      "Open Tickets": "Open",
      "Closed Tickets": "Closed",
    };

    const actualFilter = filterMap[filter] || filter;

    return selectedFilter === actualFilter
      ? "bg-[#93dbff] rounded-lg text-black bg-opacity-50 px-32"
      : "bg-white text-gray-500";
  };

  // Passing ToggleActionDropdown and isActionDropdown as props to columns
  const updatedColumns = columns(ToggleActionDropdown, isActionDropdown);

  return (
    <div className="p-6 bg-white overflow-x-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500 mb-5 border border-[#58bff2] lg:border-gray-200 rounded-xl py-2 px-4">
        {[
          "All Tickets",
          "Open Tickets",
          "Closed Tickets"
        ].map((status) => (
          <button
            key={status}
            className={`mx-2 border-none px-5 py-3 ${getButtonClass(status)}`}
            onClick={() => filterWithdrawals(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <Table
        columns={updatedColumns} // Use the updated columns
        dataSource={paginatedUsers}
        rowKey="key"
        pagination={false} // Disable default pagination
        className="custom-table overflow-x-auto z-0"
      />


      {/* Custom Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft className="text-xs" />
          Previous
        </Button>

        <Pagination
          current={currentPage}
          total={filterTickets.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
          className="text-blue-500"
        />

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * pageSize >= filterTickets.length}
        >
          <FaArrowRight className="text-xs" />
          Next
        </Button>
      </div>
    </div>
  );
};

export default SupportTable;
