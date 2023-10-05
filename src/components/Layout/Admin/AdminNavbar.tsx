import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import AdminDropdownAvatar from "./AdminDropdownAvatar"

const AdminNavbar = () => {
    const [name, setName] = useState('');
    useEffect(() => {
        const savedName = Cookies.get('name');
        if (savedName) {
            setName(savedName);
        }
    }, [name]);
    return (
        <>
            <nav className="bg-white pt-4 px-4 sticky top-0">
                <div className="container mx-auto">
                    <div className="flex items-center justify-end">
                        <div className="md:hidden">
                            {/* Tombol Hamburger untuk tampilan mobile */}
                            <button className="text-white">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                        <div className="">
                            {/* Tautan-tautan menu */}
                            <AdminDropdownAvatar fullName={name}  />
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar