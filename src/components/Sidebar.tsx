import { Link, useLocation } from "react-router-dom";
import { faBoxArchive, faDollarSign, faGauge, faGripVertical, faTags } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Hannon.svg";

const Sidebar = () => {
  const location = useLocation();
  const sideLink = [
    {
      to: "/dashboard-tenant",
      url: <FontAwesomeIcon icon={faGauge}/>,
      name: "Dashboard",
    },
    {
      to: "/item-tenant",
      url: <FontAwesomeIcon icon={faGripVertical}/>,
      name: "Item",
    },
    {
      to: "/archive-tenant",
      url: <FontAwesomeIcon icon={faBoxArchive}/>,
      name: "Archive",
    },
    {
      to: "/rented-tenant",
      url: <FontAwesomeIcon icon={faTags}/>,
      name: "Rented",
    },
    {
      to: "/income-tenant",
      url: <FontAwesomeIcon icon={faDollarSign}/>,
      name: "Income",
    },
  ];
  return (
    <div>
      <div className="space-y-4 h-screen">
        <div className="px-12 py-5 flex gap-2 items-center">
          <img src={Logo} style={{ width: "7rem" }} alt="" />
        </div>

        {sideLink.map((element, index) => (
          <div className="space-y-2 font-medium px-10" key={index}>
            <Link to={element.to}>
              <div
                className={`cursor-pointer w-full flex items-center py-2 px-4 rounded-md hover:w-auto hover:bg-bgBtn text-gray-700 hover:animations hover:text-white ${
                  location.pathname === element.to
                    ? "bg-bgBtn  rounded-md shadow-lg text-white font-bold"
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
    </div>
  );
};

export default Sidebar;
