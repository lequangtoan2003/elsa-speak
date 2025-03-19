import React from 'react';
import { Product } from '../types';

const Item = ({ id, title, image, level, time }: Product) => {
    return (
        <div className='wrapper w-[200px] bg-white rounded-lg'>
            <div className="relative rounded-lg">
                <div className='absolute top-1 left-1'>
                    <a className='w-16 h-6 bg-blue-400 flex items-center justify-center font-medium text-white rounded-lg' href="/">{level}</a>
                </div>
                <div><img className='w-[200px] rounded-lg' src={image} alt="" /></div>
            </div>
            <div className="ml-2 mr-2 font-semibold">{title}</div>
            <div className="mb-4 ml-2 mr-2 text-xs text-gray-500">{time}</div>
        </div>
    );
}
export default Item;