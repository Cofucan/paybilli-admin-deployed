import {useCallback, useRef, useState} from 'react';
import {twMerge} from 'tailwind-merge';

const OTPForm = ({ length = 4, className, inputProps, name }) => {
    const [otpValues, setOtpValues] = useState(Array(length).fill(''));
    const inputRefs = useRef(Array(length).fill(null));

    const handleInputChange = useCallback((index, value) => {
        if (!/^[0-9]{1}$/.test(value)) return

        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);

        // Move focus to next input if current input is filled
        if (value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

    }, [otpValues, length]);

    const handleKeyDown = useCallback((index, event) => {
        const input = event.currentTarget;

        switch (event.code) {
            case 'Backspace':
            case 'Delete':
                event.preventDefault();

                // If input is empty, move focus to previous input
                if (input.value.length === 0 && index > 0) {
                    inputRefs.current[index - 1]?.focus();

                    // Clear the previous input when moving back
                    const newOtpValues = [...otpValues];
                    newOtpValues[index - 1] = '';
                    setOtpValues(newOtpValues);
                } else {
                    // Clear current input
                    const newOtpValues = [...otpValues];
                    newOtpValues[index] = '';
                    setOtpValues(newOtpValues);
                }
                break;

            case 'ArrowLeft':
                if (index > 0) {
                    inputRefs.current[index - 1]?.focus();
                }
                break;

            case 'ArrowRight':
                if (index < length - 1) {
                    inputRefs.current[index + 1]?.focus();
                }
                break;
        }
    }, [otpValues, length]);

    return (
        <div className={twMerge("flex gap-4", className)}>
            {otpValues.map((value, index) => (
                <input
                    key={index}
                    ref={(el) => inputRefs.current[index] = el}
                    type="text"
                    pattern="\d*"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    {...inputProps}
                    className={twMerge("w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200", inputProps.className)}
                    aria-label={`OTP digit ${index + 1}`}
                    name={`${name}-${index}`}
                />
            ))}
        </div>
    );
};

export default OTPForm;