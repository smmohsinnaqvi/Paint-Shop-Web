import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setToken, clearToken, setError } = authSlice.actions;

export default authSlice.reducer;
