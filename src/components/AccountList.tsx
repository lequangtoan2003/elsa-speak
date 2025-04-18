import React, { useContext } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../assets/profileicon.png";
import themeIcon from "../assets/themesicon.png"
import settingsIcon from "../assets/settingicon.png";
import logoutIcon from "../assets/logouticon.png";
import { AppContext } from "../context/AppContext";


const AccountList: React.FC = () => {
  const { setFooterComponent } = useContext(AppContext)!;
  const options = [
    { title: "Profile", path: "/profiledetails?section=account", Icon: profileIcon, component: "AccountDetails" },
    { title: "Settings", path: "/profiledetails?section=settings", Icon: settingsIcon, component: "SettingsDetails" },
    { title: "Theme", path: "/profiledetails?section=theme", Icon: themeIcon, component: "Theme" },
    { title: "Log out", path: "/login", Icon: logoutIcon, component: "LogOut" },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl flex flex-col gap-4">
      <div className="text-xl font-semibold mb-4">Account settings</div>
      {options.map((option, index) => (
        <Link
          to={option.path}
          key={index}
          onClick={() => setFooterComponent(option.component as "AccountDetails" | "SettingsDetails" | "Theme")}
        >
          <div
            className="h-24 border-[1px] border-gray-200 text-black p-3 mx-5 rounded-xl flex items-center justify-between text-lg font-semibold cursor-pointer hover:bg-gray-300 transition-all"
          >
            <img src={option.Icon} alt={option.title} className="w-6 h-6" />
            <span className="flex-1 px-2">{option.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AccountList;
