import { useState } from 'react';
import {IoIosArrowDown} from 'react-icons/io'
import {BiUserCircle} from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion';

const AdminDropdownAvatar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    className="flex text-gray-300 hover:text-white focus:outline-none focus:text-white items-center space-x-2"
                >
                    <img
                        src="https://i.pravatar.cc/300" // Ganti dengan path gambar avatar Anda
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="text-gray-800">John Doe</span>
                    {/* <IoIosArrowDown /> */}
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                        {/* Dropdown content */}
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
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Pengaturan
                            </a>
                            <div className="border-t border-gray-100"></div>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                            >
                                Keluar
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default AdminDropdownAvatar