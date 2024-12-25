// ProfileSection.tsx
interface ProfileSectionProps {
    profileImage: string;
    name: string;
    email: string;
    phone: string;
    username: string;
    onEdit: () => void;
  }
  
  const ProfileSection: React.FC<ProfileSectionProps> = ({
    profileImage,
    name,
    email,
    phone,
    username,
    onEdit
  }) => {
    return (
      <div className="w-[70%]">
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
            <div className="xl:pb-10">
              <h2 className="smd:text-2xl lg:text-lg font-medium">{name}</h2>
              <p className="smd:text-lg lg:text-sm text-gray-500">Full Name:</p>
            </div>
            <div>
              <h2 className="smd:text-2xl lg:text-lg font-medium">{username}</h2>
              <p className="smd:text-lg lg:text-sm text-gray-500">Username:</p>
            </div>
            <div>
              <h2 className="smd:text-2xl lg:text-lg font-medium">{email}</h2>
              <p className="smd:text-lg lg:text-sm text-gray-500">Email Address:</p>
            </div>
            <div>
              <p className="smd:text-2xl lg:text-lg font-medium">{phone}</p>
              <p className="smd:text-lg lg:text-sm text-gray-500">Phone Number:</p>
            </div>
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
  