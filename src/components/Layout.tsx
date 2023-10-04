import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import React from 'react'
import Sidebar from './Sidebar'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto bg-E5E5E5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout