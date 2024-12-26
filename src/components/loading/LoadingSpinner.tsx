import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { cn } from "../../utils/constants.ts";

export const spinnerVariants = cva(
  "text-surface inline-block animate-spin rounded-full border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white",
  {
    variants: {
      size: {
        "4": "size-4 border-2",
        "6": "size-6 border-2",
        "8": "size-8 border-4",
        "10": "size-10 border-4",
      },
    },
    defaultVariants: {
      size: "8",
    },
  },
);
export type LoadingSpinnerProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof spinnerVariants> & {
    children?: ReactNode;
  };

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ className, size, ...props }) => {
  return (
    <div className={cn(spinnerVariants({ className, size }))} role='status' {...props}>
      <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
        Loading...
      </span>
    </div>
  );
};
export default LoadingSpinner;
