import { useState } from 'react';
import {BiUserCircle} from 'react-icons/bi';
import {HiOutlineLogout} from 'react-icons/hi';
import {FaUserCog} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const AdminDropdownAvatar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        Swal.fire({
          title: "Apakah anda ingin Logout?",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "YES",
        }).then(() => {
          Cookies.remove("username");
          Cookies.remove("token");
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Success Logout",
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
          }).then((response) => {
            if (response?.isConfirmed) {
              navigate("/LoginAdmin");
            }
          });
        });
      };
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    className="flex text-gray-300 hover:text-white focus:outline-none focus:text-white items-center space-x-2"
                >
                    <img
                        src="https://i.pravatar.cc/300"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                    />
                    {/* <span className="text-gray-800">{fullName}</span> */}
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                    >
                        <div className="py-1">
                            <a
                                href="#"
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <BiUserCircle/>
                                Profil
                            </a>
                            <a
                                href="#"
                                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <FaUserCog/>
                                Pengaturan
                            </a>
                            <div className="border-t border-gray-100"></div>
                            <a
                                onClick={handleLogout}
                                className="flex gap-2 items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                            >
                                <HiOutlineLogout/>
                                Logout
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default AdminDropdownAvatar