import Logo from "../../assets/logo.svg";
import { FC } from "react";
import { useAuth } from "../../context/AuthContext.tsx";
import { customFetch } from "../../utils/constants.ts";
import useCustomForm from "../../components/form/useCustomForm.ts";
import { AuthResponse } from "../../utils/types.ts";
import FormField from "../../components/form/FormField.tsx";

interface ResetNewLoginForm {
  email: string;
  password: string;
  confirm_password: string;
}

const ResetNewLogin: FC<{ navigate: () => void }> = ({ navigate }) => {
  const { login } = useAuth();
  const {
    handleSubmit,
    register,
    formErrorHelper,
    formState: { isSubmitting, errors },
  } = useCustomForm<ResetNewLoginForm>();

  const onSubmit = handleSubmit(async (data) => {
    const response = await customFetch.post("account/set-password/", {
      json: data,
    });
    await login((await response.json()) as AuthResponse, false);
    navigate();
  });

  return (
    <div className='bg-light-grey'>
      <div className='mx-auto flex w-[85%] items-center justify-between'>
        <div className='hidden lg:block lg:w-[40%]'>
          <img src={Logo} alt='logo' width={500} />
        </div>

        <div className='w-[90vw] lg:w-[45%]'>
          <div className='my-3 flex items-center justify-center'>
            <img src={Logo} width={100} alt='logo' />
          </div>
          <div className='border border-light-grey-500 bg-white shadow'>
            <div className='py-5 text-center'>
              <h2 className='text-3xl font-semibold'>Admin</h2>
              <h3 className='pt-2 text-2xl font-normal text-gray-500'>Welcome Back</h3>
            </div>
            <form className='mx-auto flex flex-col gap-3 px-7' onSubmit={onSubmit}>
              <FormField intent={"login"}>
                <span>Email</span>
                <FormField.Input
                  type='email'
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
              <FormField intent={"login"}>
                <span>Password</span>
                <FormField.Input
                  type={"password"}
                  intent={"login"}
                  {...register(
                    "password",
                    formErrorHelper("Password", {
                      isRequired: true,
                      minLength: 6,
                      maxLength: 50,
                    }),
                  )}
                />
                <FormField.ErrorText error={errors.password} />
              </FormField>

              {/*retype password */}
              <FormField intent={"login"}>
                <span>Confirm Password</span>
                <FormField.Input
                  type={"password"}
                  intent={"login"}
                  {...register(
                    "confirm_password",
                    formErrorHelper("Confirm Password", {
                      validate: (value, formValues) => value === formValues.password,
                    }),
                  )}
                />
                <FormField.ErrorText error={errors.confirm_password} />
              </FormField>
              <div className='my-5'>
                <FormField.Button size={"6"} isSubmitted={isSubmitting} intent={"login"}>
                  Update Password
                </FormField.Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetNewLogin;
