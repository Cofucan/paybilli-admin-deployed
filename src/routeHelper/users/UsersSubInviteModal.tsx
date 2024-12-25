import { FC, useState } from 'react'
import checkbox1 from '../assets/Checkbox1.svg'
import checkbox2 from '../assets/Checkbox2.svg'
export interface UserSubInviteModalProps {
  onClick: () => void | Promise<void>
}
const UserSubInviteModal: FC<UserSubInviteModalProps> = ({ onClick }) => {
  const [selectedRole, setSelectedRole] = useState('Member')

  const roles = [
    {
      name: 'Member',
      description: 'Can participate in debate, place bets...',
    },
    {
      name: 'Admin',
      description: 'Admin can manage team members, roles, and permissions.',
    },
  ]

  const handleSelect = (roleName: string) => {
    setSelectedRole(roleName)
  }

  return (
    <div
      onClick={onClick}
      className='border border-gray-500 bg-white w-[70%] xl:w-[40%] rounded-3xl p-3 absolute top-[65%] z-60'
    >
      <div className='flex justify-center items-center'>
        <div className='w-full'>
          <h1 className='font-medium text-lg mb-4'>Invite as</h1>
          <ul className='space-y-3'>
            {roles.map((role, index) => (
              <li
                key={index}
                className={`border rounded-lg flex items-start px-3 py-2 justify-between ${selectedRole === role.name ? 'bg-[#eaecf0]' : ''
                  } ${role.name === 'admin' ? 'disabled' : 'cursor-pointer'}`} // Disable cursor and add opacity for "admin"
                onClick={() => { if (role.name !== 'admin') handleSelect(role.name) }} // Prevent selecting "admin"
              >
                <div className='flex items-center gap-2'>
                  <div className='text-2xl'>
                    {selectedRole === role.name ? (
                      <img src={checkbox1} alt='checkbox-blue' />
                    ) : (
                      <img src={checkbox2} alt='checkbox-gray' />
                    )}
                  </div>

                  <div>
                    <p className='font-medium'>{role.name}</p>
                    <p className='text-sm text-gray-500'>{role.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button className='mt-4 text-blue-600 text-xs font-medium'>
            Clear selected
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserSubInviteModal
