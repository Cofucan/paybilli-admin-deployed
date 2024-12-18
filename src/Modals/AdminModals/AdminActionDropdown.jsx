import React, { useState } from "react";
import ImportImgs from "../../components/ImportImgs";
import { useNavigate } from "react-router-dom";
import EnableModal from "./EnableModal";
import DisableModal from "./DisableModal";

const AdminActionDropdown = () => {
  const navigate = useNavigate();
  const images = ImportImgs();
  const [enableAdmin, setEnableAdmin] = useState(false);
  const [disableAdmin, setDisableAdmin] = useState(false);

  const toggleEnableModal = () => {
    setEnableAdmin(!enableAdmin);
  };
  const toggleDisableModal = () => {
    setDisableAdmin(!disableAdmin);
  };

  return (
    <section>
      <div className="flex flex-col gap-3 border bg-white border-gray-300 rounded-md w-36 h-full px-3 py-2 shadow-md">
        <div className="flex items-center gap-2">
          <img src={images.Eye} alt="eyes" />
          <button
            onClick={() => navigate("/admin/setting")}
            className="text-gray-600 text-sm font-medium hover:text-gray-600"
          >
            View Profile
          </button>
        </div>
        <div className="flex items-center gap-2">
          <img src={images.ThumbUp} alt="eyes" />
          <button
            onClick={toggleEnableModal}
            className="text-gray-600 text-sm font-medium "
          >
            Enable Admin
          </button>
        </div>
        <div className="flex items-center gap-2">
          <img src={images.ThumbDown} alt="eyes" />
          <button onClick={toggleDisableModal} className="text-gray-600 text-sm font-medium">
            Disable Admin
          </button>
        </div>
      </div>
      {/** Open EnableAdmin Modal */}
      {enableAdmin && <EnableModal toggleEnableModal={toggleEnableModal}/>}

       {/** Open DisableAdmin Modal */}
       {disableAdmin && <DisableModal toggleDisableModal={toggleDisableModal}/>}
    </section>
  );
};

export default AdminActionDropdown;
