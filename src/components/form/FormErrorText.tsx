import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
const FormErrorText = forwardRef<HTMLInputElement, { error: FieldError | undefined }>(function CustomInput(
  { error },
  ref,
) {
  if (error)
    return (
      <p className='text-base text-red-600' role='alert' ref={ref}>
        {error.message}
      </p>
    );
  return <></>;
});
export default FormErrorText;
