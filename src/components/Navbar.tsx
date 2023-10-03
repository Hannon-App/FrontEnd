import React, { useState } from 'react'

import { motion } from 'framer-motion'

type Props = {}

const Navbar = (props: Props) => {
    const [open, setOpen] = useState(false)
  return (
    <div className="w-full">
      <div className="flex justify-end mx-6 my-4 items-center ">
        <div onClick={() => setOpen(!open)} className="cursor-pointer" >
          <img className=" w-12 h-12 p-1 rounded-full" src="https://placekitten.com/200/300" alt="Bordered avatar"></img>
        </div>
      </div>
      {
        open ? (
          <motion.div
            animate={{ y: 10 }}
            exit={{ opacity: 0 }}
            className="z-10 absolute right-10 shadow-lg bg-white divide-y divide-gray-100 rounded-lg w-44">
            <div className="py-1">
              <div className="block px-4 py-2 hover:bg-gray-100">Sign out</div>
            </div>
          </motion.div>
        ) : null
      }
    </div>
  )
}

export default Navbar