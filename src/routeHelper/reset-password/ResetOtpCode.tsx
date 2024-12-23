import Logo from "../../assets/logo.svg";
import { customFetch } from "../../utils/constants.js";
import PropTypes from "prop-types";
import { useAuth } from "../../context/AuthContext.jsx";
import { useCustomForm } from "../../components/form/useCustomForm.ts";
import { AuthResponse } from "../../utils/types.ts";
import { FC } from "react";
import FormField from "../../components/form/FormField.tsx";

interface ResetOtpCodeProps {
  navigate: () => void;
  email: string;
}

const ResetOtpCode: FC<ResetOtpCodeProps> = ({ navigate, email }) => {
  const { login } = useAuth();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useCustomForm<Record<string, number>>();

  const onSubmit = handleSubmit(async (data) => {
    const response = await customFetch.post("account/verify-token/", {
      json: { verify_token: Object.values(data).join("") },
    });
    login((await response.json()) as AuthResponse);
    navigate();
  });

  async function handleReset() {
    await customFetch.post("account/reset-password/", { json: { email } });
  }

  return (
    <div className="bg-light-grey">
      <div className="mx-auto flex items-center justify-between lg:w-[90%]">
        <div className="hidden lg:block lg:w-[40%]">
          <img src={Logo} alt="logo" width={500} />
        </div>
        <div className="mx-auto w-[95vw] lg:w-[50vw] xl:w-[40%]">
          <div className="my-10 flex items-center justify-center">
            <img src={Logo} width={100} alt="logo" />
          </div>
          <form
            className="border-2 border-light-grey-500 bg-white"
            onSubmit={onSubmit}
            onReset={handleReset}
          >
            <div className="py-5 text-center">
              <h2 className="text-2xl font-bold tracking-wide text-slate-800">
                Forgot Password
              </h2>
              <h3 className="mx-auto w-[70vw] py-3 text-[14px] font-normal text-gray-500 md:w-[30vw] lg:py-5 lg:text-[16px]">
                A 6 Digit Verification Code Has Been Sent To Your Email Address.
                Enter The 6 Digit Code Below
              </h3>
              <p className="font-nornmal mx-2 pb-5 text-[18px] lg:pt-5">
                Please paste (or type) your 6-digit code
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-10 lg:w-[45vw]">
              <FormField.Otp
                className={
                  "mx-8 grid w-[95%] grid-cols-3 gap-[26px] md:flex lg:mx-auto lg:w-[90%]"
                }
                inputProps={{
                  className: "border-2 border-gray-300 w-12 h-12  rounded-lg",
                }}
                length={6}
                name={"otp"}
              />

              <div className="flex flex-col items-center justify-center gap-10 lg:w-[80%]">
                <FormField.Button intent={"login"} isSubmitted={isSubmitting}>
                  Continue
                </FormField.Button>
                <button
                  type="reset"
                  className="text-[16px]font-normal pb-5 text-center text-slate-700 lg:pb-10"
                >
                  Resend Verification Code
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ResetOtpCode.propTypes = {
  navigate: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
export default ResetOtpCode;
