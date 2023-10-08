import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';

import AdminLayout from '../../../components/Layout/Admin/AdminLayout';

interface EditUserProps {
    id: string;
    name?: string;
    email?: string;
    phone_number?: string;
    address?: string;
    // profil_photo: File | null;
    // image: File | null,

}

const EditUser = () => {
    const location = useLocation();
    const id = location?.state?.id;
    const navigate = useNavigate();
    const token = Cookies.get("token");
    const handleBack = () => {
        navigate(-1);
    };

    const [userData, setUserData] = useState<EditUserProps>({
        id: '',
        name: '',
        email: '',
        phone_number: '',
        address: '',
        // profil_photo: null,
        // image: null,
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const getAllUser = (id: any) => {
        axios
            .get(`users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((response) => {
                console.log("hasil: ", response?.data?.data);
                setUserData(response?.data?.data);
            })
            .catch((error) => {
                console.log("error : ", error);
            })
    };

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
        getAllUser(id);
        middleware();
    }, [id]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.put(`users/${id}`, userData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((response) => {
            console.log(response.data);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: response.data.message,
                confirmButtonText: "OK",
            }).then(() => {
                navigate('/UserManagement');
            });
        }).catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Field",
                text: `Something went Wrong: ${error}`,
                confirmButtonText: "OK"
            });
        })
    };

    return (
        <AdminLayout>
            <div className="bg-slate-300 h-screen p-5">
                <main>
                    <div className='flex justify-start p-3'>
                        <button className='bg-info px-10 py-3  hover:shadow-lg hover:text-opacity-90 font-semibold text-white rounded flex justify-center items-center' onClick={handleBack}>Back</button>
                    </div>
                    <div className='p-4 max-w-full bg-white rounded-lg mt-5'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex justify-center gap-5'>
                            <div className='w-3/4'>
                                <div className='mb-4'>
                                    <label
                                        htmlFor="name"
                                        className='block text-gray-700 font-semibold mb-2'
                                    >Nama Lengkap</label>
                                    <input
                                        type="text"
                                        id='name'
                                        name='name'
                                        placeholder='Input Nama Lengkap'
                                        value={userData.name}
                                        onChange={handleChange}
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
                                        id='email'
                                        name='email'
                                        placeholder='Input Email'
                                        value={userData.email}
                                        onChange={handleChange}
                                        required
                                        autoComplete='off'
                                        className="shadow appearance-none border rounded-lg focus:ring-blue-500 w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor="phone_number"
                                        className='block text-gray-700 font-semibold mb-2'
                                    >nomor HP</label>
                                    <input
                                        type="text"
                                        id='phone_number'
                                        name='phone_number'
                                        placeholder='Input Nomor HP'
                                        value={userData.phone_number}
                                        onChange={handleChange}
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
                                        placeholder='Input Alamat'
                                        value={userData.address}
                                        onChange={handleChange}
                                        required
                                        autoComplete='off'
                                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-light bg-white"
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex justify-end text-center'>
                            <button
                                type='submit'
                                className='bg-primary px-10 py-3 hover:shadow-lg hover:text-opacity-90 font-semibold text-white rounded flex justify-center items-center'
                            >Submit
                                {/* <img src="" alt="save-2" /> */}
                            </button>
                        </div>
                    </form>
                    </div>
                </main>
            </div>
        </AdminLayout>
    )
}

export default EditUser