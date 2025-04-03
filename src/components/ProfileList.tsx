import React, { useState } from 'react';
import profileIcon from "../assets/profileicon.png";
import { Link } from "react-router-dom";
import logoutIcon from "../assets/logouticon.png";
import settingsIcon from "../assets/settingicon.png";
import notificationIcon from "../assets/notificationicon.png";
import rightarrowIcon from "../assets/rightarrowicon.png";
import deleteIcon from "../assets/deleteicon.png";


const ProfileList = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const handleSettingsClick = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };
return (
        <div className="w-full h-full">
            <div className="flex items-center">
                <div className="flex ml-14 mr-4 w-44 h-44 rounded-full drop-shadow-lg">
                    <img src={profileIcon} alt="" />
                </div>
                <div className="flex flex-col ml-5">
                    <span>Quang Toan</span>
                    <span>quangtoan@gmail.com</span>
                </div>
            </div>
            <div className="border-b border-gray-400 pt-5 w-[50%] ml-14"></div>
            <div className="ml-14 w-[30%] pt-5 ">
                <ul className="flex flex-col gap-2">
                    <li><Link className='flex gap-4' to="/profiledetails">
                    <img className='w-7 h-7' src={profileIcon} alt="" />
                    <div className='flex flex-1 text-xl'>My profile</div>
                    <img className='w-7 h-7 border-2 border-gray-400' src={rightarrowIcon} alt="" />
                    </Link></li>
                    <li><div className='flex gap-4' onClick={handleSettingsClick}>
                            <img className='w-7 h-7' src={settingsIcon} alt="" />
                            <div className='flex flex-1 text-xl'>Settings</div>
                            <img className='w-7 h-7 border-2 border-gray-400' src={rightarrowIcon} alt="" /> {/* Thêm icon ở cuối */}
                        </div>
                        {isPopoverOpen && (<div className='w-44 h-26 absolute top-[266px] right-[600px]
                                                         bg-gray-300 shadow-lg rounded-lg p-4 mt-2 animate-popoverDown'>
                            <div className="flex justify-between items-center mb-2 ">
                                <div className="">Settings</div>
                                <div className="cursor-pointer absolute top-2 right-2" 
                                    onClick={handleSettingsClick}>
                                    <img className='w-5 h-5' src={deleteIcon} alt="" />
                                </div>
                            </div>
                            <div className="border-b border-gray-400 w-full"></div>
                            <div className="text-xs">
                                <div className="flex justify-between items-center mt-2">
                                    <div>Theme</div>
                                    <div>Light</div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <div>Language</div>
                                    <div>Eng</div>
                                </div>
                            </div>
                        </div>)}
                        </li>
                    <li><Link className='flex gap-4' to="/">
                    <img className='w-7 h-7' src={notificationIcon} alt="" />
                    <div className='flex flex-1 text-xl'>Notification</div>
                    </Link></li>
                    <li><Link className='flex gap-4' to="/">
                    <img className='w-7 h-7' src={logoutIcon} alt="" />
                    <div className='flex flex-1 text-xl'>Logout</div>
                    </Link></li>
                </ul>
            </div>
        </div>
    );
    
};

export default ProfileList;