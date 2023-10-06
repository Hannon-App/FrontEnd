import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

import AdminLayout from "../../../components/Layout/Admin/AdminLayout";
import Button from "../../../components/Button";

const AddTenant = () => {
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
    }, [token]);
    return (
        <AdminLayout>
            <div className="bg-slate-300 h-screen p-5">
                <main>
                    <div className='flex justify-center'>
                        <Button textBtn="Back" color="bg-bgBtn" onClick={() => navigate(-1)} />
                    </div>
                    <div className='px-10 py-8 max-w-full bg-white rounded-lg mt-5'>
                        <form action="">
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <div className='mb-4'>
                                        <label
                                            htmlFor="nama_lengkap"
                                            className='block text-gray-700 font-semibold mb-2'
                                        >Nama Lengkap</label>
                                        <input
                                            type="text"
                                            id='nama_lengkap'
                                            name='nama_lengkap'
                                            placeholder='Input Nama Lengkap'
                                            // value={formData.nama_lengkap}
                                            // onChange={handleChange}
                                            required
                                            autoComplete='off'
                                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label
                                            htmlFor="email"
                                            className='block text-gray-700 font-semibold mb-2'
                                        >Email</label>
                                        <input
                                            type="email"
                                            id='surel'
                                            name='surel'
                                            placeholder='Input Email'
                                            // value={formData.surel}
                                            // onChange={handleChange}
                                            required
                                            autoComplete='off'
                                            className="shadow appearance-none border rounded-lg focus:ring-blue-500 w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label
                                            htmlFor="password"
                                            className='block text-gray-700 font-semibold mb-2'
                                        >Password</label>
                                        <input
                                            type="password"
                                            id='password'
                                            name='password'
                                            placeholder='Input Password'
                                            // value={formData.password}
                                            // onChange={handleChange}
                                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label
                                            htmlFor="address"
                                            className='block text-gray-700 font-semibold mb-2'
                                        >Alamat</label>
                                        <input
                                            type="text"
                                            id='address'
                                            name='address'
                                            placeholder='Input Nomor HP'
                                            // value={formData.address}
                                            // onChange={handleChange}
                                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label
                                            htmlFor="ktp_photo"
                                            className='block text-gray-700 font-semibold mb-2'
                                        >Foto KTP</label>
                                        <input
                                            type="file"
                                            id='ktp_photo'
                                            name='ktp_photo'
                                            // value={formData.ktp_photo}
                                            // onChange={handleChange}
                                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label
                                            htmlFor="profil_photo"
                                            className='block text-gray-700 font-semibold mb-2'
                                        >profil_photo</label>
                                        <input
                                            type="file"
                                            id='profil_photo'
                                            name='profil_photo'
                                            // value={formData.profil_photo}
                                            // onChange={handleChange}
                                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end text-center'>
                                <button type='submit' className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg flex gap-3'>Submit<img src="./src/assets/save-2.svg" alt="save-2" /></button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </AdminLayout>
    )
}

export default AddTenant