import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import NotificationSchedule from "../components/sections/NotificationSchedule";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const NotificationSettings = () => {
  const [selectedOptions, setSelectedOptions] = useState([
    "Financial Transactions",
    "User Actions",
    "Security Alerts",
  ]);

  const options = [
    "System Alerts",
    "Bet Updates",
    "Financial Transactions",
    "User Actions",
    "Nothing",
    "Bet Updates",
    "Financial Transactions",
  ];

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <section className="w-full h-full mt-16 smd:mt-20 lg:mt-10 xl:mt-0">
      <div className="w-[90%] mx-auto">
        <NavLink
          to={"/admin/notification"}
          className="flex items-center gap-4 pt-10"
        >
          <FaArrowLeftLong className="text-2xl text-black hover:text-black" />
          <h1 className="text-xl smd:text-[34px] text-[#1D1D1D] leading-[28px] font-semibold">
            Notification Settings
          </h1>
        </NavLink>
        <div className="p-6 bg-gray-100 w-full mx-auto">
          <h2 className="text-lg font-semibold mb-4">Notify me about</h2>
          <div className="space-y-4">
            {options.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="notification"
                  value={option}
                  className="form-checkbox text-purple-600"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <NotificationSchedule />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default NotificationSettings;
