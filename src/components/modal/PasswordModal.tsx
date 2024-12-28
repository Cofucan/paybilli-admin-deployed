// PasswordModal.tsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Modal from "./Modal";

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
    <Modal isVisible={isVisible} toggleVisibility={toggleVisibility} title='Password Settings'>
      <p className='text-gray-500'>Update password for enhanced account Security</p>
      <form className='mx-auto w-[90%]'>
        <div className='flex flex-col gap-4'>
          <div className='relative flex w-full flex-col gap-2'>
            <label className='text-slate-800'>Current Password</label>
            <div className='relative'>
              <input
                type={passwordVisible ? "text" : "password"}
                name='password'
                placeholder='*******'
                className='custom-placeholder w-full rounded-lg border-2 border-light-grey-500 py-3 text-gray-500 focus:border-blue-400 focus:ring-blue-300 focus:placeholder:text-sm'
              />
              {passwordVisible ? (
                <FaEye
                  onClick={handlePasswordVisibility}
                  className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg text-gray-400'
                />
              ) : (
                <FaEyeSlash
                  onClick={handlePasswordVisibility}
                  className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg text-gray-400'
                />
              )}
            </div>
          </div>
          {/* Repeat the same structure for "New Password" and "Confirm New Password" */}
          <div className='mb-10 mt-3 flex items-center justify-between'>
            <button className='rounded-lg border-2 border-gray-200 px-3 py-3 font-medium'>
              Cancel
            </button>
            <button className='flex justify-center rounded-lg bg-light-blue-500 px-3 py-3 text-white hover:bg-light-blue hover:duration-700'>
              Update Password
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default PasswordModal;
