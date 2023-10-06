import LayoutUser from "../../../../components/User/LayoutUser";
import InputSearch from "../../../../components/User/InputSearch";
import { useState } from "react";

const Pembayaran = () => {
  return (
    <section>
      <LayoutUser>
        <div className="flex justify-center items-center bg-white flex-col my-20">
          <div className="my-20">
          <p className="text-center font-bold">pembayaran order tenda</p>
          <p className="text-center mb-4">
            anda berada pada halaman pembayaran dengan detail order kode/id
            order 123u981231
          </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white flex-col my-10">
          <table className="table-auto border-collapse w-1/2 mx-auto mt-8 bg-white my-10">
            <tr>
              <td colSpan="2" class="bg-gray-200 text-center py-2">
                Konfirmasi Pembayaran
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Nama Item:</td>
              <td className="border px-4 py-2">Tenda</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">ID Code:</td>
              <td className="border px-4 py-2">82348293y4</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Tanggal Mulai Pinjam:</td>
              <td className="border px-4 py-2">1231231</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Tanggal Selesai Pinjam:</td>
              <td className="border px-4 py-2">2384982374</td>
            </tr>
          </table>
        </div>
      </LayoutUser>
    </section>
  );
};

export default Pembayaran;
