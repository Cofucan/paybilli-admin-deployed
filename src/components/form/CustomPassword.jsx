import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

const CustomPassword = ({ className, ...props }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <div className='relative'>
      <input
        type={passwordVisible ? 'text' : 'password'}
        name='password'
        placeholder='Type Password'
        className={twMerge(
          'border-2 border-light-grey-500 p-5 rounded-lg placeholder:text-lg text-gray-500 focus:placeholder:text-sm custom-placeholder focus:ring-blue-300 focus:border-blue-400 w-full',
          className,
        )}
        {...props}
      />
      {passwordVisible ? (
        <FaEye
          onClick={handlePasswordVisibility}
          className='absolute right-3 top-1/2 text-xl  -translate-y-1/2 text-gray-500 cursor-pointer'
        />
      ) : (
        <FaEyeSlash
          onClick={handlePasswordVisibility}
          className='absolute right-3 top-1/2  text-xl -translate-y-1/2 text-gray-500 cursor-pointer'
        />
      )}
    </div>
  )
}

export default CustomPassword
