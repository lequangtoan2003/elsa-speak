import React from 'react';
import { Product } from '../types';

const ItemHome = ({ id, transcription, lessons, image2 }: Product) =>{

    return (
        <div className='relative wrapper w-auto bg-white rounded-lg drop-shadow-lg'>
            <div className="flex justify-between">
            <div className="flex flex-col py-6 px-4 rounded-lg">
                <div className="text-xl ml-2 mr-2 font-semibold py-4">{transcription}</div>
                <div className="mb-4 ml-2 mr-2 text-xs text-gray-500">{lessons}</div>
            </div>
            
            
            <div className='p-4 flex items-center justify-center'><img className='w-[160px] rounded-lg' src={image2} alt="" />
            </div>
            <div className="w-44 h-2 absolute bottom-6 left-5 rounded-lg bg-slate-400">
                
            </div>
            </div>
            
        </div>
    )
}
export default ItemHome;