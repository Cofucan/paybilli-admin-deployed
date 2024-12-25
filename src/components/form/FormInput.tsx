import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import { cn } from "../../utils/constants.ts";
import { cva, VariantProps } from "class-variance-authority";
import FormInputPassword from "./FormInputPassword.tsx";

export const inputVariants = cva("", {
  variants: {
    intent: {
      admin: "w-full px-4 py-2 border-2 border-gray-200 rounded-lg placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-light-blue-500",
      login:
        "border-light-grey-500 rounded-lg border-2 p-5 placeholder:text-lg focus:border-blue-400 focus:ring-blue-300 focus:placeholder:text-sm w-full custom-placeholder",
    },
  },
});
export type InputProps = ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof inputVariants> & {
    children?: ReactNode;
  };

const FormInput = forwardRef<HTMLInputElement, InputProps>(function CustomInput(
  { className, intent, type = "text", ...props },
  ref,
) {
  const inputClassName = cn(inputVariants({ intent }), className);
  if (type === "password")
    return (
      <FormInputPassword
        intent={intent}
        className={inputClassName}
        {...props}
        ref={ref}
      />
    );

  return <input type={type} className={inputClassName} ref={ref} {...props} />;
});

export default FormInput;
