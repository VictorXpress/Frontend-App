import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function MenuCliente() {
  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderBottom: "10px solid #15803D",
  };

  const mainContentStyle = {
    marginTop: "80px", // Puedes ajustar este valor según sea necesario
  };

  return (
    <>
      <nav className="bg-white dark:bg-primary" style={navbarStyle}>
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zlJ92WNrXiCIaKzwRsA8-PhURggjLp4qSA&usqp=CAU"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-primary">
              Su Economía "Luisito"
            </span>
          </a>
          <div className="hidden md:flex md:order-2 items-center">
            <button
              type="button"
              className="btn-cart flex items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <FaShoppingCart className="mr-2" />
              <span>Carrito de compras</span>
            </button>
          </div>
        </div>
      </nav>
      <div className="mt-20" style={mainContentStyle}>
        {/* Agrega un margen superior para evitar que los contenidos se superpongan con el navbar */}
        {/* Puedes colocar otros componentes debajo del navbar */}
      </div>
    </>
  );
}
