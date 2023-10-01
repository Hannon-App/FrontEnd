// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import AdminDashboard from "./pages/AdminDashboard/Index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App