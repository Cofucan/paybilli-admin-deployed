import React from "react";
import { Table, Space } from "antd";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import completed from "../assets/Badge-completed.svg";
import failed from "../assets/Badge-failed.svg";
import pending from "../assets/Badge-pending.svg";
import action from "../assets/Eye.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";

const data = [
  {
    key: "1",
    user: {
      img: <img src={icon1} alt="icon1" className="w-8 h-8" />,
      name: "Cynthia Boyega",
      username: "@JohnB",
    },
    amount: "₦25,000",
    type: "Bet",
    status: "Completed",
    statusColor: "green",
    date: "29 Jul, 2024",
    time: "04:30pm",
    id: "WCD134G",
  },
  {
    key: "2",
    user: {
      img: <img src={icon1} alt="icon1" className="w-8 h-8" />,
      name: "Sarah Adekunle",
      username: "@Sarah",
    },
    amount: "$500",
    type: "Deposit",
    status: "Failed",
    statusColor: "red",
    date: "29 Jul, 2024",
    time: "04:30pm",
    id: "RCU45H7",
  },
  {
    key: "3",
    user: {
      img: <img src={icon2} alt="icon1" className="w-8 h-8" />,
      name: "John Oke",
      username: "@John",
    },
    amount: "₦25,000",
    type: "Payout",
    status: "Pending",
    statusColor: "orange",
    date: "29 Jul, 2024",
    time: "04:30pm",
    id: "WCD134G",
  },
  {
    key: "4",
    user: {
      img: <img src={icon2} alt="icon1" className="w-8 h-8" />,
      name: "Faith Chukwu",
      username: "@Faith",
    },
    amount: "₦25,000",
    type: "Refund",
    status: "Failed",
    statusColor: "red",
    date: "29 Jul, 2024",
    time: "04:30pm",
    id: "RCU45H7",
  },
  {
    key: "5",
    user: {
      img: <img src={icon1} alt="icon1" className="w-8 h-8" />,
      name: "Donatus Agukwe",
      username: "@Donatus",
    },
    amount: "₦25,000",
    type: "Deposit",
    status: "Pending",
    statusColor: "orange",
    date: "29 Jul, 2024",
    time: "04:30pm",
    id: "WCD134G",
  },
];

const columns = [
  {
    title: "User",
    dataIndex: "user",
    key: "user",
    render: (user) => (
      <Space size="middle">
        <input
          type="checkbox"
          className="focus:outline-none focus:ring-0 border-none bg-gray-100 rounded-md p-2"
        />
        <div>{user.img}</div>
        <div>
          <div className="font-bold">{user.name}</div>
          <div className="text-gray-500">{user.username}</div>
        </div>
      </Space>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Transaction Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status, record) => {
      let icon;
      if (status === "Completed") {
        icon = <img src={completed} alt="completed" />;
      } else if (status === "Failed") {
        icon = <img src={failed} alt="failed" />;
      } else if (status === "Pending") {
        icon = <img src={pending} alt="pending" />;
      }
      return <Space size="middle">{icon}</Space>;
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (date, record) => (
      <>
        <div>{date}</div>
        <div className="text-gray-500">{record.time}</div>
      </>
    ),
  },
  {
    title: "Transaction ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "",
    key: "action",
    render: () => (
      <Space size="middle">
        <HiOutlineDotsVertical className="w-5 h-5"/>
      </Space>
    ),
  },
];

const TransactionsDashboard = () => {
  const rowClassName = (key, index) => {
    return index % 2 === 0 ? "bg-gray-50" : "bg-white";
  };

  return (
    <div className="bg-white rounded-md overflow-x-auto my-10">
      <div className="mt-5 border-b bg-white p-4 rounded-t-md">
        <h1 className="text-xl font-semibold">Latest Transactions</h1>
      </div>
      <div className="pe-5">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          rowClassName={rowClassName}
          className="custom-table"
        />
      </div>
      <div className="flex justify-end p-5">
        <button className="px-4 py-1 text-xl border border-gray-100 text-[#3faae0] rounded-xl">
          See All
        </button>
      </div>
    </div>
  );
};

export default TransactionsDashboard;
