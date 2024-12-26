import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../../utils/constants";
import { inputVariants } from "./FormInput";

type TextAreaProps = VariantProps<typeof inputVariants> & ComponentPropsWithoutRef<"textarea">;

const FormsTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function CustomSelect({ className, intent, ...props }, ref,) {
    return <textarea {...props} className={cn(inputVariants({ intent }), className)} ref={ref}></textarea>;
  }
);
export default FormsTextArea;
