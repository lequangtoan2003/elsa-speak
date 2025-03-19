import React from "react";
import DetailItem from "./DetailItem";

interface HeaderProps {
    activePage: string;
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
    return (
        <div className="w-[20%] h-screen fixed top-0 left-0 bg-primary shadow-lg border-r-white border-r-2 z-10">
            <nav className="flex flex-col pl-4 w-full h-full items-center py-6">
                <div className="text-xl font-semibold cursor-pointer text-white">
                    Toeic
                </div>
                <div className="flex flex-col items-start w-full">
                    <DetailItem activePage={activePage} setActivePage={setActivePage} />
                </div>
                <ul className="text-sm text-gray-300 font-medium mt-auto pb-6">
                    <li>
                        <a href="/#" className="hover:text-white">English</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
