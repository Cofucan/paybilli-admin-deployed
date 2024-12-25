import { createFileRoute, Link } from '@tanstack/react-router'
import FormField from '../../../components/form/FormField'
import { useCustomForm } from '../../../components/form/useCustomForm'
import { FaEye } from 'react-icons/fa'
import { ChangeEvent } from 'react'

export const Route = createFileRoute('/_auth/user/$userId/edit')({
    component: RouteComponent,
})

function RouteComponent() {
    const { userId } = Route.useParams()
    const profileImage = null
    // Get User from Get User Query
    const { formState: { isSubmitting } } = useCustomForm()
    function handleImageUpload(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.')
    }

    return <>
        <div className='flex justify-between items-center w-[80%] mb-6'>
            <div className='flex items-center space-x-4'>
                {/* Display profile image if uploaded, otherwise show initials */}
                <div className='relative w-28 h-28 z-20'>
                    {profileImage ? (
                        <img
                            src={profileImage}
                            alt='Profile'
                            className='w-full h-full object-cover rounded-full'
                        />
                    ) : (
                        <div className='w-full h-full bg-[#fbfafa] border-2 border-dotted border-gray-300 rounded-full flex items-center justify-center text-2xl'>
                            CN
                        </div>
                    )}
                </div>

                {/* Upload button */}
                <label className='text-light-blue-500 font-semibold cursor-pointer'>
                    <input
                        type='file'
                        className='hidden'
                        onChange={handleImageUpload}
                    />
                    Upload profile image
                </label>
            </div>

            {/* View User Button */}
            <Link
                to="/user/$userId"
                className='flex items-center text-white bg-light-blue-500 px-6 py-3 rounded-lg hover:shadow-md' params={{ userId }}            >
                <FaEye className='mr-2' />
                View User
            </Link>
        </div >
        <form>

            <FormField>
                <span>Username</span>
                <FormField.Input intent={"admin"} placeholder='Enter Username' />
            </FormField>
            <FormField>
                <span>Account Status</span>
                <FormField.Select intent={"admin"} options={[{ value: "active", name: "Active" }, { value: "inactive", name: "Inactive" }]}></FormField.Select>
            </FormField>
            <FormField>
                <span>Role</span>
                <FormField.Select intent={"admin"} options={[{ value: "member", name: "Member" }, { value: "admin", name: "Admin" }]}></FormField.Select>
            </FormField>
            <FormField>
                <span>Username</span>
                <FormField.Input intent={"admin"} placeholder='Enter Username' />
            </FormField>
            {/* Action Buttons */}
            <div className='flex justify-between items-center w-[80%]'>
                {/* Cancel Button */}
                <FormField.Button type='reset' className='text-black bg-white font-medium px-4 py-3 border rounded-lg'>
                    Cancel
                </FormField.Button>

                {/* Save Changes Button */}
                <FormField.Button isSubmitted={isSubmitting} className='bg-light-blue-500 text-sm text-white px-10 py-3 rounded-lg hover:shadow-md'>
                    Save Changes
                </FormField.Button>
            </div>
        </form></>

}
