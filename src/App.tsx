import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
      </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
