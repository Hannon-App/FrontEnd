import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../../../components/User/Bottom";
import LayoutUser from "../../../../components/User/LayoutUser";
import Popup from "../../../../components/User/PopUp";
import { useParams } from "react-router-dom";

const FormDataForm: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [Pembayaran, SetPembayaran] = useState<boolean>(false);
  const [item, setItem] = useState<any>({});
  const idFromCookie = Cookies.get("id");
  const { Id } = useParams<{ Id: string }>();

  const token = Cookies.get(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTY3ODgyODYsImlkIjoyLCJyb2xlIjoidXNlciJ9.8B79z9tPLYZjAO1y3W9EB-WcDJtb0YxB_39zRZCGRO4"
  );
  const productName = localStorage.getItem("productName");
  const totalHargaSewa = localStorage.getItem("rentPrice");
  const jumlahSewa = localStorage.getItem("jumlahSewa");
  const [formData,] = useState({
    start_date: "2023-10-10 00:00:00",
    end_date: "2023-10-15 00:00:00",
    status: "pending",
    total_price: 200000,
    discount: 1000,
  });

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleConfirm = async () => {
    try {
      const url = "https://hannonapp.site/rent";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTY3ODgyODYsImlkIjoyLCJyb2xlIjoidXNlciJ9.8B79z9tPLYZjAO1y3W9EB-WcDJtb0YxB_39zRZCGRO4"; // Ganti dengan token Anda

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.post(url, formData, { headers });
      console.log("Berhasil mengirim data:", response.data);

      // Set Pembayaran menjadi true untuk menampilkan popup
      SetPembayaran(true);
    } catch (error) {
      console.error("Gagal mengirim data:", error);
    }
  };
  const getData = () => {
    console.log("Nilai id sebelum permintaan GET:", idFromCookie);
    axios
      .get(`https://hannonapp.site/rent/23`, {
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

  const handlePaymentAndGetData = async () => {
    try {
      // Jalankan kedua fungsi secara paralel menggunakan Promise.all
      await Promise.all([handleConfirm(), getData()]);
    } catch (error) {
      console.error("Gagal mengirim data:", error);
    }
  };

  const HandleInvoice = async () => {
    try {
      const url = `https://hannonapp.site/rentpayment/${Id}`;
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2OTY4NjE4MTMsImlkIjoyLCJyb2xlIjoidXNlciJ9.LSNG8l8Vam0jUHsiBHAT5EXIgLkkb3LyYbl1XqY1hys";

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.post(url, formData, { headers });
      console.log("Berhasil mengirim data:", response.data);

      // Set Pembayaran menjadi true untuk menampilkan popup
      SetPembayaran(true);
    } catch (error) {
      console.error("Gagal mengirim data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, [Id]);

  const handleInvoice = () => {
   
    if (item.payment_link) {
      window.open(item.payment_link, "_blank"); // Membuka link pembayaran dalam tab baru
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
                <td className="border px-4 py-2">{totalHargaSewa}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Jumlah Sewa:</td>
                <td className="border px-4 py-2">{jumlahSewa}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Tanggal Mulai Pinjam:
                </td>
                <td className="border px-4 py-2">
                  <div>
                    <DatePicker
                      selected={startDate}
                      onChange={handleStartDateChange}
                      showTimeSelect
                      dateFormat="yyyy-MM-dd HH:mm:ss"
                      timeFormat="HH:mm:ss"
                      timeIntervals={1}
                      timeCaption="Waktu"
                      placeholderText="Pilih Tanggal dan Waktu"
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
                    <DatePicker
                      selected={endDate}
                      onChange={handleEndDateChange}
                      showTimeSelect
                      dateFormat="yyyy-MM-dd HH:mm:ss"
                      timeFormat="HH:mm:ss"
                      timeIntervals={1}
                      timeCaption="Waktu"
                      placeholderText="Pilih Tanggal dan Waktu"
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
              onClick={handlePaymentAndGetData}
            />
          </div>
        </div>
        <Popup isOpen={Pembayaran} onClose={() => SetPembayaran(false)}>
          <div className="flex flex-col px-10 py-10 w-full h-full  ">
            <div className="text-center text-[24px] font-semibold bg-white w-[350px] h-full ">
              Judul Sewa Tenda
            </div>
            <div className="mt-8">
              <div className="mb-1">Biaya Sewa Tenda: {item.name}</div>
              <div className="mb-1">Biaya Admin: Rp 100,000</div>
              <div className="font-semibold">
                Total Bayar: {item.total_price}
              </div>
            </div>
            <hr className="my-2" />
            <div>
              <div className="font-semibold">ID Order: 123123192</div>
            </div>
            <div className="mt-6">
              <div className="text-center text-[24px] font-semibold">
                Detail Pesanan
              </div>
              <div className="mb-2">Nama Barang: {item.name}</div>
              <div className="mb-2">Lama Sewa: 7 Hari</div>
            </div>
            <div className="mt-6">
              <div className="text-center text-[24px] font-semibold">
                Pilih Metode Bayar
              </div>
              <div className="font-semibold">
                Total Bayar: sendit
                <button
                  className="bg-primary text-white rounded-lg px-3 ml-2"
                  onClick={HandleInvoice}
                >
                  Konfirmasi
                </button>
              </div>
            </div>
            <div className="mt-8">
              <Button
                label="Bayar"
                classname="bg-primary text-white w-full rounded-lg py-2 px-5   "
                onClick={handleInvoice}
              />
            </div>
          </div>
        </Popup>
      </LayoutUser>
    </section>
  );
};

export default FormDataForm;
