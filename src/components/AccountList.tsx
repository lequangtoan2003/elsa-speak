import React from "react";
import { Link } from "react-router-dom";
import startIcon from "../assets/iconstart1.png";
import profileIcon from "../assets/profileicon.png";

const AccountList: React.FC = () => {
  const options = [
    { title: "Profile", path: "/profiledetails", iconstart: profileIcon },    
    { title: "Settings", path: "/pronounce", iconstart: startIcon },
    { title: "Theme", path: "/topic-learning", iconstart: startIcon },
    { title: "Log out", path: "/certificate", iconstart: startIcon },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl flex flex-col gap-4">
        <div className="text-xl font-semibold mb-4">Account settings</div>
      {options.map((option, index) => (
        <Link to={option.path} key={index}>
          <div
            className="h-24 border-[1px] border-gray-200 text-black p-3
             mx-5 rounded-xl flex items-center justify-between text-lg font-semibold
              cursor-pointer hover:bg-gray-300 transition-all"
          >
            <img src={option.iconstart} alt={option.title} className="w-6 h-6" />
            <span className="flex-1 px-2">{option.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AccountList
;
