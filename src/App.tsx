import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </div>
  );
}

export default App;
