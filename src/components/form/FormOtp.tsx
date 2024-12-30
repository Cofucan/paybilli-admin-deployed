import { ComponentPropsWithoutRef, FC, KeyboardEvent, useCallback, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import FormInput from "../form/FormInput.tsx";

export interface FormOtpProps {
  length: number;
  className?: string;
  inputProps: ComponentPropsWithoutRef<"input">;
  name: string;
}

const FormOtp: FC<FormOtpProps> = ({ length = 4, className, inputProps, name }) => {
  const [otpValues, setOtpValues] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array<null>(length).fill(null));

  const handleInputChange = useCallback(
    (index: number, value: string) => {
      if (!/^[0-9]$/.test(value)) return;

      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Move focus to next input if current input is filled
      if (value && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [otpValues, length],
  );

  const handleKeyDown = useCallback(
    (index: number, event: KeyboardEvent<HTMLInputElement>) => {
      const input = event.currentTarget;

      switch (event.code) {
        case "Backspace":
        case "Delete":
          event.preventDefault();

          // If input is empty, move focus to previous input
          if (input.value.length === 0 && index > 0) {
            inputRefs.current[index - 1]?.focus();

            // Clear the previous input when moving back
            const newOtpValues = [...otpValues];
            newOtpValues[index - 1] = "";
            setOtpValues(newOtpValues);
          } else {
            // Clear current input
            const newOtpValues = [...otpValues];
            newOtpValues[index] = "";
            setOtpValues(newOtpValues);
          }
          break;

        case "ArrowLeft":
          if (index > 0) {
            inputRefs.current[index - 1]?.focus();
          }
          break;

        case "ArrowRight":
          if (index < length - 1) {
            inputRefs.current[index + 1]?.focus();
          }
          break;
      }
    },
    [otpValues, length],
  );

  return (
    <div className={twMerge("flex gap-4", className)}>
      {otpValues.map((value, index) => (
        <FormInput
          key={index}
          intent={"login"}
          ref={(el) => (inputRefs.current[index] = el)}
          type='text'
          pattern='\d*'
          maxLength={1}
          value={value}
          onChange={(e) => {
            handleInputChange(index, e.target.value);
          }}
          onKeyDown={(e) => {
            handleKeyDown(index, e);
          }}
          aria-label={`OTP digit ${(index + 1).toString()}`}
          name={`${name}-${index.toString()}`}
          {...inputProps}
        />
      ))}
    </div>
  );
};

export default FormOtp;
