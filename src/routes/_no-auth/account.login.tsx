import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import Logo from "../../assets/logo.svg";
import FormField from "../../components/form/FormField.tsx";
import useCustomForm from "../../components/form/useCustomForm.ts";
import { useAuth } from "../../context/AuthContext.tsx";
import { customFetch, sleep } from "../../utils/constants.ts";
import { AuthResponse } from "../../utils/types.ts";

export const Route = createFileRoute("/_no-auth/account/login")({
  component: RouteComponent,
});

interface LoginForm {
  email: string;
  password: string;
}

function RouteComponent() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const search = Route.useSearch();
  const {
    handleSubmit,
    register,
    formErrorHelper,
    formState: { isSubmitting, errors },
  } = useCustomForm<LoginForm>();

  const onSubmit = handleSubmit(async (data) => {
    const response = await customFetch.post("account/login/", {
      json: data,
    });
    await login((await response.json()) as AuthResponse);
    await sleep(1);
    await navigate({ to: search.redirect ?? "/" });
  });

  return (
    <div className='bg-light-grey'>
      <div className='mx-auto flex w-[95%] items-center justify-between lg:w-[85%]'>
        <div className='hidden lg:block lg:w-[40%]'>
          <img src={Logo} alt='logo' width={500} />
        </div>
        <div className='w-[96vw] lg:w-[45%]'>
          <div className='my-3 flex items-center justify-center'>
            <img src={Logo} width={100} alt='logo' />
          </div>
          <div className='mx-4 border border-light-grey-500 bg-white px-4 shadow'>
            <div className='py-5 text-center'>
              <h2 className='text-3xl font-semibold'>Admin</h2>
              <h3 className='pt-5 text-2xl font-normal text-gray-500'>Welcome Back</h3>
            </div>
            <form className='space-y-6 lg:space-y-8' onSubmit={onSubmit}>
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
              <FormField.Button intent={"login"} isSubmitted={isSubmitting} size={"6"}>
                Login
              </FormField.Button>
              <div className='mx-auto mb-5 flex items-center justify-between lg:gap-5'>
                <p className='text-lg font-light text-gray-500'>Forgot Password?</p>
                <Link to='/account/reset-password' className='text-lg font-light text-gray-500'>
                  Click Here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
