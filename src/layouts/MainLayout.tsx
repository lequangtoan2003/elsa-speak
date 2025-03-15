import React, { useState, Suspense, lazy } from 'react';
import DetailItem from '../layouts/DetailItem';
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
        <div className="flex h-screen">
            {/* Sidebar bên trái */}
            <div className="w-1/4 bg-gray-800 text-white p-4">
                <DetailItem activePage={activePage} setActivePage={setActivePage} />
            </div>

            {/* Nội dung chính */}
            <div className="flex-1 p-4 bg-gray-200 rounded-lg">
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
