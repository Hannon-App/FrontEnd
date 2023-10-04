// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginAdmin from "./pages/Login/LoginAdmin";
import AdminDashboard from "./pages/Admin/Index";
import Layout from "./components/Layout";
import TenantDashboard from "./pages/Tenant/TenantDashboard/TenantDashboard";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
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