import React, { useState, useEffect } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import { Footer } from '../../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



export const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    cellphone: "",
    password_user: "",
    username: "",
    address: { calle: "", Numero: "" },
    rol_id: 2, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: formData.name,
      lastname: formData.lastname,
      username: formData.username,
      cellphone: formData.cellphone,
      address: { calle: formData.address.calle, Numero: formData.address.Numero },
      password_user: formData.password_user,
      rol_id: formData.rol_id,
    };
  
    try {
      const response = await fetch("http://localhost:8000/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }
      
      const result = await response.json();
      console.log("User created:", result);
      setIsModalOpen(false);
      setFormData({ name: "", lastname: "", cellphone: "", password_user: "", username: "", address: { calle: "", Numero: "" }, rol_id: 1 });
    } catch (err) {
      console.error("Error creating user:", err.message);
    }
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/users/get_all");
        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
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

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading data: {error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6 py-20">
        <div className="flex justify-end mb-4">
        <button
  className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out flex items-center gap-2"
  onClick={() => setIsModalOpen(true)}
>
<FontAwesomeIcon icon={faPlus} />
Crear nuevo usuario
</button>

        </div>

        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4 text-center">ID</th>
              <th className="py-2 px-4">Nombre</th>
              <th className="py-2 px-4">Apellido</th>
              <th className="py-2 px-4">Teléfono</th>
              <th className="py-2 px-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-center text-gray-700">
            {data.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">{user.id}</td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.lastname}</td>
                <td className="py-2 px-4">{user.cellphone}</td>
                <td className="py-2 px-4 text-center">
                  <button className="bg-emerald-600 text-white hover:bg-yellow-500 py-1 px-4 rounded-md">Editar</button>
                  <button className="bg-red-500 text-white hover:bg-red-600 py-1 px-4 rounded-md ml-2">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Crear nuevo usuario</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Apellido</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter last name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Teléfono</label>
                <input
                  type="text"
                  name="cellphone"
                  value={formData.cellphone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Contraseña</label>
                <input
                  type="password"
                  name="password_user"
                  value={formData.password_user}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Nombre de usuario</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter username"
                />
              </div>
              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-full py-2 bg-black text-white rounded-md hover:bg-slate-800"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};
