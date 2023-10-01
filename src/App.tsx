// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App