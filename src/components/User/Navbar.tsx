import React from "react";
import Button from "./Bottom";
import { useNavigate } from "react-router";
import Logo from "../../assets/Hannon.svg"
const Navbar = () => {
  const navigate = useNavigate();
  
  const HandleLogOut = () => {
    navigate('/LoginTenant');
  };
  return (
    <div className="flex flex-row w-full justify-between px-8 h-16 place-items-center">
      <div className="flex flex-rows-2 place-items-center ml-16">
        <img src={Logo} style={{ width: "4rem" }} alt="" />
        <div className="flex flex-col ml-9 ">
          <div className="text-[18px] font-semibold">Welcome to Hannon App</div>
       
        </div>
      </div>

      <div className="flex flex-row place-items-center">
        <a href="/cardshop-user">
          <div className="mr-4">
            <i className="fa-solid fa-cart-shopping text-[#BDBDBD] text-xl hover:text-[#A2A2A2]"></i>
          </div>
        </a>
        <Button
          label="Logout"
          classname="bg-primary text-white px-10 py-2 rounded"
          onClick={HandleLogOut}
        />
      </div>
    </div>
  );
};

export default Navbar;
