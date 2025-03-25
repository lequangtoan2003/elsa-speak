import React from 'react';
import { Product } from '../types';

const ItemHome = ({ id, title, image, time }: Product) =>{

    return (
        <div className='wrapper w-auto bg-white rounded-lg drop-shadow-lg'>
            <div className="flex justify-between">
            <div className="flex flex-col py-6 px-4 rounded-lg">
                <div className="text-xl ml-2 mr-2 font-semibold py-4">{title}</div>
                <div className="mb-4 ml-2 mr-2 text-xs text-gray-500">{time}</div>
            </div>
            
            
            <div className=''><img className='w-[200px] rounded-lg' src={image} alt="" />
            </div>
            </div>
            
        </div>
    )
}
export default ItemHome;