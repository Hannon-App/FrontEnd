// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage/Index";
import LoginAdmin from "./pages/Login/LoginAdmin";
import AdminDashboard from "./pages/AdminDashboard/Index";
import Layout from "./components/Layout";
import TenantDashboard from "./pages/Tenant/TenantDashboard/TenantDashboard";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard-tenant" element={<TenantDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App