import { useState } from "react";
import Envelope from "../../assets/Envelope.svg";
import DeviceMobile from "../../assets/DeviceMobile.svg";

const NotificationSchedule = () => {
  // Toggle switch state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [lowPriorityEmails, setLowPriorityEmails] = useState(false);
  const [mobileNotifications, setMobileNotifications] = useState(true);

  // Dropdown state
  const [startTime, setStartTime] = useState("00:00PM");
  const [endTime, setEndTime] = useState("00:00AM");
  const [defaultTime, setDefaultTime] = useState("00:00PM");

  return (
    <div className="p-6 min-h-screen w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Notification Schedule</h2>
      <p className="text-gray-600 mb-4">
        You'll only receive notifications in the hours that you choose. Outside
        of those times, notifications will be paused.
      </p>

      {/* Notification Time Selection */}
      <div className="flex items-center space-x-4 mb-4">
        {/* <label className="block text-gray-600 mb-1 ">Select</label> */}
        <div className="flex justify-between items-center w-[70%] gap-5">
          <input
            placeholder="Select"
            className="block p-2 border border-gray-300 rounded-lg text-gray-600 mb-1 placeholder:text-[#111] bg-gray-50"
          />
          <div className="flex-1">
            <div className="relative">
              <select
                className="w-full appearance-none p-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              >
                <option>00:00PM</option>
                <option>01:00PM</option>
                <option>02:00PM</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a.5.5 0 01-.364-.14l-3.5-3a.5.5 0 01.728-.684L10 10.792l3.136-2.616a.5.5 0 11.728.684l-3.5 3A.5.5 0 0110 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <span className="text-gray-600">to</span>

          <div className="flex-1">
            {/* <label className="block text-gray-600 mb-1">End</label> */}
            <div className="relative">
              <select
                className="w-full appearance-none p-3 border border-gray-300 rounded-md text-gray-700 bg-gray-50"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              >
                <option>00:00AM</option>
                <option>01:00AM</option>
                <option>02:00AM</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a.5.5 0 01-.364-.14l-3.5-3a.5.5 0 01.728-.684L10 10.792l3.136-2.616a.5.5 0 11.728.684l-3.5 3A.5.5 0 0110 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Default Notification Time */}
      <label className="block text-gray-600 mb-1">
        Choose default time for notification
      </label>
      <div className="relative w-[20%]">
        <select
          className="w-full appearance-none p-2 mb-6 border border-gray-300 rounded-md text-gray-700 bg-gray-50"
          value={defaultTime}
          onChange={(e) => setDefaultTime(e.target.value)}
        >
          <option>00:00PM</option>
          <option>01:00PM</option>
          <option>02:00PM</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          {/* <img src={Envelope} alt="Envelope" className="object-cover" /> */}
        </div>
      </div>

      <p className="text-gray-600 mb-8">
        Reminders that you set for a specific day (such as ‘tomorrow’) will be
        sent at the time that you select.
      </p>

      {/* Notification Method */}
      <h2 className="text-2xl font-semibold mb-4">Notification Method</h2>

      {/* Email Notification */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <img src={Envelope} alt="Envelope" className="object-cover" />
          <div>
            <p className="text-gray-700 font-medium">Email</p>
            <p className="text-sm text-gray-500">
              Send me email notification for mentions and direct message
            </p>
          </div>
        </div>
        <button
          className={`relative inline-flex h-6 w-12 items-center rounded-full ${
            emailNotifications ? "bg-purple-500" : "bg-gray-300"
          }`}
          onClick={() => setEmailNotifications(!emailNotifications)}
        >
          <span
            className={`h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
              emailNotifications ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {/* Low Priority Emails */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div>
            <p className="text-sm text-gray-500">
              Delay low priority emails outside of work hours until the next day
            </p>
          </div>
        </div>
        <button
          className={`relative inline-flex h-6 w-12 items-center rounded-full ${
            lowPriorityEmails ? "bg-purple-500" : "bg-gray-300"
          }`}
          onClick={() => setLowPriorityEmails(!lowPriorityEmails)}
        >
          <span
            className={`h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
              lowPriorityEmails ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {/* Mobile Notification */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <img src={DeviceMobile} alt="Envelope" className="object-cover" />
          <div>
            <p className="text-gray-700 font-medium">
              Mobile push notifications
            </p>
            <p className="text-sm text-gray-500">
              For all notifications, alerts, and updates.
            </p>
          </div>
        </div>
        <button
          className={`relative inline-flex h-6 w-12 items-center rounded-full ${
            mobileNotifications ? "bg-purple-500" : "bg-gray-300"
          }`}
          onClick={() => setMobileNotifications(!mobileNotifications)}
        >
          <span
            className={`h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
              mobileNotifications ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default NotificationSchedule;
