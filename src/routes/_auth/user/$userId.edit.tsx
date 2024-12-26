import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ChangeEvent } from "react";
import { FaEye } from "react-icons/fa";
import SubPageHeader from "../../../components/custom-buttons/SubPageHeader";
import FormField from "../../../components/form/FormField";
import useCustomForm from "../../../components/form/useCustomForm";

export const Route = createFileRoute("/_auth/user/$userId/edit")({
  component: RouteComponent,
});

interface EditForm {
  username: string;
  status: string;
  role: string;
}

function RouteComponent() {
  const { userId } = Route.useParams();
  const profileImage = null;
  // Get User from Get User Query
  const {
    formState: { isSubmitting },
    register,
    handleSubmit,
    reset,
    formErrorHelper,
  } = useCustomForm<EditForm>();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleImageUpload(_event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  async function onReset(): Promise<void> {
    reset();
    await navigate({ to: "/user/$userId", params: { userId } });
  }
  // section className='w-full h-full mt-16 smd:mt-20 lg:mt-10 xl:mt-0'>
  return (
    <main className='my-10 ml-14 mr-64'>
      <SubPageHeader to='/user/$userId' params={{ userId }} title='Edit User' />
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          {/* Display profile image if uploaded, otherwise show initials */}
          <div className='relative z-20 h-28 w-28'>
            {profileImage ? (
              <img
                src={profileImage}
                alt='Profile'
                className='h-full w-full rounded-full object-cover'
              />
            ) : (
              <div className='flex h-full w-full items-center justify-center rounded-full border-2 border-dotted border-gray-300 bg-[#fbfafa] text-2xl'>
                CN
              </div>
            )}
          </div>

          {/* Upload button */}
          <label className='cursor-pointer font-semibold text-light-blue-500'>
            <input type='file' className='hidden' onChange={handleImageUpload} />
            Upload profile image
          </label>
        </div>

        {/* View User Button */}
        <Link
          to='/user/$userId'
          className='flex items-center rounded-lg bg-light-blue-500 px-6 py-3 text-white hover:shadow-md'
          params={{ userId }}
        >
          <FaEye className='mr-2' />
          View User
        </Link>
      </div>
      <form className='mt-6 grid grid-cols-2 gap-6' onSubmit={onSubmit} onReset={onReset}>
        <FormField intent={"admin"}>
          <span className='font-medium'>Username</span>
          <FormField.Input
            intent={"admin"}
            placeholder='Enter Username'
            {...register(
              "username",
              formErrorHelper("User Name", { minLength: 3, maxLength: 200, isRequired: true }),
            )}
          />
        </FormField>
        <FormField intent={"admin"}>
          <span className='font-medium'>Account Status</span>
          <FormField.Select
            intent={"admin"}
            options={[
              { value: "Active", title: "active" },
              { value: "Inactive", title: "inactive" },
            ]}
            {...register("status", formErrorHelper("Status", { isRequired: true }))}
          />
        </FormField>
        <FormField intent={"admin"}>
          <span className='font-medium'>Role</span>
          <FormField.Select
            intent={"admin"}
            options={
              [
                { value: "member", title: "Member" },
                { value: "admin", title: "Admin" },
              ] as const
            }
            {...register("role", formErrorHelper("Role", { isRequired: true }))}
          />
        </FormField>
        {/* TODO: Remove Later */}
        <div></div>
        {/* Action Buttons */}

        {/* Cancel Button */}
        <FormField.Button
          type='reset'
          intent={"admin"}
          themeColor={"rounded-grey"}
          themeSize={"3"}
          className='w-max bg-white'
        >
          Cancel
        </FormField.Button>

        {/* Save Changes Button */}
        <FormField.Button
          isSubmitted={isSubmitting}
          intent={"admin"}
          themeColor={"full-blue"}
          themeSize={"36"}
          className='max-w-max justify-self-end'
        >
          Save Changes
        </FormField.Button>
      </form>
    </main>
  );
}
