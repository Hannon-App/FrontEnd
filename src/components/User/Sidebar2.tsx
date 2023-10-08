/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
<<<<<<< HEAD
  const [activePage, ] = useState<string>(""); 
=======
  const [activePage] = useState<string>(""); 
>>>>>>> f4a6673eb70f640f0ced4fad240568fbcd7b1da3
  const menuClosedClass = "translate-x-[-100%]"; 
  const menuOpenClass = "translate-x-0"; 

  return (
    <div className=" w-0 relative bg-black  py-6 " >
      <nav>
        <section className="flex mx-10 bg">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-0.5 w-8 animate-pulse bg-primary"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-primary"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-primary"></span>
          </div>

          <div className={`MENU-CONTAINER ${isNavOpen ? "open" : "closed"}`}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul
              className={`p-6 leading-[50px] pl-4 mt-16 transition-transform ${
                isNavOpen ? menuOpenClass : menuClosedClass
              } transition-duration-300`}
            >
              <a href="/dashboard-user">
                <li
                  className={`px-10 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
                    activePage === "dashboard"
                      ? "bg-primary text-white "
                      : "text-black"
                  }`}
                >
                  <i className="fa-solid fa-house w-7"></i> Home
                </li>
              </a>
              <a href="/pesanan-user">
                <li
                  className={`px-10 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
                    activePage === "employee"
                      ? "bg-primary text-white"
                      : "text-black"
                  }`}
                >
                  <i className="fa-solid fa-list w-7"></i> Lihat Pesanan
                </li>
              </a>
              <a href="/membership-user">
                <li
                  className={`px-10 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
                    activePage === "user"
                      ? "bg-primary text-white"
                      : "text-black"
                  }`}
                >
                  <i className="fa-solid fa-user w-7"></i> Membership
                </li>
              </a>
              <a href="#">
                <li
                  className={`px-10 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
                    activePage === "about"
                      ? "bg-primary text-white"
                      : "text-black"
                  }`}
                >
                  <i className="fa-solid fa-circle-info w-7"></i> Tentang Kami
                </li>
              </a>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
        .MENU-CONTAINER {
          position: fixed;
          top: 0;
          left: -100%;
          width: 70%; /* Adjust the width as needed */
          max-width: 300px; /* Maximum width of the menu */
          height: 100%;
          background-color: #E5E5E5;
          display: flex;
          justify-content: space-evenly;
          align-items: flex-start;
          z-index: 10;
          overflow-y: auto; /* Enable scrolling if needed */
          transition: left 0.3s ease-in-out;
        }

        .MENU-CONTAINER.open {
          left: 0;
        }

        .MENU-CONTAINER.closed {
          left: -100%;
        }
      `}</style>
    </div>
  );
}
