import { useEffect, useState } from 'react';
import axios from 'axios';


import AdminLayout from "../../../components/Layout/Admin/AdminLayout"

const TenantManagement = () => {
    const [tennant, setTennant] = useState<[]>([]);
    const getAllTenant = () => {
        axios
            .get("tenant")
            .then((response) => {
                console.log(response?.data);
                setTennant(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            })
    };
    useEffect(() => {
        getAllTenant();
    })
    return (
        <AdminLayout>
            <div className="bg-slate-300 h-screen p-5">
                <main>
                    <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                        <table className="min-w-full table-auto bg-white shadow">
                            <thead className=" bg-sky-900">
                                <tr className="text-white">
                                    <th className="w-10 p-3 border ">No. </th>
                                    <th className="p-3 border">Nama</th>
                                    <th className="p-3 border">Alamat</th>
                                    <th className="p-3 border">Email</th>
                                    <th className="p-3 border">No. Handphone</th>
                                    <th className="p-3 border">Open Time</th>
                                    <th className="p-3 border">Close Time</th>
                                    <th className="p-3 border">Images</th>
                                    <th className="p-3 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tennant && tennant.map((item: any, index: any) => (
                                    <tr key={index}>
                                        <td className="w-10 border text-center">{index + 1}.</td>
                                        <td className="p-4 w-auto border text-center">{item?.name}</td>
                                        <td className="p-4 w-auto border text-center">{item?.address}</td>
                                        <td className="p-4 w-auto border text-center">{item?.email}</td>
                                        <td className="p-4 w-auto border text-center">{item?.phone}</td>
                                        <td className="p-4 w-auto border text-center">{item?.open_time}</td>
                                        <td className="p-4 w-auto border text-center">{item?.close_time}</td>
                                        <td className="p-4 w-auto border text-center"><img src={item?.image} alt="" /></td>
                                        <td className='flex justify-center p-3 border gap-3'>
                                            <button
                                                id="Edit"
                                                // onClick={onClick}
                                                className={`flex gap-3 justify-center items-center text-white bg-warning hover:bg-yellow-200 rounded-md px-4 py-2 font-semibold`}
                                            >
                                                <img src="https://img.icons8.com/material-outlined/24/edit--v1.png" alt="edit--v1" />
                                            </button>
                                            <button
                                                id="Edit"
                                                // onClick={onClick}
                                                className="flex gap-3 justify-center items-center text-white bg-danger hover:bg-red-200 rounded-md px-4 py-2 font-semibold"
                                            >
                                                <img src="https://img.icons8.com/material-outlined/24/delete-forever.png" alt="delete-forever" />
                                            </button>
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

export default TenantManagement