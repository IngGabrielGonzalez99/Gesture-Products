import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice para manejar la sesión
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user; // Datos del usuario
      state.token = action.payload.token; // Token de la API
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Exportar acciones
export const { login, logout } = authSlice.actions;

// Crear el store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
