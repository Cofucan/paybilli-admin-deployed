import { FC } from "react";
import { FieldError } from "react-hook-form";

const FormErrorText: FC<{ error: FieldError | undefined }> = ({ error }) => {
  if (error)
    return (
      <p className='text-base text-red-600' role='alert'>
        {error.message}
      </p>
    );
  return <></>;
};
export default FormErrorText;
