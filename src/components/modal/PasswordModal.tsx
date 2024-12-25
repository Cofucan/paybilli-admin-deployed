// PasswordModal.tsx
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Modal from './Modal';


interface PasswordModalProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ isVisible, toggleVisibility }) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Modal isVisible={isVisible} toggleVisibility={toggleVisibility} title="Password Settings">
      <p className="text-gray-500">Update password for enhanced account Security</p>
      <form className="w-[90%] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2 relative">
            <label className="text-slate-800">Current Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="*******"
                className="border-2 border-light-grey-500 py-3 rounded-lg text-gray-500 focus:placeholder:text-sm custom-placeholder focus:ring-blue-300 focus:border-blue-400 w-full"
              />
              {passwordVisible ? (
                <FaEye
                  onClick={handlePasswordVisibility}
                  className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-gray-400 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={handlePasswordVisibility}
                  className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-gray-400 cursor-pointer"
                />
              )}
            </div>
          </div>
          {/* Repeat the same structure for "New Password" and "Confirm New Password" */}
          <div className="flex justify-between items-center mt-3 mb-10">
            <button className="border-2 border-gray-200 px-3 py-3 rounded-lg font-medium">
              Cancel
            </button>
            <button className="px-3 py-3 flex justify-center rounded-lg text-white bg-light-blue-500 hover:bg-light-blue hover:duration-700">
              Update Password
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default PasswordModal;
