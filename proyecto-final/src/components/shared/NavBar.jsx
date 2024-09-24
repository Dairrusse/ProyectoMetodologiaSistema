import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { LuStore } from "react-icons/lu";
import { AiTwotoneHome } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="bg-[#9BC885] w-full fixed top-0 left-0 flex items-center justify-between p-2 z-10">
        <div className="ml-4">
          <h1 className="text-[45px] font-julius text-[#0E3C09] opacity-60 hover:opacity-100 cursor-pointer">OLYS</h1>
        </div>
        <ul className="flex space-x-8 mr-8">
          <li>
            <Link to="/home" className="flex items-center space-x-1 opacity-35 hover:opacity-80 font-julius">
              <AiOutlineHome className="text-2xl" />
              <h4 className="text-lg">Sobre Nosotros</h4>
            </Link>
          </li>
          <li>
            <Link to="/tienda" className="flex items-center space-x-1 opacity-35 hover:opacity-80 font-julius">
              <LuStore className="text-2xl" />
              <h4 className="text-lg">Tienda</h4>
            </Link>
          </li>
          <li>
            <Link to="/carrito" className="flex items-center space-x-1 opacity-35 hover:opacity-80 font-julius">
              <IoCartOutline className="text-2xl" />
              <h4 className="text-lg">Carrito</h4>
            </Link>
          </li>
          <li>
            <Link to="/novedades" className="flex items-center space-x-1 opacity-35 hover:opacity-80 font-julius">
              <BsInfoCircle className="text-2xl" />
              <h4 className="text-lg">Novedades</h4>
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
