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
      const idToRemove = Number(action.payload.id);
      state.favorites = state.favorites.filter(
        (item) => item.id !== idToRemove
      );
    },
  },
});

export const { setFavorite, removeFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
