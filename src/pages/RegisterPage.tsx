import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import imgregister from "../assets/imgregister.jpeg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface RegisterFormData {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

interface RegisterResponse {
  success: boolean;
  mes: string;
  user?: RegisterFormData; // Thêm user vào response nếu backend trả về
}

const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    username: "",
    password: "",
    firstname: "User",
    lastname: "Default",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);
  
    try {
      const response = await axios.post<RegisterResponse>(
        "http://localhost:8080/api/users/register",
        formData
      );
      console.log("API Response:", response.data);
  
      if (response.data.success) {
        setSuccess(response.data.mes);
        // alert("Đã đăng ký thành công!");
        console.log("Registered User:", formData);
        // console.log("Will navigate to /login in 2s");
        setTimeout(() => {
          // console.log("Navigating to /login now");
          navigate("/login");
        }, 1000);
      } else {
        setError(response.data.mes || "Something went wrong");
      }
    } catch (err) {
      const error = err as AxiosError<RegisterResponse>;
      console.error("Register error:", error.response?.data || error.message);
      setError(error.response?.data?.mes || "Internal Server Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Link to="/profile">
        <div className="border-2 border-gray-300 w-12">Out</div>
      </Link>
      <nav className="w-[80%] flex items-center mx-auto justify-between">
        <div className="font-bold">logo</div>
        <div className="flex gap-2 items-center">
          <Link to="/register">
            <div className="flex items-center justify-center w-[90px] bg-slate-950 text-white p-[4px] rounded-lg">
              Đăng ký
            </div>
          </Link>
          <Link to="/login">
            <div className="flex items-center justify-center w-[90px] bg-slate-950 text-white p-[4px] rounded-lg">
              Đăng nhập
            </div>
          </Link>
        </div>
      </nav>

      <div className="flex pt-20 w-[70%] mx-auto gap-12">
        <div className="w-[300px] h-[600px] rounded-lg drop-shadow-2xl">
          <img
            className="rounded-3xl -rotate-3 border-[12px] border-gray-200"
            src={imgregister}
            alt=""
          />
        </div>
        <div className="flex-1 p-8">
          <div className="">
            <div className="font-bold text-6xl pb-6">Xin chào</div>
            <div className="text-gray-400">Chào mừng bạn đến với Speakup!</div>
          </div>
          <form onSubmit={handleRegister} className="flex flex-col gap-4 pt-4">
            <input
              className="w-[350px] bg-gray-200 p-[4px] rounded-lg outline-none"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Nhập Email"
              required
            />
            <input
              className="w-[350px] bg-gray-200 p-[4px] rounded-lg outline-none"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Tên tài khoản"
              required
            />
            <div className="w-[350px] relative">
              <input
                className="bg-gray-200 w-full p-[4px] rounded-lg outline-none pr-10"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Nhập mật khẩu"
                required
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  (AiOutlineEyeInvisible as any)({ size: 20 })  
                ) : (
                  (AiOutlineEye as any)({ size: 20 }) // Ép kiểu để tránh lỗi TS2786
                )}
              </span>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {success && <div className="text-green-500 text-sm">{success}</div>}
            <button
              type="submit"
              className="flex items-center justify-center font-bold w-[350px] bg-slate-950 p-[4px] text-white rounded-lg disabled:bg-gray-500"
              disabled={isLoading}
            >
              {isLoading ? "Đang đăng ký..." : "Đăng ký"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;