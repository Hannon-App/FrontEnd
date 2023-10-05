// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminDashboard from "./pages/Admin/Index";
import RegisterUser from "./pages/Auth/RegisterUser";
import Layout from "./components/Layout";
import LoginAdmin from "./pages/Auth/LoginAdmin";
import LoginTenant from "./pages/Auth/LoginTenant";
import TenantArchive from "./pages/Tenant/TenantArchive/TenantArchive";
import TenantDashboard from "./pages/Tenant/TenantDashboard/TenantDashboard";
import TenantIncome from "./pages/Tenant/TenantIncome/TenantIncome";
import TenantItem from "./pages/Tenant/TenantItem/TenantItem";
import TenantManagement from "./pages/Admin/TenantManagement/Index";
import TenantRented from "./pages/Tenant/TenantRented/TenantRented";
import axios from "axios";

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
          <Route path="/LoginTenant" element={<LoginTenant />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard-tenant" element={<TenantDashboard />} />
            <Route path="/item-tenant" element={<TenantItem />} />
            <Route path="/archive-tenant" element={<TenantArchive />} />
            <Route path="/rented-tenant" element={<TenantRented />} />
            <Route path="/income-tenant" element={<TenantIncome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App