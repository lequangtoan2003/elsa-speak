import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import profileIcon from "../assets/profileicon.png";
import { AppContext } from "../context/AppContext";
import passwordIcon from "../assets/passwordicon.png";
import emailIcon from "../assets/emailicon.png";
import notificationIcon from "../assets/notificationicon.png";
import removeIcon from "../assets/removeicon.png";

const AccountDetails = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("AccountDetails must be used within an AppProvider");
  }

  const { setFooterComponent } = context;

  const handleClick = () => {
    setFooterComponent("PersonalDetails"); // Gọi trước để cập nhật ngay lập tức
    navigate("/profiledetails?section=personal"); // Thay đổi URL để đồng bộ với Footer
    console.log("Navigated to /profiledetails?section=personal");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full text-xl font-semibold text-color sticky top-0 z-20">
        <div className="flex gap-2 items-center">
          <div className="">Profile</div>
        </div>
        <div className="pt-4 border-b border-gray-200"></div>
      </div>
      <div className="flex flex-col gap-4 p-4 border-[1px] border-gray-200 bg-white rounded-2xl">
        <div className="flex items-center border-gray-400 cursor-pointer" onClick={handleClick}>
          <div className="p-4">
            <img className="w-5 h-5" src={profileIcon} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="font-bold">Personal details</div>
            <div className="text-gray-500 text-xs">Manage your personal details below</div>
          </div>
        </div>
        <div className="border-b border-[1.5px] border-gray-200"></div>
        <div className="flex items-center border-gray-400">
          <div className="p-4">
            <img className="w-5 h-5" src={passwordIcon} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="font-bold">Change password</div>
            <div className="text-gray-500 text-xs">Change your current password.</div>
          </div>
        </div>
        <div className="border-b border-[1.5px] border-gray-200"></div>
        <div className="flex items-center border-gray-400">
          <div className="p-4">
            <img className="w-5 h-5" src={emailIcon} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="font-bold">Email notifications</div>
            <div className="text-gray-500 text-xs">Manage your email notifications.</div>
          </div>
        </div>
        <div className="border-b border-[1.5px] border-gray-200"></div>
        <div className="flex items-center border-gray-400">
          <div className="p-4">
            <img className="w-5 h-5" src={notificationIcon} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="font-bold">App notifications</div>
            <div className="text-gray-500 text-xs">Manage your app notifications.</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 border-[1px] border-gray-200 bg-white rounded-2xl">
        <div className="flex items-center border-gray-400">
          <div className="p-4">
            <img className="w-5 h-5" src={removeIcon} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-pink-400">Delete account</div>
            <div className="text-gray-500 text-xs">This action can not be undone.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;