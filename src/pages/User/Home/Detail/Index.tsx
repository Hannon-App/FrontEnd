import LayoutUser from "../../../../components/User/LayoutUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookie from "js-cookie";
import Button from "../../../../components/User/Bottom";
const Detail = () => {
  const [item, setItem] = useState<any>({});
  const { id } = useParams<{ id: string }>();
  const token = Cookie.get("token");
  const getData = () => {
    axios
      .get(`https://hannonapp.site/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setItem(res?.data?.data || {});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [id]);
  return (
    <section>
      <LayoutUser>
        <body className=" h-screen">
          <div className="flex bg-white "></div>
          <div className="flex flex-col bg-white p-6 mt-6 items-center justify-center rounded">
            <div className="flex">
              {/* Bagian kiri */}
              <div className="w-1/2 p-4 flex justify-center items-center  ">
                <img
                  src={item.image}
                  alt="Deskripsi Gambar"
                  className="w-auto h-auto object-cover"
                  style={{ maxHeight: "400px", maxWidth: "400px" }}
                />
              </div>
              {/* Bagian kanan */}
              <div className="w-1/2 p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="mb-2">Harga Sewa Barang   : {item.rent_price}</p>
                <p className="mb-2 font-normal text-sm text-justify">
                  {" "}
                  {item.description_item}
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
                  Jumlah Sewa <i className="fa-solid fa-plus ml-1"></i>
                </button>
                <p className="mb-2">Stock Barang: {item.stock}</p>
                <div className="grid grid-rows-2">
                  <Button
                  label="Add to Cart"
                  classname="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-[500px]"
                  />
                   <Button
                  label=" Sewa"
                  classname="bg-green-500 text-white px-4 py-2 rounded mb-2 w-[500px]"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-justify">
                  Detail Ketentuan
                </h4>
                <p>{item.ketentuan}</p>
              </div>
            </div>
          </div>
        </body>
      </LayoutUser>
    </section>
  );
};

export default Detail;
