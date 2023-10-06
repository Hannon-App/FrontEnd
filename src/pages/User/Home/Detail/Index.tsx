import LayoutUser from "../../../../components/User/LayoutUser";
import InputSearch from "../../../../components/User/InputSearch";
import { useState } from "react";
import Button from "../../../../components/User/Bottom";

const Detail = () => {
  const [data, setData] = useState<any[]>([
    {
      title: "TENDA",
      price: "RP 20.000",
      description:
        "Tenda adalah alat penting dalam kegiatan camping dan kegiatan luar ruangan lainnya. Tenda memberikan perlindungan dari elemen seperti hujan, angin, matahari, serangga, dan binatang buas saat Anda berada di luar. Tenda tersedia dalam berbagai ukuran, bentuk, dan tipe, yang dapat disesuaikan dengan berbagai kebutuhan camping.",
      stock: "STOCK_ANDA",
      imageUrl:
        "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc",
      ketentuan: `
        Hilang Barang: 
        Jika barang hilang saat disewa, penyewa akan
        dikenakan biaya ganti rugi sebesar 70% dari harga barang yang
        tertera. Biaya ganti rugi akan dihitung berdasarkan harga asli
        barang.
        Rusak Barang: 
        Jika barang rusak saat disewa, penyewa
        akan dikenakan biaya perbaikan sebesar 50% dari harga barang
        yang tertera. Jika perbaikan tidak memungkinkan atau biaya
        perbaikan melebihi 50% dari harga barang, penyewa akan dikenakan
        biaya ganti rugi sebesar 70% dari harga barang.
        Terlambat Pengembalian: 
        Jika penyewa mengembalikan barang terlambat, akan
        dikenakan biaya keterlambatan sebesar 10 rupiah per hari untuk
        setiap hari keterlambatan. Biaya keterlambatan akan dihitung
        berdasarkan jumlah hari terlambat dalam proses pengembalian.
      `,
    },
  ]);

  const item = data[0]; // Mengambil item pertama dari data

  return (
    <section>
      <LayoutUser>
        <div className="flex bg-white "></div>

        <div className="flex flex-col bg-white p-6 mt-6 items-center justify-center rounded">
          <div className="flex">
            {/* Bagian kiri */}
            <div className="w-1/2 p-4 flex justify-center items-center  ">
              <img
                src={item.imageUrl}
                alt="Deskripsi Gambar"
                className="w-auto h-auto object-cover"
                style={{ maxHeight: "400px", maxWidth: "400px" }} // Sesuaikan tinggi maksimum sesuai kebutuhan Anda
              />
            </div>

            {/* Bagian kanan */}
            <div className="w-1/2 p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="mb-2">Harga Barang: {item.price}</p>
              <p className="mb-2 font-normal text-sm text-justify">
                {" "}
                {item.description}
              </p>

              <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
                Jumlah Sewa <i className="fa-solid fa-plus ml-1"></i>
              </button>
              <p className="mb-2">Stock Barang: {item.stock}</p>
              <div className="grid grid-rows-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2 ">
                  Add to Cart
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded mb-2">
                  Sewa
                </button>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-justify">
                Detail Ketentuan
              </h4>
              <p>{item.ketentuan}</p>
            </div>
          </div>
        </div>
      </LayoutUser>
    </section>
  );
};

export default Detail;
