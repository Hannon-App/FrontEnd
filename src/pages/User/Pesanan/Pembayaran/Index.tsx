import LayoutUser from "../../../../components/User/LayoutUser";
import Button from "../../../../components/User/Bottom";
import Popup from "../../../../components/User/PopUp";
import { useState } from "react";

const Pembayaran = () => {
  const [Attandence, setAddAttandence] = useState<boolean>(false);
  
  
  const handleConfirm = () => {
    
    setAddAttandence(true);
  };

  return (
    <section>
      <LayoutUser>
        <div className="flex justify-center items-center bg-white flex-col my-20">
          <div className="my-20">
            <p className="text-center font-bold text-[24px]">Pembayaran Order Tenda</p>
            <p className="text-center mb-4">
              anda berada pada halaman pembayaran dengan detail order kode/id
              order 123u981231
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white flex-col my-10">
          <table className="table-auto border-collapse w-1/2 mx-auto mt-8 bg-white my-18">
            <tr>
              <td colSpan="2" class="bg-gray-200 text-center py-2 text-[24px] font-bold" >
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
          <div className="flex justify-center items-center my-10">
            <Button
              label="Konfirmasi"
              classname="bg-primary rounded-sm py-2 px-5 text-white font-semibold"
              onClick={handleConfirm}
            />
          </div>
        </div>
        <Popup isOpen={Attandence} onClose={() => setAddAttandence(false)}>
          <div className="flex flex-col px-10 py-10 w-full h-full  ">
            <div className="text-center text-[24px] font-semibold bg-white w-[350px] h-full ">
              Judul Sewa Tenda
            </div>
            <div className="mt-8">
              <div className="mb-1">Biaya Sewa Tenda: Rp 1,200,000</div>
              <div className="mb-1">Biaya Admin: Rp 100,000</div>
              <div className="font-semibold">Total Bayar: Rp 1,300,000</div>
            </div>
            <hr className="my-2" />
            <div>
              <div className="font-semibold">ID Order: 123123192</div>
            </div>
            <div className="mt-6">
              <div className="text-center text-[24px] font-semibold">
                Detail Pesanan
              </div>
              <div className="mb-2">Nama Barang: Tenda</div>
              <div className="mb-2">Lama Sewa: 7 Hari</div>
            </div>
            <div className="mt-6">
              <div className="text-center text-[24px] font-semibold">
                Pilih Metode Bayar
              </div>
              <div className="flex flex-row gap-11 mt-3">
                <div className="w-full">
                  <div className="form-control w-full max-w-xs ">
                    
                    <select
                      className="select select-bordered bg-transparent "
                      // Tambahkan event handler untuk memilih metode pembayaran
                    >
                      <option disabled value="">
                        Pilih satu
                      </option>
                      <option value="Credit Card">Kartu Kredit</option>
                      <option value="Bank Transfer">Transfer Bank</option>
                      <option value="PayPal">PayPal</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button
                label="Bayar"
                classname="bg-primary text-white w-full rounded-lg py-2 px-5   "
              />
            </div>
          </div>
        </Popup>
      </LayoutUser>
    </section>
  );
};

export default Pembayaran;
