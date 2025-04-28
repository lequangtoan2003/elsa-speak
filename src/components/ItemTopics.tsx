import React from 'react';
import { Product } from '../types';
import { useNavigate } from "react-router-dom";
import authoricon from "../assets/authoricon.png";

const ItemTopics = React.memo(({ id, author, like, major, topic, vocab, width, height, text, subject }: Product) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/conversationdetails/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex relative h-36 bg-gray-50 ${text || "text-[15px]"} rounded-3xl shadow-lg py-4 ${height || ""} ${width || "w-[220px]"}`}
    >
      <div
        className="absolute top-4 left-4 bg-red-700 w-1/4 aspect-square rounded-full flex items-center justify-center"
      >
        <div className="text-white uppercase font-bold">{major}</div>
      </div>
      <div className="flex flex-col pl-4 pt-2">
        <div className="pt-16 text-black font-bold">{subject}</div>
        <div className="flex justify-center items-center text-base text-gray-600 mr-16">
          <div className="w-5 h-5 mb-[6px] mr-2">
            <img src={authoricon} alt="" />
          </div>
          {author}
        </div>
        <div className="pt-4 border-b-2 w-[230px] border-gray-300"></div>
        <div className="flex justify-center items-center text-gray-300">{like}</div>
      </div>
    </div>
  );
});

export default ItemTopics;