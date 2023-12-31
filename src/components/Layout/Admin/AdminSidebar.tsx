import { faGauge, faUsersRectangle, faUsers } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Hannon.svg";

const AdminSidebar = () => {
  const sideLink = [
    {
      to: "/AdminDashboard",
      url: <FontAwesomeIcon icon={faGauge} />,
      name: "Dashboard",
    },
    {
      to: "/TenantManagement",
      url: <FontAwesomeIcon icon={faUsersRectangle} />,
      name: "Tennant Management",
    },
    {
      to: "/UserManagement",
      url: <FontAwesomeIcon icon={faUsers} />,
      name: "User Management",
    },
    
  ];
  return (
    <>
      <div className="w-1/6 space-y-4 h-screen fixed top-0 left-0 overflow-y-auto">
        <div className="px-12 py-5 flex gap-2 items-center justify-center">
          <img src={Logo} style={{ width: "7rem" }} alt="logo" />
        </div>

        {sideLink.map((element, index) => (
          <div className="space-y-2 font-medium px-10" key={index}>
            <Link to={element.to}>
              <div
                className={`cursor-pointer w-full flex items-center py-2 px-4 rounded-md hover:w-auto hover:bg-bgBtn text-gray-700 hover:animations hover:text-white ${location.pathname === element.to
                    ? "bg-bgBtn  rounded-xl shadow-lg text-white font-bold"
                    : "font-semibold"
                  }`}
              >
                <span className="w-2">{element.url}</span>
                <div>
                  <h1 className={`px-4 tracking-wide text-sm`}>
                    {element.name}
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminSidebar