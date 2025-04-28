import React, { Suspense } from "react";
import { Routes, Route, useLocation,} from "react-router-dom";
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
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import Public from "../pages/Public";
import Footer from "../layouts/Footer";
import ConversationRouter from "../Router/ConversationRouter";
const LoginSuccess = React.lazy(() => import("../pages/LoginSuccessPage"));
const MainLayout: React.FC = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại

  const hideFooter = /^\/conversationdetails\/\d+$/.test(location.pathname);
  
  return (
    <div className="flex h-screen">
      
        <Routes>
          <Route path="/" element={<Public />} >
          <Route path="" element={<HomePage />} />
            <Route path="/study" element={<StudyPage />} />
            <Route path="/detect" element={<DetectPage />} />
            <Route path="/progress" element={<Progress />} /> 
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/pronounce" element={<Pronounce />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/topic-learning" element={<TopicLearning />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/profiledetails" element={<ProfileDetails />} />
            <Route path="/conversationdetails/:id" element={<ConversationRouter />} />
          </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            <Route path="/login-success/:userId/:tokenLogin" element={(
              <Suspense fallback={<div>Loading...</div>}><LoginSuccess /></Suspense>
            )} />
      
        </Routes>
        {!hideFooter && <Footer />}
      
    </div>
  );
};

export default MainLayout;