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
    <nav className="w-1/5 bg-primary h-screen p-4 text-white shadow-lg">
      <ul className="flex flex-col gap-4 mt-8">
        {Menus.map((menu, index) => (
          <li key={index}>
            <NavLink
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-xl transition-all duration-300
                ${
                  isActive
                    ? "bg-yellow-400 text-blue-900 shadow-md scale-105"
                    : "hover:bg-primary hover:scale-105 hover:shadow-md"
                }`
              }
            >
              <img src={menu.icon} alt={menu.title} className="w-6 h-6" />
              {menu.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
