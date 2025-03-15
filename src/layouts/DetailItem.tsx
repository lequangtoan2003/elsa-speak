import React from 'react';
import homeIcon from '../assets/homeicon.png';
import bookIcon from '../assets/bookicon.png';
import binocularsIcon from '../assets/binocularsicon.png';
import profileIcon from '../assets/profileicon.png';

interface DetailItemProps {
    activePage: string;
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const Menus = [
    { title: "Trang chủ", icon: homeIcon },
    { title: "Học", icon: bookIcon },
    { title: "Phát hiện", icon: binocularsIcon },
    { title: "Hồ sơ", icon: profileIcon },
];

const DetailItem: React.FC<DetailItemProps> = ({ activePage, setActivePage }) => {
    return (
        <ul className="flex flex-col w-full text-sm gap-1 text-white font-medium mt-8">
            {Menus.map((menu, index) => (
                <li key={index} className="w-full">
                    <button
                        onClick={() => {
                            console.log("Click vào:", menu.title);
                            setActivePage(menu.title);
                        }}
                        className={`flex items-center gap-2 w-full px-4 py-2 text-left
                                    ${activePage === menu.title ? "text-[#49c0f8]" : "text-white"}
                                    hover:bg-[#94c4da] hover:bg-opacity-10 hover:rounded-lg
                                    transition duration-200
                                    ${activePage === menu.title ? "border-2 border-[#4789a9] rounded-lg" : ""}`}
                    >
                        <img src={menu.icon} alt={menu.title} className="w-7 h-7" />
                        {menu.title}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default DetailItem;
