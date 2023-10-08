import LayoutUser from "../../../../components/User/LayoutUser";
import { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate, useParams } from "react-router-dom";
import Cookie from "js-cookie";
import Button from "../../../../components/User/Bottom";

const Detail = () => {
  const [item, setItem] = useState<any>({});
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const token = Cookie.get("token");
  const [jumlahSewa, setJumlahSewa] = useState<number>(1);
  const [totalHargaSewa, setTotalHargaSewa] = useState<number>(0);

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

  const tambahJumlahSewa = () => {
    if (jumlahSewa < item.stock) {
      const hargaSewaBaru = (jumlahSewa + 1) * item.rent_price;
      setJumlahSewa(jumlahSewa + 1);
      setTotalHargaSewa(hargaSewaBaru);
    }
  };

  const kurangiJumlahSewa = () => {
    if (jumlahSewa > 1) {
      const hargaSewaBaru = (jumlahSewa - 1) * item.rent_price;
      setJumlahSewa(jumlahSewa - 1);
      setTotalHargaSewa(hargaSewaBaru);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleSewa = () => {
    localStorage.setItem('productName', item.name);
    localStorage.setItem('rentPrice',totalHargaSewa);
    localStorage.setItem('jumlahSewa', jumlahSewa);
    navigate('/pembayaran-user');
  };
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
                <p className="mb-2">Harga Sewa Barang : {item.rent_price}</p>
                <p className="mb-2 font-normal text-sm text-justify">
                  {" "}
                  {item.description_item}
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-2 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
                  <span className="mr-2">Jumlah Sewa {jumlahSewa}</span>
                  <i
                    className="fas fa-plus ml-1 cursor-pointer"
                    onClick={tambahJumlahSewa}
                  ></i>
                  <i
                    className="fas fa-minus ml-1 cursor-pointer"
                    onClick={kurangiJumlahSewa}
                  ></i>
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
                    onClick={handleSewa}
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
