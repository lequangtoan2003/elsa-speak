import React, { useEffect } from "react";
import ConversationListHome from "../components/ConversationListHome";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage: React.FC = () => {
  const location = useLocation();
  const token = location.state?.token || localStorage.getItem("accessToken") || null; 
  console.log("isLoggedIn", token); // Kiểm tra giá trị của isLoggedIn
  const navigation = useNavigate()
  

  useEffect(() => {
      if (!token) {
        navigation("/login")
      } else {
        if (!localStorage.getItem("accessToken")) {
          navigation("/login")
        }
      }
    }, [navigation, token]);

    const fetchUserData = async () => {
      const response = await axios.get("http://localhost:8080/api/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log("User data:", response.data);

    }
    useEffect(() => {
      fetchUserData()
    })
  return (
    <div className="bg-home h-screen overflow-y-auto scrollbar-hide">
      {/* Header cố định */}
      <div className="w-full text-xl font-semibold py-2 px-4 bg-home text-color sticky top-0 z-20">
        <h1>Learning modes</h1>
        <div className="border-b border-gray-200 pt-5"></div>
      </div>

      {/* Nội dung có thể cuộn */}
      <div className="px-4">
        <ConversationListHome />
      </div>
    </div>
  );
};

export default HomePage;
