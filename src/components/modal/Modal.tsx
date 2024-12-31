import { FC, ReactNode, useEffect, useRef } from "react";
import { LiaTimesSolid } from "react-icons/lia";

export interface ModalProps {
  isVisible: boolean;
  toggleVisibility: () => void | Promise<void>;
  title: ReactNode;
  children: ReactNode;
  showClose?: boolean;
  isRounded?: boolean;
}
const Modal: FC<ModalProps> = ({
  isVisible,
  toggleVisibility,
  children,
  title,
  showClose = true,
  isRounded = true,
}) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isVisible) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isVisible]);

  return (
    <dialog
      ref={ref}
      onCancel={toggleVisibility}
      className={`p-6 ${isRounded ? "rounded-2xl" : ""}`}
    >
      <div className={"flex justify-between"}>
        {title}
        {showClose ? (
          <button onClick={toggleVisibility}>
            <span className='sr-only'>Close Modal</span>
            <LiaTimesSolid />
          </button>
        ) : null}
      </div>
      {children}
    </dialog>
  );
};

export default Modal;
