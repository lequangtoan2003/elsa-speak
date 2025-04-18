import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import homeIcon from "../assets/homeicon.png";
import bookIcon from "../assets/bookicon.png";
import binocularsIcon from "../assets/binocularsicon.png";
import profileIcon from "../assets/profileicon.png";
import settingsIcon from "../assets/settingicon.png";
import chatIcon from "../assets/chaticon.png";
import { useAuthContext } from "../context/AuthContext";

const Menus = [
  { title: "Trang chủ", path: "/", icon: homeIcon },
  { title: "Học", path: "/study", icon: bookIcon },
  { title: "Khám phá", path: "/detect", icon: binocularsIcon },
  { title: "Tiến độ", path: "/progress", icon: binocularsIcon },
  { title: "Hồ sơ", path: "/profile", icon: profileIcon },
];

const Header: React.FC = () => {
  const { user } = useAuthContext(); // Lấy user từ AuthContext
  
  return (
    <nav className="flex flex-col w-1/5 bg-primary h-screen text-white">
      {/* Danh sách menu chính */}
      <ul className="flex flex-col gap-4 mt-8 flex-grow p-4">
        {Menus.map((menu, index) => (
          <li key={index}>
            <NavLink
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-xl transition-all duration-300
                ${
                  isActive
                    ? "bg-yellow-400 text-color-hover shadow-md scale-105"
                    : "hover:bg-primary text-color hover:scale-105 hover:shadow-md"
                }`
              }
            >
              <img src={menu.icon} alt={menu.title} className="w-6 h-6" />
              {menu.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mục Chat, Settings nằm ở cuối */}
      <div className="p-4">
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl transition-all duration-300 w-full
            ${
              isActive
                ? "bg-yellow-400 text-color-hover shadow-md scale-105"
                : "hover:bg-primary text-color hover:scale-105 hover:shadow-md"
            }`
          }
        >
          <img src={chatIcon} alt="Chat" className="w-6 h-6" />
          Chat
        </NavLink>
      </div>

      <div className="p-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl transition-all duration-300 w-full
            ${
              isActive
                ? "bg-yellow-400 text-color-hover shadow-md scale-105"
                : "hover:bg-primary text-color hover:scale-105 hover:shadow-md"
            }`
          }
        >
          <img src={settingsIcon} alt="" className="w-6 h-6" />
          Settings
        </NavLink>
      </div>

      {/* Thông tin người dùng */}
      <div className="flex items-center w-full h-14 bg-gray-200 drop-shadow-lg p-4">
        <div className="w-7 h-7">
          <img src={profileIcon} alt="User" />
        </div>
        <div className="ml-4">
          <p className="text-sm text-color">
            {user ? user.username : "Khách"}
          </p>
          <p className="text-xs text-color">
            {user ? user.email : "Chưa đăng nhập"}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;