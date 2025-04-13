import React, { createContext, useState, ReactNode } from "react";

// Định nghĩa type cho FooterComponent
type FooterComponent = "AccountDetails" | "SettingsDetails" | "FooterHome" | "FooterStudy" | "FooterDetect" | "PersonalDetails" | "Theme" | null;

// Định nghĩa type cho AppContext
interface AppContextType {
  footerComponent: FooterComponent;
  setFooterComponent: (component: FooterComponent) => void;
}

// Tạo context với giá trị mặc định là undefined
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Hàm tiện ích để lấy footerComponent từ localStorage
const getSavedFooterComponent = (): FooterComponent => {
  const savedFooter = localStorage.getItem("footerComponent");
  return savedFooter ? (savedFooter as FooterComponent) : null;
};

// Hàm tiện ích để lưu footerComponent vào localStorage
const saveFooterComponent = (component: FooterComponent): void => {
  localStorage.setItem("footerComponent", component || "");
};

// Component AppProvider
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [footerComponent, setFooterComponentState] = useState<FooterComponent>(getSavedFooterComponent);

  const setFooterComponent = (component: FooterComponent) => {
    setFooterComponentState(component);
    saveFooterComponent(component);
  };

  return (
    <AppContext.Provider value={{ footerComponent, setFooterComponent }}>
      {children}
    </AppContext.Provider>
  );
};