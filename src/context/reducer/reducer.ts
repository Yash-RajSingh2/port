import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  isLoading: boolean;
  isMenuOpen: boolean;
}

const initialState: AppState = {
  isLoading: false,
  isMenuOpen: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const {
  setLoading,
  setMenuOpen,
} = appSlice.actions;

export default appSlice.reducer; 