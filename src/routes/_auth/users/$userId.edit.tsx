import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ChangeEvent } from "react";
import { FaEye } from "react-icons/fa";
import SubPageHeader from "../../../components/custom-buttons/SubPageHeader";
import FormField from "../../../components/form/FormField";
import useCustomForm from "../../../components/form/useCustomForm";
import { useUserEdit, useUserGetById } from "../../../hooks/useUsersQuery";
import { BASE_URL } from "../../../utils/constants";
import { useCoreGetConstantsQuery } from "../../../hooks/useCoreQuery";

export const Route = createFileRoute('/_auth/users/$userId/edit')({
  component: RouteComponent,
})

interface EditForm {
  account_status: string
  role: string
}

function RouteComponent() {
  const { userId } = Route.useParams()
  // TODO: Add Skeleton Loading
  const userQuery = useUserGetById(userId)
  const constantsQuery = useCoreGetConstantsQuery()
  // Get User from Get User Query
  const {
    formState: { isSubmitting },
    register,
    handleSubmit,
    reset,
    formErrorHelper,
  } = useCustomForm<EditForm>()
  const navigate = useNavigate()
  const editFormMutate = useUserEdit()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleImageUpload(_event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.')
  }

  const onSubmit = handleSubmit(async ({ role, account_status }) => {
    await editFormMutate.mutateAsync({ id: userId, role, account_status })
  })

  async function onReset(): Promise<void> {
    reset()
    await navigate({ to: '/users/$userId', params: { userId } })
  }
  // section className='w-full h-full mt-16 smd:mt-20 lg:mt-10 xl:mt-0'>
  return (
    <main className="my-10 ml-14 mr-64">
      <SubPageHeader to="/users/$userId" params={{ userId }} title="Edit User" />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Display profile image if uploaded, otherwise show initials */}
          <div className="relative z-20 h-28 w-28">
            {userQuery.data?.profile_image_url ? (
              <img
                src={BASE_URL + userQuery.data.profile_image_url}
                alt="Profile"
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-dotted border-gray-300 bg-[#fbfafa] text-2xl">
                IMAGE
              </div>
            )}
          </div>

          {/* Upload button */}
          <label className="cursor-pointer font-semibold text-light-blue-500">
            <input
              type="file"
              className="hidden"
              onChange={handleImageUpload}
            />
            Upload profile image
          </label>
        </div>

        {/* View User Button */}
        <Link
          to="/users/$userId"
          className="flex items-center rounded-lg bg-light-blue-500 px-6 py-3 text-white hover:shadow-md"
          params={{ userId }}
        >
          <FaEye className="mr-2" />
          View User
        </Link>
      </div>
      <form
        className="mt-6 grid grid-cols-2 gap-6"
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <FormField intent={'admin'}>
          <span className="font-medium">Account Status</span>
          <FormField.Select
            intent={'admin'}
            disabled={constantsQuery.isLoading}
            options={(constantsQuery.data?.result.account_status ?? []).map(x => ({ title: x.display, value: x.value}))}
            {...register(
              'account_status',
              formErrorHelper('Status', { isRequired: true }),
            )}
          />
        </FormField>
        <FormField intent={'admin'}>
          <span className="font-medium">Role</span>
          <FormField.Select
            intent={'admin'}
            // disabled={userQuery.isLoading}
            // value={userQuery.data}
            options={
              [
                { value: 'user', title: 'User' },
                { value: 'admin', title: 'Admin' },
              ] as const
            }
            {...register('role', formErrorHelper('Role', { isRequired: true }))}
          />
        </FormField>
        {/* Action Buttons */}

        {/* Cancel Button */}
        <FormField.Button
          type="reset"
          intent={'admin'}
          themeColor={'rounded-grey'}
          themeSize={'3'}
          className="w-max bg-white"
        >
          Cancel
        </FormField.Button>

        {/* Save Changes Button */}
        <FormField.Button
          isSubmitted={isSubmitting}
          intent={'admin'}
          themeColor={'full-blue'}
          themeSize={'36'}
          className="max-w-max justify-self-end"
        >
          Save Changes
        </FormField.Button>
      </form>
    </main>
  )
}
