import React from "react";

export default function Footer() {
  const borderTopStyle = {
    borderTop: "10px solid #15803D", // Color verde para el borde superior
  };

  return (
    <div>
      <footer
        className="bg-white rounded-lg shadow m-4 dark:bg-gray-800"
        style={borderTopStyle}
      >
        <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-green-500 sm:text-center dark:text-green-500">
            © 2024{" "}
            <a href="" className="hover:underline">
              Su Economia Luisito
            </a>
            . Derechos reservados.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-green-600 dark:text-green-500 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Redes sociales
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contactos
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
