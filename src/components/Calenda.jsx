import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg w-80">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Select start date"
          dateFormat="dd-MMM-yyyy"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onFocus={(e) => e.target.blur()} // Prevent blur causing the calendar to close
        />
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-2">End Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Select end date"
          dateFormat="dd-MMM-yyyy"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onFocus={(e) => e.target.blur()} // Prevent blur causing the calendar to close
        />
      </div>
      <div className="pt-3 flex justify-end items-center mx-9">
        <button className="bg-[#3faae0] px-4 py-1 text-white hover:shadow-lg rounded-lg">
          Apply
        </button>
      </div>
    </div>
  );
};

export default DateRangePicker;
