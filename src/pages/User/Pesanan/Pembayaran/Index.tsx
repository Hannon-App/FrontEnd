import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../../../components/User/Bottom";
import LayoutUser from "../../../../components/User/LayoutUser";
import Popup from "../../../../components/User/PopUp";
import { useNavigate } from "react-router-dom";

let currentId = 343;

function generateNewId() {
  const newId = currentId;
  currentId++;
  return newId;
}
const FormDataForm: React.FC = () => {
  const [Pembayaran, SetPembayaran] = useState<boolean>(false);
  const [item, setItem] = useState<any>({});
  const idFromCookie = Cookies.get("id");
  const [newId, setNewId] = useState<number | null>(null);
  const [jumlahHari, setJumlahHari] = useState<number | null>(null);
  const navigate = useNavigate();

  const token = Cookies.get(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTY5MjQ0NDMsImlkIjo3LCJyb2xlIjoidXNlciJ9.Po5finfUv2YIKNPVnn3Pq6KjofiBjvhkxbm0rJRuKxI"
  );
  const productName = localStorage.getItem("productName");
  const HargaSewa = localStorage.getItem("rentPrice");
  const jumlahSewa = localStorage.getItem("jumlahSewadua");
  const totalHargaSewa = localStorage.getItem("jumlahSewa");
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    status: "",
    total_price: 0,
    discount: 0,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    // Validasi agar hanya angka yang diterima
    if (name === "total_price" && isNaN(value)) {
      return; // Jika nilai bukan angka, maka jangan lakukan perubahan
    }

    // Mengubah nilai formData dengan mengonversi nilai total_price ke number
    setFormData({
      ...formData,
      [name]: name === "total_price" ? parseFloat(value) : value,
    });
  };

  const handleConfirm = async () => {
    try {
      const url = "https://hannonapp.site/rent";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTY5MjQ0NDMsImlkIjo3LCJyb2xlIjoidXNlciJ9.Po5finfUv2YIKNPVnn3Pq6KjofiBjvhkxbm0rJRuKxI"; // Ganti dengan token Anda

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.post(url, formData, { headers });
      console.log("Berhasil mengirim data:", response.data);

      // Set Pembayaran menjadi true untuk menampilkan popup
      SetPembayaran(true);
      Swal.fire({
        title: "Sukses!",
        text: "Data telah berhasil dikirim ",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          getData();
        }
      });
      const newUserId = response.data.data?.data.id;
      console.log("ID baru yang diberikan oleh server:", newUserId);

    
      const startDate = new Date(formData.start_date);
      const endDate = new Date(formData.end_date);
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      const jumlahHari = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Set jumlahHari ke dalam state
      setJumlahHari(jumlahHari);

      const newGeneratedId = generateNewId();
      setNewId(newGeneratedId);
    } catch (error) {
      console.error("Gagal mengirim data:", error);

      Swal.fire({
        title: "Error!",
        text: "Isi data dengan Benar.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const getData = () => {
    const newId = generateNewId();
    console.log("Nilai id sebelum permintaan GET:", idFromCookie);
    axios
      .get(`https://hannonapp.site/rent/${newId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Data yang diterima dari API:", res?.data);
        setItem(res?.data?.data || {});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [idFromCookie]);

  const HandleInvoice = async () => {
    try {
      const url = `https://hannonapp.site/rentpayment/317`;
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTY5MjQ0NDMsImlkIjo3LCJyb2xlIjoidXNlciJ9.Po5finfUv2YIKNPVnn3Pq6KjofiBjvhkxbm0rJRuKxI";

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.post(url, formData, { headers });
      console.log("Berhasil mengirim data:", response.data);

      SetPembayaran(true);
    } catch (error) {
      console.error("Gagal mengirim data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInvoice = () => {
    if (item.payment_link) {
      window.open(item.payment_link, "_blank");
      navigate("/dashboard-user");
    } else {
      console.error("Tidak ada URL pembayaran yang tersedia.");
    }
  };

  return (
    <section>
      <LayoutUser>
        <div className="flex justify-center items-center bg-white flex-col my-11">
          <div className="my-11">
            <p className="text-center font-bold text-[24px]">
              Pembayaran Order Tenda
            </p>
            <p className="text-center mb-4">
              Anda berada pada halaman pembayaran, masukkan detail pembayaran
              anda
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white flex-col my-10">
          <table className="table-auto border-collapse w-1/2 mx-auto mt-8 bg-white my-18">
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="bg-gray-200 text-center py-4 text-[24px] font-bold"
                >
                  Konfirmasi Pembayaran
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">Nama Barang:</td>
                <td className="border px-4 py-2">{productName}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Harga Sewa:</td>
                <td className="border px-4 py-2">Rp. {HargaSewa}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Jumlah Sewa :
                </td>
                <td className="border px-4 py-2">
                  {jumlahSewa !== null ? jumlahSewa : "Nilai tidak tersedia"}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Total Harga Sewa:
                </td>
                <td className="border px-4 py-2">
                  Rp.{" "}
                  {jumlahSewa !== null && parseInt(jumlahSewa) === 1
                    ? HargaSewa
                    : totalHargaSewa}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Total sewa</td>
                <td className="border px-4 py-2">
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="total_price"
                      name="total_price"
                      value={formData.total_price}
                      onChange={handleChange}
                      className="form-input block w-full px-3 py-2 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Tanggal Mulai Pinjam:
                </td>
                <td className="border px-4 py-2">
                  <div>
                    <input
                      type="text"
                      name="start_date"
                      value={formData.start_date}
                      onChange={handleChange}
                      placeholder="2023-10-10 00:00:00"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Tanggal Selesai Pinjam:
                </td>
                <td className="border px-4 py-2">
                  <div>
                    <input
                      type="text"
                      name="end_date"
                      value={formData.end_date}
                      onChange={handleChange}
                      placeholder="2023-10-15 00:00:00"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center items-center my-10">
            <Button
              label="Bayar"
              classname="bg-primary text-white w-full rounded-lg py-2 px-5"
              onClick={handleConfirm}
            />
          </div>
        </div>
        <Popup isOpen={Pembayaran} onClose={() => SetPembayaran(false)}>
          <div className="flex flex-col p-6 w-full h-full bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center">
              Judul Sewa Tenda
            </h2>
            <div className="mt-4">
              <div className="mb-2 flex justify-between">
                <span>Biaya Sewa Tenda:</span>
                <span>{HargaSewa}</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span>Biaya Admin:</span>
                <span>5,000</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span>Total Bayar:</span>
                <span className="tracking-wide">
                  {totalHargaSewa !== null && jumlahHari !== null
                    ? (parseFloat(totalHargaSewa) + 5000) * jumlahHari
                    : 0}
                </span>
              </div>
            </div>
            <hr className="my-2" />
            <div className="mb-2 font-semibold">ID {item.invoice_number}</div>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-center mb-4">
                Detail Pesanan
              </h2>
              <div className="mb-2">
                <span>Nama Barang:</span>
                <span>{productName}</span>
              </div>
              <div className="mb-2">
                <span>Lama Sewa: {jumlahHari}</span>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-center">
                Pembayaran Menggunakan Sendit
              </h2>
              <div className="mt-4 flex items-center justify-center">
                <span>Gunakan Sendit</span>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg px-3 ml-2 text-sm py-1 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={getData}
                >
                  Claim token
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg px-3 ml-2 text-sm py-1 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={HandleInvoice}
                >
                  Konfirmasi
                </button>
              </div>
            </div>
            <div className="mt-6">
              <Button
                label="Bayar"
                classname="bg-primary text-white hover:bg-blue-700 w-full rounded-lg py-2 px-5 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleInvoice}
              />
            </div>
            <p className="text-white">{newId}</p>
          </div>
        </Popup>
      </LayoutUser>
    </section>
  );
};

export default FormDataForm;
