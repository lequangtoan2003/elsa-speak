import React from "react";
import englishIcon from "../assets/englishicon.png";
import searchIcon from "../assets/searchIcon.png";
import arrowdownIcon from "../assets/arrowsdownicon.png";

const SettingsDetails = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="w-full text-xl font-semibold text-color sticky top-0 z-20">
                <div className="flex gap-2 items-center">
                    <div className="">Settings</div>
                </div>
            <div className="pt-4 border-b border-gray-200"></div>
            </div>
      <div className="flex flex-col gap-4 p-4 border-[1px] border-gray-200 bg-white rounded-2xl">
        <div className="">
            <div className="pb-4 text-lg font-semibold">Choose interface language</div>
            <div className="flex gap-2 p-4 border-[1px] border-gray-200 bg-white rounded-2xl">
                <div className="">
                    <img src={englishIcon} alt="" />
                </div>
                <div className="flex-1 text-lg font-semibold">
                    English
                </div>
                <div className="">
                    <img src={searchIcon} alt="" />
                </div>
            </div>
        </div>
        <div className="">
            <div className="pb-4 text-lg font-semibold">Choose translation language</div>
            <div className="flex gap-2 p-4 border-[1px] border-gray-200 bg-white rounded-2xl">
                <div className="">
                    <img src={englishIcon} alt="" />
                </div>
                <div className="flex-1 text-lg font-semibold">
                    English
                </div>
                <div className="">
                    <img src={searchIcon} alt="" />
                </div>
            </div>
        </div>
        <div className="">
            <div className="pb-4 text-lg font-semibold">Choose target language</div>
            <div className="flex gap-2 p-4 border-[1px] border-gray-200 bg-white rounded-2xl">
                <div className="">
                    <img src={englishIcon} alt="" />
                </div>
                <div className="flex-1 text-lg font-semibold">
                    English
                </div>
                <div className="">
                    <img src={searchIcon} alt="" />
                </div>
            </div>
        </div>
        
        <div className="">
            <div className="pb-4 text-lg font-semibold">Change your target language level</div>
            <div className="flex gap-2 p-4 border-[1px] border-gray-200 bg-white rounded-2xl">
                <div className="flex-1 text-lg font-semibold">
                    Choose level
                </div>
                <div className="">
                    <img className="w-7 h-7" src={arrowdownIcon} alt="" />
                </div>
            </div>
        </div>
      </div>
        </div>
    )
}

export default SettingsDetails;