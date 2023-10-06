    import LayoutUser from "../../../../components/User/LayoutUser";
    import InputSearch from "../../../../components/User/InputSearch";
    import { useState } from "react";
   

    const Pesanan = () => {
    const [data, ] = useState<any[]>([
        {
        id: 1,
        name: "Bag",
        startDate: "15-10-2023",
        endDate: "18-10-2023",
        status: "Sudah di konfirmasi",
        },
        {
            id: 2,
            name: "Bag",
            startDate: "15-10-2023",
            endDate: "18-10-2023",
            status: "Sudah di konfirmasi",
        },
        {
            id: 3,
            name: "Bag",
            startDate: "15-10-2023",
            endDate: "18-10-2023",
            status: "Sudah di konfirmasi",
        },
    ]);

    

    return (
        <section>
        <LayoutUser>
            <div className="p-10 h-screen">
            <div className="w-full pb-10">
                
                <div className="flex flex-col items-end  ">
          <InputSearch placeholder={""} />
          
        </div>
                <h1 className="font-semibold text-2xl">List Barang</h1>
                
            </div>
            <div className="py-2 px-12 w-full bg-white rounded">
                <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left  font-semibold">
                    <thead className="text-md uppercase border-b-2">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        No
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Nama Barang
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Tanggal Mulai
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Tanggal Selesai
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Konfirmasi
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Aksi
                        </th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-800">
                    {data.map((item) => (
                        <tr
                        key={item.id}
                        className="bg-white border-b hover:bg-gray-300"
                        >
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">
                            {item.id}
                        </td>
                        <td className="px-6 py-4">{item.name}</td>
                        <td className="px-6 py-4">{item.startDate}</td>
                        <td className="px-6 py-4">{item.endDate}</td>
                        <td className="px-6 py-4">{item.status}</td>
                        <td className="px-6 py-4 flex gap-5">
                            <div className="text-green-800 cursor-pointer">
                            Silahkan Ambil
                            </div>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </LayoutUser>
        </section>
    );
    };

    export default Pesanan;
