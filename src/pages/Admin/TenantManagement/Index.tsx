// import React from 'react'

import AdminLayout from "../../../components/Layout/Admin/AdminLayout"

const TenantManagement = () => {
    return (
        <AdminLayout>
            <div className="bg-slate-300 h-screen p-5">
                <main>
                    <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                        <table className="min-w-full table-auto bg-white shadow">
                            <thead className=" bg-sky-900">
                                <tr className="text-white">
                                    <th className="w-32 p-3 border ">No. </th>
                                    <th className="p-3 border">Nama</th>
                                    <th className="w-64 p-5 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {role && role.map((item: any, index: any) => (
                                    <tr key={index}>
                                        <td className="w-32 border text-center">{index + 1}.</td>
                                        <td className="p-4 w-auto border text-center">{item?.nama}</td>
                                        <td className='flex justify-center p-3 w-64 border gap-3'>
                                            <Button
                                                id='Edit Button'
                                                color='bg-warning'
                                                hover='bg-yellow-200'
                                                onClick={() => handleEdit(item?.id)}
                                                src='edit-3'
                                            />
                                            <Button
                                                id='Delete Button'
                                                color='bg-danger'
                                                hover='bg-red-200'
                                                onClick={() => handleDelete(item?.id)}
                                                src='delete-2'
                                            />
                                        </td>
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                </main>

            </div>

        </AdminLayout>

    )
}

export default TenantManagement