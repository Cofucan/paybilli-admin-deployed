import { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "../../utils/constants";
import { inputVariants } from "./FormInput";
import { VariantProps } from "class-variance-authority";

type SelectProps = {
  options: { value: string; name: string | null }[];
} &  VariantProps<typeof inputVariants> & ComponentPropsWithoutRef<"select"> ;

const FormSelect: FC<SelectProps> = ({ intent, options, className, ...attributes }) => {
  return (
    <select
      {...attributes}
      className={cn(inputVariants({ intent }), className)}
    >
      {options.map((x, i) => (
        <option
          value={x.name ?? ""}
          key={i}
          disabled={!x.name}
          selected={!x.name}
        >
          {x.value}
        </option>
      ))}
    </select>
  );
};
export default FormSelect;
