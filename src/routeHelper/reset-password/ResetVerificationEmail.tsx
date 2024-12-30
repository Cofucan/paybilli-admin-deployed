import Logo from "../../assets/logo.svg";
import { customFetch } from "../../utils/constants.js";
import PropTypes from "prop-types";
import useCustomForm from "../../components/form/useCustomForm.ts";
import { FC } from "react";
import FormField from "../../components/form/FormField.tsx";

interface ResetVerificationEmailForm {
  email: string;
}

interface ResetVerificationEmailProps {
  navigate: () => void;
  setEmail: (email: string) => void;
}

const ResetVerificationEmail: FC<ResetVerificationEmailProps> = ({ navigate, setEmail }) => {
  const {
    handleSubmit,
    register,
    formErrorHelper,
    formState: { isSubmitting, errors },
  } = useCustomForm<ResetVerificationEmailForm>();

  const onSubmit = handleSubmit(async (data) => {
    await customFetch.post("account/reset-password/", {
      json: data,
    });
    setEmail(data.email);
    navigate();
  });
  return (
    <div className="bg-light-grey">
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <div className="hidden lg:block lg:w-[40%]">
          <img src={Logo} alt="logo" width={500} />
        </div>
        <div className="w-[90vw] lg:w-[45vw]">
          <div className="my-10 flex items-center justify-center">
            <img src={Logo} width={150} alt="logo" />
          </div>
          <form
            className="border-2 border-light-grey-500 bg-white w-[80vw]  md:w-[40vw] space-y-10 ps-4 smd:px-5 md:px-8 py-6"
            onSubmit={onSubmit}>
            <h2 className="tracking text-center text-2xl font-semibold text-slate-800">Password Reset</h2>
            <h3 className="tracking text-center text-[15px] font-normal text-gray-500 lg:text-[18px]">
              Enter the email address you registered with and we will send you a link to create a
              new password.
            </h3>
            <FormField intent={"login"}>
              <span>Email</span>
              <FormField.Input
                type="email"
                placeholder={"Enter your email address"}
                intent={"login"}
                {...register(
                  "email",
                  formErrorHelper("Email", {
                    isRequired: true,
                  }),
                )}
                aria-invalid={errors.email ? "true" : "false"}
              />
              <FormField.ErrorText error={errors.email} />
            </FormField>
            <FormField.Button isSubmitted={isSubmitting} intent={"login"}>Send Verification Email</FormField.Button>
          </form>
        </div>
      </div>
    </div>
  );
};
ResetVerificationEmail.propTypes = {
  navigate: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default ResetVerificationEmail;
