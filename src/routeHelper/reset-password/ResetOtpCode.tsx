import Logo from "../../assets/logo.svg";
import { customFetch } from "../../utils/constants.js";
import PropTypes from "prop-types";
import { useAuth } from "../../context/AuthContext.jsx";
import useCustomForm from "../../components/form/useCustomForm.ts";
import { AuthResponse } from "../../utils/types.ts";
import { FC, FormEvent } from "react";
import FormField from "../../components/form/FormField.tsx";

interface ResetOtpCodeProps {
  navigate: () => void;
  email: string;
}

const ResetOtpCode: FC<ResetOtpCodeProps> = ({ navigate, email }) => {
  const { login } = useAuth();
  const {
    formState: { isSubmitting },
  } = useCustomForm<Record<string, number>>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    const formData = Object.values(
      Object.fromEntries(new FormData(event.currentTarget)),
    ).join('')
    const response = await customFetch.post('account/verify-token/', {
      json: { verify_token: formData },
    })
      await login(await response.json() as AuthResponse, false)
    // TODO: Add Navigate to response.ok and Catch Errors
    navigate()
  }

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
            className="border-2 border-light-grey-500 bg-white px-6 space-y-5 text-center py-5"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <h2 className="text-2xl font-bold tracking-wide text-slate-800">Forgot Password</h2>
            <h3
              className="mx-auto w-[70vw] py-3 text-[14px] font-normal text-gray-500 md:w-[30vw] lg:text-[16px]">
              A 6 Digit Verification Code Has Been Sent To Your Email Address. Enter The 6 Digit
              Code Below
            </h3>
            <p className="font-nornmal mx-2 pb-5 text-[18px]">
              Please paste (or type) your 6-digit code
            </p>
            <FormField.Otp
              className={"grid grid-cols-3 gap-[26px] md:flex"}
              inputProps={{
                className: "size-12 p-0 grid place-items-center",
              }}
              length={6}
              name={"otp"}
            />

            <FormField.Button intent={"login"} isSubmitted={isSubmitting}>
              Continue
            </FormField.Button>
            <button
              type="reset"
              className="text-[16px]font-normal pb-5 text-center text-slate-700 lg:pb-10"
            >
              Resend Verification Code
            </button>
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
