import React from "react";

const PermissionsList = ({ permissions, onToggle }) => {
  const permissionsArray = [
    { key: "manageBets", label: "Can manage bets" },
    { key: "viewWallets", label: "Can view user wallets" },
    { key: "approveTransactions", label: "Can approve transactions" },
    { key: "manageWithdrawals", label: "Can manage withdrawals" },
    { key: "viewRevenue", label: "Can view and edit revenue" },
    { key: "suspendUsers", label: "Can suspend users" },
    { key: "manageRoles", label: "Can manage roles" },
    { key: "accessAuditLogs", label: "Can access audit logs" },
    { key: "issueRefunds", label: "Can issue refunds" },
    { key: "manageContent", label: "Can manage content" },
  ];

  return (
    <div className="pt-5">
      {permissionsArray.map((item) => (
        <div
          key={item.key}
          className="flex items-center justify-between mb-4 pb-2"
        >
          <span className="text-black">{item.label}</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions[item.key]}
              onChange={() => onToggle(item.key)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer 
              peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute 
              after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
              after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3faae0]"></div>
          </label>
        </div>
      ))}
      <div className="text-center ">
        <button className="bg-[#3faae0] text-white font-semibold py-3 px-6 rounded">Save Preference</button>
      </div>
    </div>
  );
};

export default PermissionsList;
