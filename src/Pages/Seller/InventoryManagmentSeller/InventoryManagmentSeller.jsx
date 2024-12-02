import React, { useEffect, useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import { NavbarSeller } from '../../../Components/NavbarSeller/NavbarSeller';
import { Footer } from '../../../Components/Footer/Footer';

export const InventoryManagmentSeller = () => {
  const [data, setData] = useState([]); // Estado que almacena los datos de la API
  const [loading, setLoading] = useState(true); // Indica si la página está cargando
  const [error, setError] = useState(null); // Estado para manejar errores
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla si el modal está abierto
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    quantity: 0,
    price: 0,
  }); // Estado para los datos del formulario

  // Maneja cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "price" ? parseFloat(value) : value, // Asegura que quantity y price sean números
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/furnitures/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}`);
      }

      const newProduct = await response.json();
      setData((prev) => [...prev, newProduct]); // Agrega el nuevo producto al estado de datos
      setIsModalOpen(false); // Cierra el modal después de enviar
    } catch (err) {
      console.error("Error al agregar producto:", err.message);
    }
  };

  // Fetch para obtener la lista de productos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/furnitures");
        if (!response.ok) {
          throw new Error(`Error HTTP ${response.status}`);
        }
        const results = await response.json();
        setData(results); // Almacena los datos obtenidos en el estado
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };
    fetchData();
  }, []);


  if (loading) return <p>Cargando...</p>;

  if (error) return <p>Error al cargar datos: {error}</p>;

  return (
    <div className="flex flex-col min-h-screen"> {/* Contenedor principal */}
      <NavbarSeller />
      
      <h1 className="text-center font-bold text-4xl p-3">GESTIÓN DE INVENTARIO</h1>
  
      {/* Contenedor para la tabla de gestión */}
      <div className="flex-grow flex items-center justify-center px-20"> {/* grow hace que se expanda */}
        <div className="w-full">
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead className="bg-gray-900 text-white text-center">
              <tr>
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Nombre</th>
                <th className="border border-gray-300 px-4 py-2">Descripción</th>
                <th className="border border-gray-300 px-4 py-2">Cantidad</th>
                <th className="border border-gray-300 px-4 py-2">Precio</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data.map((product) => (
                <tr key={product.id}>
                  <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.description}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Agregar Producto</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Escribe el nombre"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Descripción</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Escribe la descripción"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Cantidad</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Escribe la cantidad"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Precio</label>
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Escribe el precio"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancelar
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
  
      {/* Footer */}
      <Footer />
    </div>
  );

};
export default InventoryManagmentSeller;