import React from "react";
import { Link } from "react-router-dom";
import runIcon from "../assets/runicon.png";
import startIcon from "../assets/iconstart1.png";

const StudyOptions: React.FC = () => {
  const options = [
    { title: "Luyện tập bài học hằng ngày", path: "/practice", iconend: runIcon, iconstart: startIcon },    
    { title: "Cải thiện phát âm", path: "/pronounce", iconend: runIcon, iconstart: startIcon },
    { title: "Học theo chủ đề", path: "/topic-learning", iconend: runIcon, iconstart: startIcon },
    { title: "Nhận được chứng chỉ", path: "/certificate", iconend: runIcon, iconstart: startIcon },
  ];

  return (
    <div className="flex flex-col gap-5">
      {options.map((option, index) => (
        <Link to={option.path} key={index}>
          <div
            className="bg-gray-200 shadow-md text-black py-3 mr-12 px-2 px ml-12 rounded-xl flex items-center justify-between text-lg font-semibold cursor-pointer hover:bg-gray-300 transition-all"
          >
            <img src={option.iconstart} alt={option.title} className="w-6 h-6" />
            <span className="flex-1 px-2">{option.title}</span>
            <img src={option.iconend} alt={option.title} className="w-6 h-6" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StudyOptions;
