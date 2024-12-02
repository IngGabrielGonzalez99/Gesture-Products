import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validar, setValidar] = useState(false);

    const [error, setError] = useState(false);
    const navigate =  useNavigate();
    


    
    const handleLogin = async (e) => {
        e.preventDefault(); // Previene la recarga de la página

        const isAuthenticated = true;

        try {
          // Llama a la API usando el endpoint del backend
          const response = await fetch(`http://localhost:8000/users/${username}/${password}`, {
            method: "GET", // Llama al método GET
          });
      
          if (!response.ok) {
            throw new Error("Credenciales incorrectas o error en el servidor");
          }
      
          // Procesa la respuesta del backend
          const data = await response.json(); // data debería contener el rol del usuario
          console.log("Respuesta del servidor:", data);
      
          // Verifica el rol y redirige
          if (data.rol === "admin") {
            navigate("/DashboardAdministrador"); // Redirige al Dashboard del administrador
          } else if (data.rol === "seller") {
            navigate("/DashboardSeller"); // Redirige al Dashboard del usuario
          } else {
            throw new Error("Rol desconocido");
          }
        } catch (err) {
          setValidar(!validar); // Mostrar error si no es válido
          console.error("Error al iniciar sesión:", err.message);
          setError(true); // Muestra un mensaje de error en la UI
        }
      };
      

      
  return (
    <div class="flex justify-center items-center bg-gray-100 h-screen">
        <form onSubmit={handleLogin}>
            <div class="grid gap-6 p-20 bg-white rounded-xl text-center">
                <h4 class="font-bold text-2xl">Iniciar sesión</h4>

                <div class="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
                    <span class="px-3 text-gray-500">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <input value={username} onChange={(e)=> setUsername(e.target.value)} id="email" placeholder="Correo electrónico" class="flex-1 p-3  border-none border-gray-300  focus:outline-none rounded-r-lg"/>
                </div>   
                <div class="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
                    <span class="px-3 text-gray-500">
                        <i class="fas fa-lock"></i>
                    </span>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="lock" placeholder="Contraseña" class="flex-1 p-3 border-none focus:outline-none rounded-r-lg"/>
                </div>           
                <div class="w-full">
                {validar && (
                      <p className="p-2 text-red-700">Las credenciales son incorrectas</p>
                    )}
                    <button onclick="siguiente()" class="bg-green-700 py-2 px-4 text-white rounded-md uppercase hover:bg-green-600">Ingresar</button>
                </div>
            </div>
        </form>
    </div>
  )
}
export default Login;