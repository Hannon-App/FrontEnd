import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

import Button from '../../../components/Button';
import AdminLayout from "../../../components/Layout/Admin/AdminLayout";

const TenantManagement = () => {
    const navigate = useNavigate();
    const [tennant, setTennant] = useState<[]>([]);
    const handleEdit = (id: number) => {
        navigate(`/EditTenant/${id}`, {
            state: {
                id: id,
            }
        });
    };
    const handleDelete = (id: number) => {
        Swal.fire({
            title: 'Are You Sure For Delete?',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`tenant/${id}`)
                    // .delete(`tenant/${id}`, {
                    //     headers: {
                    //         Authorization: `Bearer ${token}`,
                    //     },
                    // })
                    .then((response) => {
                        console.log(response);
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: response.data.message,
                            confirmButtonText: "OK",
                        }).then(() => {
                            getAllTenant();
                        });
                    })
                    .catch((error) => {
                        Swal.fire({
                            icon: "error",
                            title: "Failed",
                            text: `Something went wrong : ${error}`,
                            confirmButtonText: "OK",
                        });
                    });
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    };
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
                                            <Button textBtn="Edit" color="bg-warning" onClick={() => handleEdit(item?.id)} />
                                            <Button textBtn="Delete" color="bg-danger" onClick={() => handleDelete(item?.id)} />
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