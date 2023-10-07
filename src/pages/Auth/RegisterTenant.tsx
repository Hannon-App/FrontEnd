import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import InputRegister from '../../components/Layout/Login/InputRegister';

const RegisterTenant = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    address: '',
    ktp_photo: null,
    open_time: '',
    close_time: '',
    email: '',
    password: '',
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleFileChange = (e: any, fieldName: string) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [fieldName]: file,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone_number', formData.phone_number);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    if (formData.ktp_photo) {
      formDataToSend.append('ktp_photo', formData.ktp_photo);
    }

    axios
      .post("users", formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log("hasil: ", response.data)
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Selamat Akun anda berhasil dibuat! Silahkan Login`,
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/LoginAdmin");
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
  }
  return (
    <>
      <div className="flex justify-center bg-E5E5E5 min-h-screen">
        <div className='md:w-1/2 lg:w-1/3 xm:w-1/2'>
          <div className="flex justify-center">
            <img src="../src/assets/Hannon.svg" className="mx-auto h-60 w-auto m-0" alt="Bordered avatar"></img>
          </div>
          <div className='bg-white rounded-md flex justify-center'>
            <div className="w-full mx-5 py-5">
              <h1 className="text-center text-3xl font-bold text-gray-900">Register Tenant</h1>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                  <InputRegister
                    id="Name"
                    name="name"
                    label="Nama Toko"
                    type="text"
                    placeholder="Masukkan Nama Lengkap"
                    icons="https://img.icons8.com/material-outlined/24/user--v1.png"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <InputRegister
                    id='phone_number'
                    name='phone_number'
                    label='No. Handphone'
                    type='text'
                    placeholder='Masukkan No HP'
                    icons='https://img.icons8.com/material-outlined/24/phone--v1.png'
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                  <InputRegister
                    id='address'
                    name='address'
                    label='Alamat'
                    type='text'
                    placeholder='Masukkan Alamat'
                    icons='https://img.icons8.com/material-outlined/24/home--v1.png'
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <div className='mt-4'>
                    <label htmlFor="images" className='block text-gray-700 font-semibold mb-2'>Toko Logo</label>
                    <div className='flex'>
                      <span className='inline-flex bg-gray-400 items-center px-3 text-sm border border-r-0 border-gray-300 rounded-l-md'>
                        <img src="https://img.icons8.com/material-outlined/24/add-image.png" alt="icons" />
                      </span>
                      <input
                        id='images'
                        name="images"
                        type="file"
                        className='p-2.5 rounded-none rounded-r-lg bg-gray-50 block border border-gray-300 text-gray-900 w-full'
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'images')} />
                    </div>
                  </div>
                  <InputRegister
                    id='Email'
                    name='email'
                    label='Email'
                    type='email'
                    placeholder='Masukkan Email'
                    icons='https://img.icons8.com/material-outlined/24/mail--v1.png'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputRegister
                    id='Password'
                    name='password'
                    label='input Password'
                    type='password'
                    placeholder='Masukkan Password'
                    icons='https://img.icons8.com/material-outlined/24/lock--v1.png'
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <InputRegister
                    id='open_time'
                    name='open_time'
                    label='Jam Buka'
                    type='time'
                    placeholder='Masukkan open_time'
                    icons='https://img.icons8.com/material-outlined/24/lock--v1.png'
                    value={formData.open_time}
                    onChange={handleChange}
                  />
                  <InputRegister
                    id='close_time'
                    name='close_time'
                    label='Jam Tutup'
                    type='time'
                    placeholder='Masukkan close_time'
                    icons='https://img.icons8.com/material-outlined/24/lock--v1.png'
                    value={formData.close_time}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex justify-center'>
                  <button
                    type="submit"
                    className="group shadow-md mt-10 relative w-3/4 text-2xl flex justify-center py-2 px-4 border border-transparent font-bold rounded-md text-black bg-7FC9F4 hover:bg-sky-700"
                  >
                    Register
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

export default RegisterTenant