import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PersonalDetails: React.FC = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();

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
      <div className="font-bold text-lg mb-4">Personal Details</div>
      <p className="mb-4 text-sm text-gray-600">Thông tin cá nhân người dùng ở đây...</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleBackClick}
      >
        Quay về Account
      </button>
    </div>
  );
};

export default PersonalDetails;