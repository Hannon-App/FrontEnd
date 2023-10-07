import  { useState,  } from "react";
import LayoutUser from "../../../../components/User/LayoutUser";
import Button from "../../../../components/User/Bottom";
import { useNavigate } from "react-router-dom";

const CardShop = () => {
  // Objek yang menyimpan kuantitas masing-masing item
  const navigate = useNavigate();
  const [itemQuantities, setItemQuantities] = useState<{
    [itemId: number]: number;
  }>({
    1: 1, // Item 1 memiliki kuantitas awal 1
    2: 1, // Item 2 memiliki kuantitas awal 1
    // Tambahkan item lain jika diperlukan
  });

  // Fungsi untuk menambah kuantitas item
  const incrementQuantity = (itemId: number) => {
    setItemQuantities({
      ...itemQuantities,
      [itemId]: itemQuantities[itemId] + 1,
    });
  };

  // Fungsi untuk mengurangi kuantitas item
  const decrementQuantity = (itemId: number ) => {
    if (itemQuantities[itemId] > 1) {
      setItemQuantities({
        ...itemQuantities,
        [itemId]: itemQuantities[itemId] - 1,
      });
    }
  };

  // Data dummy untuk barang-barang dalam keranjang belanja
  const cartItems = [
    {
      id: 1,
      name: "Nama Barang 1",
      description: "Deskripsi Barang 1",
      price: "Harga Barang 1",
      imageSrc:
        "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc",
    },
    {
      id: 2,
      name: "Nama Barang 2",
      description: "Deskripsi Barang 2",
      price: "Harga Barang 2",
      imageSrc:
        "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc",
    },
    // Tambahkan barang-barang lain di sini jika diperlukan
  ];

  const subtotal = Object.keys(itemQuantities).reduce((total, itemId) => {
    const item = cartItems.find((cartItem) => cartItem.id === parseInt(itemId));
    return total + item.price * itemQuantities[itemId];
  }, 0);

  // Menghitung diskon (20%)
  const discount = subtotal * 0.2;

  // Biaya Admin
  const adminFee = 29348923;

  // Menghitung total
  const total = subtotal - discount + adminFee;

  const handlecheckout = () => {
    navigate('/pembayaran-user');
  };

  return (
    <section>
      <LayoutUser>
        <body className="bg-gray-200 h-screen">
          <div className="container mx-auto p-8 flex">
            <div className="w-2/3 p-4 bg-white rounded shadow-lg mr-4">
              <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
              <div>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="cart-item flex items-center mb-4 bg-slate-200 ml-3 py-3 px-5 rounded-md"
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="w-20 h-20 rounded mr-4 ml-6"
                    />

                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p>{item.description}</p>
                      <p>{item.price}</p>
                    </div>

                    <div className="items-center ml-auto">
                      <div className="mb-5 ml-24">
                        <i className="fa-solid fa-trash"></i>
                      </div>
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-l ml-7"
                      >
                        -
                      </button>
                      <span className="px-4">{itemQuantities[item.id]}</span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="bg-green-500 text-white px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
                <div>
                  <div className="bg-slate-200 py-3 px-5 ml-3 rounded-md">
                    <h2 className="text-xl font-semibold ">Rental Info</h2>
                    <p className="mb-2 text-xs">
                      Please Select Your Rental Date
                    </p>
                    <div className="flex">
                      <p className="gap-5 mr-2 mb-1 font-semibold">Rent Date</p>
                      <p className="ml-14 mb-1 font-semibold">Return Date</p>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="date"
                        placeholder="Years"
                        className="input input-bordered w-32 max-w-xs bg-white"
                      />

                      <input
                        type="date"
                        placeholder="Years"
                        className="input input-bordered w-32 max-w-xs bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/3 h-full p-4 bg-white rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
              <div className="order-summary-item flex justify-between">
                <p>Subtotal:</p>
                <p className="item-end">{subtotal}</p>
              </div>
              <div className="order-summary-item flex justify-between">
                <p>Discount (20%):</p>
                <p className="item-end">{discount}</p>
              </div>
              <div className="order-summary-item flex justify-between">
                <p>Biaya Admin:</p>
                <p className="item-end">{adminFee}</p>
              </div>
              <hr className="my-2" />
              <div className="order-summary-item flex justify-between">
                <p>Total:</p>
                <p className="item-end">{total}</p>
              </div>
              <Button
              label="Go to Checkout"
              classname="bg-blue-500 text-white px-4 py-2 rounded mt-4 font-semibold"
              onClick={handlecheckout}
              />
             
            </div>
          </div>
        </body>
      </LayoutUser>
    </section>
  );
};

export default CardShop;
