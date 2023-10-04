// import React from 'react'

import AdminDropdownAvatar from "./AdminDropdownAvatar"

const AdminNavbar = () => {
  return (
    <>
        <nav className="bg-white p-4 sticky top-0">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-semibold text-xl">Immersive Dashboard</div>
                    <div className="md:hidden">
                        {/* Tombol Hamburger untuk tampilan mobile */}
                        <button className="text-white">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="">
                        {/* Tautan-tautan menu */}
                        <AdminDropdownAvatar/>

                    </div>
                    
                </div>
            </div>
        </nav>
    </>
  )
}

export default AdminNavbar