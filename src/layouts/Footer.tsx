import React from "react";
import ConversationList from "../components/ConversationList";
import StudyOptions from "../components/StudyOptions";
import { useLocation } from "react-router-dom";


const Footer = () => {
    const location = useLocation();
    return (
        <footer className="fixed right-0 top-0 w-[28%] h-screen bg-primary text-color py-4 px-6 flex flex-col justify-between items-center shadow-lg">
            <span className="text-sm font-medium">
                © 2025 TOEIC Learning | Made with ❤️
            </span>

            {location.pathname === "/" ? (
                // Nếu ở HomePage, hiển thị ConversationList & StudyOptions
                <>
                    <div className="pl-20 w-full">
                        <ConversationList />
                    </div>
                    <div className="flex flex-col items-center justify-center flex-1">
                        <StudyOptions />
                    </div>
                </>
            ) : location.pathname === "/study" ? (
                // Nếu ở StudyPage, hiển thị component khác
                <>
                    <div className="p-20 w-full flex flex-col items-center justify-center">
                        <div className="font-bold">hiii</div>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-1">
                        <StudyOptions />
                    </div>
                </>
            ) : null}
        </footer>
    );
};

export default Footer;
