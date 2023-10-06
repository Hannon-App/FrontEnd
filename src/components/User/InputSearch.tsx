import React, { FC } from "react";
import Button from "./Bottom";
interface InputSearchProps {
  placeholder: string;
}

const InputSearch: FC<InputSearchProps> = ({ placeholder }) => {
  return (
    
    <div className="flex mr-32 mt-8">
        <div className="border-solid border-[1px] border-outline px-5 py-2 rounded-2xl w-60 bg-white">
      <i className="fa-solid fa-magnifying-glass text-[#BDBDBD] mr-2 text-[14px]"></i>
      <input
        type="text"
        placeholder={placeholder}
        className="focus:outline-none text-[13px] bg-transparent"
      />
    
    </div>
    <Button
    label="cari"
    classname="bg-primary text-white font-semibold border-outline px-5 py-2 rounded-2xl w-18"/>
    </div>
    
    

  );
};

export default InputSearch;
