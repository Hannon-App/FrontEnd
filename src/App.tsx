// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import LoginAdmin from "./pages/Auth/LoginAdmin";
import AdminDashboard from "./pages/Admin/Index";
import TenantManagement from "./pages/Admin/TenantManagement/Index";
import Layout from "./components/Layout";
import TenantDashboard from "./pages/Tenant/TenantDashboard/TenantDashboard";

const App = () => {
  axios.defaults.baseURL = "https://project2.otixx.online/";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/TenantManagement" element={<TenantManagement />} />
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