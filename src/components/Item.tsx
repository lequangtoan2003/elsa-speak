import React from 'react';
import { Product } from '../types';
import { useNavigate } from "react-router-dom";

const Item = ({ id, author, like, major, topic, vocab, width, height, text }: Product) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/conversationdetails/${id}`);
    };

    return (
        <div
            onClick={handleClick}
            className={`flex relative h-36 bg-red-600 ${text || "text-[15px]"} rounded-3xl shadow-lg py-4 ${height || ""} ${width || "w-[320px]"}`}
        >
            <div
                className="absolute top-[50%] translate-y-[-50%] left-[10%] bg-red-700 w-1/6 aspect-square rounded-full flex items-center justify-center"
            >
                <div className="text-white uppercase font-bold">{major}</div>
            </div>
            <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] items-center justify-center pl-4 pt-2">
                <div className="flex justify-center items-center pb-2 text-white">{topic}</div>
                <div className="flex justify-center items-center text-gray-300">{author}</div>
                <div className="flex justify-center items-center text-gray-300">{vocab}</div>
                <div className="flex justify-center items-center text-gray-300">{like}</div>
            </div>
        </div>
    );
};

export default Item;