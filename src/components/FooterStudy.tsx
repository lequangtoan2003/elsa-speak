import React from "react";
import AIbg from "../assets/AIbg1.png"

const FooterStudy = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="h-[220px] rounded-lg relative overflow-hidden">
                <img src={AIbg} alt="AI Background" className="rounded-lg border-[1px]  object-cover border-gray-300" />
                <div className="absolute top-24 right-36 font-bold text-2xl text-white">Bài học</div>
            </div>
            <div className="h-[220px] rounded-lg relative overflow-hidden">
                <img src={AIbg} alt="AI Background" className="rounded-lg border-[1px]  object-cover border-gray-300" />
                <div className="absolute top-24 right-36 font-bold text-2xl text-white">Bài học</div>
            </div>
            <div className="h-[220px] rounded-lg relative overflow-hidden">
                <img src={AIbg} alt="AI Background" className="rounded-lg border-[1px]  object-cover border-gray-300" />
                <div className="absolute top-24 right-36 font-bold text-2xl text-white">Bài học</div>
            </div>  
        </div>
    );
};
export default FooterStudy;