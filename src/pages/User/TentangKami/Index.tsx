
import { motion, useAnimation } from "framer-motion";
import LayoutUser from "../../../components/User/LayoutUser";
import Gambar from "../../../assets/Rinjani.svg"; // Ganti dengan path ke gambar perusahaan Anda

const TentangKami = () => {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({ scale: 0.5 });
  };

  const handleMouseLeave = () => {
    controls.start({ scale: 1 });
  };

  return (
    <section>
      <LayoutUser>
        <div className="h-full flex flex-col md:flex-row bg-white py-6 px-6">
          {/* Gambar tentang perusahaan di sebelah kiri */}
          <div className="md:w-1/2">
            <motion.img
              src={Gambar} // Ganti dengan URL gambar perusahaan Anda
              alt="Tentang Perusahaan"
              className="h-full w-full object-cover"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              animate={controls}
            />
          </div>
          {/* Teks tentang perusahaan di sebelah kanan */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-2xl font-bold mb-4">Tentang Kami</h1>
            <p className="text-gray-700">
              Selamat datang di [Nama Perusahaan Anda]! Kami adalah perusahaan yang bergerak dalam jasa sewa alat gunung berkualitas untuk memenuhi kebutuhan petualangan Anda di alam bebas. Dengan pengalaman bertahun-tahun di industri ini, kami telah menjadi mitra yang tepercaya bagi para pecinta alam yang ingin menjelajahi keindahan alam dengan aman dan nyaman.
            </p>
            {/* Tambahkan informasi lebih lanjut tentang perusahaan Anda di sini */}
            <p className="text-gray-700">
              Apa yang Membuat Kami Berbeda?
            </p>
            <ul className="list-disc ml-6">
              <li>Kualitas Terbaik: Kami hanya menyediakan alat-alat gunung berkualitas tinggi yang telah diuji untuk memastikan keamanan dan kenyamanan Anda selama perjalanan.</li>
              <li>Pilihan Luas: Dari peralatan dasar seperti tenda, sleeping bag, hingga peralatan pendakian canggih seperti GPS dan pakaian teknis, kami memiliki berbagai pilihan peralatan untuk memenuhi kebutuhan petualangan Anda.</li>
              <li>Pelayanan Pelanggan Terbaik: Tim kami siap membantu Anda dalam memilih peralatan yang sesuai dengan tujuan dan rencana perjalanan Anda.</li>
              <li>Komitmen Terhadap Lingkungan: Kami peduli terhadap lingkungan dan selalu berusaha untuk mengurangi dampak ekologis aktivitas luar ruangan.</li>
              <li>Harga Bersaing: Kami menawarkan harga yang kompetitif untuk penyewaan peralatan gunung.</li>
            </ul>
            <p className="text-gray-700">
              Kami bangga menjadi bagian dari komunitas pencinta alam yang sama dengan Anda, dan kami berharap dapat membantu Anda menghadapi setiap petualangan dengan persiapan yang tepat. Jadilah bagian dari perjalanan kami dan temukan dunia luar yang menakjubkan.
            </p>
            <p className="text-gray-700">
              Hubungi kami hari ini untuk informasi lebih lanjut atau untuk memesan peralatan gunung untuk petualangan Anda selanjutnya. Terima kasih atas kepercayaan Anda kepada [Nama Perusahaan Anda]!
            </p>
          </div>
        </div>
      </LayoutUser>
    </section>
  );
};

export default TentangKami;
