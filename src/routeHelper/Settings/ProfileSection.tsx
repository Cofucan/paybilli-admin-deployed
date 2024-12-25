// ProfileSection.tsx
interface ProfileSectionProps {
    profileImage: string;
    onEdit: () => void;
  }
  
  const ProfileSection: React.FC<ProfileSectionProps> = ({
    profileImage,
   
    onEdit
  }) => {
    return (
      <div className="w-[70%] lg:mx-16 my-5">
        <div className="relative w-52 rounded-lg border border-[#e5f4fc]">
          <div className="UserImg">
            <img
              src={profileImage}
              alt="userpics"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="EditUserPics absolute bottom-20 -right-5">
            {/* <img src={EditProfile} alt="EditProfile" /> */}
          </div>
          <div className="text-center py-2 text-gray-500">
            <p>Admin</p>
          </div>
        </div>
  
        <div className="lg:w-[70%] xxl:w-[50%] py-10">
          <div className="grid smd:grid-cols-2 gap-5">
            
            <div className="flex flex-col gap-10 text-lg">
              <button onClick={onEdit} className="smd:text-2xl lg:text-lg text-gray-500">
                Edit Profile
              </button>
              <button className="smd:text-2xl lg:text-lg text-gray-500">
                View Activity Logs
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileSection;
  