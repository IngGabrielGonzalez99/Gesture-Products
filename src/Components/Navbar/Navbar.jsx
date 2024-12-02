import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <div>
        <nav className="bg-white border-gray-400 px-4 py-2">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap">Maxwell</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
                    <Link to="/InventoryManagment" className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100'>Gestión de inventario</Link>
                    <Link to="/SellAdminProduct" className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100'>Ventas</Link>
                    <Link to="/Users" className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100'>Usuarios</Link>
                    <Link to="/" className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100'>Salir</Link>

                    {/* <li><button onClick={handleLogOut()} className="block py-2 pr-4 pl-4 rounded text-gray-700 hover:text-white hover:bg-red-400">Salir</button></li> */}
                </ul>
            </div>
        </div>
    </nav>
    </div>
    
  )
}

export default Navbar;
