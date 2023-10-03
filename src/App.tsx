// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/Index";
import LoginAdmin from "./pages/Login/LoginAdmin";
import AdminDashboard from "./pages/AdminDashboard/Index";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App