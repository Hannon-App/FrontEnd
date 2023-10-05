// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import LoginAdmin from "./pages/Auth/LoginAdmin";
import AdminDashboard from "./pages/Admin/Index";
import TenantManagement from "./pages/Admin/TenantManagement/Index";
import RegisterUser from "./pages/Auth/RegisterUser";
import Layout from "./components/Layout";
import TenantDashboard from "./pages/Tenant/TenantDashboard/TenantDashboard";

const App = () => {
  axios.defaults.baseURL = "https://hannonapp.site/";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/TenantManagement" element={<TenantManagement />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/RegisterUser" element={<RegisterUser />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard-tenant" element={<TenantDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App