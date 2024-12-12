import React, { useState } from "react";
import { Table, Button, Pagination } from "antd";
import "./UserTable.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { usersData } from "./UserData";
import { columns } from "./UserColumn";
import BulkButton from "../../components/BulkButton";
import VerifyUsersModal from "../../Modals/VerifyMultipleUserModal";
import VerifySupendedClick from "../../Modals/VerifySuspendedClick";

const UserTable = () => {
  const [filteredUsers, setFilteredUsers] = useState(usersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isActionDropdown, setIsActionDropdown] = useState({});
  const pageSize = 7;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSuspendedModalOpen, setIsSuspendedModalOpen] = useState(false);

  // Function to show the modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  const openSuspendedModal = () => {
    setIsSuspendedModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeSuspendedModal = () => {
    setIsSuspendedModalOpen(false);
  };

  const ToggleActionDropdown = (key) => {
    setIsActionDropdown((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle the dropdown for the specific row by key
    }));
  };

  const filterUsers = (filter) => {
    // Map display labels to actual data values
    const filterMap = {
      "All Users": "All",
      "Verified Users": "Verified",
      "Unverified Users": "Unverified",
      "Deactivated Accounts": "Deactivated",
      "Suspended Accounts": "Suspended",
    };

    const actualFilter = filterMap[filter] || filter;

    setSelectedFilter(actualFilter);

    setFilteredUsers(
      actualFilter === "All"
        ? usersData
        : usersData.filter((user) => user.status === actualFilter)
    );

    setCurrentPage(1); // Reset to the first page after filtering
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize);

  // Conditional button style
  const getButtonClass = (filter) => {
    const filterMap = {
      "All Users": "All",
      "Verified Users": "Verified",
      "Unverified Users": "Unverified",
      "Deactivated Accounts": "Deactivated",
      "Suspended Accounts": "Suspended",
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
      <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500 mb-5 border border-[#58bff2] lg:border-gray-200 rounded-xl py-2 px-4">
        {[
          "All Users",
          "Verified Users",
          "Unverified Users",
          "Deactivated Accounts",
          "Suspended Accounts",
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

      <div>
        {/* Render the BulkButton component and pass the openModal function */}
        <BulkButton
          onVerifyUsersClick={openModal}
          onVerifySuspendedClick={openSuspendedModal}
        />

        {/* Render the VerifyUsersModal conditionally */}
        {isModalOpen && <VerifyUsersModal onClose={closeModal} />}
        {isSuspendedModalOpen && (
          <VerifySupendedClick onClose={closeSuspendedModal} />
        )}
      </div>

      <Table
        columns={updatedColumns} // Use the updated columns
        dataSource={paginatedUsers}
        rowKey="key"
        pagination={false} // Disable default pagination
        className="custom-table overflow-x-auto z-0"
      />

      {/* {isActionDropdown && (
        <div className="absolute top-[49%] right-20">
          <UserActionDropdown />
        </div>
      )} */}

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

export default UserTable;
