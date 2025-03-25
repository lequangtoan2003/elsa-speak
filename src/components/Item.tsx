import React from 'react';
import { Product } from '../types';

const Item = ({ id, author, like, major, topic, vocab }: Product) => {
    return (
        <div className='flex wrapper w-[250px] bg-red-600 rounded-xl shadow-lg py-4'>
            <div className="flex justify-center items-center p-4">
                <div className="flex justify-center items-center uppercase 
                              text-white text-sm font-semibold bg-red-900 
                                rounded-full w-12 h-12">{major}</div>
            </div>
            <div className="">
                <div className="flex justify-center items-center pb-2 text-white">{topic}</div>
                <div className="flex justify-center items-center text-gray-300 text-sm">{author}</div>
                <div className="flex justify-center items-center text-gray-300 text-sm">{vocab}</div>
                <div className="flex justify-center items-center text-gray-300 text-sm">{like}</div>
            </div>
        </div>
    );
}
export default Item;