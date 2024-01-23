import React from 'react';

export default function Registro() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form className="p-8 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full max-w-xl">        
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="cedula" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
              Cedula
            </label>
            <input
              type="text"
              id="cedula"
              className="input-field border-gray-500 w-full p-2.5"
              placeholder="0000000000"
              required
            />
          </div>
          <div>
            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
              Nombre y Apellido
            </label>
            <input
              type="text"
              id="nombre"
              className="input-field border-gray-500 w-full p-2.5"
              placeholder="Usuario Nuevo"
              required
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              className="input-field border-gray-500 w-full p-2.5"
              placeholder="091111111"
              pattern="[0-9]{10}" 
              required
            />
          </div>
          <div>
            <label htmlFor="direccion" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
              Dirección
            </label>
            <input
              type="text"
              id="direccion"
              className="input-field border-gray-500 w-full p-2.5"
              placeholder="Riobamba"
              required
            />
          </div>
          <div>
            <label htmlFor="nombreuser" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="nombreuser"
              className="input-field border-gray-500 w-full p-2.5"
              placeholder="User1"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className="input-field border-gray-500 w-full p-2.5"
            placeholder="user@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="input-field border-gray-500 w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>
        <button
          type="submit"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-3 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}