import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!user) {
    return <p>No estás autenticado.</p>;
  }

  return (
    <div>
      <h2>Bienvenido, {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Rol: {user.role}</p>

      {user.role === 'admin' && (
        <div>
          <h3>Sección de Administradores</h3>
          <p>Solo visible para usuarios con rol "admin".</p>
        </div>
      )}

      {user.role === 'user' && (
        <div>
          <h3>Sección de Usuarios Regulares</h3>
          <p>Solo visible para usuarios con rol "user".</p>
        </div>
      )}

      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Dashboard;
