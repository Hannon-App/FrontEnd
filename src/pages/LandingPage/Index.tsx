import React from 'react';
import NavbarLanding from '../../components/LandingPage/NavbarLanding';


const LandingPage = () => {
    return (
        <>
            <NavbarLanding />
            <div className='mt-5 max-w-screen-xl items-center justify-between mx-auto p-4'>
                <div className="flex items-end">
                    <div className="md:w-3/4 ">
                        <h1 className='text-5xl font-extrabold'>Explore. Embrace the Advanture</h1>
                        <h1 className='text-5xl font-extrabold'>Rent Mountain Gear</h1>
                        <p>Selamat datang! Temukan perlengkapan gunung berkualitas tinggi untuk pengalaman mendaki yang tak terlupakan. Jelajahi alam bebas, hadapi petualangan, dan siapkan diri Anda dengan koleksi lengkap kami</p>
                    </div>
                    <div className="md:w-1/4">
                        <img src="./public/img-hiking.svg" alt="img-hiking" />
                    </div>
                </div>
                <div className='my-10'>
                    <button className='px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Register</button>
                </div>
                <div className="flex gap-x-0">
                    <div className="md:w-1/5">
                        <img src="./public/img-list-1.svg" alt="img-list-1" />
                    </div>
                    <div className="md:w-1/5">
                        <img src="./public/img-list-2.svg" alt="img-list-2" />
                    </div>
                    <div className="md:w-1/5">
                        <img src="./public/img-list-3.svg" alt="img-list-3" />
                    </div>
                    <div className="md:w-1/5">
                        <img src="./public/img-list-4.svg" alt="img-list-4" />
                    </div>
                    <div className="md:w-1/5">
                        <img src="./public/img-list-5.svg" alt="img-list-5" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default LandingPage