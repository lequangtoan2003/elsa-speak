import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import leftarrowicon from "../assets/leftarrowicon.png";
import arrowsdownicon from "../assets/arrowsdownicon.png";
import { useAuthContext } from "../context/AuthContext";

const PersonalDetails: React.FC = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();

 const { user } = useAuthContext();

  if (!context) {
    throw new Error("PersonalDetails must be used within an AppProvider");
  }

  const { setFooterComponent } = context;

  const handleBackClick = () => {
    setFooterComponent("AccountDetails"); // Cập nhật ngay footerComponent
    navigate("/profiledetails?section=account"); // Thay đổi URL để đồng bộ với Footer
    console.log("Navigated to /profiledetails?section=account");
  };

  return (
    <div className="p-4">
      
      <div className="w-full text-xl font-semibold text-gray-800 sticky top-0 z-20">
        <div className="flex gap-2 items-center">
          <div className="">
            <button className="flex justify-center items-center gap-4" onClick={handleBackClick}>
                <img className='w-5 h-5' src={leftarrowicon} alt="" />
                    Thông tin cá nhân
            </button>
          </div>
        </div>
        <div className="pt-4 border-b border-gray-200"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 pt-4">
          <div className="font-semibold">Your email address</div>
          <div className="px-4 py-3 border-[1px] border-gray-300 rounded-lg font-semibold">
            {user?.email || "Chưa có người dùng"}
            </div>
        </div>
        <div className="flex flex-col gap-4 pt-4">
          <div className="font-semibold">First name</div>
          <div className="px-4 py-3 border-[1px] border-gray-300 rounded-lg font-semibold">
            {user?.firstname || "Chưa có thông tin"}
            </div>
        </div>
        <div className="flex flex-col gap-4 pt-4">
          <div className="font-semibold">Last name</div>
          <div className="px-4 py-3 border-[1px] border-gray-300 rounded-lg font-semibold">
            {user?.lastname || "Chưa có thông tin"}
            </div>
        </div>
        <div className="flex flex-col gap-4 pt-4">
          <div className="font-semibold">Your time zone</div>
          <div className="flex justify-between px-4 py-3 border-[1px] border-gray-300 rounded-lg font-semibold">
            <div className="mt-1">UTC+01:00</div>
            <div className="">
              <img src={arrowsdownicon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;