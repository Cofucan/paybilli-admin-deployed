import React from "react";
import ArrowBack from "../../assets/arrow_back.svg";
import { Table, Tag } from "antd";
import ArrowDown from "../../assets/ArrowDown.svg";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: <p className="font-bold">Date & Time</p>,
    dataIndex: "dateTime",
    key: "dateTime",
    className: "text-left text-[16px] px-4 py-2 text-[#475467]",
  },
  {
    title: <p className="font-bold">Action</p>,
    dataIndex: "action",
    key: "action",
    className: "text-left text-[16px] px-4 py-2 text-[#475467]",
  },
  {
    title: <p className="font-bold">Affected Item</p>,
    dataIndex: "affectedItem",
    key: "affectedItem",
    className: "text-left text-[16px] px-4 py-2 text-[#475467]",
  },
  {
    title: <p className="font-bold">Device</p>,
    dataIndex: "device",
    key: "device",
    className: "text-left text-[16px] px-4 py-2 text-[#475467]",
  },
  {
    title: <p className="font-bold">IP Address</p>,
    dataIndex: "ipAddress",
    key: "ipAddress",
    className: "text-left text-[16px] px-4 text-[#475467]",
  },
  {
    title: <p className="font-bold">Status</p>,
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = "#03A900";
      let bgcolor = "#EAFFF3";
      let bg2color = "#03A900";

      if (status === "Failed") {
        color = "#FF4D4F"; // Red color for text
        bgcolor = "#FFF1F0"; // Light red background
        bg2color = "#DC2626";
      } else if (status === "Pending") {
        color = "#AC9D16"; // Gold color for text
        bgcolor = "#FAFDD4"; // Light yellow background
        bg2color = "#AC9D16";
      }

      return (
        <div
          className="flex items-center justify-center"
          style={{
            backgroundColor: bgcolor,
            width: "103px",
            padding: "0 3px",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              backgroundColor: bg2color,
              height: "6px",
              width: "6px",
              borderRadius: "100%",
            }}
          ></div>
          <Tag
            key={status}
            style={{
              color: color,
              backgroundColor: bgcolor,
              borderColor: bgcolor,
              fontSize: "15px",
            }}
          >
            {status}
          </Tag>
        </div>
      );
    },
  },
];

const data = [
  {
    key: "1",
    dateTime: (
      <p className="leading-4">
        2024-07-18 <br></br>
        <span>14:23</span>
      </p>
    ),
    action: "Created a New Bet",
    affectedItem: "Bet ID: 124343",
    device: "Chrome",
    ipAddress: "192.168.1.1",
    status: "Successful",
  },
  {
    key: "2",
    dateTime: (
      <p className="leading-4">
        2024-07-18 <br></br>
        <span>14:23</span>
      </p>
    ),
    action: "Deactivated User Account",
    affectedItem: "John Samuel",
    device: "Safari",
    ipAddress: "198.168.1.1",
    status: "Failed",
  },
  {
    key: "3",
    dateTime: (
      <p className="leading-4">
        2024-07-18 <br></br>
        <span>14:23</span>
      </p>
    ),
    action: "Approved Withdrawal",
    affectedItem: "Transaction ID: WDL23",
    device: "Safari",
    ipAddress: "198.168.1.1",
    status: "Pending",
  },
  {
    key: "4",
    dateTime: (
      <p className="leading-4">
        2024-07-18 <br></br>
        <span>14:23</span>
      </p>
    ),
    action: "Closed Bet",
    affectedItem: "Bet ID: 32428",
    device: "Safari",
    ipAddress: "198.168.1.1",
    status: "Successful",
  },
  {
    key: "5",
    dateTime: (
      <p className="leading-4">
        2024-07-18 <br></br>
        <span>14:23</span>
      </p>
    ),
    action: "Updated Bet Odds",
    affectedItem: "Bet ID: 5254",
    device: "Safari",
    ipAddress: "198.168.1.1",
    status: "Successful",
  },
  {
    key: "6",
    dateTime: (
      <p className="leading-4">
        2024-07-18 <br></br>
        <span>14:23</span>
      </p>
    ),
    action: "Reversed Transaction",
    affectedItem: "Transaction ID: TXN12423",
    device: "Safari",
    ipAddress: "198.168.1.1",
    status: "Pending",
  },
];

const ActivityLogs = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full">
      <div className="flex justify-between pt-10 xl:pt-0 items-center">
        <div className="w-full xl:w-[70%] xl:mx-auto mt-14 smd:mt-14 lg:mt-12 xl:mt-0">
          <div className="flex items-center gap-2">
            <img src={ArrowBack} alt="arrowback" />
            <div>
              <button onClick={() => navigate("/admin/setting")} className="text-xl xl:text-[34px] xl:py-2 text-[#1D1D1D] leading-[28px] font-semibold">
                Activity Logs
              </button>
            </div>
          </div>
          <p className="text-gray-500 hidden xl:block">
            If you notice suspicious activity, please change your password
            immediately
          </p>
        </div>
        <div className="pt-16 xl:pt-0">
          <button
            onClick={() => navigate("/admin/setting")}
            className="text-[#4cb8ed] rounded-md smd:px-20 xl:py-14 text-sm xl:text-lg font-semibold tracking-wide"
          >
            Change Password
          </button>
        </div>
      </div>
      <div className="w-[90%] mx-auto py-5 block xl:hidden">
        <p className="text-gray-500">
          If you notice suspicious activity, please change your password
          immediately
        </p>
      </div>

      <div className="w-[93%] mx-3 xl:mx-5">
        <div className="rounded-2xl border-2 border-[#E4E7EC] overflow-x-auto">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="custom-table"
          />
        </div>
      </div>

      <div className="flex justify-end p-5">
        <button className="flex gap-2 px-5 py-3 mx-10 bg-[#4cb8ed] border border-gray-100 text-white rounded-xl">
          <img src={ArrowDown} alt="#" className="w-6 h-6 object-cover" />
          Export Data
        </button>
      </div>

      <div className="bg-white mt-52">
        <Footer />
      </div>
    </section>
  );
};

export default ActivityLogs;
("");
