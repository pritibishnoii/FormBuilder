
import { createSlice } from "@reduxjs/toolkit";

const storedUserData = () => {
  try {
    const serializedState = localStorage.getItem('userData');
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
};

const userSlice = createSlice({
  name: 'users',
  initialState: {
    // isUserLogedIn: false,
    // data: null,
    isUserLogedIn: !!storedUserData(),
    data: storedUserData(),
    
  },
  reducers: {
    setUserLogedIn: (state, action) => {
      state.isUserLogedIn = !!action.payload;
      state.data = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isUserLogedIn = false;
      state.data = null;
      localStorage.removeItem('data')
    },
  },
});

export const { setUserLogedIn, clearUser, logout } = userSlice.actions;

export default userSlice.reducer;







