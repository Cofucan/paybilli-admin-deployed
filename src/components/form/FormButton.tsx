import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/constants.ts";
import LoadingSpinner, { spinnerVariants } from "../loading/LoadingSpinner.tsx";

export const buttonVariants = cva("", {
  variants: {
    themeColor: {
      "full-blue": "bg-[#4cb8ed] border border-gray-100 text-white",
      "rounded-blue": "bg-white border-[#4cb8ed] text-[#4cb8ed]",
      "rounded-grey": "border-2 border-gray-200",
    },
    themeSize: {
      "3": "p-3",
      "36": "py-3 px-6",
    },
    intent: {
      admin: "flex gap-2  font-medium rounded-xl",
      login:
        "block w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-light-blue-500 p-5 text-lg font-medium text-white hover:bg-light-blue hover:duration-700 lg:gap-5 disabled:bg-light-blue",
    },
  },
});

interface FormButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  isSubmitted?: boolean;
  children?: ReactNode;
  size?: VariantProps<typeof spinnerVariants>["size"];
}

const FormButton = ({
  isSubmitted = false,
  intent,
  className,
  children,
  themeColor,
  themeSize,
  ...props
}: FormButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ themeColor, themeSize, intent, className }))}
      disabled={isSubmitted}
      {...props}
    >
      {isSubmitted ? <LoadingSpinner size={props.size} /> : children}
    </button>
  );
};
export default FormButton;
