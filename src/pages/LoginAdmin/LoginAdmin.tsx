import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import Swal from "sweetalert2";

import InputLogin from "../../components/InputLogin"

const LoginAdmin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleLogin = () => {
        const body = {
            email: email,
            password: password,
        };
        axios
            .post("login", body)
            .then((response) => {
                const token = response?.data?.data?.token;
                // const email = response?.data?.data?.email;
                // const role = response?.data?.data?.role;

                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: `Welcome to Dashboard, ${email}`,
                    confirmButtonText: "OK",
                }).then((response) => {

                    if (response.isConfirmed) {
                        Cookies.set("token", token);
                        // Cookies.set("email", email);
                        // Cookies.set("role", role);
                        navigate("/Dashboard");
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
            <div className='min-h-screen bg-E5E5E5 flex items-center justify-center'>
                <div className='md:w-1/2 lg:w-1/3'>
                    <div>
                        <img
                            className="mx-auto h-60 w-auto"
                            src="/public/Wild.svg"
                            alt="" />
                    </div>
                    <div className='bg-white rounded-md flex justify-center'>
                        <div className='w-full m-10'>
                            <h1 className='text-center text-3xl font-bold text-gray-900'>Admin Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className=''>
                                    <InputLogin
                                        id="email"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        placeholder="email"
                                        icons="https://img.icons8.com/material-outlined/24/new-post.png"
                                        value={email}
                                        onChange={(e: any) => setEmail(e.target.value)}
                                    />
                                    <InputLogin
                                        id="password"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        placeholder="password"
                                        icons="https://img.icons8.com/ios-glyphs/24/000000/lock.png"
                                        value={password}
                                        onChange={(e: any) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="group shadow-md mt-10 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-7FC9F4 hover:bg-7FC9F4"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginAdmin