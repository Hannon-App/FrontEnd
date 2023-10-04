
import AdminLayout from "../../components/Layout/Admin/AdminLayout"

const AdminDashboard = () => {

    return (
        <AdminLayout>
            <div className="bg-slate-300 h-screen p-5">
                <main>
                    <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                        Dashboard
                    </div>
                </main>
            </div>
        </AdminLayout>
    )
}

export default AdminDashboard