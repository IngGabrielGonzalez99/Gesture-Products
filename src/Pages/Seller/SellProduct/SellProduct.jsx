import React, { useState } from "react";
import { NavbarSeller } from "../../../Components/NavbarSeller/NavbarSeller";
import { Navigate } from "react-router-dom";
import { Footer } from "../../../Components/Footer/Footer";

export const SellProduct = () => {
  // Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    furniture_id: 0,
    quantity: 0,
    user_id: 0,
    delivery_date: "",
  });

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Llamada a la API para agregar la venta
      const response = await fetch("http://localhost:8000/purchases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Error al agregar la venta");
      }
  
      const data = await response.json();
      console.log("Venta agregada:", data.id);
      const numero = 1;
      // Segunda llamada a la API usando el ID obtenido
      const secondResponse = await fetch(
        `http://localhost:8000/payments/${numero}`,
        {
          method: "POST", // Usa GET o el método que aplique según tu API
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify({  purchase_order_id: 1 }), // El cuerpo de la solicitud
        }
      );
  
      if (!secondResponse.ok) {
        throw new Error("Error al obtener detalles de la venta");
      }
  
      const saleDetails = await secondResponse.json();
      console.log("Detalles de la venta:", saleDetails);
  
      setIsModalOpen(false);
      alert("Venta generada correctamente");

      Navigate("/SellProduct");
  
      setFormData({
        furniture_id: 0,
        quantity: 0,
        user_id: 0,
        delivery_date: "",
      });
    } catch (err) {
      console.error("Error:", err.message);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen"> {/* Contenedor principal con flexbox */}
      <NavbarSeller />
      
      <h2 className="text-center text-4xl font-bold uppercase mt-6">
        Generar nueva venta
      </h2>
      
      {/* Contenedor principal para el botón */}
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <button
          className="p-2 bg-green-700 text-white rounded-md hover:bg-green-600"
          onClick={() => setIsModalOpen(true)}
        >
          Agregar venta
        </button>
      </div>
  
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">Registrar Nueva Venta</h2>
            <form onSubmit={handleSubmit}>
              {/* Campo Furniture ID */}
              <div className="mb-4">
                <label className="block text-gray-700">ID del Mueble</label>
                <input
                  type="number"
                  name="furniture_id"
                  value={formData.furniture_id}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Ingrese el ID del mueble"
                />
              </div>
  
              {/* Campo Quantity */}
              <div className="mb-4">
                <label className="block text-gray-700">Cantidad</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Ingrese la cantidad"
                />
              </div>
  
              {/* Campo User ID */}
              <div className="mb-4">
                <label className="block text-gray-700">ID del Usuario</label>
                <input
                  type="number"
                  name="user_id"
                  value={formData.user_id}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Ingrese el ID del usuario"
                />
              </div>
  
              {/* Campo Delivery Date */}
              <div className="mb-4">
                <label className="block text-gray-700">Fecha de Entrega</label>
                <input
                  type="datetime-local"
                  name="delivery_date"
                  value={formData.delivery_date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
  
              {/* Botones */}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)} // Cierra el modal
                  className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-slate-800"
                >
                  Registrar
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
