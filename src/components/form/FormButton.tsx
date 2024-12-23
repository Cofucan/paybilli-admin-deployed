import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/constants.ts";
import LoadingSpinner, { spinnerVariants } from "../loading/LoadingSpinner.tsx";

export const buttonVariants = cva("", {
  variants: {
    intent: {
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
  ...props
}: FormButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ intent, className }))}
      disabled={isSubmitted}
      {...props}
    >
      {isSubmitted ? <LoadingSpinner size={props.size} /> : children}
    </button>
  );
};
export default FormButton;
