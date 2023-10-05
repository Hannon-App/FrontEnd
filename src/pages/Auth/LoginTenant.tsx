import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";
import Swal from "sweetalert2";

import InputLogin from '../../components/Login/InputLogin';

const LoginTenant = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleLogin = (e: any) => {
        e.preventDefault();
        axios
            .post("tenant/login", formData)
            .then((response) => {
                const token = response?.data?.data?.token;
                const name = response?.data?.data?.name;
                const role = response?.data?.data?.role;
                console.log('token : ', response?.data?.data?.token)

                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: `Welcome to Hannon App, Hi ${name}`,
                    // text: `Welcome to Hannon App`,
                    confirmButtonText: "OK",
                }).then((response) => {

                    if (response.isConfirmed) {
                        Cookies.set("token", token);
                        Cookies.set("name", name);
                        Cookies.set("role", role);
                        navigate("/dashboard-tenant");
                    }
                });
            })
            .catch((error) => {
                console.log(error.response)
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: `Something went wrong : ${error}`,
                    confirmButtonText: "OK",
                });
            });
    };
    return (
        <>
            <div className='min-h-screen bg-E5E5E5 flex justify-center'>
                <div className='md:w-1/2 lg:w-1/3 xm:w-1/2'>
                    <div>
                        <img
                            className="mx-auto h-60 w-auto m-0"
                            src="./src/assets/Hannon.svg"
                            alt="logo" />
                    </div>
                    <div className='bg-white rounded-md flex justify-center'>
                        <div className='w-full m-10'>
                            <h1 className='text-center text-3xl font-bold text-gray-900'>Login Tenant</h1>
                            <div className=''>
                                <InputLogin
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    placeholder="email"
                                    icons="https://img.icons8.com/material-outlined/24/user--v1.png"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <InputLogin
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    placeholder="password"
                                    icons="https://img.icons8.com/material-outlined/24/lock--v1.png"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <button
                                    onClick={handleLogin}
                                    type="submit"
                                    className="group shadow-md mt-10 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-7FC9F4 hover:bg-sky-700"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginTenant