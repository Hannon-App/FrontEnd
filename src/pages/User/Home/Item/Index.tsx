// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import Cookies from "js-cookie";

import LayoutUser from "../../../../components/User/LayoutUser";
import InputSearch from "../../../../components/User/InputSearch";
import Card from "../../../../components/User/Card";
import { useEffect, useState } from "react";
import Button from "../../../../components/User/Bottom";
import axios from "axios";

const Item= () => {
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
            title: 'Produk 1',
            image: 'https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc',
            price: 100, // Harga dalam satuan yang Anda inginkan
            category: 'Kategori 1',
          },
          {
            id: 2,
            title: 'Produk 2',
            image: 'https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc',
            price: 150,
            category: 'Kategori 2',
          },
          {
            id: 3,
            title: 'Produk 3',
            image: 'https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc',
            price: 200,
            category: 'Kategori 1',
          },
          {
            id: 3,
            title: 'Produk 3',
            image: 'https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc',
            price: 200,
            category: 'Kategori 1',
          },
        // Add more dummy data items as needed
      ]);

      const getData = () => {
        axios
          .get(`https://hannonapp.site/tenant`, {
            headers: {
              Authorization: `Bearer `,
            },
          })
          .then((res) => {
            setData(res?.data?.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      useEffect(() => {
        getData(); // Panggil fungsi getData saat komponen dimuat
      }, []);
    
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
            <p className=" font-semibold text-2xl my-11 ml-4">Package</p>
            <Button
            label="View All"
            classname="flex bg-gray-300 my-11 px-5 py-2 rounded items-end"
          />
            </div>
            
            <div className="h-max mx-5 grid grid-cols-4 gap-x-5 gap-y-5  my-14">
        {data &&
          data?.map((item: any, index: any) => {
            return (
              <Card
                key={index}
                id={item?.ID}
                title={item?.Name}
                image={item?.Image}
                price={item?.Rent_Price + 5000}
                category={item?.Description_Item}
                
              />
            );
          })}
      </div>
      <p className="font-semibold text-2xl my-11 ml-4">Item</p>
      <div className="h-max mx-5 grid grid-cols-4 gap-x-5 gap-y-5  my-14">
        {data &&
          data?.map((item: any, index: any) => {
            return (
              <Card
                key={index}
                id={item?.id}
                title={item?.title}
                image={item?.image}
                price={item?.price * 14000}
                category={item?.category}
                
              />
            );
          })}
      </div>
          </div>
        </div>
      {/* </div> */}
      </LayoutUser>
    </section>
    )
}

export default Item