import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import StudyPage from "../pages/StudyPage";
import DetectPage from "../pages/DetectPage";
import ProfilePage from "../pages/ProfilePage";

const MainLayout: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
        <Header />

      {/* Nội dung chính */}
      <div className="flex-1 h-screen overflow-y-auto p-4 bg-gray-300">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/detect" element={<DetectPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>

      {/* Footer */}
      <div className="w-1/5 bg-primary text-white p-4 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
