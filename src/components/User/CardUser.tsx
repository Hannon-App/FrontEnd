import React, { FC, ReactNode, CSSProperties } from 'react';

interface CardProps {
  title?: string;
  content?: ReactNode;
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
  content,
  className,
  style,
  storeName,
  storeAddress,
  storeDeskripsi,
  storeImage,
  width = '700px',
  height = '200px',
}) => {
  const cardStyles: CSSProperties = {
    width,
    height,
    ...style,
  };

  return (
    <div className={`bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-lg shadow-lg p-4 flex justify-start ${className}`} style={cardStyles}>
      <div className="flex justify-center items-center">
      {storeImage && (
        <img
          src={storeImage}
          alt="Toko"
          className="mr-4 mb-2 ml-20"
          style={{ width: '150px', height: '150px' }}
        />
      )}
      <div>
        {title && <h2 className="text-xl font-bold mb-2 ml-20 ">{title}</h2>}
        {storeName && <p className="mb-2 ml-20 font-medium">Nama Toko: {storeName}</p>}
        {storeAddress && <p className="mb-2 ml-20 font-medium">Alamat Toko: {storeAddress}</p>}
        {storeDeskripsi && <p className="mb-2 ml-20 font-medium">Deskripsi: {storeDeskripsi}</p>}
        {content}
      </div>
      </div>
     </div>
  );
};

export default CardUser;
