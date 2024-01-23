import React from "react";

export default function InicioSesion() {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Agrega tu lógica de inicio de sesión aquí
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-primario p-8 rounded-lg flex max-w-xl w-full">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-primario dark:text-white"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="usuario@gmail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-primario dark:text-white"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <a
              href="/olvide-contrasena"
              className="flex items-center text-sm font-medium text-primario dark:text-white"
            >
              Olvidé mi Contraseña
            </a>
          </div>

          <button
            type="submit"
            className={`focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>

        {/* Imagen aquí */}
        <img
          className="w-1/2 h-auto rounded-lg ml-4 hidden md:block"
          src="https://thumbs.dreamstime.com/z/imagen-del-logo-de-la-farmacia-verde-coraz%C3%B3n-con-una-cruz-m%C3%A9dica-sobre-un-fondo-blanco-261376517.jpg"
          alt=""
        />
      </div>
    </div>
  );
}