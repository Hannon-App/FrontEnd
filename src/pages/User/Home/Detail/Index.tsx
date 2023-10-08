import LayoutUser from "../../../../components/User/LayoutUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
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
    localStorage.setItem("productName", item.name);
    localStorage.setItem("rentPrice", item.rent_price);
    localStorage.setItem("jumlahSewa", jumlahSewa);
    navigate("/pembayaran-user");
  };

  return (
    <section>
      <LayoutUser>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <img
                  src={item.image}
                  alt="Deskripsi Gambar"
                  className="max-w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-4">{item.name}</h2>
                <p className="text-xl mb-4">
                  Harga Sewa Barang : {item.rent_price}
                </p>
                <p className="text-lg mb-8">{item.description_item}</p>
                <div className="flex items-center mb-8">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    <span className="mr-2">Jumlah Sewa {jumlahSewa}</span>
                    <i
                      className="fas fa-plus ml-2 cursor-pointer"
                      onClick={tambahJumlahSewa}
                    ></i>
                    <i
                      className="fas fa-minus ml-2 cursor-pointer"
                      onClick={kurangiJumlahSewa}
                    ></i>
                  </button>
                </div>
                <p className="text-xl mb-4">Stock Barang: {item.stock}</p>
                <div className="grid grid-rows-2 md:grid-rows-2 gap-4 mb-8">
                
                  <Button
                    label="Add to Cart"
                    classname="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 w-full"
                  />
                  <Button
                    label=" Sewa"
                    classname="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 w-full"
                    onClick={handleSewa}
                  />
           
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-justify">
                  Detail Ketentuan
                </h4>
                <div className="container mx-auto  p-6  ">
                  <h1 className="text-2xl font-semibold mb-4">
                    Ketentuan Sewa Barang
                  </h1>
                  <p className="mb-2">
                    1. Barang hilang selama masa sewa: Biaya 70% dari harga
                    sewa.
                  </p>
                  <p className="mb-2">
                    2. Barang rusak selama masa sewa: Biaya perbaikan maks. 50%
                    dari harga sewa.
                  </p>
                  <p className="mb-2">
                    3. Keterlambatan pengembalian: Denda Rp 10.000 per hari.
                  </p>
                  <p className="">
                    Kerjasama yang baik diharapkan untuk menjaga barang sewa dan
                    pengembalian tepat waktu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutUser>
    </section>
  );
};

export default Detail;
