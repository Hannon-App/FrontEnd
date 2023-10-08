import Navbar from './Navbar'
import Sidebar2 from './Sidebar2'
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}
const LayoutUser = ({ children }: MainLayoutProps) => {
  return (
    <div className='flex w-full'>
      <Sidebar2 />
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto bg-E5E5E5">
        <main className="p-4">{children}</main>
        </div>
      </div>
    </div>
  )
}

export default LayoutUser