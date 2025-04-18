import React from 'react';
import StudyContentList from '../components/StudyContentList';

const DetectPage: React.FC = () => {
 
    return (
        <div className="bg-home h-screen overflow-y-auto scrollbar-hide">
      {/* Header cố định */}
      <div className="w-full text-xl font-semibold py-2 px-4 bg-home text-color sticky top-0 z-20">
        <h1>Công cụ & Tính năng</h1>
        <div className="border-b border-gray-200 pt-5"></div>
      </div>

      {/* Nội dung có thể cuộn */}
      <div className="px-4">
        <StudyContentList />
      </div>
    </div>
    );
};

export default DetectPage;
