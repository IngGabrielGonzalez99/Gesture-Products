export const loginApi = async (username, password) => {
    // Simulación de una llamada a la API
    if (username === 'admin' && password === '1234') {
      return {
        token: 'fake-jwt-token',
        user: {
          id: 1,
          name: 'Admin User',
          email: 'admin@example.com',
          role: 'admin', // Rol del usuario
        },
      };
    } else if (username === 'user' && password === '1234') {
      return {
        token: 'fake-jwt-token',
        user: {
          id: 2,
          name: 'Regular User',
          email: 'user@example.com',
          role: 'user', // Rol del usuario
        },
      };
    } else {
      throw new Error('Credenciales inválidas');
    }
  };
  