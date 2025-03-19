import React, { useState, Suspense, lazy } from 'react';
import Header from '../layouts/Header';
import Footer from './Footer';

const HomePage = lazy(() => import('../pages/HomePage'));
const StudyPage = lazy(() => import('../pages/StudyPage'));
const DetectPage = lazy(() => import('../pages/DetectPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));

const MainLayout: React.FC = () => {
    const [activePage, setActivePage] = useState<string>("Trang chủ");

    const renderPage = () => {
        console.log("Trang hiện tại:", activePage);
        switch (activePage) {
            case "Trang chủ":
                return <HomePage />;
            case "Học":
                return <StudyPage />;
            case "Phát hiện":
                return <DetectPage />;
            case "Hồ sơ":
                return <ProfilePage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="flex">
            {/* Sidebar cố định bên trái */}
            <Header activePage={activePage} setActivePage={setActivePage} />

            {/* Nội dung chính */}
            <div className="flex-1 h-screen overflow-y-auto bg-gray-200">
                <Suspense fallback={<div>⏳ Đang tải...</div>}>
                    {renderPage()}
                </Suspense>
            </div>

            {/* Footer bên phải */}
            <div className="w-1/5 bg-gray-800 text-white p-4 flex items-center justify-center">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
