import React, { useEffect, useState } from "react";
import { NavbarSeller } from "../../../Components/NavbarSeller/NavbarSeller";
import Navbar from "../../../Components/Navbar/Navbar";
import { Footer } from "../../../Components/Footer/Footer";

export const SellerAdministrator = () => {
  const [dailyInfo, setDailyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener datos desde la API
  const fetchSalesData = async () => {
    try {
      const response = await fetch("http://localhost:8000/payments/report");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setDailyInfo(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-600">Cargando...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-500">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        {/* Título */}
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
          Consultar todas las ventas
        </h2>

        {/* Resumen del día */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Resumen del día</h3>
          <div className="text-lg text-gray-600">
            <p>
              <strong className="text-gray-800">Total de ventas:</strong> {dailyInfo?.Totaldailysales}
            </p>
            <p>
              <strong className="text-gray-800">Total del día:</strong> ${dailyInfo?.dailytotal.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Tabla de ventas */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full border-collapse border text-center border-gray-300">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-gray-300 px-4 py-3 text-sm">ID Venta</th>
                <th className="border border-gray-300 px-4 py-3 text-sm">Total</th>
              </tr>
            </thead>
            <tbody>
              {dailyInfo?.sales.map((sale, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">
                    {sale.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">
                    ${sale.total.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SellerAdministrator;
