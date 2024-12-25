import { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "../../utils/constants";
import { inputVariants } from "./FormInput";
import { VariantProps } from "class-variance-authority";

type TextAreaProps = VariantProps<typeof inputVariants> & ComponentPropsWithoutRef<"textarea">;

const FormsTextArea: FC<TextAreaProps> = ({ intent, className, ...attributes }) => {
    return (
        <textarea  {...attributes} className={cn(inputVariants({ intent, }), className)}></textarea >
    );
};
export default FormsTextArea;
