import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/homeicon.png";
import bookIcon from "../assets/bookicon.png";
import binocularsIcon from "../assets/binocularsicon.png";
import profileIcon from "../assets/profileicon.png";

const Menus = [
  { title: "Trang chủ", path: "/", icon: homeIcon },
  { title: "Học", path: "/study", icon: bookIcon },
  { title: "Phát hiện", path: "/detect", icon: binocularsIcon },
  { title: "Hồ sơ", path: "/profile", icon: profileIcon },
];

const Header: React.FC = () => {
  return (
    <nav className="flex flex-col w-1/5 bg-primary h-screen  text-white">
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
      <div className="flex items-center w-full h-10 bg-gray-200 drop-shadow-lg">
        <div className="flex ml-4 mr-4 w-7 h-7">
          <img src={profileIcon} alt="" />
        </div>
        <div className="ml-5 ">
          <p className="text-sm text-color">Quang Toàn</p>
          <p className="text-xs text-color">abc@gmail.com</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
