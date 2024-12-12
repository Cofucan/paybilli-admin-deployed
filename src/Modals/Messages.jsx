import React from "react";
import MsgUserImg from "../assets/MsgUserImg.svg";
import ArrowRight from "../assets/ArrowRight.svg";

const Messages = () => {
  return (
    <div className="">
      <div className="p-3 border-b border-[#E4E7EC] bg-white">
        <h1 className="text-xl font-medium">Message</h1>
      </div>
      <div className="">
        <div className="px-3 py-6 border-b-2 border-[#E4E7EC]  flex justify-between items-center">
          <div className="flex items-center gap-2 mx-2">
            <img src={MsgUserImg} alt="#" className="object-cover" />
            <div className="">
              <h1 className="font-bold text-[15px] leading-3">Oke Chinedu</h1>
              <p className="text-sm text-[#525252] tracking-wide font-[400]">
                My refund is yet to be processed, please help
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-[#525252] font-[400]">01:50pm</p>
            <img
              src={ArrowRight}
              alt="#"
              className="object-cover w-4 h-5 text-[#525252]"
            />
          </div>
        </div>
        <div className="px-3 py-6 border-b-2 border-[#E4E7EC]  flex justify-between items-center">
          <div className="flex items-center gap-2 mx-2">
            <img src={MsgUserImg} alt="#" className="object-cover" />
            <div className="">
              <h1 className="font-bold text-[15px] leading-3">Oke Chinedu</h1>
              <p className="text-sm text-[#525252] tracking-wide font-[400]">
                My refund is yet to be processed, please help
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-[#525252] font-[400]">01:50pm</p>
            <img
              src={ArrowRight}
              alt="#"
              className="object-cover w-4 h-5 text-[#525252]"
            />
          </div>
        </div>
        <div className="px-3 py-6 border-b-2 border-[#E4E7EC]  flex justify-between items-center">
          <div className="flex items-center gap-2 mx-2">
            <img src={MsgUserImg} alt="#" className="object-cover" />
            <div className="">
              <h1 className="font-bold text-[15px] leading-3">Oke Chinedu</h1>
              <p className="text-sm text-[#525252] tracking-wide font-[400]">
                My refund is yet to be processed, please help
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-[#525252] font-[400]">01:50pm</p>
            <img
              src={ArrowRight}
              alt="#"
              className="object-cover w-4 h-5 text-[#525252]"
            />
          </div>
        </div>
        <div className="px-3 py-7 border-b-2 border-[#E4E7EC]  flex justify-between items-center">
          <div className="flex items-center gap-2 mx-2">
            <img src={MsgUserImg} alt="#" className="object-cover" />
            <div className="">
              <h1 className="font-bold text-[15px] leading-3">Oke Chinedu</h1>
              <p className="text-sm text-[#525252] tracking-wide font-[400]">My refund is yet to be processed, please help</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-[#525252] font-[400]">01:50pm</p>
            <img src={ArrowRight} alt="#" className="object-cover w-4 h-5 text-[#525252]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
