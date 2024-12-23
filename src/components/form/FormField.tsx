import { ComponentPropsWithoutRef, ReactNode } from "react";
import FormInput from "./FormInput.tsx";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/constants.ts";
import FormErrorText from "./FormErrorText.tsx";
import FormOtp from "./FormOtp.tsx";
import FormButton from "./FormButton.tsx";

export const formFieldVariants = cva("", {
  variants: {
    intent: {
      login: "w-full flex flex-col gap-3 lg:gap-5 text-xl text-slate-700",
    },
  },
});

export type FormFieldProps = ComponentPropsWithoutRef<"label"> &
  VariantProps<typeof formFieldVariants> & {
    children?: ReactNode;
  };

const FormField = ({
  className,
  intent,
  children,
  ...props
}: FormFieldProps) => {
  return (
    <label className={cn(formFieldVariants({ intent, className }))} {...props}>
      {children}
    </label>
  );
};

FormField.Input = FormInput;
FormField.Button = FormButton;
FormField.ErrorText = FormErrorText;
FormField.Otp = FormOtp;

export default FormField;
