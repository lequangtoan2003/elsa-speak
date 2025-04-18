import {  useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

const LoginSuccess = () => {
  const { userId, tokenLogin } = useParams();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginWithToken = async () => {
      if (userId && tokenLogin) {
        try {
          const response = await axios.post("http://localhost:8080/api/auth/login-success", {
            id: userId,
            tokenLogin: tokenLogin,
          });
          if (response.data?.token) {
            // ✅ Lưu vào localStorage
            localStorage.setItem("accessToken", response.data.token);
            localStorage.setItem("role", response.data.role);
            setIsLoggedIn(true); // để điều hướng
          }
        } catch (error) {
          console.error("Login failed:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    loginWithToken();
  }, [userId, tokenLogin]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500" />
        <p className="mt-4 text-gray-600 text-lg">
          Đang đăng nhập, vui lòng chờ...
        </p>
      </div>
    );
  }
  const token = localStorage.getItem("accessToken")
  if (isLoggedIn) {
    return <Navigate state={{token}} to="/" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-medium mb-4">Yêu cầu bạn hãy đăng nhập</h1>
      <Link
        to="/login"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Đăng nhập
      </Link>
    </div>
  );
};

export default LoginSuccess;
