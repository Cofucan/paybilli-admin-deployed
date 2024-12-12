import React, { useState } from "react";
import { Table, Button, Pagination } from "antd";
import "./EventTable.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { EventData } from "./EventData";
import { columns } from "./EventColumn";
import UserActionDropdown from "../../Modals/UserActionDropdown";

const EventTable = () => {
  const [filteredUsers, setFilteredUsers] = useState(EventData);
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

  const filterUsers = (filter) => {
    // Map display labels to actual data values
    const filterMap = {
      "All Bet": "All",
      "Open Bet": "Open",
      "Pending Bet": "Pending",
      "Closed Bet": "Closed",
      "Waiting For Approval": "Waiting",
    };

    const actualFilter = filterMap[filter] || filter;

    setSelectedFilter(actualFilter);

    setFilteredUsers(
      actualFilter === "All"
        ? EventData
        : EventData.filter((user) => user.status === actualFilter)
    );

    setCurrentPage(1); // Reset to the first page after filtering
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize);

  // Conditional button style
  const getButtonClass = (filter) => {
    const filterMap = {
      "All Bet": "All",
      "Open Bet": "Open",
      "Pending Bet": "Pending",
      "Closed Bet": "Closed",
      "Waiting For Approval": "Waiting",
    };

    const actualFilter = filterMap[filter] || filter;

    return selectedFilter === actualFilter
      ? "bg-[#93dbff] rounded-lg text-black bg-opacity-50"
      : "bg-white text-gray-500";
  };

  // Passing ToggleActionDropdown and isActionDropdown as props to columns
  const updatedColumns = columns(ToggleActionDropdown, isActionDropdown);

  return (
    <div className="p-6 bg-white overflow-x-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center text-gray-400 mb-5 border border-[#58bff2] lg:border-gray-200 rounded-xl py-2 px-4">
        {[
          "All Bet",
          "Open Bet",
          "Pending Bet",
          "Closed Bet",
          "Waiting For Approval",
        ].map((status) => (
          <button
            key={status}
            className={`mx-2 border-none px-5 py-3 ${getButtonClass(status)}`}
            onClick={() => filterUsers(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <Table
        columns={updatedColumns} // Use the updated columns with serial number
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
          total={filteredUsers.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
          className="text-blue-500"
        />

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * pageSize >= filteredUsers.length}
        >
          <FaArrowRight className="text-xs" />
          Next
        </Button>
      </div>
    </div>
  );
};

export default EventTable;
