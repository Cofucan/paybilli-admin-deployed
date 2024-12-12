import React, { useState } from "react";
import ImportImgs from "../components/ImportImgs";
import ViewDetailsRevenue from "./ViewDetailsRevenue/ViewDetailsRevenue";
import { Modal, Button } from "antd";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";

const RevenueActionDropdown = () => {
  const navigate = useNavigate();
  const [isViewModalVisible, setIsViewModalVisible] = useState(false); // State for "View Revenue Details" modal
  const [isRefundModalVisible, setIsRefundModalVisible] = useState(false); // State for "Refund User" modal
  const images = ImportImgs(); // Import images

  // Handlers for View Revenue Details Modal
  const showViewModal = () => setIsViewModalVisible(true);
  const handleViewCancel = () => setIsViewModalVisible(false);

  // Handlers for Refund User Modal
  const showRefundModal = () => setIsRefundModalVisible(true);
  const handleRefundCancel = () => setIsRefundModalVisible(false);

  return (
    <section>
      {/* Dropdown Container */}
      <div className="flex flex-col gap-3 border bg-white border-gray-300 rounded-md w-[14vw] h-full px-3 py-2 shadow-md">
        {/* View Revenue Details */}
        <div className="flex items-center gap-2">
          <img src={images.Eye} alt="View" />
          <button
            onClick={showViewModal}
            className="text-gray-600 text-sm font-medium hover:text-gray-800 transition-colors"
          >
            View Revenue Details
          </button>
        </div>

        {/* Edit Revenue */}
        <div className="flex items-center gap-2">
          <img src={images.Pen} alt="Edit" />
          <button onClick={() => navigate("/admin/revenue-form")} className="text-gray-600 text-sm font-medium hover:text-gray-800 transition-colors">
            Edit Revenue
          </button>
        </div>

        {/* Refund User */}
        <div className="flex items-center gap-2">
          <img src={images.Verified} alt="Refund" />
          <button
            onClick={showRefundModal}
            className="text-gray-600 text-sm font-medium hover:text-gray-800 transition-colors"
          >
            Refund User
          </button>
        </div>
      </div>

      {/* View Revenue Details Modal */}
      <ViewDetailsRevenue
        isModalVisible={isViewModalVisible}
        handleCancel={handleViewCancel}
      />

      {/* Refund User Modal */}
      <Modal
        title={<Title level={4}>Refund User?</Title>}
        open={isRefundModalVisible}
        onCancel={handleRefundCancel}
        footer={[
          <div className="flex gap-3 items-center justify-end">
            <button
              key="cancel"
              onClick={handleRefundCancel}
              className="px-4 py-2 border border-[#3faae0] text-[#3faae0] rounded-md"
            >
              Cancel
            </button>
            ,
            <button
              key="refund"
              onClick={() => {
                console.log("User refunded");
                setIsRefundModalVisible(false);
              }}
              className="px-4 py-2 bg-[#3faae0] text-white rounded-md"
            >
              Refund User
            </button>
            ,
          </div>,
        ]}
        centered
      >
        <p>Are you certain you want to refund the user?</p>
      </Modal>
    </section>
  );
};

export default RevenueActionDropdown;
