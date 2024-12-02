import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Columna izquierda */}
          <div className="md:w-1/3">
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo o icono */}
              <div className="w-6 h-6 bg-green-400 rounded-full"></div>
              <span className="text-xl font-bold">Maxwell</span>
            </div>
            <p className="text-gray-400">
                Hacemos crecer tu negocio.
            </p>
          </div>
          <div className="md:flex md:space-x-16">
            <div>
              <h3 className="font-semibold text-gray-300 mb-4">Compañía</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Carreras
                  </a>
                </li>
                <li>
                  <a href="#" className="text-Preciosay-400 hover:text-white">
                    Precios
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna Resources */}
            <div>
              <h3 className="font-semibold text-gray-300 mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Documentación
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Papeles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Conferencias
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Términos de servicio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Políticas de Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Procesamiento de datos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2023 Maxwell Inc. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* Redes sociales */}
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
