import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
const Public: React.FC = () => {
  const location = useLocation();
  const hideFooter = /^\/conversationdetails\/\d+$/.test(location.pathname);
  return (
    <>
        <Header />
        <div className="flex-1 h-screen overflow-y-auto scrollbar-hide bg-home">
        <Outlet/>
        </div>
        {!hideFooter && (
  <div className="w-[28%] bg-primary text-white p-4 flex items-center justify-center">
    <Footer />
  </div>
)}
    </>
  );
};

export default Public;
