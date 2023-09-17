import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite(state, action) {
      const idToRemove = Number(action.payload);
      state.favorites = state.favorites.filter((id) => id !== idToRemove);
    },
  },
});

export const { setFavorite, removeFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
