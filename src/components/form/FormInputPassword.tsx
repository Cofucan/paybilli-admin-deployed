import { forwardRef, useState } from "react";
import { cn } from "../../utils/constants.ts";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { InputProps, inputVariants } from "./FormInput.tsx";

const FormInputPassword = forwardRef<HTMLInputElement, InputProps>(
  function CustomPassword({ intent, className, ...props }, ref) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handlePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    return (
      <div className="relative">
        <input
          className={cn(inputVariants({ intent, className }))}
          name={"password"}
          placeholder={"Type Password ..."}
          {...props}
          type={passwordVisible ? "text" : "password"}
          ref={ref}
        />
        {passwordVisible ? (
          <FaEye
            onClick={handlePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-500"
          />
        ) : (
          <FaEyeSlash
            onClick={handlePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-500"
          />
        )}
      </div>
    );
  },
);

export default FormInputPassword;
