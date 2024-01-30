import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.error = null;
    },
    clearUsers: (state) => {
      state.users = [];
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  
});

export const { setUsers, clearUsers, setError } = userSlice.actions;

export default userSlice.reducer;
