// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import Cookies from "js-cookie";

import LayoutUser from "../../../../components/User/LayoutUser";
import InputSearch from "../../../../components/User/InputSearch";
import CardUser from "../../../../components/User/CardUser";
import { useState } from "react";
import Button from "../../../../components/User/Bottom";

const UserDashboard = () => {
    // const [name, setName] = useState('');
    // const navigate = useNavigate();
    // const token = Cookies.get("token");
    // const middleware = () => {
    //     if (token === undefined) {
    //         Swal.fire({
    //             icon: "error",
    //             title: "You Don't Have Access in this Page...",
    //             text: "GO BACK!!!",
    //             backdrop: "#fff",
    //             confirmButtonText: "OK"
    //         }).then((response) => {
    //             if (response.isConfirmed) {
    //                 navigate("/LoginAdmin");
    //             }
    //         })
    //     };
    // };
    // useEffect(() => {
    //     middleware();
    //     const savedName = Cookies.get('name');
    //     if (savedName) {
    //         setName(savedName);
    //     }
    // }, [token]);
    const [data, setData] = useState<any[]>([
        {
          id: 1,
          title: "Jakarta ",
          adress: "Jl ahmad yani no 103 Jakarta selatan ",
          image: "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc",
          price: 10,
          category: "Category Deskripsi",
        },
        {
          id: 2,
          title: "Jakarta",
          adress: "Jl ahmad yani no 103 Jakarta selatan ",
          image: "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc",
          price: 20,
          category: "Category Deskripsi",
        },
        {
          id: 3,
          title: "Jakarta",
          adress: "Jl ahmad yani no 103 Jakarta selatan ",
          image: "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc",
          price: 30,
          category: "Category Deskripsi",
        },
        {
            id: 3,
            title: "Jakarta",
            adress: "Jl ahmad yani no 103 Jakarta selatan ",
            image: "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc",
            price: 30,
            category: "Category Deskripsi",
          },
        // Add more dummy data items as needed
      ]);
    
    return (
<section>
    <LayoutUser>
      <div className="flex bg-white ">
        
      </div>
      {/* <div className="flex flex-col items-center justify-center  "> */}
        <div className="flex flex-col items-end  ">
          <InputSearch placeholder={""} />
          
        </div>
        <div className="flex flex-col bg-white  px-11 mt-11 items-center justify-center rounded">
          <div className="">
            <div className="flex justify-between ">
            <p className=" font-semibold text-2xl my-11">Pilih tempat</p>
            <Button
            label="View All"
            classname="flex bg-gray-300 my-11 px-5 py-2 rounded items-end"
          />
            </div>
            
            <div className="h-max grid grid-col justify-center gap-x-5 gap-y-5 my-14">
              {data.map((item) => (
                <CardUser
                  key={item.id}
                  title={item.title}
                  width="1100px"
                  height="200px"
                  storeName={item.title} 
                  storeAddress={item.adress} 
                  storeDeskripsi={item.category}
                  storeImage={item.image} 
                >
                  <p>Deskripsi toko atau konten tambahan lainnya.</p>
                </CardUser>
              ))}
            </div>
          </div>
        </div>
      {/* </div> */}
      </LayoutUser>
    </section>
    )
}

export default UserDashboard