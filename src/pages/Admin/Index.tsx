import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

import AdminLayout from "../../components/Layout/Admin/AdminLayout"

const AdminDashboard = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const token = Cookies.get("token");
    const middleware = () => {
        if (token === undefined) {
            Swal.fire({
                icon: "error",
                title: "You Don't Have Access in this Page...",
                text: "GO BACK!!!",
                backdrop: "#fff",
                confirmButtonText: "OK"
            }).then((response) => {
                if (response.isConfirmed) {
                    navigate("/LoginAdmin");
                }
            })
        };
    };
    useEffect(() => {
        middleware();
        const savedName = Cookies.get('name');
        if (savedName) {
            setName(savedName);
        }
    }, [token]);

    return (
        <AdminLayout>
            <div className="bg-slate-300 h-screen p-5">
                <main>
                    <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                        Dashboard <span>{name}</span>
                    </div>
                </main>
            </div>
        </AdminLayout>
    )
}

export default AdminDashboard