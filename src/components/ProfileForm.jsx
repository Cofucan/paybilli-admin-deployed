import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const navigate = useNavigate();
  // State variables for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [accountStatus, setAccountStatus] = useState("Active");
  const [role, setRole] = useState("Member");
  const [profileImage, setProfileImage] = useState(null);

  // Handle image upload and preview
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[90%] mx-auto my-10">
        {/* Profile Image Upload Section */}
        <div className="flex justify-between items-center w-[80%] mb-6">
          <div className="flex items-center space-x-4">
            {/* Display profile image if uploaded, otherwise show initials */}
            <div className="relative w-28 h-28 z-20">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full bg-[#fbfafa] border-2 border-dotted border-gray-300 rounded-full flex items-center justify-center text-2xl">
                  CN
                </div>
              )}
            </div>

            {/* Upload button */}
            <label className="text-light-blue-500 font-semibold cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
              Upload profile image
            </label>
          </div>

          {/* View User Button */}
          <button
            onClick={() => navigate("/admin/UserProfile")}
            className="flex items-center text-white bg-light-blue-500 px-6 py-3 rounded-lg hover:shadow-md"
          >
            <FaEye className="mr-2" />
            View User
          </button>
        </div>

        {/* Form Fields Section */}
        <div className="grid grid-cols-2 gap-6 mb-6 w-[80%]">
          {/* Username Input */}
          <div>
            <label className="block py-2 font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500"
            />
          </div>

          {/* Account Status Dropdown */}
          <div>
            <label className="block py-2 font-medium">Account Status</label>
            <select
              value={accountStatus}
              onChange={(e) => setAccountStatus(e.target.value)}
              className="w-full px-4 py-2 text-gray-400 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500"
            >
              <option className="text-sm">Active</option>
              <option className="text-sm">Inactive</option>
            </select>
          </div>

          {/* Email Input */}
          <div>
            <label className="block font-medium">Your Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500"
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label className="block font-medium">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 text-gray-400 text-sm rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500"
            >
              <option className="text-sm">Member</option>
              <option className="text-sm">Admin</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center w-[80%]">
          {/* Cancel Button */}
          <button className="text-black bg-white font-medium px-4 py-3 border rounded-lg">
            Cancel
          </button>

          {/* Save Changes Button */}
          <button className="bg-light-blue-500 text-sm text-white px-10 py-3 rounded-lg hover:shadow-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
