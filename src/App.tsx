import React, { useEffect } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/*" element={<MainLayout />} />
          </Routes>
        </AppProvider>
      </AuthProvider>
      
    </div>
  );
}

export default App;
