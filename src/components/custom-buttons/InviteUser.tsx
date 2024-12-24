import React from "react";
import { buttonVariants } from "../form/FormButton.tsx";

const InviteUser = () => {
  return (
    <button className="flex gap-2 px-6 py-3 bg-[#4cb8ed] font-medium border border-gray-100 text-white rounded-xl"><img
      src="/src/assets/add.svg" alt="#" className="w-6 h-6 object-cover" />Invite User</button>
  );
};
export default InviteUser;
