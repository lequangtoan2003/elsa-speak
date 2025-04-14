import React, { createContext, useState, ReactNode } from "react";


// Định nghĩa type cho User
interface User {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
  }

  // Định nghĩa type cho AppContext
interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
  }

// Tạo context với giá trị mặc định là undefined
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hàm tiện ích để lấy user từ localStorage
const getSavedUser = (): User | null => {
    try {
      const savedUser = localStorage.getItem("user");
      if (!savedUser) return null;
      const parsed = JSON.parse(savedUser);
      // Kiểm tra xem parsed có đủ các trường không
      if (
        parsed &&
        typeof parsed === "object" &&
        "username" in parsed &&
        "email" in parsed
      ) {
        return {
          username: parsed.username,
          email: parsed.email,
          firstname: parsed.firstname || "", // Giá trị mặc định
          lastname: parsed.lastname || "", // Giá trị mặc định
        };
      }
      return null;
    } catch (error) {
      console.error("Lỗi khi parse user từ localStorage:", error);
      return null;
    }
  };

// Hàm tiện ích để lưu user vào localStorage
const saveUser = (user: User | null): void => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  };

// Component AppProvider
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(getSavedUser);

  const setUser = (user: User | null) => {
    setUserState(user);
    saveUser(user);
  };

    return (
        <AuthContext.Provider value={{ user, setUser }}>
        {children}
        </AuthContext.Provider>
  );
};
// Hook tiện ích để sử dụng AppContext
export const useAuthContext = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
      throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
  };