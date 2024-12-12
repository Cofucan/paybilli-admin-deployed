import React, { useState } from "react";
import { Table, Button } from "antd";
import UserProfileColumn from "../UserProfileTable/UserProfleColumn";
import TransactionData from "../UserProfileTable/UserProfileData";
import "./UserTransactionTable.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const UserTransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7; // Number of rows per page

  // Total number of pages
  const totalPages = Math.ceil(TransactionData.length / pageSize);

  // Handlers for next and previous buttons
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-white">
      <Table
        columns={UserProfileColumn()} // Use the columns component
        dataSource={TransactionData} // Use the data component
        pagination={{
          current: currentPage, // Set the current page
          pageSize: pageSize, // Set the number of rows per page
          onChange: (page) => setCurrentPage(page), // Handle page changes
          hideOnSinglePage: true, // Hide default pagination controls when there's only 1 page
        }}
        scroll={{ x: 768 }} // Ensures horizontal scroll on smaller screens
        className="custom-table"
      />
      <div className="flex justify-between my-4 mx-10 pb-10 space-x-2">
        <Button onClick={handlePrevious} disabled={currentPage === 1}>
          <FaArrowLeft className="text-xs" />
          Previous
        </Button>
        <Button onClick={handleNext} disabled={currentPage === totalPages}>
          <FaArrowRight className="text-xs" />
          Next
        </Button>
      </div>

      
    </div>
  );
};

export default UserTransactionTable;
