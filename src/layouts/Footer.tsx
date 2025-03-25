import React from "react";
import ConversationList from "../components/ConversationList";
import StudyOptions from "../components/StudyOptions";


const Footer = () => {
    return (
        <footer className="fixed right-0 top-0 w-[28%] h-screen bg-primary text-color py-4 px-6 flex flex-col justify-between items-center shadow-lg">
            <span className="text-sm font-medium">
                © 2025 TOEIC Learning | Made with ❤️
            </span>
            
            <div className="pl-20 w-full">
                <ConversationList />
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
                <StudyOptions />
                
            </div>

            {/* Thêm ConversationList vào đây */}
            
        </footer>
    );
};

export default Footer;
