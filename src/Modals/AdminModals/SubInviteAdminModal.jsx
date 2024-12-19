import { useState } from "react";
import checkbox1 from "../../assets/Checkbox1.svg";
import checkbox2 from "../../assets/Checkbox2.svg";

const SubInviteAdminmModal = ({ toggleSubModal }) => {
  const [selectedRole, setSelectedRole] = useState("Admin");

  const roles = [
    {
      name: "Admin",
      description: "Moderate Access Control",
    },
    {
      name: "Support",
      description: "Support Focused access",
    },
  ];

  const handleSelect = (e, roleName) => {
    e.stopPropagation(); // Prevent the modal from closing
    setSelectedRole(roleName);
  };

  return (
    <div
      onClick={toggleSubModal}
      className="border border-gray-500 bg-white w-[70%] xl:w-[40%] rounded-3xl p-3 absolute top-[65%] z-60"
    >
      <div className="flex justify-center items-center">
        <div className="w-full">
          <h1 className="font-medium text-lg mb-4">Invite as</h1>
          <ul className="space-y-3">
            {roles.map((role, index) => (
              <li
                key={index}
                className={`border rounded-lg flex items-start px-3 py-2 justify-between cursor-pointer ${
                  selectedRole === role.name ? "bg-[#eaecf0]" : ""
                }`}
                onClick={(e) => handleSelect(e, role.name)} // Pass event to stop propagation
              >
                <div className="flex items-center gap-2">
                  <div className="text-2xl">
                    {selectedRole === role.name ? (
                      <img src={checkbox1} alt="checkbox-blue" />
                    ) : (
                      <img src={checkbox2} alt="checkbox-gray" />
                    )}
                  </div>

                  <div>
                    <p className="font-medium">{role.name}</p>
                    <p className="text-sm text-gray-500">{role.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent modal closing on button click
              setSelectedRole("");
            }}
            className="mt-4 text-[#3faae0] text-xs font-medium"
          >
           Copy Invite Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubInviteAdminmModal;
