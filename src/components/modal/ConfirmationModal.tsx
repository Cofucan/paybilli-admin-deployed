import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { buttonVariants } from "../form/FormButton";
import FormField from "../form/FormField";
import Modal from "./Modal";
interface ConfirmationModalProps<T> {
  isVisible: boolean;
  toggleVisibility: () => void;
  data: T;
  title: string;
  text: ReactNode;
  btn: {
    onClose: (x: T) => void | Promise<void>;
    title: string;
    themeColor?: VariantProps<typeof buttonVariants>["themeColor"];
    className?: string;
  };
}
const ConfirmationModal = <T,>(props: ConfirmationModalProps<T>) => {
  async function handleClose() {
    props.toggleVisibility();
    await props.btn.onClose(props.data);
  }

  return (
    <Modal
      isVisible={props.isVisible}
      toggleVisibility={props.toggleVisibility}
      title={<h2 className='mb-2 text-lg font-semibold text-gray-800'>{props.title}</h2>}
      showClose={false}
    >
      <div>{props.text}</div>
      <div className='mt-6 flex w-[650px] justify-end gap-4'>
        <FormField.Button
          intent={"admin"}
          themeColor={"rounded-blue"}
          themeSize={"36"}
          onClick={() => {
            props.toggleVisibility();
          }}
        >
          Cancel
        </FormField.Button>
        <FormField.Button
          intent={"admin"}
          themeColor={props.btn.themeColor}
          themeSize={"36"}
          onClick={handleClose}
          className={props.btn.className}
        >
          {props.btn.title}
        </FormField.Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
