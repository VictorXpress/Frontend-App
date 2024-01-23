import React from "react";

export default function MenuPrincipal() {
  const borderBottomStyle = {
    borderBottom: "10px solid #15803D",
  };

  return (
    <nav
      className="bg-white dark:bg-primary fixed w-full z-20 top-0 start-0"
      style={borderBottomStyle}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zlJ92WNrXiCIaKzwRsA8-PhURggjLp4qSA&usqp=CAU"
            className="h-8"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-primary">
            Su Economia "Luisito"
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:mx-100">
          <button            
            href="../paginas/Registro.jsx"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Registrarse
          </button>
          <div className="hidden md:block md:mx-100"></div>
          <button
            
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
}
