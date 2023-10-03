import { FC, useState } from 'react';

import Sidebar from '../../layout/Sidebar';
import Navbar from '../../layout/Navbar';

const AdminDashboard = () => {

    return (
        <div className="flex">
                <Sidebar />
                <main className="flex-grow">
                    <Navbar />
                    {/* Konten Utama Dashboard */}
                    <div className='content-header flex justify-between m-4'>
                        <h1 className='text-3xl font-bold leading-none tracking-tight'>Dashboard</h1>
                        
                    </div>
                    <div>
                        {/* <CardDashboard/> */}
                    </div>


                </main>
            </div>
    )
}

export default AdminDashboard