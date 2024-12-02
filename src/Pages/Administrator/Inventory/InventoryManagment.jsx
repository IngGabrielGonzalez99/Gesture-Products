import React, { useEffect, useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import { Footer } from '../../../Components/Footer/Footer';

export const InventoryManagment = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    quantity: 0,
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "price" ? parseFloat(value) : value,
    }));
  };

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
      setData((prev) => [...prev, newProduct]); 
      setIsModalOpen(false); 
    } catch (err) {
      console.error("Error al agregar producto:", err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/furnitures");
        if (!response.ok) {
          throw new Error(`Error HTTP ${response.status}`);
        }
        const results = await response.json();
        setData(results); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-xl text-gray-600">Cargando...</p>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-xl text-red-500">Error al cargar datos: {error}</p>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Gestión de Inventario</h1>

        <div className="flex justify-end mb-20">
          <button
            className="bg-green-600 text-white p-3 rounded-md shadow-md hover:bg-green-700 transition-all"
            onClick={() => setIsModalOpen(true)}
          >
            Agregar nuevo producto
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white text-center">
                <th className="border border-gray-300 px-4 py-3 text-sm">ID</th>
                <th className="border border-gray-300 px-4 py-3 text-sm">Nombre</th>
                <th className="border border-gray-300 px-4 py-3 text-sm">Descripción</th>
                <th className="border border-gray-300 px-4 py-3 text-sm">Cantidad</th>
                <th className="border border-gray-300 px-4 py-3 text-sm">Precio</th>
              </tr>
            </thead>
            <tbody className='text-center text-gray-700'>
              {data.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-center text-sm text-gray-800">{product.id}</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">{product.name}</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">{product.description}</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">{product.quantity}</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-lg font-bold mb-4">Agregar Producto</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Escribe el precio"
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-100 text-dark px-4 py-2 rounded-md hover:bg-gray-200 transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className='mt-20'>
        <Footer/>
      </div>
    </div>
  );
};

export default InventoryManagment;
