import React, { FC } from "react";
import Button from "./Bottom";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  title?: string;
  image?: string;
  category?: string;
  price?: string | number;
  onClick?: React.MouseEventHandler;
}

const Card: FC<CardProps> = ({ id, title, image, price, category }) => {
  const navigate = useNavigate();

  const handleSewa = () => {
    navigate(`/detail-pesanan/${id}`);
  };

  // Batasi panjang teks category menjadi maksimal 100 karakter
  const maxLength = 50;
  const truncatedCategory =
    category && category.length > maxLength
      ? `${category.slice(0, maxLength)}...`
      : category;

  return (
    <div
      id={id}
      className="w-80 p-6 h-110 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
    >
      <div style={{ position: "relative" }}>
        <img
          src={
            image ||
            "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc"
          }
          className="w-full h-48 rounded-md object-cover"
          alt="Product Image"
        />
        <i
          className="fa-regular fa-heart absolute top-2 right-2 text-black text-xl"
          style={{ zIndex: 1 }}
        ></i>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold text-lg truncate">{title}</h2>
        <div className="flex items-center mt-2">
          <i className="fa-solid fa-dollar-sign text-yellow-500 mr-1"></i>
          <p className="font-semibold text-gray-700">{price}</p>
        </div>
        <div>
          <p className="text-sm text-gray-700">{truncatedCategory}</p>
        </div>
      </div>
      <div className="mt-4">
        <Button
          label="Sewa"
          onClick={handleSewa}
          classname="bg-primary text-white rounded-full px-4 py-2 transition-transform transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Card;
