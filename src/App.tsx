
// import React from 'react';
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Awal from "./pages/Awal";
import AdminDashboard from "./pages/Admin/Index";
import RegisterUser from "./pages/Auth/RegisterUser";
import RegisterTenant from "./pages/Auth/RegisterTenant";
import AddTenant from "./pages/Admin/TenantManagement/AddTenant";
import Layout from "./components/Layout";

import EditUser from "./pages/Admin/UserManagement/EditUser";
import LoginAdmin from "./pages/Auth/LoginAdmin";
import LoginTenant from "./pages/Auth/LoginTenant";
import TenantArchive from "./pages/Tenant/TenantArchive/TenantArchive";
import TenantDashboard from "./pages/Tenant/TenantDashboard/TenantDashboard";
import TenantIncome from "./pages/Tenant/TenantIncome/TenantIncome";
import TenantItem from "./pages/Tenant/TenantItem/TenantItem";
import TenantManagement from "./pages/Admin/TenantManagement/Index";
import UserManagement from "./pages/Admin/UserManagement/Index";
import TenantRented from "./pages/Tenant/TenantRented/TenantRented";
import UserDashboard from "./pages/User/Home/Dashboard/Index";
import Detail from "./pages/User/Home/Detail/Index";
import Item from "./pages/User/Home/Item/Index";
import Pesanan from "./pages/User/Pesanan/BarangPesanan";
import Pembayaran from "./pages/User/Pesanan/Pembayaran/Index";
import CardShop from "./pages/User/Pesanan/CardShoop/Index";
import Membership from "./pages/User/Membership/Index";
import LoginUser from "./pages/User/Auth/Login/Index";
import TentangKami from "./pages/User/TentangKami/Index";


const App = () => {
  axios.defaults.baseURL = "https://hannonapp.site/";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDashboard/>} />
          <Route path="/LoginTenant" element={<LoginTenant />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />

          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/TenantManagement" element={<TenantManagement />} />
          <Route path="/UserManagement" element={<UserManagement />} />
          <Route path="/EditUser/:id" element={<EditUser />} />
          <Route path="/AddTenant" element={<AddTenant />} />
          
          <Route path="/RegisterUser" element={<RegisterUser />} />
          <Route path="/RegisterTenant" element={<RegisterTenant />} />
          
          <Route path="/login-user" element={<LoginUser />} />
          <Route path="/dashboard-user" element={<UserDashboard />} />
          <Route path="/item-user/:id" element={<Item />} />
          <Route path="/detail-pesanan/:id" element={<Detail />} />
          <Route path="/pesanan-user" element={<Pesanan />} />
          <Route path="/pembayaran-user" element={<Pembayaran />} />
          
          <Route path="/cardshop-user" element={<CardShop />} />
          <Route path="/membership-user" element={<Membership />} />
          <Route path="/tentang-kami" element={<TentangKami />} />

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