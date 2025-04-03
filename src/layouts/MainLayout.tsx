import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import StudyPage from "../pages/StudyPage";
import DetectPage from "../pages/DetectPage";
import ProfilePage from "../pages/ProfilePage";
import Pronounce from "../pages/Pronounce";
import Practice from "../pages/Practice";
import TopicLearning from "../pages/TopicLearning";
import Certificate from "../pages/Certificate";
import Progress from "../pages/Progress";
import ProfileDetails from "../pages/ProfileDetails";

const MainLayout: React.FC = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại

  return (
    <div className="flex h-screen">
      {/* Sidebar (Header) */}
      <Header />

      {/* Nội dung chính */}
      <div className="flex-1 h-screen overflow-y-auto scrollbar-hide bg-home">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/detect" element={<DetectPage />} />
          <Route path="/progress" element={<Progress />} /> 
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/pronounce" element={<Pronounce />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/topic-learning" element={<TopicLearning />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/profiledetails" element={<ProfileDetails />} />

        </Routes>
      </div>

      {/* Điều kiện render Footer chỉ khi không phải là trang Profile */}
      {location.pathname !== "/profile" && (
        <div className="w-[28%] bg-primary text-white p-4 flex items-center justify-center">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
