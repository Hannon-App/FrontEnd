import Cookies from 'js-cookie';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Logo from "../assets/Hannon.svg"


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
  const handleOut = () => {
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("role");
    navigate('/login-user')
  }
  return (
    <div className="w-full">
  <div className="flex justify-between mx-6  items-center">
    <div className='ml-20'>
      <img src={Logo} style={{ width: "4rem" }} alt="" />
    </div>
    <div onClick={() => setOpen(!open)} className="cursor-pointer">
      <img className="w-12 h-12 p-1 rounded-full" src="https://placekitten.com/200/300" alt="Bordered avatar"></img>
    </div>
  </div>
      {
        open ? (
          <motion.div
            animate={{ y: 10 }}
            exit={{ opacity: 0 }}
            className="z-10 absolute right-10 shadow-lg bg-white divide-y divide-gray-100 rounded-lg w-44">
            <div className="py-1">
              <div className="block px-4 py-2 hover:bg-gray-100" onClick={handleOut}>Sign out</div>
            </div>
          </motion.div>
        ) : null
      }
    </div>
  )
}

export default Navbar