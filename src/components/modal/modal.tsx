// Modal.tsx
import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  toggleVisibility,
  title,
  children,
}) => {
  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-0 bg-black opacity-20"
        onClick={toggleVisibility}
      ></div>

      {/* Modal Content */}
      <div className="z-20 grid place-items-center">
        <div className="absolute top-5 mt-14 w-[80%] rounded-3xl bg-white sm:mt-24 lg:left-[10rem] xl:mt-0 xl:w-[45%]">
          <div className="mx-auto w-[90%] py-5">
            <h1 className="text-xl font-medium">{title}</h1>
          </div>
          <div className="mx-auto w-[90%]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
