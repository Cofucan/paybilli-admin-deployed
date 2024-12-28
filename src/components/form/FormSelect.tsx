import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../../utils/constants";
import { inputVariants } from "./FormInput";
import { VariantProps } from "class-variance-authority";

type SelectProps = {
  options: { title?: string; value: string }[];
} & VariantProps<typeof inputVariants> &
  ComponentPropsWithoutRef<"select">;

const FormSelect = forwardRef<HTMLSelectElement, SelectProps>(function CustomSelect(
  { className, intent, options, ...props },
  ref,
) {
  return (
    <select ref={ref} {...props} className={cn(inputVariants({ intent }), className)}>
      {options.map((x, i) => (
        <option value={x.value} key={i} disabled={!x.value}>
          {x.title}
        </option>
      ))}
    </select>
  );
});
export default FormSelect;
