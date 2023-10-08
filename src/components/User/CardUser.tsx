import  { FC, ReactNode, CSSProperties, useState } from "react";

interface CardProps {
  title?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  storeName?: string;
  storeAddress?: string;
  storeDeskripsi?: string;
  storeImage?: string;
  width?: string;
  height?: string;
}

const CardUser: FC<CardProps> = ({
  title,
  className,
  style,
  storeAddress,
  storeDeskripsi,
  storeImage,
  width = "700px",
  height = "200px",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles: CSSProperties = {
    width,
    height,
    ...style,
    backgroundColor: isHovered ? "orange" : "transparent", 
    transition: "background-color 0.3s ease-in-out", 
  };

  return (
    <div
      className={`bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-lg shadow-lg p-4 flex justify-start ${className}`}
      style={cardStyles}
      onMouseEnter={() => {
        setIsHovered(true); 
      }}
      onMouseLeave={() => {
        setIsHovered(false); 
      }}
    >
      <div className="flex justify-center items-center">
        {storeImage && (
          <img
            src={storeImage}
            alt="Toko"
            className="mr-4 mb-2 ml-20"
            style={{ width: "150px", height: "150px" }}
          />
        )}
        <div>
          {title && (
            <h2 className="text-xl font-bold mb-2 ml-20 "> {title}</h2>
          )}
         
          {storeAddress && (
            <p className="mb-2 ml-20 font-medium mt-8">Alamat: {storeAddress}</p>
          )}
          {storeDeskripsi && (
            <p className="mb-2 ml-20 font-medium">
              Nomor Telepon: {storeDeskripsi}
            </p>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default CardUser;
