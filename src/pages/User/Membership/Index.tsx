import LayoutUser from "../../../components/User/LayoutUser";
import Button from "../../../components/User/Bottom";
import Swal from "sweetalert2";

const Membership = () => {
    const showSuccessAlert = () => {
        Swal.fire({
          icon: "success",
          title: "Pembayaran Berhasil!",
          text: "Terima kasih telah menjadi member kami.",
          confirmButtonColor: "#28a745", // Warna tombol "OK"
          confirmButtonText: "OK",
        });
      };
    
      // Fungsi untuk menangani pembayaran
      const handlePayment = () => {
        // Logika pembayaran Anda di sini
    
        // Jika pembayaran berhasil, panggil fungsi showSuccessAlert()
        showSuccessAlert();
      };
  return (
    <section>
      <LayoutUser>
        <body className="h-screen">
          <div className="bg-white rounded px-20 py-11">
            <h2 className="font-semibold text-center py-5 text-xl">
              Membership
            </h2>

            <h2>
              {" "}
              Bergabunglah dengan komunitas penyewaan alat gunung kami sekarang
              dan rasakan perbedaan nyata! Keuntungan Eksklusif:
            </h2>
            <ul className="list-disc pl-5">
              <li>
                <h3>
                  Dapatkan Diskon Istimewa hingga 20% untuk semua penyewaan alat
                  gunung.
                </h3>
                <p>
                  Nikmati penghematan besar saat Anda merencanakan petualangan
                  outdoor Anda.
                </p>
              </li>
              <li>
                <h3>
                  Kumpulkan Poin Setiap Kali Anda Menyewa, Tukarkan untuk
                  Potongan Harga Lebih Besar.
                </h3>
                <p>
                  Kami menghargai setiap perjalanan Anda. Dapatkan poin untuk
                  setiap penyewaan dan tukarkan untuk potongan harga lebih
                  besar.
                </p>
              </li>
              <li>
                <h3>
                  Bonus Spesial: Setiap Pembelian Minimal 5 Paket Item
                  Memberikan 1 Paket Gratis.
                </h3>
                <p>Kami memberikan bonus khusus untuk pelanggan setia kami.</p>
              </li>
            </ul>
            <p>
              {" "}
              Jangan lewatkan kesempatan ini! Bergabung dengan keanggotaan kami
              hari ini untuk pengalaman luar biasa di alam bebas dengan harga
              terjangkau
            </p>
            <div>
              <h2 className="font-semibold text-center py-5 text-xl">
                Membership
              </h2>
              <p className="mb-2">Jenis Membership</p>
              <select className="select select-bordered bg-gray-300 py-2 px-4 rounded-sm">
                <option disabled selected className="text-black">
                  Pilih Membership
                </option>
                <option className="text-black">6 Bulan</option>
                <option className="text-black">12 Bulan</option>
              </select>
              <p className="mb-2 my-1">Metode Pembayaran</p>
              <select className="select select-bordered bg-gray-300 py-2 px-4 rounded-sm">
                <option disabled selected className="text-black">
                  Pilih Pembayaran
                </option>
                <option className="text-black">Sendid</option>
                <option className="text-black">COC</option>
              </select>
              <p className="text-sm py-4">
                Anda menyetujui pembayaran biaya keanggotaan bulanan sebesar Rp
                200.000.
              </p>
              <Button
                label="Bayar"
                classname="bg-primary rounded-md py-2 px-8 text-white font-semibold"
                onClick={handlePayment}
              />
            </div>
          </div>
        </body>
      </LayoutUser>
    </section>
  );
};

export default Membership;
