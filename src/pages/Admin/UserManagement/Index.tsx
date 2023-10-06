import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Cookies from "js-cookie";
import axios from 'axios';
import Button from '../../../components/Button';

import AdminLayout from "../../../components/Layout/Admin/AdminLayout"

const UserManagement = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState([]);
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

    const getAllUser = () => {
        axios
            .get("users", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response?.data?.data);
                setUser(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            })
    };
    useEffect(() => {
        middleware();
        const savedName = Cookies.get('name');
        if (savedName) {
            setName(savedName);
        }
        getAllUser();
    }, [token]);

    return (
        <AdminLayout>
            <div className="bg-slate-300 h-screen p-5">
                <main>
                    <div className='flex justify-end'>
                        <button className='bg-primary px-10 py-3  hover:shadow-lg hover:text-opacity-90 font-semibold text-white rounded flex justify-center items-center'>Add Tenant</button>
                    </div>
                    <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                        <table className="min-w-full table-auto bg-white shadow">
                            <thead className=" bg-sky-900">
                                <tr className="text-white">
                                    <th className="w-10 p-3 border ">No. </th>
                                    <th className="p-3 border">Nama</th>
                                    <th className="p-3 border">Alamat</th>
                                    <th className="p-3 border">Email</th>
                                    <th className="p-3 border">No. Handphone</th>
                                    <th className="p-3 border">Alamat</th>
                                    <th className="p-3 border">Profile Photo</th>
                                    <th className="p-3 border">KTP Photo</th>
                                    <th className="p-3 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user && user.map((item: any, index: any) => (
                                    <tr key={index}>
                                        <td className="w-10 border text-center">{index + 1}.</td>
                                        <td className="p-4 w-auto border text-center">{item?.name}</td>
                                        <td className="p-4 w-auto border text-center">{item?.address}</td>
                                        <td className="p-4 w-auto border text-center">{item?.email}</td>
                                        <td className="p-4 w-auto border text-center">{item?.phone_number}</td>
                                        <td className="p-4 w-auto border text-center">{item?.address}</td>
                                        <td className="p-4 w-auto border text-center">{item?.profile_photo}</td>
                                        <td className="p-4 w-auto border text-center"><img src={item?.image} alt="" /></td>
                                        <td className='flex justify-center p-3 border gap-3'>
                                            <button className='bg-warning px-5 py-3 hover:shadow-lg hover:text-opacity-90 font-semibold text-white rounded flex justify-center items-center' >Edit</button>
                                            <button className='bg-danger px-5 py-3 hover:shadow-lg hover:text-opacity-90 font-semibold text-white rounded flex justify-center items-center' >Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </AdminLayout>
    )
}

export default UserManagement