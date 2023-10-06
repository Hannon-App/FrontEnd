import React, { FC } from "react";
import Button from "./Bottom";
interface CardProps {
  id: string;
  title?: string;
  image?: string;
  category?: string;
  price?: string | number;
  onClick?: React.MouseEventHandler;
}

const Card: FC<CardProps> = ({
  id,
  title,
  image,
  category,
  price,
  onClick,
}) => {
  return (
    <div
      id={id}
      className="w-80 p-10 h-max bg-gray-300 rounded-md shadow-md flex flex-col"
    >
      <div style={{ position: "relative" }}>
        <img
          src={
            image
              ? image
              : "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc"
          }
          className="w-full h-60 rounded-md"
          alt="Product Image"
        />
        <i
          className="fa-regular fa-heart"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            color: "black",
            fontSize: "24px",
          }}
        ></i>
      </div>

      <div className="my-5">
        <h2 className="font-semibold my-2 truncate">{title}</h2>
        <p>{category}</p>
        <i className="fa-solid fa-star"></i>
        <p className="font-bold">{price}</p>
      </div>
      <div className="w-40 h-10 my-5">
        <Button label="sewa" onClick={onClick} classname="bg-primary text-white rounded px-5 py-2" />
      </div>
    </div>
  );
};

export default Card;
