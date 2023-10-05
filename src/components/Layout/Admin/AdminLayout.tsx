import { ReactNode } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

interface MainLayoutProps {
    children: ReactNode;
  }

const AdminLayout  = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="w-5/6 ml-auto ">
        <AdminNavbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout