import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import PasswordModal from '../../components/modal/PasswordModal'

import ProfileSection from '../../routeHelper/Settings/ProfileSection'
import Modal from '../../components/modal/modal'

export const Route = createFileRoute('/_auth/setting')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [isModalPassword, setIsModalPassword] = useState<boolean>(false)

  const toggleModalVisible = () => {
    setIsModalVisible(!isModalVisible)
  }

  const toggleModalPassword = () => {
    setIsModalPassword(!isModalPassword)
  }

  return (
    <div className="relative w-full">
      <div className="lg:w-full">
        <div className="w-[85%] mx-auto mt-14 smd:mt-14 lg:mt-12 xl:mt-0">
          <h1 className="text-[34px] py-10 xl:py-5 text-[#1D1D1D] leading-[28px] font-semibold">
            Settings
          </h1>
        </div>

        <ProfileSection
          profileImage="ProfileImage.png" // Replace with actual image path
          name="Chinedu Oke"
          email="ChineduOke@gmail.com"
          phone="08032324355"
          username="ChineduOke"
          onEdit={toggleModalVisible}
        />

        <PasswordModal
          isVisible={isModalPassword}
          toggleVisibility={toggleModalPassword}
        />

        {/* < Modal isVisible={isModalVisible} toggleVisibility={toggleModalVisible} title="Edit Profile">
          Add the form content for editing profile
        <Modal/> */}
      </div>
    </div>
  )
}


